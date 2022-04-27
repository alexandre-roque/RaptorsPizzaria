import styled from "styled-components";
import { lighten } from "polished";

export const StyledInput = styled.input`
    ::placeholder{
        color: lighten(${props => props.theme.colors.secundary})
    }
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: 80%;
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
`;