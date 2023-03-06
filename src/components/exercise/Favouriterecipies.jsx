import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";

function Favouriterecipies() {
  const [recipies, setRecipies] = useState([]);
  // const [favourtiesID, setFavouitesID] = useState([]);

  // const dispatch = useDispatch();

  const favourites = useSelector(
    (state) => state.addrecipiefavouriteReducer.value
  );
  // setFavouitesID(favourites);

  console.log("favs", favourites);

  const promises = favourites.map(async (item) => {
    try {
      const get = await fetch(
        `https://api.spoonacular.com/recipes/${item}/information?&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
      );
      const resp = await get.json();
      console.log(item, resp);
      return resp;
      // setRecipies(data);
    } catch (error) {
      console.log(error);
    }
  });

  const result = Promise.all(promises).then((values) => {
    console.log("values", values);
  });

  console.log("RESULT", result);

  return result.map((item) => {
    <div>
      <h2>{item.title}</h2>
      <img src={item.image} alt="{item.title}" />
      <h3> Servings: {item.servings}</h3>

      <h3>Weight Watchers points: {item.weightWatcherSmartPoints}</h3>
      <h4>Summary:</h4>
      <p dangerouslySetInnerHTML={{ __html: item.summary }}></p>

      <h5>Instructions:</h5>
      <p dangerouslySetInnerHTML={{ __html: item.instructions }}></p>
    </div>;
  });
}

export default Favouriterecipies;
