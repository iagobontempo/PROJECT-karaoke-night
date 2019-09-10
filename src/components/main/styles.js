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
    padding: 10px 0px;

    :first-child {
        border-bottom: 2px solid #00B2FF98;
        :before {
            font-size: 10px;
            content: "PROXIMO";
            color: #C229F8;
            border-radius: 5px;
            border: 1px solid;
            padding: 2px;
            margin-right: 5px;
        }
    }
    
    section {
        display: flex;
        justify-content: space-between;
        width: 100%;
        span.name {
            width: 180px;
            padding: 5px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }
    }
`

export const ContainerVideo = styled.div`
    font-size: 15px;
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


export const QrCode = styled.img`
    display: flex;
    margin: 0 auto;
`

export const QrCodeDiv = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 10px;
    top: 200%;
    background-color: #68F4F4;
    border-radius: 7px;
    border: 1px solid #68F4F4;
    padding: 2px;

    div {
        font-size: 16px;
        font-weight: 900;
        color: #000;
        display: flex;
        margin: 0 auto;
    }
`