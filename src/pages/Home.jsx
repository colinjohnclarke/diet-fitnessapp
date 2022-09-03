import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import Category from "../components/Category";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import GetMassivelogo from "../components/GetMassivelogo";

import ExerciseCategory from "../exericsecompoents/ExerciseCategory";
import SearchExercise from "../components/exercise/SearchExercise";

function Home() {
  return (
    <div>
      <GetMassivelogo />
      <ExerciseCategory />

      <Category />
      <div className="recipiesDiv">
        <HighProtein />
        <HealthFatsandProtein />
        <Popular />
      </div>
    </div>
  );
}

export default Home;
