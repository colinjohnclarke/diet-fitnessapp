import React from "react";
import styled from "styled-components";
import FavouriteIcons from "./exercise/FavouriteIcons";

function Logo() {
  return (
    <Wrapper>
      <h1>FitFood.co.uk</h1>
      <FavouriteIcons />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  position: relative; 
  background-color: black; 
  border-top: 2px solid #00ffeb;
  border-bottom: 2px solid #00ffeb;
  

  

  h1 {
    margin: 0;
    padding: 0;
    position: relative: 
    color: black;
    text-decoration: underline 4px solid #00ffeb;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
    text-align: center;
    color: white; 
   
  }
`;

export default Logo;
