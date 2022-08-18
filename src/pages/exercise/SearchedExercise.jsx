import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import { createBox } from "@mui/system";

function SearchedExercise() {
  const [searchedexercise, setSearchedExercise] = useState([]);
  let params = useParams();
  console.log("filtered array,", searchedexercise);
  let typeparams = params.type;

  useEffect(() => {
    getSearchedExerise(params.type);
    console.log(params.type);
  }, [params.type]);

  const Exerciseoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getSearchedExerise = async (name) => {
    let Response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      Exerciseoptions
    );
    const exerciseListdata = await Response.json();
    const paramsfilter = exerciseListdata.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(typeparams) ||
        exercise.equipment.toLowerCase().includes(typeparams) ||
        exercise.bodyPart.toLowerCase().includes(typeparams) ||
        exercise.target.toLowerCase().includes(typeparams)
    );

    setSearchedExercise(paramsfilter);
    console.log("filtered array,", searchedexercise);
  };
  return (
    <div className="animate__animated animate__heartBeat">
      <Wrapper>
        <h1>Selected Exercise: {params.type}</h1>
        <Grid>
          {searchedexercise.map((exercise) => {
            return (
              <Card key={exercise.id}>
                <Box>
                  <Text>
                    <h1>{exercise.name}</h1>
                    <h1>
                      Bodypart: {exercise.bodyPart}( {exercise.target})
                    </h1>
                    <h1>Equipment: {exercise.equipment}</h1>
                  </Text>
                  <img src={exercise.gifUrl}></img>
                </Box>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
}

const Text = styled.div``;

const Box = styled.div`

height: 400px
width: 300px;
margin: 20px; 
backg `;

const Wrapper = styled.div`
  //   margin: 0px;
  //   padding: 5%;
  //   position: relative;
  //   left: 15%;
  //   border: 1px solid green;

  //   h1 {
  //     position: absolute;
  //     z-index: 10;
  //     color: white;
  //     width: 100%;
  //     font-size: 2rem;
  //     text-shadow: 10px 10px 25px rgb(81, 67, 21), -10px 10px 25px rgb(81, 67, 21),
  //       -10px -10px 25px rgb(81, 67, 21), 10px -10px 25px rgb(81, 67, 21);
  //     left: 10%;
  //     top: 20%;
  //     max-width: 70%;
  //   }
`;

const Card = styled.div`
  display: flex;
  border: 5px solid red;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 80%;
  height: 80%;
  background: yellow;

  img {
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SearchedExercise;

// background: rgb(0, 255, 235);
// background: linear-gradient(
//   252deg,
//   rgba(0, 255, 235, 0.9220281862745098) 0%,
//   rgba(0, 180, 181, 1) 65%
