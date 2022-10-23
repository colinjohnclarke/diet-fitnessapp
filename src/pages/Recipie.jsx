import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";
import { createContext } from "react";

// import { useDispatch } from "react-redux";
// import addrecipiefavourite from "../components/features/Favouriteslice";

function Recipie() {
  const [recipie, setRecipie] = useState([]);
  const [active, setActive] = useState("Show_Instructions");
  const [instuctionbuttonactive, setIntructionsButtonActive] = useState();
  const [ingredientsbuttonactive, setIngredientsButtonActive] = useState();

  // const dispatch = useDispatch();

  let params = useParams();

  let favourites = [];

  useEffect(() => {
    getRecipiefromclick(params.name);
  }, [params.name]);

  // useEffect(() => {
  //   rendertext();
  // }, []);

  let getRecipiefromclick = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
    );
    let recipiedata = await response.json();
    console.log(recipiedata);
    setRecipie(recipiedata);
    console.log(`this is the recipie`, recipie);
    let Recipiedata = recipiedata;
    console.log("export this data", Recipiedata);
  };

  const addfavouriteshandler = (recipie) => {
    // dispatch(addrecipiefavourite(recipie));
    console.log("addfavouriteshandler clicked");
    favourites.push(recipie);
    console.log("favourites", favourites);
  };

  return (
    // cuisines, image, id, readyInMinutes, summary,title , weightWatcherSmartPoints, servings, instructions

    <Wrapper className="Wrapper_div">
      <Loading>
        {recipie.length === 0 && (
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
      <Main>
        <Nav>
          <Button
            size="10px"
            className="RecipieButton"
            color={instuctionbuttonactive ? "primary" : "secondary"}
            variant="contained"
            className="recipie_btn"
            onClick={() => {
              setActive("Show_Ingredients");
              console.log("ingredients clicked");
              setIntructionsButtonActive(false);
              setIngredientsButtonActive(true);
            }}
          >
            <p>Ingredients</p>
          </Button>

          <Button
            size="10px 10px"
            color={ingredientsbuttonactive ? "primary" : "secondary"}
            variant="contained"
            onClick={() => {
              setActive("Show_Instructions");
              console.log("instructions clicked");
              setIntructionsButtonActive(true);
              setIngredientsButtonActive(false);
            }}
          >
            <p>Instructions</p>
          </Button>
          <Button
            size="10px"
            color="success"
            variant="contained"
            onClick={() => {
              addfavouriteshandler(recipie);
            }}
          >
            <p>Add to favorites</p>
          </Button>
        </Nav>

        {active === "Show_Instructions" && (
          <Instructions>
            <h1>Instructions</h1>
            <h2>{recipie.title}</h2>
            <img src={recipie.image} alt="{recipie.title}" />
            <h3> Servings: {recipie.servings}</h3>

            <h3>Weight Watchers points: {recipie.weightWatcherSmartPoints}</h3>
            <h4>Summary:</h4>
            <p dangerouslySetInnerHTML={{ __html: recipie.summary }}></p>

            <h5>Instructions:</h5>
            <p dangerouslySetInnerHTML={{ __html: recipie.instructions }}></p>
          </Instructions>
        )}

        {active === "Show_Ingredients" && (
          <Ingredients>
            <h1>Ingredients</h1>
            <h2>{recipie.title}</h2>
            <img src={recipie.image} alt="{recipie.title}" />
            <h2>Get these bits ready...</h2>
            {recipie.extendedIngredients.map((ingredient) => {
              return (
                <ul>
                  <li>{ingredient.original}</li>
                </ul>
              );
            })}

            <h2> Now COOK!</h2>
          </Ingredients>
        )}
      </Main>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  left: 10px;
  text-align: justify;
`;

const Main = styled.div`
  margin: 9%;
  img {
    max-width: 96%;
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  position: relative: 
  max-height: 10px !important;
  width: 300px; 

`;

const Loading = styled.div`
  width: 100%;
`;

const Instructions = styled.div``;

const Ingredients = styled.div``;

// const Summary = styled.div`
//   width: 100%;
//   height: 100%;
// `;

export let Recipiedata;

export default Recipie;

// {Recipiedata.map((item) => {
//   return (
//     <Instructions>
//       <h2>{item.title}</h2>
//
//     </Instructions>
//   );
// })}
