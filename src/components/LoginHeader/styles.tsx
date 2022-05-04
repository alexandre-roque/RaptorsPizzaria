import styled from "styled-components";

export const Container = styled.div`
    height: 60px;
    width: 100%;
    background: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    border-radius: 10px;
`;

export const ToggleDiv = styled.div`
    display: flex;
`;

export const Toggle = styled.button`
    cursor: pointer;
    margin-right: 10px;
    height: 45px;
    width: 45px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.colors.secundary};
    color: ${props => props.theme.colors.icon};
    &:focus {
        outline: none;
    }
    :hover{
        background-color: ${props => props.theme.colors.text};
    }
    transition: all .3s ease;
`;