import React from "react";
import Search from "../components/Search";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { NavLink } from "react-router-dom";
import HighProtein from "./HighProtein";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import Popular from "../components/Popular";
import MinCaloroies from "./MinCaloroies";
import LowCalories from "./LowCalories";
import LinearProgress from "@mui/material/LinearProgress";

function Recipies() {
  return (
    <Wrapper>
      <Searchdiv>
        <Search />
      </Searchdiv>
      <HighProtein />
      <Popular />
      <HealthFatsandProtein />
      <MinCaloroies />
      <LowCalories />
    </Wrapper>
  );
}

export default Recipies;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 95%;
  position: relative;
  left: 4%;

  @media (min-width: 1000px) {
    left: 7%;
  }
  @media (min-width: 1100px) {
    left: 15%;
  }
`;

const Searchdiv = styled.div`
  width: 95%;
  position: relative;
  top: 10px;
  left: 20px;

  @media (min-width: 1000px) {
    width: 90%;
    left: -5%;
  }

  @media (min-width: 1200px) {
    width: 90%;

    left: -10%;
  }
`;
