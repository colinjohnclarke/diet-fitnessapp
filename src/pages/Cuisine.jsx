import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import GetMassivelogo from "../components/GetMassivelogo";
import { AiFillLike } from "react-icons/ai";

import Liked from "../components/Liked";

import { NavLink } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  let params = useParams();

  const getCuisine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${name}&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}&number=30`
    );
    const recipies = await data.json();
    setCuisine(recipies);
    console.log("this is your cuisine", cuisine);
  };

  useEffect(() => {
    getCuisine(params.type);
    const type = params.type;
    console.log("params :", params);
  }, [params.type]);

  return (
    <Wrapper className="cuisineWrapper">
      <Grid className="griddiv">
        {cuisine.map((item) => {
          return (
            <Card
              key={item.id}
              className=" animate__animated animate__heartBeat"
            >
              <NavLink to={"/recipie/" + item.id}>
                <img src={item.image} />

                <div className="likeddiv">
                  <h4>{item.title}</h4> <Liked />
                </div>
              </NavLink>
            </Card>
          );
        })}
      </Grid>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0px;
  padding: 5%;
  position: relative;
  left: 15%;

  h1 {
    position: absolute;
    z-index: 10;
    color: white;
    width: 100%;
    font-size: 2rem;
    text-shadow: 10px 10px 25px rgb(81, 67, 21), -10px 10px 25px rgb(81, 67, 21),
      -10px -10px 25px rgb(81, 67, 21), 10px -10px 25px rgb(81, 67, 21);
    left: 10%;
    top: 20%;
    max-width: 70%;
  }

  h2 {
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 5rem;
`;

const Card = styled.div`
border: transparent;
box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
  rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
border-radius: 2rem;
overflow: hidden;
position: relative;
width: 300px;
height: 200px




img {
  border-radius: 2rem;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;


`;

export default Cuisine;
