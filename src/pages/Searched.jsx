import React from "react";
import GetMassivelogo from "../components/GetMassivelogo";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Liked from "../components/Liked";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function Searched() {
  const [searchedreipie, setSearchedrecipe] = useState([]);
  let params = useParams();

  useEffect(() => {
    getSearchedrecipie(params.search);
  }, [params.search]);

  const getSearchedrecipie = async (name) => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=34773bf69ba4400ca1a7519df1cee892&query=${name}`
    );
    const data = await response.json();
    setSearchedrecipe(data.results);
    console.log(searchedreipie);
  };

  return searchedreipie.map((item) => {
    return (
      <div className="animate__animated animate__heartBeat">
        <Wrapper>
          <div className="likeddivsearched">
            <h1>{item.title}</h1> <Liked />
          </div>
          <Card>
            <NavLink to={"/recipie/" + item.id}>
              <img src={item.image} alt={item.title} />
            </NavLink>
          </Card>
        </Wrapper>
      </div>
    );
  });
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
`;

const Card = styled.div`
  border: transparent;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 300px;
  height: 200px img {
    border-radius: 2rem;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Searched;
