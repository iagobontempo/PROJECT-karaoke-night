import styled from 'styled-components';

export const MainContainer = styled.div`
    height: 80vh;
    /* background-color: ; */
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
    background-color: #f7f7f7;
    display: flex;
    flex-direction: column;
    width: 800px;
    border-radius: 10px;
    margin-top: 15px;
    padding: 10px;

    @media (max-width: 800px) {
        width: 95%;
    }

    ul {
        padding: 0px;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;

    div {
        margin-bottom: 10px;
    }
`

export const Li = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 24px;
    
    section {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export const ContainerVideo = styled.div`
    font-size: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const Iframe = styled.iframe`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 999;
    border: 0;
`

export const Blocker = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    background-color: #000000;
    z-index: 9990;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`