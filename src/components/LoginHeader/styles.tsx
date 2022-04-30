import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    width: 30vw;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: 10px;
`;

export const Toggle = styled.button`
    cursor: pointer;
    height: 45px;
    width: 45px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.background};
    &:focus {
        outline: none;
    }
    transition: all .3s ease;
`;