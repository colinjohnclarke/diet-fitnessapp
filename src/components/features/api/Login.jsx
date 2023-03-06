import React from "react";
import { useLoginMutation } from "./authApiSlice";
import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useSelector, useDispatch } from "react-redux";
import { setCredentials } from "../auth/authSlice";

function Login() {
  const [login, { isLoading }] = useLoginMutation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.prventDeafault();

    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  return (
    <Wrapper>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <Input
          value={username}
          placeholder="Username"
          type="text"
          onChange={handleUserInput}
        ></Input>
        <Input
          value={password}
          onChange={handlePwdInput}
          placeholder="Password"
          type="password"
        ></Input>

        <Buttondiv>
          <Button type="submit" variant="contained" color="primary">
            Login
          </Button>
          <Button variant="contained" color="primary">
            Logout
          </Button>
          <Link to="/">Back to Home</Link>
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
