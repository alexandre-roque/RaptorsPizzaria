import styled from 'styled-components';

export const LoginBody = styled.div`
    width: 100vw;
`;

export const LoginContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    max-width: 800px;
    min-height: 450px;
    margin: 0 auto;
    margin-top: 40px;
    height: 50vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    letter-spacing: 0.4 rem;
`;

export const InputContainer = styled.div`
    margin-top:10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 30%;
    width: 100%;
`;

export const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 1rem 0 2rem 0;
`;

export const HorizontalRule = styled.hr`
    margin: auto;
    width: 80%;
    height: 0.3rem;
    border-radius: 0.8rem;
    border: none;
    background: linear-gradient(to right, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secundary} 130%);
    backdrop-filter: blur(25px);
`;
