import React from "react";
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";
import Recipie from "./Recipie";
import SearchedExercise from "./exercise/SearchedExercise";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/food/" element={<Food />} /> */}
      <Route path="/searchexercise/:type" element={<SearchedExercise />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}></Route>
      <Route path="/recipie/:name" element={<Recipie />}></Route>
      {/* <Route path="/bodypart/:name" element={<SearchExercise />}></Route> */}
    </Routes>
  );
}

export default Pages;
