import * as React from "react";
import { useState, useEffect } from "react";
import { IoIosFitness } from "react-icons/io";
import { MdOutlineFoodBank } from "react-icons/md";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { selectUser } from "../features/UserSlice2";
import { NavLink } from "react-router-dom";

function FavouriteIcons() {
  // let userval = user.value;
  const [fitcount, setfitCount] = useState(0);
  const [foodcount, setfoodCount] = useState(0);
  const [fitcountselect, setFitcountselect] = useState(false);
  const [foocountselect, setfoodCountSelect] = useState(false);
  const [exerciseiconcolor, setexerciseIconColor] = useState("");
  const [foodiconcolor, setFoodIconColor] = useState("");
  const [favouriteexerciseslength, setFavouriteexerciseslength] = useState(0);

  let favouritesexericselengthfromstate = useSelector(
    (state) => state.addFavouriteExerciseReducer.value.length
  );

  const updateFavourites = () => {
    setfitCount(favouritesexericselengthfromstate);
    console.log(
      "favouritesexericselengthfromstate",
      favouritesexericselengthfromstate
    );
  };

  useEffect(() => {
    updateFavourites();
  }, [favouritesexericselengthfromstate]);

  const fitcountselecthandler = () => {
    setFitcountselect(!fitcountselect);
    console.log(`fitcountselecthandler clicked`, fitcountselect);
    setfoodCountSelect(!foocountselect);
    setexerciseIconColor("red");
    setFoodIconColor("white");
  };

  const setfoodCountSelecthandler = () => {
    setFitcountselect(!fitcountselect);
    console.log(`foodcountselecthandler clicked`, fitcountselect);
    setfoodCountSelect(!foocountselect);
    setFoodIconColor("red");
    setexerciseIconColor("white");
  };

  return (
    <div>
      {/* {userval ? ( */}
      <Wrapper>
        <NavLink onClick={fitcountselecthandler} to={"/favourites/exercises"}>
          <Fit>
            <IoIosFitness color={exerciseiconcolor} />
            <Countfitness>
              <h3>{fitcount}</h3>
            </Countfitness>
          </Fit>
        </NavLink>
        <NavLink
          onClick={setfoodCountSelecthandler}
          to={"/favourites/recipies"}
        >
          <Food>
            <MdOutlineFoodBank color={foodiconcolor} />
            <Countfood> {foodcount}</Countfood>
          </Food>
        </NavLink>
      </Wrapper>
    </div>
  );
}

export default FavouriteIcons;

const Wrapper = styled.div`
  display: flex;
  height: 40px;
  width: 100px;
  color: white;
  position: absolute;
  right: 0px;
  top: 5px;
  justify-content: center;

  a {
    text-decoration: none;
  }

  svg {
    width: 30px;
    height: 30px;
  }

  @media (min-width: 700px) {
    width: 150px;
    justify-content: space-around;
  }
`;

const Countfitness = styled.div`
  h3 {
    color: white;
  }
  // a {
  //   text-decoration: none;
  // }
`;

const Countfood = styled.div`
  color: turquoise;
  a {
    text-decoration: none;
  }
`;

const Fit = styled.div`
  display: flex;
  align-items: center;
`;

const Food = styled.div`
  display: flex;
  align-items: center;
`;
