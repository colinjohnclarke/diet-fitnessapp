import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Showinstructions from "../components/Showinstructions";
import Showingredients from "../components/Showingredients";
// import { Button } from "@mui/material";

function Recipie() {
  const [recipie, setRecipie] = useState([]);

  let params = useParams();

  useEffect(() => {
    getRecipiefromclick(params.name);
  }, [params.name]);

  useEffect(() => {
    rendertext();
  }, []);

  let getRecipiefromclick = async () => {
    let response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?&apiKey=34773bf69ba4400ca1a7519df1cee892`
    );
    let recipiedata = await response.json();
    console.log(recipiedata);
    setRecipie(recipiedata);
    let Recipiedata = recipiedata;
    console.log("export this data", Recipiedata);
  };

  const [active, setActive] = useState("");

  return (
    // cuisines, image, id, readyInMinutes, summary,title , weightWatcherSmartPoints, servings, instructions

    <Wrapper>
      <nav>
        <Button
          onClick={() => {
            setActive("Show_Ingredients");
            console.log("ingredients clicked");
          }}
        >
          <p>Ingredients</p>
        </Button>

        <Button
          onClick={() => {
            setActive("Show_Instructions");
            console.log("instructions clicked");
          }}
        >
          <p>Instructions</p>
        </Button>
      </nav>
    </Wrapper>
  );
}

const rendertext = () => {
  if (active === "Show_Ingredients") {
    return <Showingredients />;
  } else {
    return <Showinstructions />;
  }
};

const Wrapper = styled.div`
  height: 70%;
  width: 70%;
  border: 1px solid;
  // display: flex;
  // justify-content: center;
  // align-items: center;
`;

const Button = styled.button`
  height: 40px;
  width: 100px;
  background-color: red;
`;

// const Summary = styled.div`
//   width: 100%;
//   height: 100%;
// `;

export let Recipiedata;

export default Recipie;
