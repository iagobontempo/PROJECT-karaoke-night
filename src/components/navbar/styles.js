import styled from 'styled-components';

export const Container = styled.div`
    background-color: #00000085;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;

    a {
        color: white;
        padding: 10px;
    }

    span {
        @media (max-width: 800px) {
        font-size: 30px;
        }
    }
`;


