import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "@mui/material";
import { logout } from "../components/features/UserSlice2";
import { selectUser } from "../components/features/UserSlice2";
import Home from "../pages/Home";
import Login from "./Login";
import { useGetUserQuery } from "./features/api/apiSlice";
import Users from "./Users";

function Settings() {
  const [logged, setLogged] = useState();
  const user = useSelector(selectUser);
  let userval = user.value;

  const { data, isLoading, isSuccess, isError, error } = useGetUserQuery();

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
          {/* <Users>
            {data.users.map((person) => {
              return (
                <div>
                  <h3> {person.username}</h3>
                  <h4> {person.email}</h4>
                </div>
              );
            })}
          </Users> */}

          <Users />
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
  justify-content: center;
  align-items: center;
  margin
`;

const UserList = styled.div`
  width: 50%;
  height: 60%;
`;
