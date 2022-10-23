import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import Category from "../components/Category";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import styled from "styled-components";
import ExerciseCategory from "../exericsecompoents/ExerciseCategory";
import Login from "../components/Login";

import { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../components/features/Userslice";

function Home() {
  let user = useSelector(selectUser);
  let userval = user.value;
  console.log(` this is the user data`, userval);
  return (
    <Wrapper>
      {userval ? (
        <div>
          <h3>Hello !</h3>
          <ExerciseCategory />
          <Category />
          <HighProtein />
          <HealthFatsandProtein />
          <Popular />
        </div>
      ) : (
        <Login />
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
`;

export default Home;
