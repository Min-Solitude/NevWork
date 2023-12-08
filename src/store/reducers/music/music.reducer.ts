import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { MusicState } from './music.type';

const initialState: MusicState = {
    status: true,
    nameMusic: 'lofi-cat',
    volume: 0.5,
    order: 0,
};

const reducer = createSlice({
    name: 'music',
    initialState,
    reducers: {
        setStatusMusic: (state, action) => {
            state.status = action.payload;
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
    },
    extraReducers: (builder) => {},
});

export const MusicAction = reducer.actions;
export const MusicReducer = reducer.reducer;
