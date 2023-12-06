import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
type managerActionInitialState = {
    openMode: string;
};
const initialState: managerActionInitialState = {
    openMode: "",
};
export const { reducer: managerActionReducer, actions: managerActionAction } = createSlice({
    name: 'managerAction',
    initialState,
    reducers: {
        openMode: (state, action) => {
            // console.log(action.payload);
            // console.log(localStorage.getItem("theme"));
            
            state.openMode = action.payload;
        },
    },
    extraReducers: (builder) => {},
});
