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
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${name}&apiKey=34773bf69ba4400ca1a7519df1cee892&number=30`
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
    <Wrapper>
      <GetMassivelogo />
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
  position: relative;
  top: 30%;
  h2 {
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.2rem;
`;

const Card = styled.div`
  padding: 1%;
  img {
    width: 100%;
    border-radius: 1rem;
    -webkit-box-shadow: 15px 21px 34px -22px rgba(0, 0, 0, 0.58);
    -moz-box-shadow: 15px 21px 34px -22px rgba(0, 0, 0, 0.58);
    box-shadow: 15px 21px 34px -22px rgba(0, 0, 0, 0.58);
  }

  a {
    text-direction: none;
  }
  h4 {
     position: absolute;
    z-index: 10;
    left: 50%;
    top: 20%; 
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-size: 150.0%;
    display-flex;
    justify-content: center;
    align-items: end;
    text-shadow: 10px 10px 25px rgb(81,67,21),
    -10px 10px 25px rgb(81,67,21),
    -10px -10px 25px rgb(81,67,21),
    10px -10px 25px rgb(81,67,21);
  }
`;

export default Cuisine;
