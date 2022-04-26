// Redux: https://youtu.be/3KUVksNAAxo?t=378
import { createSlice } from "@reduxjs/toolkit";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { DefaultTheme } from "styled-components";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: !!localStorage.getItem('theme') ? JSON.parse(localStorage.getItem('theme')!) : light
    },
    reducers: {
        changeTheme(state){
            const theme = state.theme.title === 'light' ? dark : light;
            localStorage.setItem('theme', JSON.stringify(theme));
            return state.theme.title === 'light' ? {...state, theme: theme} : {...state, theme: theme}
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: { theme: DefaultTheme; }) => state.theme;

export default themeSlice.reducer;