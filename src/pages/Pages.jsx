import React from "react";
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";
import Recipie from "./Recipie";
import GetMassivelogo from "../components/GetMassivelogo";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}></Route>
      <Route path="/recipie/:name" element={<Recipie />}></Route>
    </Routes>
  );
}

export default Pages;
