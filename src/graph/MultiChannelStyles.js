import styled from 'styled-components';
import * as global from '../globalStyle';



export const ContainerMulti= styled.div`

height: 100%;
width:100%;
background-color: ${global.colorMain};
display: flex;
flex-direction: column;
justify-contanrt: center;
align-items: center;
color: #000000;
margin: 0;
padding-top: 5%;


.reportText{
   text-align:left;
    color: ${global.colorGrA};
    font-size: 1rem;
    padding-bottom: 1rem;
    
    img{
        margin-right: 1rem;
        width: 1.2rem;
    }
}



.MainWrapperMulti{
    width:90%;
    align-items: flex-start;
    display: flex;
    flex-direction:column;
    background-color: ${global.colorMain};
    color: black;

    .ChartWrapper{
        background-color: #ffffff;
        padding: 1rem;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        justify-content: center,
        align-items:center;
        margin-top:3%;
 
        h3{
            text-align:center;
            text-transform: uppercase;
            font-weight: 300;
            padding-bottom: 1rem;
        }
      
    }


   
}






`
