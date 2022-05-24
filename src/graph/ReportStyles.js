import styled from "styled-components";
import * as global from "../globalStyle";

export const DatePickerWrapper = styled.div`
width:100%;
margin:0;
height: 40px;
display: flex;
justify-content: space-between;
align-items: center;
background-color: ${global.colorMain};
padding-right: 7rem;
padding-left: 7rem;

.reportText{
    display: flex;
    content-align: center;
    color: ${global.colorGrA};
    font-size: 1rem;
    img{
        margin-right: 1rem;
        width: 1.2rem;
    }
}

button{
    
    background-color: ${global.colorGrA};
    color:#ffffff;
    border-radius: 0.5rem;
    border:none;
    height: 32px;
    padding-left: 1rem;
    padding-right: 1rem;
}

  button:hover {
    cursor: pointer;
  }

  .InputArea {
    display: flex;

.InputArea{
    display:flex;
    
    justify-content:flex-end;
}
        .datePicker{
            .react-datepicker__day--in-range{ 
            background: #506398; }
            input{  
            width:100px;
            border: 1px solid #506398;
            border-radius: 0.5rem;
            height: 2rem;
            padding-left: 10%;
            font-size: 1rem;
            //background-color: #506398;
            margin-right:0.3rem;
         
            }
            input:first-child{
              
             
            }
        }
`

export const Container = styled.div`
margin-top:80px;
height: 100%;
width:100%;
background-color: ${global.colorMain};
display: flex;
flex-direction: column;
.MainWrapper{
    padding: 0;    
    width:100%;
    display: flex;
    background-color: ${global.colorMain};
    color: #000000;
    .diagram_wrapper{
        width:80%;
        height: 400px;
        background-color: #ffffff;
        padding: 1rem;
        box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        justify-content: center,
        align-items:center;
        
        h3{
            text-align:center;
            text-transform: uppercase;
            font-weight: 300;
        }
    
    }
}

@media only screen and (max-width: 1026px) {
    .MainWrapper {
        flex-direction: column;
        
    }

}



.Right{   
    flex:1;
    height: 100%;

    display:flex;
    flex-direction:column;
    background-color: ${global.colorMain};
    //justify-content:flex-start;
    //background-color:red;



    .Top{
        padding: 1rem;
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
       
    }
    .Bottom{
        padding: 1rem;
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
            .diagram_wrapper{
                @media only screen and (max-width: 1026px) {
         
                   
             }
            }

        @media only screen and (max-width: 1026px) {
         
              
              
                
    
        
        }


    }
    
}

@media only screen and (max-width: 1026px) {

    .Right{
        order:1;
    }

}

.Left{
flex:1;
height: 100%;
display:flex;
flex-direction:column;
background-color: ${global.colorMain};
     .Top{
        padding: 1rem;
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        
        .info{
            width:80%;
             height: 400px;
             display: flex;
             flex-direction: column;
             justify-content: center,
             align-items:center;}
    

         .infoWrapper{
            width:100%;
            height: 400px;
           //padding:1rem;
            display:grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem 1rem;

         }
 
         @media only screen and (max-width: 1026px) {

               display: none;
        
        }
     }
     .Bottom{
        padding: 1rem;
        width: 100%;
        height: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
     
     }
     @media only screen and (max-width: 1026px) {

        margin-bottom: 5%;
 
 }

}


`;
