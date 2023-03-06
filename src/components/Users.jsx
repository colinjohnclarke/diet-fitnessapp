import React from "react";
import Checkbox from "@mui/material/Checkbox";
import styled from "styled-components";
import { useState, useEffect } from "react";

import Button from "@mui/material/Button";

import { useGetUserQuery } from "./features/api/apiSlice";
import { useDeleteUserMutation } from "./features/api/apiSlice";
import { useNavigate } from "react-router-dom";

function Users() {
  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

  const [id, setId] = useState("");
  const [deleteUser] = useDeleteUserMutation();

  const deleteUserHandler = async () => {
    console.log("User to delete", id);
    console.log("handler clicked");
    await deleteUser({ id });
  };

  useEffect(
    (id) => {
      deleteUserHandler(id);
    },
    [id]
  );

  const setstate = (userid) => {
    setId(userid);
    console.log("User", id);
  };

  const [params, setParams] = useState("");
  const navigate = useNavigate();

  let content;

  if (isLoading) {
    content = (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  } else if (isSuccess) {
    content = data.users.map((user) => {
      return (
        <Container key={user._id}>
          <div>
            <h1>{user.username}</h1>
            <h2>{user.email}</h2>
            <p>{user._id}</p>
            <Button
              onClick={(event) => {
                setId(user._id);
                console.log("current user", user._id);
              }}
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
          </div>
        </Container>
      );
    });
  } else if (isError) {
    console.log(error);
    content = <h1>fucked it</h1>;
  }

  return content;
}

const Container = styled.div`
  width: 80%;
  border: 2px solid;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5% 10%;
`;

export default Users;
