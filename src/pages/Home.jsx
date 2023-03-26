import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import Category from "../components/Category";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import styled from "styled-components";
import ExerciseCategory from "../exericsecompoents/ExerciseCategory";
import Login from "../components/Login";
import Display from "./Display";
import { useSelector } from "react-redux";
import { selectUser } from "../components/features/UserSlice2";
import Users from "../components/Users";
// import Login from "../components/features/api/Login";

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
          {/* <HighProtein />
          <HealthFatsandProtein />
          <Popular />  */}
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
