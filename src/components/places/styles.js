import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 65px;
    padding-bottom: 45px;
`;

export const Wrapper = styled.div`
    background-color: #00000095;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    width: 350px;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;

    input {
        width: 100%;
    }

    input[type=file] {
        overflow: hidden;
    }

`

export const QrCode = styled.img`
    display: flex;
    margin: 0 auto;
`