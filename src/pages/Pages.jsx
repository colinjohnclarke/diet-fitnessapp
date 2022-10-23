import React from "react";
import { Routes, BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Cuisine from "./Cuisine";
import Home from "./Home";
import Searched from "./Searched";
import Recipie from "./Recipie";
import SearchedExercise from "./exercise/SearchedExercise";
import Fitness from "../components/exercise/Fitness";
import Recipies from "../components/Recipies";
import News from "../components/News";
import ExerciseCategorySelection from "../components/exercise/ExerciseCategorySelection";
import Exercise from "../components/exercise/Exercise";
import Settings from "../components/Settings";
import Article from "../components/Article";
import Favouriterecipies from "../components/exercise/Favouriterecipies";
import Favouriteexercises from "../components/exercise/Favouriteexercises";

function Pages() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/searchexercise/:type" element={<SearchedExercise />} />
      <Route path="/cuisine/:type" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />}></Route>
      <Route path="/recipie/:name" element={<Recipie />}></Route>
      <Route path="/fitness/" element={<Fitness />}></Route>
      <Route
        path="/bodypart/:name"
        element={<ExerciseCategorySelection />}
      ></Route>
      <Route path="/recipies/" element={<Recipies />}></Route>
      <Route path="/news/" element={<News />}></Route>
      <Route path="/exercise/:id" element={<Exercise />}></Route>
      <Route path="/settings/" element={<Settings />}></Route>
      <Route path="/news/:id" element={<Article />}></Route>
      <Route path="favourites/recipies" element={<Favouriterecipies />}></Route>
      <Route
        path="favourites/exercises"
        element={<Favouriteexercises />}
      ></Route>
    </Routes>
  );
}

export default Pages;
