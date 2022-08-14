import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import ExerciseCategory from "../exericsecompoents/ExerciseCategory";

function Home() {
  return (
    <div>
      <HighProtein />
      <Popular />
      {/* <ExerciseCategory /> */}
    </div>
  );
}

export default Home;
