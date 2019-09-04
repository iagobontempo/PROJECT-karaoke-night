import { createGlobalStyle } from 'styled-components'

import background from "../assets/background.png";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Teko:300&display=swap');
    font-family: 'Teko', sans-serif;

    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
    }

    body {
        font-family: 14px 'Teko', sans-serif;
        background: url(${background});
        color: #333;
        -webkit-font-smoothing: antialiased !important;
    }

    ul {
        list-style: none;
    }
`