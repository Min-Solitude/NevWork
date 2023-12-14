import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Greetings, ModeState } from './mode.type';
import { collection, doc, getDoc } from 'firebase/firestore';
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
    isTabYoutube: false,
    isNote: false,
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
                } as Greetings;
            }
        });
    },
});

export const ModeAction = reducer.actions;
export const ModeReducer = reducer.reducer;
