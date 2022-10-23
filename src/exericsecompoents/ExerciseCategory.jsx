import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Stack } from "@mui/system";
import Pagination from "@mui/material/Pagination";

// export const Exerciseoptions = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
//     "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//   },
// };

function ExerciseCategory() {
  return (
    <Wrapper>
      <List className="listdiv">
        <NavLink to={"/bodypart/chest"}>
          <Categorydiv className="icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEitP5O046dNPdeBKG27rFupOlqWr-1xz1nA&usqp=CAU"
              alt="chest"
            />
            <h3>Chest</h3>
          </Categorydiv>
        </NavLink>

        <NavLink to={"/bodypart/back"}>
          <Categorydiv className="icon">
            <img
              src="data:image/png;base64,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"
              alt="chest"
            />
            <h3>Back</h3>
          </Categorydiv>
        </NavLink>
        <NavLink to={"/bodypart/waist"}>
          <Categorydiv className="icon">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-PpInxtmIepcgpDm-wDaJMNxzbg-pZxs3RA&usqp=CAU"
              alt="Abs"
            />
            <h3>Abs</h3>
          </Categorydiv>
        </NavLink>

        <NavLink to={"/bodypart/upper legs"}>
          <Categorydiv className="icon">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <h3>Legs</h3>
          </Categorydiv>
        </NavLink>
      </List>
    </Wrapper>
  );
}

const Wrapper = styled.div`
max-width: 1200px; 

margin-left: 8%; 
@media (max-width:400px){
margin-top: 8%; 
margin-bottom: 5%; }


@media (min-width:400px){
  margin-top: 8%; 
  margin-bottom: 5%; }

@media (min-width:700px){
  margin-top: 6%; 
  margin-bottom: 3%; }


img{
  height: 2.5rem; 
  width: 2.5 rem; 
}

h2 {
  position: relative; 
  top: 10px; 
  margin: 0;
  color: black;
  text-align: center; 
  text-decoration: underline #00adb5; 4px
  text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
    0px -5px 35px rgba(255, 255, 255, 0.3);
}

  h3 {
    position: relative; 
    top: 3px; 
    margin: 0;
    padding: 0;
    color: white;
    text-align: center; 
    text-decoration: underline #00adb5; 4px
    text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
      0px -5px 35px rgba(255, 255, 255, 0.3);
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  word-wrap: wrap;
  position: relative;
  // left: 4%;
  color: rgb(56, 55, 55);

  // width: 100%;
`;

const Categorydiv = styled.div`
  // min-width: 5rem;
  // min-height: 5rem;
  height: 5rem;
  width: 5rem;
  border: transparent;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3px;
  background: rgb(0,255,235);
  background: linear-gradient(252deg, rgba(0,255,235,0.9220281862745098) 0%, rgba(0,180,181,1) 65%);
  );
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  text-decoration: none;
  color: grey; 

  a {
    text-decoration: none;
  }
`;
export default ExerciseCategory;
