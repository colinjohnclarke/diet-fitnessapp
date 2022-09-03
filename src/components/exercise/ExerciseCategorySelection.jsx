import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";

function ExerciseCategorySelection() {
  const [exerciselist, setExerciseList] = useState([]);

  let params = useParams();

  const Exerciseoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getExercise(params.name);
    console.log("params are", params.name);
    let sendparams = params.name;
  }, [params.name]);

  const getExercise = async () => {
    const response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises/",
      Exerciseoptions
    );
    const data = await response.json();
    setExerciseList(data);
    console.log(exerciselist);
  };

  return <h1>ExerciseCategoryjkfjlkjdskfdsjklfskSelection</h1>;
}

export default ExerciseCategorySelection;
