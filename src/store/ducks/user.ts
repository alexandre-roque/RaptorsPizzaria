// Redux: https://youtu.be/3KUVksNAAxo?t=378

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../context/AuthProvider/types";

const initialState: IUser = {
    email: '',
    nome: '',
    endereco: undefined
};

export const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        changeUser(state, action: PayloadAction<IUser>){
            return state=action.payload;
        },
        reduxLogout(state){
            return state=initialState;
        }
    }
});

export const { changeUser, reduxLogout } = userSlice.actions;

export const selectUser = (state: { user: IUser; }) => state.user;

export default userSlice.reducer;