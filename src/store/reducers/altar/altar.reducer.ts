import { db } from '@/configs/firebase.config';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { AltarState } from './altar.type';

const initialState: AltarState = {
    loading: false,
};

export const hanldeSendAltar = createAsyncThunk(
    'altar/hanldeAltar',
    async (payload: {
        content: string;
        uid: any;
    }) => {
        try {
           // date send
           const date = new Date();
           const dateSend = date.getTime();

           const userDocRef = doc(db, 'altars', payload.uid);
           const docSnap = await getDoc(userDocRef);

           if (docSnap.exists()) {
               // update new avatar
               await updateDoc(userDocRef, {
                     content: payload.content,
                   dateSend,
                   status: 'pending',
               });
           } else {
               await setDoc(userDocRef, {
                   uid: payload.uid,
                        content: payload.content,
                   dateSend,
                   status: 'pending',
               });
           }
        } catch (error) {
            console.log(error);
        }
    }
);

const reducer = createSlice({
    name: 'altar',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(hanldeSendAltar.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(hanldeSendAltar.fulfilled, (state) => {
            state.loading = false;
        });
        builder.addCase(hanldeSendAltar.rejected, (state) => {
            state.loading = false;
        });
    }
});

export const AltarAction = reducer.actions;
export const AltarReducer = reducer.reducer;
