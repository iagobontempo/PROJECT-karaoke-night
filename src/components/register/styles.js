import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 65px;
    padding-bottom: 45px;
`;

export const Wrapper = styled.div`
    background-color: #000000;
    color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 350px;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;
    
    i {
        margin-bottom: 20px;
    }

    form {
        display:flex;
        flex-direction: column;
        align-items: center;
        width: 100%;

        div, input {
            width: 100%;
            margin: 2px;
        }        
    }
`
