import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";

import Liked from "../components/Liked";

import { NavLink } from "react-router-dom";

function Cuisine() {
  const [cuisine, setCuisine] = useState([]);

  //   const likefn = () => {

  //   }

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
    <div>
      <h2 className="cuisineh2"> Here are your recipies, enjoy!</h2>
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
                  <h3>{item.title}</h3> <Liked />
                </div>
              </NavLink>
            </Card>
          );
        })}
      </Grid>
    </div>
  );
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;

const Card = styled.div`
padding: 3%; 
img{ width: 100%; 
  border-radius: 2rem; 
  -webkit-box-shadow: 15px 21px 34px -22px rgba(0,0,0,0.58);
  -moz-box-shadow: 15px 21px 34px -22px rgba(0,0,0,0.58);
  box-shadow: 15px 21px 34px -22px rgba(0,0,0,0.58);
}

a{
  text-direction: none; 

}
h3{text-align: center; 
  padding; 3rem; 
  font-size: 1.5rem


}


`;

export default Cuisine;
