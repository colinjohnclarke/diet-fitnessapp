import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAddUserMutation } from "./features/api/apiSlice";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [addUser, { isLoading, isSuccess, isError, error }] =
    useAddUserMutation();

  const navigate = useNavigate();

  const submithandler = async (event) => {
    event.preventDefault();
    if (!username || !password || !email) {
      console.log("All fields are required before submitting please!");
    } else {
      console.log("submit registration");
      await addUser({ username, password, email });
      setUsername("");
      setPassword("");
      setEmail("");
      navigate("/");
    }
  };

  return (
    <Wrapper>
      <h1>Register</h1>
      <form onSubmit={submithandler}>
        <Input
          value={username}
          placeholder="Username"
          type="text"
          autoComplete="true"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        ></Input>

        <Input
          value={password}
          placeholder="current-password"
          type="password"
          autoComplete="true"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        ></Input>
        <Input
          value={email}
          placeholder="email"
          autoComplete="true"
          type="email"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        ></Input>

        <Buttondiv>
          <Button type="submit" variant="contained" color="primary">
            Register
          </Button>
        </Buttondiv>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
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
    background: #06fcf8;

    color: black;
  }

  &:focus {
    outline: none;
    color: black;
    font-weight: bold;
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
  justify-content: center;
  align-items: center;

  button {
    min-width: 100px;
  }
`;

export default Register;
