import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/Userslice";
import Settings from "./Settings";
import Logo from "../components/GetMassivelogo";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const register = () => {
    dispatch(
      login({
        payload: { username, password, email, isloggedin: true },
      })
    );
  };

  const logouthandler = () => {
    dispatch(
      logout({
        payload: { isloggedin: false },
      })
    );
  };

  return (
    <Wrapper>
      <h1>Log In</h1>
      <Input
        value={username}
        placeholder="Username"
        type="text"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></Input>
      <Input
        value={password}
        placeholder="Password"
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      ></Input>
      <Input
        value={email}
        placeholder="email"
        type="email"
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      ></Input>
      <Buttondiv>
        <Button onClick={register} variant="contained" color="primary">
          Login
        </Button>
        <Button onClick={logouthandler} variant="contained" color="primary">
          Logout
        </Button>
      </Buttondiv>

      <h3> We are still in dev so use any username to continue... :) </h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  h3 {
    margin: 5%;
  }
`;

const Input = styled.input`
  background: white;
  border-radius: 0.5rem;
  font-family: "Abel", sans-serif;
  font-size: 1rem;
  padding: 2%;
  margin: 2%;
  width: 80%;
  min-height: 10px;
  max-height: 25px;
  text-align: left;
  position: relative;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px, rgba(0, 0, 0, 0.22) 0px 8px 10px;
  border: 1px solid turquoise;
`;

const Buttondiv = styled.div`
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export default Login;
