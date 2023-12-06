import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { AuthState } from './auth.type';
import { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

const initialState: AuthState = {
    accessToken: '',
    account: {},
    loading: false,
};

const reducer = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {},
});

export const AuthAction = reducer.actions;
export const AuthReducer = reducer.reducer;
