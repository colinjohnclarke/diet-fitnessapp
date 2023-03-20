// import React from "react";
// import { useState, useEffect } from "react";
// import { Routes, Route, useParams } from "react-router-dom";
// import styled from "styled-components";

// function BodypartExercise() {
//   let params = useParams();

//   const Exerciseoptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   const [exercise, setExercise] = useState([]);

//   useEffect(() => {
//     getExerise(params.name);
//   }, [params.name]);

//   const getExerise = async (url, options, name) => {
//     const exerciseListResponse = await fetch(
//       "https://exercisedb.p.rapidapi.com/exercises/target/${name}",
//       Exerciseoptions,
//       params
//     );

//     const exerciseListdata = await exerciseListResponse.json();
//     setExercise(exerciseListdata);
//     console.log("this is your data", exerciseListdata);
//   };

//   return (
//     <div>
//       <h1>IT worked</h1>
//     </div>
//   );
// }

// export default BodypartExercise;


// hello