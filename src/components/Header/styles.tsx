import styled from "styled-components"

export const HeaderBody = styled.div`
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
    padding: 20px;
    flex-wrap: wrap;
    img {
        float: left;
        width: 50px;
        height: 50px;
        background: #555;
    }
`;

export const StyledMenu = styled.div`
    display: flex;

    li {
        margin-left: 10px;
    }

    li a {
        display: block;
        padding: 10px;
    }
`;

export const StyledIcon = styled.div`
    border: none;
    width: 45px;
    height: 15px;
    border-radius: 1px;
    color: ${props => props.theme.colors.toggleOn};
`;