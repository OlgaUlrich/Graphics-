import styled from "styled-components";
import React, { useState } from "react";

import comment from "./svg/comment-solid.svg";
import like from "./svg/heart-solid.svg";
import post from "./svg/list-alt-regular.svg";
import share from "./svg/share-solid.svg";
import arrow from "./svg/arrow-alt-circle-up-solid.svg";
import arrowDown from "./svg/arrow-alt-circle-down-solid.svg";

import twitterIcon from "./svg/twitter-square-brands.svg";
import facebookIcon from "./svg/facebook-square-brands.svg";
import instagramIcon from "./svg/instagram-square-brands.svg";
import linkedinIcon from "./svg/linkedin-brands.svg";

const Wrapper = styled.div`
width:100%;
padding:1rem;
display:flex;
flex-direction:column;
align-items: flex-start;
border: 5px solid;
border-color: ${(props) => props.color === 'Facebook' ? '#82ca9d' : props.color === 'Linkedin' ? '#ffc658' : props.color === 'Twitter' ? '#EBB1B1' : props.color === 'Instagram' ? '#A4B0C7' : 'blue'};
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
border-radius: 8px;
margin-right:1rem;

@media only screen and (max-width: 1026px) {

      width: 180px;
    

}

.Top{
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    text-transform: uppercase;
    backgroun-color: "gray";
 
  .Meaning{
    width: 50%;
   
  
}
    .imgField{
      display:flex;

      justify-content:flex-end;
        img{
            width: 40px;
            height: 40px;
           
           
        }
    }
  }
  .Middle {
    width: 100%;
    font-size: 3rem;
    font-weight: 600;
    text-align: left;
    padding-top:1rem;
}
.Bottom{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .Difference{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        width: 100%;
  
        img{
            width:2rem;
            padding-left:0.3rem;
            padding-right:0.3rem;
        }
    }
}
`

const SocialMulti = (props) =>{
   
    return(
<Wrapper color={props.meaning} meaning={props.meaning}>
<div className='Top'>
    <div className='Meaning'>{props.meaning} </div>
    <div className='imgField'>
    {
    props.meaning === 'Twitter' ?
    <img src={twitterIcon} alt='tw'/>
    :
    props.meaning === 'Linkedin' ?
    <img src={linkedinIcon} alt='lnk'/>
    :
    props.meaning === 'Instagram' ?
    <img src={instagramIcon} alt='inst'/>
    :
    props.meaning === 'Facebook' ?
    <img src={facebookIcon} alt='fc'/>
    :
    ''
    }
        
         </div>
</div>
<div className='Middle'>{props.count}</div>
<div className='Bottom'>
    {props.count_last_week ? 
    
    <div className='Difference'> {props.count_last_week-props.count > 0 ?
        <>
    + {props.count_last_week-props.count}
    <img src={arrow} alt='arrow' />
    <div className='Since'> Since last week </div>
    </>
    :
    <>
    {props.count_last_week-props.count}
    <img src={arrowDown} alt='arrow' />
    <div className='Since'> Since last week </div>
    </>
    } </div>
:
''

}
  
    
</div>


</Wrapper>


    )

}

export default SocialMulti
