import { auth } from '@/configs/firebase.config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { deleteCookie } from 'cookies-next';
import { signOut } from 'firebase/auth';
import { AuthState, User } from './auth.type';

const initialState: AuthState = {
    account: null,
    loading: false,
};

export const authSelector = createAsyncThunk('auth/authSelector', async (payload: User) => {
    return payload;
});

export const updateBanner = createAsyncThunk('auth/updateBanner', async (payload: string) => {
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
        builder.addCase(authSelector.fulfilled, (state, action) => {
            state.account = {
                displayName: action.payload?.displayName,
                email: action.payload?.email,
                phoneNumber: action.payload?.phoneNumber,
                photoURL: action.payload?.photoURL,
                uid: action.payload?.uid,
            };
        });

        builder.addCase(updateBanner.fulfilled, (state, action) => {
            if (state.account) {
                state.account.banner = action.payload;
            }
        });
    },
});

export const AuthAction = reducer.actions;
export const AuthReducer = reducer.reducer;
