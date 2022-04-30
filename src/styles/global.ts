import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: ${props => props.theme.colors.background};
        font-size: 14px;
        font-family: sans-serif;
        display: flex;
        transition: all .3s ease;
    }
`;
// ${props => props.theme.colors.background}
export default GlobalStyle;