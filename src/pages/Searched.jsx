import React from "react";
import GetMassivelogo from "../components/GetMassivelogo";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Liked from "../components/Liked";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import Search from "../components/Search";

function Searched() {
  const [searchedreipie, setSearchedrecipe] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchedrecipie(params.search);
  }, [params.search]);

  const getSearchedrecipie = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&query=${name}`
    );
    const data = await response.json();
    setSearchedrecipe(data.results);
    console.log(searchedreipie);
  };

  return (
    <Main>
      <Loading>
        {searchedreipie.length === 0 && (
          <div>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
          </div>
        )}
      </Loading>
      <Wrapper>
        <Search />
        <h1> You Searched: {params.search}</h1>
        <Grid>
          {searchedreipie.map((item) => {
            return (
              <NavLink to={"/recipie/" + item.id}>
                <Card>
                  <img src={item.image} alt={item.title} />
                  <div className="likeddivsearched">
                    <h3>{item.title}</h3> <Liked />
                  </div>
                </Card>
              </NavLink>
            );
          })}
        </Grid>
      </Wrapper>
    </Main>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 1%;
  position: relative;
  left: 20px;
`;

const Grid = styled.div`
  position: relative;
  top: 10px;
  left: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 2000px;
  text-overflow: ellipsis;
  text-decoration: none;

  a {
    text-decoration: none;
    color: black;
  }

  @media (min-width: 700px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Card = styled.div`
  text-align: center;
  margin-top: 3%;
  margin-left: 4%;
  padding: 2%; 
  border-radius: 2px;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid turquoise;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px; 
    text-decoration: none; 

    @media (min-width: 700px) {
      min-height: 400px; 
      max-height: 400px; 
    }
    @media (min-width: 1000px) {
      min-height: 400px; 
      max-height: 400px; 
    }


  p{
    text-overflow: ellipsis:
    text-decoration: none; 
  }




  img {
    width: 100%;
    // max-height: 300px;
    object-fit: cover;
  
  }
`;
const Loading = styled.div`
  width: 100%;
`;

const Main = styled.div`
  width: 100%;
`;

export default Searched;
