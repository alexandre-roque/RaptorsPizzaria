import styled from "styled-components";

export const ImageContainer = styled.div`
  margin-bottom: 0.75rem;

  .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid ${props => props.theme.colors.imageborder};
    border-radius: 0.25rem;
    display: block;
  }

  @media screen and (min-width: 768px) {
    .menu-item {
      grid-template-columns: 225px 1fr;
      gap: 0 1.25rem;
      max-width: 40rem;
    }
    .photo {
      height: 175px;
    }
  }
  @media screen and (min-width: 1200px) {
    .section-center {
      width: 95vw;
      grid-template-columns: 1fr 1fr;
    }
    .photo {
      height: 150px;
    }
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  justify-content: center;
`;

export const AmountContainer = styled.div`
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  border: none;
  border-radius: 2rem;
  margin: 20px;
  padding: 10px;
  background: linear-gradient(to right, ${props => props.theme.colors.primary} 0%, ${props => props.theme.colors.secundary} 130%);
  `;

  export const AmountButton = styled.button`
  background: ${props => props.theme.colors.secundary};
  border: none;
  padding: 5px;
  border-radius: 2rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  :hover {
      box-shadow:  1px 1px 10px ${props => props.theme.colors.text};
  }
`;

export const AmountNumber = styled.div`
  padding: 5px;
  color: ${props => props.theme.colors.text};
`;