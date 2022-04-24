// Redux: https://youtu.be/3KUVksNAAxo?t=378

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        name: '',
        isLogged: false
    },
    reducers: {
        changeUser(state, { payload }){
            return { ...state, isLogged: true, name: payload}
        },
        logout(state){
            return { ...state, isLogged: false, name:''}
        }
    }
});

export const { changeUser, logout } = userSlice.actions;

export const selectUser = (state: { user: any; }) => state.user;

export default userSlice.reducer;