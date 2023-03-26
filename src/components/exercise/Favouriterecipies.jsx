import React from "react";
// import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// import { MdDeleteForever } from "react-icons/md";

import Button from "@mui/material/Button";
// import LinearProgress from "@mui/material/LinearProgress";
// import Stack from "@mui/material/Stack";
import { useState, useEffect } from "react";
import {
  useGetRecipiesQuery,
  // useAddRecipieMutation,
  useDeleteRecipieMutation,
} from "../features/api/recipiesSlice";

function Favouriterecipies() {
  const [recipiesarr, setRecipiesarr] = useState([]);

  const [id, setId] = useState("");

  const { data, isLoading, isSuccess, isError, error } = useGetRecipiesQuery();

  const [deleteRecipie] = useDeleteRecipieMutation();

  const deleteRecipeHandler = async () => {
    console.log("delete recipie id number:", id);
    await deleteRecipie({ id });
  };

  useEffect(() => {
    deleteRecipeHandler(id);
  }, [id]);

  let content;

  if (isLoading) {
    content = <h1>Loading</h1>;
  } else if (isSuccess) {
    content = data.recipies.map((item) => {
      return (
        <Wrapper>
          <h1>{item.title}</h1>
          <h1>{item._id}</h1>
          <img src={item.image} alt={item.title} />
          <p> Ready in {item.readyInminutes} minutes</p>

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
    });
  }

  return content;
}

export default Favouriterecipies;

const Wrapper = styled.div`
border: 2px solid; 
// color: white; 
// display: flex; 
// flex-direction: column; 
// justify-content: center; 
// align-items: center; 
//   height: 40%;
//   width: 80%;
//   padding: 5%;
//   margin: 5%;

//   img{
// height: 100px; 
// width: 100px; 
// position: absolute; 
// z-index: -1; 
  
//   }
  
h1{
  text-align: center; 
  position: absolute: 
  z-index: 2; 
  
}

`;
