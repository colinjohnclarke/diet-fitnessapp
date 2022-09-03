import React from "react";
import Search from "../components/Search";
import styled from "styled-components";

function Recipies() {
  return (
    <Wrapper>
      <h1>Recipies</h1>
      <Search />
    </Wrapper>
  );
}

export default Recipies;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;
