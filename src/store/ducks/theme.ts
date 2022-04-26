// Redux: https://youtu.be/3KUVksNAAxo?t=378
import { createSlice } from "@reduxjs/toolkit";
import light from "../../styles/themes/light";
import dark from "../../styles/themes/dark";
import { DefaultTheme } from "styled-components";

export const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        ...dark
    },
    reducers: {
        changeTheme(state){
            return (state.title === 'light' ? 
                {...state, title: dark.title, colors: dark.colors} 
                : 
                {...state, title: light.title, colors: light.colors});
        }
    }
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state: { theme: DefaultTheme; }) => state.theme;

export default themeSlice.reducer;