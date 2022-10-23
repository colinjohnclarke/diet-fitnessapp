import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SearchExercise from "./SearchExercise";
import ExerciseCategory from "../../exericsecompoents/ExerciseCategory";
import { Stack } from "@mui/system";
import { Pagination } from "@mui/material";

import LinearProgress from "@mui/material/LinearProgress";

function ExerciseCategorySelection() {
  const [exercise, setExerciseList] = useState([]);

  let params = useParams();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 5;

  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // find indexes of current pages
  const lastExerciseindex = currentPage * exercisesPerPage;
  const fistExerciseindex = lastExerciseindex - exercisesPerPage;

  const currentExercises = exercise.slice(fistExerciseindex, lastExerciseindex);

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
  }, [params.name]);

  const getExercise = async (name) => {
    const response = await fetch(
      `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`,
      Exerciseoptions
    );
    const data = await response.json();
    setExerciseList(data);
    console.log(" this is the catogory of: ", params.name, exercise);
  };

  return (
    <Main>
      <Loading>
        {exercise.length === 0 && (
          <div>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
          </div>
        )}
      </Loading>

      <Wrapper>
        <SearchExercise />
        <ExerciseCategory />

        <Stack
          direction="row"
          spacing={2}
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
          paddingTop={2}
          paddingBottom={1}
        >
          {exercise.length > 9 && (
            <Pagination
              variant="outlined"
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercise.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="medium"
            ></Pagination>
          )}
        </Stack>

        <Grid>
          {currentExercises.map((exercise) => {
            return (
              <Card className="searchExerciseCard" key={exercise.id}>
                <TextWrapper>
                  <h4>Name: {exercise.name}</h4>
                  <h4>
                    Bodypart: {exercise.bodyPart}( {exercise.target})
                  </h4>
                  <h4>Equipment: {exercise.equipment}</h4>
                </TextWrapper>
                <img src={exercise.gifUrl}></img>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>

      <Stack
        direction="row"
        spacing={2}
        sx={{ gap: { lg: "110px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
        paddingTop={7}
        paddingBottom={5}
      >
        {exercise.length > 9 && (
          <Pagination
            variant="outlined"
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercise.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="medium"
          ></Pagination>
        )}
      </Stack>
    </Main>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Selectdiv = styled.div`
  width: 180px;
`;

const SelectandViewdiv = styled.div`
  display: flex;
  width: 100%;
`;

const Grid = styled.div`
  position: relative;
  top: 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;
const TextWrapper = styled.div`
  text-align: center;
`;

const Card = styled.div`
  border: 1px solid turquoise;
  max-width: 300px;
  min-width: 200px;
  margin: 1%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  @media (max-width: 400px) {
    margin-left: 55px;
    padding: 2%;
  }

  img {
    width: 90%;
    border-radius: 2rem;
  }

  a {
    text-direction: none;
  }
  h4 {
    color: black;

    font-size: 16px;
  }
`;

const Main = styled.div`
  width: 100%;
`;
const Loading = styled.div`
  width: 100%;
`;

export default ExerciseCategorySelection;
