import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/UserSlice2";
import Settings from "./Settings";
import Logo from "../components/GetMassivelogo";
import { useNavigate } from "react-router-dom";
import Display from "../pages/Display";
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
      <h1>Login...</h1>
     <Display/>
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

<Card></Card>

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

     
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%; 
  

  h3, h1 {
    margin: 5%;
    paddding: 5%;
    color: white; 
    text-align: center; 
  }

  form {
  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
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
  padding: 10%;
  width: 50%;
  height: 3y  00px; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center; 
  button {
    min-width: 100px;
    position: relative; 
top: 10%; 
  
  }
`;

const Card = styled.div`
border-radius: 10px;
height: 80px; 
width: 150px; 
top: 32%; 
cursor: pointer; 
position: absolute; 
background-color: black; 
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
overflow: hidden; 
margin: 5%;

&:before{
content: "";
 position: absolute; 
   z-index: ; 
  top: -60%; 
  left: -50%; 
   height: 200%; 
   width: 200%; 
   transform: rotate(1000deg);
   transition: 3s; 
   background: conic-gradient( from 90deg, #03fcf8, transparent, #3630c4  );
}


&:hover:before {
    transform: rotate(-1000deg);
    transition: 3s; 
}

&:after{
    content: "Login...";
    color: white; 
    border-radius: 10px;
    height: 67px; 
    width: 135px; 
    position: relative; 
    top: 8px; 
    left: 8px; 
    display: flex; 
    justify-content: center; 
    align-items: center; 
    background-color: black;
    text-transform: uppercase;
}
&:active{
  transform: translateY(5px);
}

}
`

export default Login;
