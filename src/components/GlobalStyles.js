import { createGlobalStyle } from "styled-components";
import { mainFont } from "../utilis/constant";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ul,
    ol,
    li{
        list-style: none;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    body{
        overflow-x: hidden;
    }
    .wrapper{
        position: relative;
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        font-family: ${mainFont};
    }
    .main{
        flex: 1 1 auto;
    }

    .swiper{
        background-color: #fff;
        padding:60px;

    }

    .card{
        box-shadow: -1px -5px 25px gray; 
        border-radius: 5px;
        padding:10px;
    }
    .my{
        padding:10px;
    }
`