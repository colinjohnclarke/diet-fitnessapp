import React from "react";
import Popular from "../components/Popular";
import HighProtein from "../components/HighProtein";
import Category from "../components/Category";
import HealthFatsandProtein from "../components/HealthFatsandProtein";
import GetMassivelogo from "../components/GetMassivelogo";
import Search from "../components/Search";
import ExerciseCategory from "../exericsecompoents/ExerciseCategory";

function Home() {
  return (
    <div>
      <GetMassivelogo />
      <Search />
      {/* <Category />
      <HighProtein />
      <HealthFatsandProtein />
      <Popular /> */}
      <ExerciseCategory />
    </div>
  );
}

export default Home;
