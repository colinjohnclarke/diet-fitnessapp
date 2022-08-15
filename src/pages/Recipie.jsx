import React from "react";
import { Navigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// import { Button } from "@mui/material";

function Recipie() {
  const [recipie, setRecipie] = useState([]);

  let params = useParams();

  useEffect(() => {
    getRecipiefromclick(params.name);
  }, [params.name]);

  // useEffect(() => {
  //   rendertext();
  // }, []);

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

  const [active, setActive] = useState("Show_Instructions");

  return (
    // cuisines, image, id, readyInMinutes, summary,title , weightWatcherSmartPoints, servings, instructions

    <Wrapper className="Wrapper_div">
      <Nav>
        <Button
          className="recipie_btn"
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
      </Nav>

      {active === "Show_Instructions" && (
        <Instructions>
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

      {active === "Show_Ingredients" && <h1>Show Ingredients</h1>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const Nav = styled.nav`
  width: 200px;
  height: 20%;
  margin: 2 rem;
  position: relative;
  left: 30%;
  display: flex;
  align-items: center;
`;

const Button = styled.button`
  height: 3rem;
  width: 5rem;
  border: transparent;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5%;
  background-color: #fad961;
  background-image: linear-gradient(90deg, #fad961 0%, #f76b1c 100%);
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  font-family: "Teko", sans-serif;
  font-size: 1rem;
`;

const Instructions = styled.div``;

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
