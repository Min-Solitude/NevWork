import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { FileTray, Greetings, ModeState } from './mode.type';
import { collection, doc, getDoc, getDocs } from 'firebase/firestore';
import { db } from '@/configs/firebase.config';

const initialState: ModeState = {
    theme: 'day',
    nameScreen: 'room',
    isNotice: true,
    isClock: true,
    isShowPopupManagerImage: false,
    kindScreen: true,
    isGreetings: true,
    greetings: null,
    fileTray: null,
    isTabYoutube: false,
    isNote: false,
    isLink: false,
    isListNote: [
        {
            value: 1,
            content: '',
            kind: 'default',
        },
        {
            value: 2,
            content: '',
            kind: 'default',
        },
        {
            value: 3,
            content: '',
            kind: 'default',
        },
        {
            value: 4,
            content: '',
            kind: 'vip',
        },
        {
            value: 5,
            content: '',
            kind: 'vip',
        },
    ],
    isListLink: [],
    isShowFile: false,
    header: null,
    background: null,
};

export const setThemeVideo = createAsyncThunk('mode/setThemeVideo', async (theme: string) => {
    return theme;
});

export const setNotice = createAsyncThunk('mode/setNotice', async (payload: boolean) => {
    return payload;
});

export const setClock = createAsyncThunk('mode/setClock', async (payload: boolean) => {
    return payload;
});

export const getGreetings = createAsyncThunk('mode/getGreetings', async () => {
    const noticeRef = collection(db, 'setting');

    const docSetting = await getDoc(doc(noticeRef, 'Greeting'));

    if (!docSetting.exists()) {
        // Tài liệu không tồn tại
        return null;
    } else {
        return docSetting.data();
    }
});

export const getFileTray = createAsyncThunk('mode/getFileTray', async () => {
    const noticeRef = collection(db, 'setting');

    const docSetting = await getDoc(doc(noticeRef, 'FileTray'));

    if (!docSetting.exists()) {
        // Tài liệu không tồn tại
        return null;
    } else {
        return docSetting.data();
    }
});

export const getHeader = createAsyncThunk('mode/getHeader', async () => {
    const noticeRef = collection(db, 'setting');

    const docSetting = await getDoc(doc(noticeRef, 'Header'));

    if (!docSetting.exists()) {
        // Tài liệu không tồn tại
        return null;
    } else {
        return docSetting.data();
    }
});

export const getBackground = createAsyncThunk('mode/getBackground', async () => {
    try {
        const backgroundsRef = collection(db, 'background');

        // Lấy tất cả documents trong collection 
        const snapshot = await getDocs(backgroundsRef);
        
        // Duyệt qua các documents
        let backgrounds: any = [];
        snapshot.forEach(doc => {
          // Thêm mỗi document vào mảng kết quả
          backgrounds.push({ 
            id: doc.id,
            ...doc.data()
          }) 
        });
        
        // Trả về mảng chứa data của các document
        return backgrounds;
     } catch (error) {
            console.log('error', error);
     }
});

const reducer = createSlice({
    name: 'mode',
    initialState,
    reducers: {
        setShowPopupManagerImage: (state, action) => {
            state.isShowPopupManagerImage = action.payload;
        },
        setKindScreen: (state, action) => {
            state.kindScreen = action.payload;
        },
        setNameScreen: (state, action) => {
            state.nameScreen = action.payload.name;
        },
        setGreetings: (state, action) => {
            state.isGreetings = action.payload;
        },
        setTabYoutube: (state, action) => {
            state.isTabYoutube = action.payload;
        },
        setNote: (state, action) => {
            state.isNote = action.payload;
        },
        setTab: (state, action) => {
            console.log(action.payload);
        },
        setLink: (state, action) => {
            state.isLink = action.payload;
        },
        setListNote: (state, action) => {
            if (action.payload.value === 1) {
                state.isListNote[0].content = action.payload.content;
            }

            if (action.payload.value === 2) {
                state.isListNote[1].content = action.payload.content;
            }

            if (action.payload.value === 3) {
                state.isListNote[2].content = action.payload.content;
            }

            if (action.payload.value === 4) {
                state.isListNote[3].content = action.payload.content;
            }

            if (action.payload.value === 5) {
                state.isListNote[4].content = action.payload.content;
            }
        },
        setListLink: (state, action) => {
            if (state.isListLink.includes(action.payload)) {
                return;
            }
            state.isListLink.push(action.payload);
        },
        deleteListLink: (state, action) => {
            state.isListLink = state.isListLink.filter((item) => item !== action.payload);
        },
        setShowFile: (state, action) => {
            state.isShowFile = action.payload;
            state.isTabYoutube = false;
            state.isNote = false;
            state.isLink = false;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(setThemeVideo.fulfilled, (state, action) => {
            state.theme = action.payload;
        });

        builder.addCase(setNotice.fulfilled, (state, action) => {
            state.isNotice = action.payload;
        });

        builder.addCase(setClock.fulfilled, (state, action) => {
            state.isClock = action.payload;
        });

        builder.addCase(getGreetings.fulfilled, (state, action) => {
            
            if (action.payload) {
                state.greetings = {
                    title: action.payload.title,
                    content: action.payload.content,
                    status: action.payload.status,
                    image: action.payload.image,
                    layout: action.payload.layout,
                } as Greetings;
            }
        });

        builder.addCase(getFileTray.fulfilled, (state, action) => {
            if (action.payload) {
                state.fileTray = {
                    title: action.payload.title,
                    background: action.payload.background,
                    status: action.payload.status,
                    noticeErr: action.payload.noticeErr,
                } as FileTray;
            }
        });

        builder.addCase(getHeader.fulfilled, (state, action) => {            
            if (action.payload) {
                state.header = {
                    btnDarkMode: action.payload.btnDarkMode,
                    btnFullScreen: action.payload.btnFullscreen,
                    btnNotice: action.payload.btnNotice,
                    layout: action.payload.layout,
                    logo: action.payload.logo,
                    profile: action.payload.profile,
                    status: action.payload.status,
                };
            }
        });
        builder.addCase(getBackground.fulfilled, (state, action) => {
            if (action.payload) {
                state.background = action.payload; 
            }
        });
    },
});

export const ModeAction = reducer.actions;
export const ModeReducer = reducer.reducer;
