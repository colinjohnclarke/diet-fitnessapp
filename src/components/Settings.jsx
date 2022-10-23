import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "@mui/material";
import { logout } from "../components/features/Userslice";
import { selectUser } from "../components/features/Userslice";
import Home from "../pages/Home";
import Login from "./Login";

function Settings() {
  const [logged, setLogged] = useState();
  const user = useSelector(selectUser);
  let userval = user.value;

  const dispatch = useDispatch();

  const logouthandler = () => {
    dispatch(
      logout({
        payload: { isloggedin: false },
      })
    );
    console.log("logoutclicked");
  };

  return (
    <Wrapper>
      {userval ? (
        <div>
          <h1>Settings</h1>
          <h1>Username: {user.value.payload.username}</h1>
          <h1>Password: {user.value.payload.password}</h1>
          <h1>Email: {user.value.payload.email}</h1>
          <Button onClick={logouthandler} variant="contained" color="primary">
            Logout
          </Button>
        </div>
      ) : (
        <Login />
      )}
    </Wrapper>
  );
}

export default Settings;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
