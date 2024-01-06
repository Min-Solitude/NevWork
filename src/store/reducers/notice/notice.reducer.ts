import { db } from '@/configs/firebase.config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { collection, deleteDoc, doc, getDoc, getDocs, query, updateDoc, where } from 'firebase/firestore';
import { Notice, NoticeState } from './notice.type';
import { toast } from 'react-toastify';

const initialState: NoticeState = {
    listNotice: [],
    loading: false,
    GeneralAnnouncement: {
        banner: '',
        content: '',
        email: false,
        note: '',
        status: false,
        title: '',
    },
};

export const getAllNotice = createAsyncThunk(
    'notice/getAllNotice',
    async (payload: { uid: string; status: string }) => {
        let data = [] as Notice[];

        if (payload.status === 'all') {
            const noticesRef = collection(db, 'notices');

            const snapshot = await getDocs(noticesRef);

            const notices = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id,
            }));

            notices.forEach((notice: Notice) => {
                if (notice?.userId === payload.uid) {
                    data.push(notice);
                }
            });
        } else {
            const noticesRef = collection(db, 'notices');
            const q = query(noticesRef, where('status', '==', payload.status));

            const snapshot = await getDocs(q);

            const notices = snapshot.docs.map((doc) => ({
                ...doc.data(),
            }));

            notices.forEach((notice) => {
                if (notice?.userId === payload.uid) {
                    data.push(notice);
                }
            });
        }

        return data;
    },
);

export const readNotice = createAsyncThunk('notice/readNotice', async (payload: { id: string; status: string }) => {
    if (payload.status === 'unread') {
        const noticeRef = doc(db, 'notices', payload.id);

        await updateDoc(noticeRef, {
            status: 'read',
        });

        return;
    }

    return { id: payload.id, status: 'read' };
});

export const deleteNotice = createAsyncThunk('notice/deleteNotice', async (payload: { id: string }) => {
    const noticeRef = doc(db, 'notices', payload.id);

    await deleteDoc(noticeRef);

    return { id: payload.id };
});

export const getGeneralAnnouncement = createAsyncThunk('notice/getGeneralAnnouncement', async () => {
    const GeneralAnnouncementRef = collection(db, 'setting');

    const docSetting = await getDoc(doc(GeneralAnnouncementRef, 'Noti'));

    if (!docSetting.exists()) {    // Tài liệu không tồn tại
        return null;
    } else {
        return docSetting.data();
    }
})

const reducer = createSlice({
    name: 'notice',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllNotice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getAllNotice.fulfilled, (state, action) => {
            state.loading = false;
            state.listNotice = action.payload as Notice[];
        });
        builder.addCase(getAllNotice.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(readNotice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(readNotice.fulfilled, (state) => {
            state.loading = false;
            state.listNotice = state.listNotice?.map((notice) => {
                if (notice.id === (state.listNotice as Notice[])[0].id) {
                    return { ...notice, status: 'read' };
                }

                return notice;
            });
        });
        builder.addCase(readNotice.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(deleteNotice.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteNotice.fulfilled, (state, action) => {
            state.loading = false;
            state.listNotice = state.listNotice?.filter((notice) => notice.id !== action.payload.id);
        });
        builder.addCase(deleteNotice.rejected, (state) => {
            state.loading = false;
        });

        builder.addCase(getGeneralAnnouncement.fulfilled, (state, action) => {            
            if(action.payload){
                state.GeneralAnnouncement = {
                    banner: action.payload.banner,
                    content: action.payload.content,
                    email: action.payload.email,
                    note: action.payload.note,
                    status: action.payload.status,
                    title: action.payload.title,
                }
            }
        });
    },
});

export const NoticeAction = reducer.actions;
export const NoticeReducer = reducer.reducer;
