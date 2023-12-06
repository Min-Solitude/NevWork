import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ModeState } from './mode.type';

const initialState: ModeState = {
    theme: 'default',
};

export const setThemeVideo = createAsyncThunk('mode/setThemeVideo', async (theme: string) => {
    return theme;
});

const reducer = createSlice({
    name: 'mode',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(setThemeVideo.fulfilled, (state, action) => {
            state.theme = action.payload;
        });
    },
});

export const ModeAction = reducer.actions;
export const ModeReducer = reducer.reducer;
