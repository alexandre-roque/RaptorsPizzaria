import styled from "styled-components";

export const StyledButton = styled.button`
    background: linear-gradient(to right, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secundary} 130%);
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 0.2rem;
    width: 65%;
    height: 3rem;
    max-width: ${props => props.children==='Adicionar ao carrinho' ? "300px" : "none"};
    border: none;
    border-radius: 2rem;
    color: ${props => props.theme.colors.text};
    cursor: pointer;
    :hover {
        box-shadow:  1px 1px 10px ${props => props.theme.colors.text};
    }
`;