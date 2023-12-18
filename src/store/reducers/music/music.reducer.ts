import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MusicState } from './music.type';

const initialState: MusicState = {
    status: true,
    volume: 0.5,
    order: 0,
    changeFrameMusic: false,
    showListMusic: false,
};

const reducer = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setStatusMusic: (state, action) => {
            state.status = action.payload;
        },
        setOrderMusic: (state, action) => {
            state.order = action.payload;
        },
        setNextOrderMusic: (state) => {
            if (state.order < 5) {
                state.order += 1;
            } else {
                state.order = 0;
            }
        },
        setPrevOrderMusic: (state) => {
            if (state.order > 0) {
                state.order -= 1;
            } else {
                state.order = 5;
            }
        },
        setVolumeMusic: (state, action) => {
            state.volume = action.payload;
        },
        setChangeFrameMusic: (state, action) => {
            state.changeFrameMusic = action.payload;
        },
        setShowListMusic: (state, action) => {
            state.showListMusic = action.payload;
        },
    },
    extraReducers: (builder) => {},
});

export const MusicAction = reducer.actions;
export const MusicReducer = reducer.reducer;
