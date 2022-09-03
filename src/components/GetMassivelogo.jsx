import React from "react";
import styled from "styled-components";

function GetMassivelogo() {
  return (
    <Wrapper>
      <h1>GetMassive.co.uk</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  height: 50px;
  width: 100%;
  position: relative; 
  left: 30px; 

  h1 {
    margin: 0;
    padding: 0;
    position: relative: 
    left: 20px; 
    text-transform: uppercase;
    color: black;
    text-decoration: underline 4px solid #00ffeb;
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
    text-align: center;
   
  }
`;

export default GetMassivelogo;
