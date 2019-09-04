import styled from 'styled-components';

export const MainContainer = styled.div`
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
    border-bottom: 1px solid #D4250050;

    :first-child {
        border-bottom: 2px solid #00B2FF98;
    }
    
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

    .neon {
        color: #fff;
        text-shadow:
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 20px #fff,
        0 0 40px #0ff,
        0 0 80px #0ff,
        0 0 90px #0ff,
        0 0 100px #0ff,
        0 0 150px #0ff;
    }

    section {
        padding: 50px;
    }

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