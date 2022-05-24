import { createGlobalStyle } from "styled-components";
import Roboto from './assets/fonts/Roboto/Roboto-Regular.ttf'
import RobotoLight from './assets/fonts/Roboto/Roboto-Light.ttf'

export const fontXS = "14px";// for now is here, deleting causes an Error
export const fontS = "16px";// for now is here, deleting causes an Error
export const fontM = "18px";// for now is here, deleting causes an Error
export const fontL = "22px";// used for buttons
export const fontXL = "24px";// for now is here, deleting causes an Error

export const openSans = "'Open Sans', sans-serif";// for now is here, deleting causes an Error
export const overpass = "'Overpass', sans-serif";// for now is here, deleting causes an Error

export const colorMain = "#eeeeee";
export const colorMainD = "red"; // for now is here, deleting causes an Error
export const colorMainL = "green"; // for now is here, deleting causes an Error
export const colorHeader = "#ffffff";
export const colorFooter = "#ffffff";
export const borderColor = "#838383";
export const colorGrA = 'rgb(17, 63, 152, 0.8)' // Colors for gradient
export const colorGrB = 'rgb(50, 195, 175, 0.3)'


export const fontColor = "#000000";
export const HColor = "#000000";

export const FontForButtons = "Roboto-Regular";

export const GlobalStyle = createGlobalStyle`



        @font-face {
            font-family: 'Roboto-Regular';
            src: url(${Roboto});
        }
        @font-face {
            font-family: 'Roboto-Light';
            src: url(${RobotoLight});
        }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background-color: ${colorMain};
        width: 100%;
        height:100%;
        margin: 0;
        padding: 0;
        font-family: 'Roboto-Regular';
        font-size:16px;
        color: ${fontColor};
        display: flex;
        flex-direction: column;
      
    }

    header{
        font-family: 'Roboto-Regular'; 
    }

    form{
        color:#000000;
        p{
            text-align:center;
            padding: 1rem;
        }
    }

    h1{
        font-family: 'Roboto-Regular';
        font-weight: 500;
        font-size:4rem;
        color: ${HColor};
    }

    h4{
        font-family: 'Roboto-Light';
        font-weight: 100;
        font-size:3rem;
        color: ${borderColor};
        text-align:center;
        margin-bottom: 2rem;
    }

    input{
        background-color:#ffffff;
    }

`;
