import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState, User } from './auth.type';

const initialState: AuthState = {
    account: {
        displayName: '',
        email: '',
        phoneNumber: '',
        photoURL: '',
        uid: '',
    },
    loading: false,
};

export const authSelector = createAsyncThunk('auth/authSelector', async (payload: User) => {
    return payload;
});

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(authSelector.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(authSelector.fulfilled, (state, action) => {
            state.loading = false;
            state.account = {
                displayName: action.payload?.displayName,
                email: action.payload?.email,
                phoneNumber: action.payload?.phoneNumber,
                photoURL: action.payload?.photoURL,
                uid: action.payload?.uid,
            };
        });
        builder.addCase(authSelector.rejected, (state) => {
            state.loading = false;
        });
    },
});

export const AuthAction = reducer.actions;
export const AuthReducer = reducer.reducer;
