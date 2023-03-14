import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import { useAddRecipieMutation } from "../components/features/api/recipiesSlice";
import { useSelector, useDispatch } from "react-redux";

import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";

function Recipie() {
  const [recipie, setRecipie] = useState([]);
  const [active, setActive] = useState("Show_Instructions");
  const [instuctionbuttonactive, setIntructionsButtonActive] = useState();
  const [ingredientsbuttonactive, setIngredientsButtonActive] = useState();
  const [user, setUser] = useState([]);

  const getuser = useSelector((state) => state.user.value.payload.username);

  const [addRecipie, { isLoading, isSuccess, isError, error }] =
    useAddRecipieMutation();

  // const dispatch = useDispatch();

  let params = useParams();

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
    setRecipie(recipiedata);
  };

  const addfavouriteshandler = async (event) => {
    event.preventDefault();
    console.log("addfavouriteshandler clicked", recipie);
    await addRecipie({ name: params.name, user: `${getuser}` });
  };

  const loadingContentbar = (
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
  );
  let content;

  if (isLoading) {
    content = (
      <Loading>
        <h3>Saving...</h3>
        {loadingContentbar}
      </Loading>
    );
  } else if (isError) {
    content = <h1>Error try again...</h1>;
  } else if (isSuccess) {
    content = <h3>Saved to favourites...</h3>;
    console.log("is Sucess", isSuccess);
  } else if (error) {
    console.log(error);
  }

  return (
    <Wrapper className="Wrapper_div">
      <Loading>{recipie.length === 0 && loadingContentbar}</Loading>
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
            onClick={addfavouriteshandler}
          >
            Add to favorites
          </Button>
        </Nav>
        <div> {content}</div>

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

const Nav = styled.div`
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
