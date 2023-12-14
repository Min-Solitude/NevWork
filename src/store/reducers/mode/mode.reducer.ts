import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ModeState } from './mode.type';

const initialState: ModeState = {
    theme: 'day',
    nameScreen: 'room',
    isNotice: true,
    isClock: true,
    isShowPopupManagerImage: false,
    kindScreen: true,
    isGreetings: true,
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
    },
});

export const ModeAction = reducer.actions;
export const ModeReducer = reducer.reducer;
