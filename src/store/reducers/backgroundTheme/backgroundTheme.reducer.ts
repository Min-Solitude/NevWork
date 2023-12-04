import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BackgroundThemeState } from './backgroundTheme.type';

const initialState = {
    backgroundTheme: 'light',
} as BackgroundThemeState;

export const backgroundTheme = createSlice({
    name: 'backgroundTheme',
    initialState,
    reducers: {
        setBackgroundTheme: (state, action: PayloadAction<string>) => {
            state.backgroundTheme = action.payload;
        },
    },
});

export const { setBackgroundTheme } = backgroundTheme.actions;
export default backgroundTheme.reducer;
