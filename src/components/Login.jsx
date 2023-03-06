import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/UserSlice2";
import Settings from "./Settings";
import Logo from "../components/GetMassivelogo";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  // const newuser = { username, password, email };

  const dispatch = useDispatch();

  // const [addUser] = useAddUserMutation();

  const loginHandler = () => {
    // addUser(newuser);
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

  const navigate = useNavigate();
  const registerhandler = () => {
    navigate("/register");
  };

  return (
    <Wrapper>
      <h1>Log In</h1>
      <form onSubmit={loginHandler}>
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

        <Buttondiv>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button onClick={logouthandler} variant="contained" color="primary">
            Logout
          </Button>
          <h3>First time here!? </h3>

          <Button onClick={registerhandler} variant="contained" color="primary">
            Register
          </Button>
        </Buttondiv>
      </form>

      <h3> We are still in dev so use any username to continue... :) </h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h3 {
    margin: 5%;
    paddding: 5%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
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
  transition: all 0.2s;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  border: 1px solid turquoise;
  &:hover {
    background-color: #03fcf8;
    opacity: 50%;
    color: dark-grey;
  }

  &:focus {
    outline: none;
    box-shadow: rgba(0, 0, 0, 0.5) 0px 20px 20px,
      rgba(0, 0, 0, 0.44) 0px 16px 20px;
  }
`;

const Buttondiv = styled.div`
  margin: 3%;
  padding: 3%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  button {
    min-width: 100px;
  }
`;

export default Login;
