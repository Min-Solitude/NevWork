import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';
import { AuthState, User } from './auth.type';
import { signOut } from 'firebase/auth';
import { auth } from '@/configs/firebase.config';

const initialState: AuthState = {
    account: null,
    loading: false,
};

export const authSelector = createAsyncThunk('auth/authSelector', async (payload: User) => {
    return payload;
});

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.account = null;
            deleteCookie('accessToken');
            signOut(auth);
        },
    },
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
