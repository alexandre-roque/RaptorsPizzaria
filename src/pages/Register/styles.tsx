import styled from 'styled-components';

export const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    min-width: 400px;
    max-width: 800px;
    margin: 0 auto;
    margin-top: 20px;
    height: 80vh;
    width: 60vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    color: #ffffff;
    letter-spacing: 0.4 rem;
`;

export const InputContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
`;

export const InputItem = styled.div`
    margin: 0 auto;
    display: block;
    justify-content: space-between;
`;