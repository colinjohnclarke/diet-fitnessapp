import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { Button } from "@mui/material";

function Workouts() {
  const [news, setNews] = useState([]);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getNews();
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_7188bf80cd9ac02e49d49d02f195ec366410&language=en&q=exercise&q=fitness&q=workouts`
      );
      const newsdata = await response.json();

      setNews(newsdata.results);
      console.log("this is the news array", newsdata);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Main>
      <Loading>
        {news.length === 0 && (
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
        <h1>NEWS: the latest sports information.</h1>
        <NavContainer>
          <a href="/news/training">Training</a>{" "}
          <a href="/news/workouts">Workouts</a>{" "}
          <a href="/news/nutrition">Nutrition</a>{" "}
          <a href="/news/health">Health</a>{" "}
        </NavContainer>

        <Grid>
          {news.map((item) => {
            return (
              <Card>
                <img src={item.image_url}></img>
                <h4> {item.pubDate} </h4>
                <h3> {item.title}</h3>
                <p>{item.description}</p>

                <a href={item.link}>Click here</a>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </Main>
  );
}

const Main = styled.div``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  width: 90%;
  height: 100%;
  margin: 5%;
  text-decoration: none;

  h1 {
    max-width: 300px;
    text-align: center;
    font-size: 100%;
    padding: 0px;
    margin: 0px;
  }
`;

const Grid = styled.div`
  position: relative;
  top: 10px;
  width: 100%;
  left: 10px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: row;
  max-width: 2000px;
  text-overflow: ellipsis;
  text-decoration: none;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    border-radius: 10%;
    background-color: rgb(12, 43, 219);
    box-shadow: rgb(38, 57, 77) 20px 20px 30px -10px;
    margin: 10px;
    padding: 2%;
    background: linear-gradient(219deg, rgb(14, 27, 41) 30%, #03fcf8 80%);
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
        // max-height: 400px; 
      }
      @media (min-width: 1000px) {
        min-height: 600px; 
        max-height: 700px; 
      }
  
      @media (min-width: 400px) {
      //  max-width: 300px; 
      margin-left: 20px; 
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

const NavContainer = styled.nav`
  width: 70%;
  display: flex;
  text-align: center;
  justify-content: space-between;

  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }

  &:hover,
  &:focus {
    text-decoration: underline;
    transition: 0.5s;
    color: white;
  }
`;
export default Workouts;
