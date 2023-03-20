import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

import { useGetExercisesQuery } from "../features/api/exerciseSlice";

function Favouriteexercises() {
  const [exercisesnum, setExercisesnum] = useState([]);
  const [exercisearr, setExercisesarr] = useState([]);

  const { data, isLoading, isSuccess, isError, error } = useGetExercisesQuery();

  console.log("jkdjsk", data);
  // const favourites = useSelector(
  //   (state) => state.addFavouriteExerciseReducer.value
  // );

  // let exerciselistlength = data.exercises;

  // console.log("num:", exerciselistlength);

  useEffect(() => {
    setExercisesarr(data);
  }, []);

  console.log("exercisearr", exercisearr);

  return (
    // <h1>kdlskdls</h1>
    <Wrapper>
      {data.exercises.map === 0 && (
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
      <h1>Favourite Exercise</h1>
      {data.exercises.map ? (
        <Card>
          {data.exercises.map((item) => (
            <div key={item.id}>
              <h2> {item.name}</h2>
              <h3> Equipment: {item.equipment}</h3>
              <h3> Body Part: {item.bodyPart}</h3>
              <img src={item.gifurl}></img>
              <Button
                onClick={(e) => {
                  console.log(item.id);
                  e.preventDefault();
                }}
                variant="contained"
              >
                Delete
              </Button>
            </div>
          ))}
        </Card>
      ) : (
        <h3>Search exercises and add to favourites, they will appear here</h3>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 10%;
    position: relative;
  }
  h3 {
    margin: 10%;
    position: relative;
  }

  h2 {
    margin: 10%;
    position: relative;
  }
`;

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  margin: 2%;

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

  Button {
    margin: 3%;
  }
`;

const Stackdiv = styled.div`
  position: relative;
  margin-top: 10px;
`;

const Exercisediv = styled.div``;

export default Favouriteexercises;
