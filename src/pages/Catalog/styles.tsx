import styled from 'styled-components';

export const CatalogContainer = styled.div`
    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }

    h1,
    h2,
    h3,
    h4 {
        letter-spacing:  0.1rem;
        text-transform: capitalize;
        line-height: 1.25;
        margin-bottom: 0.75rem;
        color: ${props => props.theme.colors.text};
    }

    h3 {
    font-size: 1.25rem;
    }

    h4 {
    font-size: 0.875rem;
    }

    p {
    margin-bottom: 1.25rem;
    color: hsl(210, 22%, 49%);
    }

    .section {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    }

    @media screen and (min-width: 992px) {
    .section {
        width: 95vw;
    }
    }
    .menu {
    padding: 5rem 0;
    }
    .title {
    text-align: center;
    margin-bottom: 2rem;
    }

    .underline {
    width: 6rem;
    height: 0.25rem;
    background: #c59d5f;
    margin-left: auto;
    margin-right: auto;
    }

    .btn-container {
    margin-bottom: 4rem;
    display: flex;
    justify-content: center;
    }

    .filter-btn {
        background: transparent;
        border-color: transparent;
        font-size: 1rem;
        text-transform: capitalize;
        margin: 0 0.5rem;
        letter-spacing: 1px;
        padding: 0.375rem 0.75rem;
        color:  hsl(360, 71%, 66%);
        cursor: pointer;
        transition: all 0.3s linear;
        border-radius: 0.25rem;
    }

    .active {
    border-bottom: 2px solid;
    }

    .section-center {
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;
    display: grid;
    gap: 3rem 2rem;
    justify-items: center;
    }

    .menu-item {
    display: grid;
    gap: 1rem 2rem;
    max-width: 25rem;
    }

    .photo {
    object-fit: cover;
    height: 200px;
    width: 100%;
    border: 0.25rem solid hsl(360, 71%, 66%);
    border-radius: 0.25rem;
    display: block;
    }

    .logo {
    object-fit: cover;
    height: auto;
    width: 200px;
    border-radius: 0.25rem;  
    }

    .item-info header {
    display: flex;
    justify-content: space-between;
    border-bottom: 0.5px dotted hsl(210, 22%, 49%);
    }
    .item-info h4 {
    margin-bottom: 0.5rem;
    }
    .price {
    color: #c59d5f;
    }
    .item-text {
    margin-bottom: 0;
    padding-top: 1rem;
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