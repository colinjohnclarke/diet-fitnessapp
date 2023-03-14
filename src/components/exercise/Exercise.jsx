import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
// import { useDispatch } from "react-redux";
// import { addFavouriteExercise } from "../features/FavouriteExerciseSlice";
import { useAddExerciseMutation } from "../features/api/exerciseSlice";

function Exercise() {
  const [exercise, setExercise] = useState([]);

  let params = useParams();

  const [addExercise, { isLoading, isSuccess, isError, error }] =
    useAddExerciseMutation();

  // const dispatch = useDispatch();

  const getExercise = async (name) => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${name}`,
        newoptions
      );
      const data = await response.json();
      // console.log(params.id);
      setExercise(data);
      // console.log("data", data);
    } catch (err) {
      console.log(err);
    }
  };

  const newoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getExercise(params.id);
  }, [params.id]);

  const addtoFavourtitesHandlerClicked = async (event) => {
    event.preventDefault();

    console.log("fav exercise handler clicked");

    await addExercise({
      bodypart: exercise.bodyPart,
      equipment: exercise.equipment,
      gifurl: exercise.gifUrl,
      id: exercise.id,
      target: exercise.target,
      exercise_name: exercise.name,
    });
  };

  return (
    <Wrapper>
      {exercise.length === 0 && (
        <Stackdiv>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <LinearProgress color="primary" />
          </Stack>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <LinearProgress color="primary" />
          </Stack>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <LinearProgress color="primary" />
          </Stack>
        </Stackdiv>
      )}

      <Card>
        <Button onClick={addtoFavourtitesHandlerClicked} variant="contained">
          Add to Favourites{" "}
        </Button>
        <Exercisediv>
          <h1> {exercise.name}</h1>
          <h2> Equipment: {exercise.equipment}</h2>
          <h2> Body Part: {exercise.bodyPart}</h2>
          <img src={exercise.gifUrl}></img>
        </Exercisediv>
      </Card>
    </Wrapper>
  );
}

const Wrapper = styled.div`

  height: 100%;
  width: 100%;
  display: flex; 
  flex-direction: column;
 
  
  )
  ;
  

  h1{
     
      margin: 20px; 
      position: relative; 
     
  }

  h2{
   
  
    position: relative; 
  
}

// img{
//     width: 90%; 
//    
// }

`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 400px) {
    margin-left: 40px;
    margin-top: 20px;
  }

  img {
    width: 80%;
    max-width: 1200px;
    min-width: 100px;
    position: relative;
    left: 20px;
  }
`;

const Stackdiv = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Exercisediv = styled.div``;

export default Exercise;

// const [exercise, setExercise] = useState([]);

//   let params = useParams();

//   const dispatch = useDispatch();

//   const getExercise = async (name) => {
//     try {
//       const response = await fetch(
//         `https://exercisedb.p.rapidapi.com/exercises/exercise/${name}`,
//         newoptions
//       );
//       const data = await response.json();
//       // console.log(params.id);
//       setExercise(data);
//       // console.log("data", data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   const newoptions = {
//     method: "GET",
//     headers: {
//       "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
//       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
//     },
//   };

//   useEffect(() => {
//     getExercise(params.id);
//   }, [params.id]);

//   const addtoFavourtitesHandlerClicked = (e) => {
//     console.log("fav exercise handler clicked");
//     e.preventDefault();
//     dispatch(addFavouriteExercise(exercise));
//   };

//   return (
//     <Wrapper>
//       {exercise.length === 0 && (
//         <Stackdiv>
//           <Stack sx={{ width: "100%" }} spacing={2}>
//             <LinearProgress color="primary" />
//           </Stack>
//           <Stack sx={{ width: "100%" }} spacing={2}>
//             <LinearProgress color="primary" />
//           </Stack>
//           <Stack sx={{ width: "100%" }} spacing={2}>
//             <LinearProgress color="primary" />
//           </Stack>
//         </Stackdiv>
//       )}

//       <Card>
//         <Button onClick={addtoFavourtitesHandlerClicked} variant="contained">
//           Add to Favourites{" "}
//         </Button>
//         <Exercisediv>
//           <h1> {exercise.name}</h1>
//           <h2> Equipment: {exercise.equipment}</h2>
//           <h2> Body Part: {exercise.bodyPart}</h2>
//           <img src={exercise.gifUrl}></img>
//         </Exercisediv>
//       </Card>
//     </Wrapper>
//   );
