
import styled from 'styled-components';
import React from 'react';

import comment from './svg/comment-solid.svg';
import like from './svg/heart-solid.svg';
import post from './svg/list-alt-regular.svg';
import share from './svg/share-solid.svg';
import arrow from './svg/arrow-alt-circle-up-solid.svg';
import arrowDown from './svg/arrow-alt-circle-down-solid.svg';

const Wrapper = styled.div`
max-height:200px;
background-color: #ffffff;
display:flex;
flex-direction:column;
align-items: flex-start;
padding: 1rem;
box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
border-radius: 8px;


@media only screen and (max-width: 1026px) {

      width: 180px;
    

}

.Top{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: space-between;
    text-transform: uppercase;
 
  .Meaning{
    width: 50%;
  }
    .imgField{
      display:flex;
      width: 50%;
      justify-content:flex-end;
        img{
            width:2rem;
           
           
        }
    }
}
.Middle{
    width: 100%;
    font-size: 3rem;
    font-weight: 600;
    text-align: left;
    padding-left:1rem;
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

const MetricCard = (props) =>{
    return(
<Wrapper style={{'margin-left': props.marg ? props.marg : '0', 'width': props.width ? props.width : '100%'}}>
<div className='Top'>
    <div className='Meaning'> {props.meaning} </div>
    <div className='imgField'>
    {
    props.meaning === 'posts' ?
    <img src={post} alt='posts'/>
    :
    props.meaning === 'likes' ?
    <img src={like} alt='like'/>
    :
    props.meaning === 'shares' ?
    <img src={share} alt='share'/>
    :
    props.meaning === 'comments' ?
    <img src={comment} alt='comments'/>
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

export default MetricCard