import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  Twitter,
  Instagram,
  Facebook,
  LinkedIn,
} from "@mui/icons-material";

const CustomFooter = styled.div`
  display:flex;
  background:#ffffff;
  padding:5px 10px;
  justify-content:space-between;
  align-items:center;
  position:absolute;
  bottom:-50px;
  width:100%;
  margin-top:25px;
  @media(max-width:700px){
    
    display:flex;
    flex-direction:column;
    .SocialFooter{
      display:flex;
      justify-content:space-around;

    }
  }
  a{
    color:#646363;
    text-decoration:none;
    padding:10px;
  }
  .MainFooter{
    display:flex;
  }
  

`


function Footer(){
  return( <CustomFooter>
        <div className="MainFooter">
          <Link to="#">About us</Link>
          <Link to="#">Press</Link>

          <Link to="#">Blog</Link>

          <Link to="#">IOS</Link>

          <Link to="#">Android</Link>
        </div>
        <div className="SocialFooter">
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><Twitter style={{color:"#00acee"}}/></a>

          <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><Facebook style={{color:"#3b5998"}}/></a>

          <a href="https://www.instagram.com" target="_blank" rel="noreferrer"><Instagram style={{color:"#E4425F"}}/></a>

          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><LinkedIn style={{color:"#0e76a8"}} /></a>
        </div>
    </CustomFooter>);
  
}
export default Footer;
