import React from "react";
import { useEffect, useState } from "react";

function ExerciseCategory() {
  const [exercise, setExercise] = useState([]);

  useEffect(() => {
    getExerise();
  }, []);

  const getExerise = async (url, options) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
        "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
      },
    };

    const exerciseListResponse = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      options
    );
    const exerciseListdata = await exerciseListResponse.json();
    setExercise(exerciseListdata);

    console.log("this is your data", exercise);
  };

  return;
  <h1>exercise</h1>;
}

export default ExerciseCategory;
