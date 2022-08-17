import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";

function SearchedExercise() {
  const [searchedexercise, setSearchedExercise] = useState([]);
  let params = useParams();

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
    const Response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      Exerciseoptions
    );
    const exerciseListdata = await Response.json();
    console.log("this is your data", exerciseListdata);
    setSearchedExercise(exerciseListdata);
  };
  return (
    <div className="animate__animated animate__heartBeat">
      <Wrapper>
        <h1>Selected Exercise: {params.type}</h1>
        <Grid>
          {searchedexercise.map((exercise) => {
            return (
              <Card>
                <h2>{exercise.bodypart}</h2>
                <h2>{exercise.equipment}</h2>
                <img></img>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 5%;
  position: relative;
  left: 15%;

  h1 {
    position: absolute;
    z-index: 10;
    color: white;
    width: 100%;
    font-size: 2rem;
    text-shadow: 10px 10px 25px rgb(81, 67, 21), -10px 10px 25px rgb(81, 67, 21),
      -10px -10px 25px rgb(81, 67, 21), 10px -10px 25px rgb(81, 67, 21);
    left: 10%;
    top: 20%;
    max-width: 70%;
  }
`;

const Card = styled.div`
  border: transparent;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 200px img {
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default SearchedExercise;
