import React, {useEffect} from 'react';
import styled from 'styled-components';
import ReportCard from './ReportCard';
import twitterIcon from './svg/white-twitter.svg';
import post from './svg/white-list.svg';
import * as global from '../globalStyle';


import {
    Link,
  } from "react-router-dom";


export const Container = styled.div`
width:100%;
height:100%;
margin-top:50px;
display:flex;
flex-direction:column;

background-color: ${global.colorMain};
padding: 2rem;

.MainWrapper{
    width:100%%;
    height:100%;
    display:flex; 
    flex-wrap: wrap;
}

h2{
    text-transform: uppercase;
    font-weight: 300;
    color:#000000;
    margin-top: 3rem;
    padding: 0;

}
a{
    text-decoration:none;
}
`





const ReportMenu = () =>{

    return(
        <Container>

 <div className='MainWrapper'>

<Link to={'multi-report/'}>  <ReportCard color='#506398' src={post} name="Multichannel report" main="Compare your activity in different social medias"/></Link>  

<Link to={'/report'}>  <ReportCard color='#A4B0C7' src={twitterIcon} name="Twitter report" main="Estimate your activity in Twitter" />    </Link>                    

                </div>


        </Container>

    )


}

export default ReportMenu