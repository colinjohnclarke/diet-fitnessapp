import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

import {
  useGetExercisesQuery,
  useDeleteExercisefromDBMutation,
} from "../features/api/exerciseSlice";

function Favouriteexercises() {
  // const [exercisesnum, setExercisesnum] = useState([]);
  // const [exercisearr, setExercisesarr] = useState([]);
  const [id, setId] = useState("");

  const { data, isLoading, isSuccess, isError, error } = useGetExercisesQuery();

  // const [deleteExercisefromDB,{isLoading: loading , isSuccess: success,  isError: recievederr, error: err}] = useDeleteExercisefromDBMutation();

  const [deleteExercisefromDB] = useDeleteExercisefromDBMutation();

  console.log("jkdjsk", data);

  const deletehandler = async () => {
    console.log("User to delete", id);
    console.log("deletehandler clicked");
    await deleteExercisefromDB({ id });
  };

  useEffect(() => {
    deletehandler(id);
    console.log("useeffect");
  }, [id]);

  let content;

  if (isLoading) {
    content = (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (isSuccess) {
    if (data.exercises.length) {
      content = data.exercises.map((item) => {
        return (
          <Wrapper>
            <Card>
              <h2> {item.exercise_name}</h2>
              <h3> Target:{item.target}</h3>
              <h3> Equipment:{item.target}</h3>
              <img src={item.gifUrl} alt={item.exercise_name} />
              <Button
                variant="contained"
                onClick={(event) => {
                  event.preventDefault();
                  setId(item.id);
                  console.log("delete btn clicked");
                }}
              >
                {" "}
                Delete
              </Button>
            </Card>
          </Wrapper>
        );
      });
    } else {
      content = (
        <Wrapper>
          <h1>Add to Favourites to start</h1>;
        </Wrapper>
      );
    }
  } else if (isError) {
    console.log(error);
    content = <h1>Error</h1>;
  }

  return content;
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

export default Favouriteexercises;
