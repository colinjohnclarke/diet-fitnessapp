import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

function Exercise() {
  const [exercise, setExercise] = useState([]);

  let params = useParams();

  const getExercise = async (name) => {
    try {
      const response = await fetch(
        `https://exercisedb.p.rapidapi.com/exercises/exercise/${name}`,
        newoptions
      );
      const data = await response.json();
      console.log(params.id);
      setExercise(data);
      console.log("selected exercise", exercise);
    } catch (err) {
      console.log(err);
    }
  };

  const newoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0122e8c44msh979a6d1e77700bbp13ce92jsn6336df6b62d3",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  useEffect(() => {
    getExercise(params.id);
  }, [params.id]);

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
        <Button variant="contained"> Add to Favourites </Button>
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
