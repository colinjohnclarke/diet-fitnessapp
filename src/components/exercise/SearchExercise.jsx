import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function SearchExercise() {
  const [search, setSearch] = useState("");

  let navigate = useNavigate();

  //   const Exerciseoptions = {
  //     method: "GET",
  //     headers: {
  //       "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
  //       "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  //     },
  //   };

  const submitHandler = async (e) => {
    e.preventDefault();
    navigate("/searchexercise/" + search);
  };
  return (
    <FormStyle onSubmit={submitHandler}>
      <AiOutlineSearch className="searchsvg" />
      <input
        placeholder="Search Exercises"
        type="text"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      ></input>
    </FormStyle>
  );
}

// const Button = styled.button`
//   height: 50px;
//   width: 50px;
//   background-color: red;
// `;

const FormStyle = styled.form`
  width: 60%;
  min-width: 130px;
  min-width: 70%;
  min-height: 20px;
  max-height: 40px;
  border-radius: 0.5rem;
  position: relative;
  top: 20;
  left: 15%;
  backdrop-filter: blur(10px);

  input {
    background: white;
    border-radius: 0.5rem;
    font-family: "Abel", sans-serif;
    font-size: 1rem;
    padding: 2%;
    height: 5%;
    width: 90%;
    min-height: 30px;
    max-height: 30px;
    text-align: left;
    position: relative;
    left: 12%;
    top: 15%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default SearchExercise;

// <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
// <Typography
//   fontWeight={700}
//   sx={{ fontSize: { lg: "44px", xw: "30px" } }}
//   mb="50px"
//   textAlign="center"
// >
//   Lets get fit... <br />
// </Typography>
// <Box position="relative" mb="72px">
//   <TextField
//     sx={{
//       input: {
//         fontWeight: "700",
//         border: "none",
//         borderRadius: "4px",
//         backgroundColor: "white",
//       },
//     }}
//     height="76px"
//     value={search}
//     onChange={(e) => {
//       setSearch(e.target.value.toLowerCase());
//     }}
//     placeholder="Search Exericses"
//     type="text"
//   />

//   <Button
//     className="search-btn"
//     sx={{
//       bgcolor: "#FF2625",
//       color: "#fff",
//       textTransform: "none",
//       width: { lg: "175px", xs: "80px" },
//       fontSize: { lg: "20px", xs: "12px" },
//       height: "56px",
//       position: "absolute",
//     }}
//     onClick={handleSearch}
//   >
//     Search
//   </Button>
// </Box>
// </Stack>
