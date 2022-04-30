import styled from "styled-components"

export const HeaderBody = styled.body`
    flex-direction: column;
    body, ul, li, p {
        margin: 0px;
        padding: 0px;
        list-style: none;
        font-size: 1.2rem;
    }
`;

export const StyledHeader = styled.header`
    background-color: ${props => props.theme.colors.primary};
    a{
        text-decoration: none;
    }

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    flex-wrap: wrap;
`;

export const StyledMenu = styled.div`
    
`;