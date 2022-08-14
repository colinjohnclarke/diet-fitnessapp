import React from "react";
import Recipiedata from "./Recipie";

function Showinstructions() {
  return (
    <div>
      <div>
        <h1>{Recipiedata.title}</h1>
        <img src={Recipiedata.image} alt={Recipiedata.title} />
        <dl>
          <dt>Time: </dt>
          <dd>{Recipiedata.readyInMinutes} min</dd>
          <dt>Servings: </dt>
          <dd>{Recipiedata.servings} </dd>
          <dt>Weight Watchers Points: </dt>
          <dd>{Recipiedata.weightWatcherSmartPoints} </dd>
          <dt> Cuisine: </dt>
          <dd>{Recipiedata.cuisines} </dd>
        </dl>
      </div>
    </div>
  );
}

export default Showinstructions;
