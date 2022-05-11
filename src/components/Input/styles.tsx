import styled from "styled-components";

export const StyledInput = styled.input`
    margin: 10px;
    ::placeholder{
        color: lighten(${props => props.theme.colors.secundary})
    }
    background: ${props => props.theme.colors.primary};
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    border-radius: 2rem;
    width: ${props => props.width || '80%' };
    height: 3rem;
    padding: 1rem;
    border: none;
    outline: none;
    color: ${props => props.theme.colors.text};
    font-size: 1rem;
    font-weight: bold;
    &:focus{
        border: hidden;
        box-shadow:  2px 2px 5px ${props => props.theme.colors.secundary};
    }
`;