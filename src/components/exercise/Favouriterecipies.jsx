import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Button from "@mui/material/Button";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import {
  useGetRecipiesQuery,
  useAddRecipieMutation,
  useDeleteRecipieMutation,
} from "../features/api/recipiesSlice";

function Favouriterecipies() {
  const [recipies, setRecipies] = useState([]);

  const [id, setId] = useState("");

  // id in this case is not the id rather it is the name (number of the recipie)

  let recipiesarr = [];

  const { data, isLoading, isSuccess, isError, error } = useGetRecipiesQuery();
  // const [favourtiesID, setFavouitesID] = useState([]);

  // const [deleteRecipie] = useDeleteRecipieMutation();

  const deleteRecipeHandler = async () => {
    // console.log("delete recipie id number:", id);
    // await deleteRecipie({ id });
  };

  useEffect(
    (id) => {
      deleteRecipeHandler();
    },
    [id]
  );

  let content;

  console.log("DATA", data);

  useEffect(() => {
    const promises = data.recipies.map(async (item) => {
      try {
        const get = await fetch(
          `https://api.spoonacular.com/recipes/${item.name}/information?&apiKey=${process.env.REACT_APP_SPOONACULAR_API_KEY}`
        );
        const resp = await get.json();
        console.log(item, resp);
        recipiesarr.push(resp);
        // setRecipies([...recipies, resp]);
      } catch (error) {
        console.log(error);
      }
    });

    const result = Promise.all(promises).then((values) => {
      console.log("recipiesarr", recipiesarr);
      setRecipies(recipiesarr);
    });
  }, [data]);

  return (
    <div>
      {recipies.map((item) => {
        return (
          <Wrapper>
            <h1>{item.title}</h1>
            <img src={item.image} alt={item.title} />
            <p> Ready in {item.readyInMinutes} minutes</p>

            <Button
              onClick={(event) => {
                event.preventDefault();
                setId(item._id);
                console.log(`Delete ${(item.id, item.title)} recipie`);
              }}
              variant="contained"
            >
              Delete
            </Button>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default Favouriterecipies;

const Wrapper = styled.div`
border: 2px solid; 
display: flex; 
flex-direction: column; 
justify-content: center; 
align-items: center; 
  height: 40%;
  width: 80%;
  padding: 5%;
  margin: 5%;
  position: relative: 

  img{
    height: 300px; 
    width: 300px; 
border-radius: 10px; 
    position: absolute; 
    z-index: -10; 
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    

  }
h1{
  text-align: center; 
  position: absolute: 
  z-index: 2; 
  color: black; 
}

`;
