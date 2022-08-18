import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import Category from "../components/Category";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import GetMassivelogo from "../components/GetMassivelogo";
import Search from "../components/Search";
import ExerciseCategory from "../exericsecompoents/ExerciseCategory";
import SearchExercise from "../components/exercise/SearchExercise";

function Home() {
  return (
    <div>
      <SearchExercise />

      <GetMassivelogo />
      <ExerciseCategory />
      <Search />
      <Category />
      <HighProtein />
      <HealthFatsandProtein />
      <Popular />
    </div>
  );
}

export default Home;
