import React from 'react';
import styled from 'styled-components';
import * as global from '../globalStyle';


export const Container = styled.div`

width:30%;
color:#000000;
min-height: 350px;
padding: 2rem;
padding-top:4rem;
width:300px;
background-color: #ffffff;
display:flex;
flex-direction: column;
align-items:center;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
border-radius: 8px;
.row{
    width: 100%;
    display: flex;
    justify-content: center;
align-items:center;
}

.Icon{
    width: 80px;
    height:80px;
    border-radius: 40px;
    display:flex;
    justify-content: center;
    align-items: center;
   
    margin-bottom: 1rem;
    img{
        width: 40%;
       
    }
}
.Name{
    width:100%;
    font-weight: 400;
    text-transform: uppercase;
    text-align: center;
}
.Main{
    text-align:center;
    padding-top:2rem;
    color: ${global.borderColor};
    width:100%;
    font-weight: 400;
    display: flex;
    justify-content: center;
align-items:center;

}
:first-child{
    margin-left: 0;
}
:last-child{
    margin-left: 3rem;
}
`





const ReportCard = (props) =>{

    return(
        <Container>

              
                <div className='row'>  <div className='Icon' style={{'backgroundColor': props.color}}><img src={props.src} alt='icon'/></div></div>
                <div className='row'>     <div className='Name'>{props.name}</div></div>
                <div className='row'>    <div className='Main'>{props.main}</div></div>

   

              

        </Container>

    )


}

export default ReportCard