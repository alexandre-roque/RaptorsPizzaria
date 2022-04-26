import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index"
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "../../styles/global"

const Theme = ({ children }: { children: JSX.Element}) => {
  const theme= useSelector<RootState, DefaultTheme>(state => state.theme.theme);

  return <ThemeProvider theme={theme}><GlobalStyle />{children}</ThemeProvider>;
};

export default Theme;