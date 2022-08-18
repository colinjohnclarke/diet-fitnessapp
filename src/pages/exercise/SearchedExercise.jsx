import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import FilteredExerciseFn from "./FilteredExercises";
import SearchExercise from "../../components/exercise/SearchExercise";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SearchedExercise() {
  const [searchedexercise, setSearchedExercise] = useState([]);
  const [equipmentfilterselection, setEquipmentFilterSelection] = useState([]);
  const [filteredbyequipment, setFilteredbyEquipment] = useState("");

  // need to link select of the menudropdown to function below to filter array

  const handlefilterChange = (e) => {
    e.preventDefault();
    console.log("change handler clicked");
    setEquipmentFilterSelection(e.target.value);
    console.log(`equipment filter selected: `, equipmentfilterselection);

    const newEquipmentfilteredbyarray = searchedexercise.filter((item) =>
      item.equipment.toLowerCase().includes(equipmentfilterselection)
    );
    setFilteredbyEquipment(newEquipmentfilteredbyarray);
    setSearchedExercise(filteredbyequipment);
    console.log("filteredFunctiion Clicked", searchedexercise);

    return <h1>filteredjfdshkhsjdkfhjsdhkfhkjsdkfhds BITCH</h1>;
  };

  let params = useParams();
  console.log("filtered array,", searchedexercise);
  let typeparams = params.type;

  useEffect(() => {
    getSearchedExerise(params.type);
    console.log(params.type);
  }, [params.type]);

  // API Call options for exercise searchbar search
  const Exerciseoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const getSearchedExerise = async (name) => {
    let Response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      Exerciseoptions
    );
    const exerciseListdata = await Response.json();
    const paramsfilter = exerciseListdata.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(typeparams) ||
        exercise.equipment.toLowerCase().includes(typeparams) ||
        exercise.bodyPart.toLowerCase().includes(typeparams) ||
        exercise.target.toLowerCase().includes(typeparams)
    );

    setSearchedExercise(paramsfilter);
    console.log("filtered array,", searchedexercise);
  };

  return (
    <div className="animate__animated animate__heartBeat">
      <Wrapper>
        <SearchExercise />
        <h1>Selected Exercise: {params.type}</h1>
        {/* drop down form for filter by equipment */}
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">
            Filter Equipment
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            v
            label="Filter Equipment"
          >
            <MenuItem onClick={handlefilterChange} value={"barbell"}>
              Barbell
            </MenuItem>
            <MenuItem onClick={handlefilterChange} value={"machine"}>
              Machine
            </MenuItem>
            <MenuItem onClick={handlefilterChange} value={"dumbells"}>
              Dumbells
            </MenuItem>
            <MenuItem onClick={handlefilterChange} value={"kettelbell"}>
              Kettlebell
            </MenuItem>
          </Select>
        </FormControl>
        {/* map of exercises that have been searched and filtered */}
        <Grid>
          {searchedexercise.map((exercise) => {
            return (
              <Card key={exercise.id}>
                <TextWrapper>
                  <h4>Name: {exercise.name}</h4>
                  <h4>
                    Bodypart: {exercise.bodyPart}( {exercise.target})
                  </h4>
                  <h4>Equipment: {exercise.equipment}</h4>
                </TextWrapper>
                <img src={exercise.gifUrl}></img>
              </Card>
            );
          })}
        </Grid>
      </Wrapper>
    </div>
  );
}

const Buttondiv = styled.div`
height: 20px
width: 20px; 
background-color: green; 
  `;

const TextWrapper = styled.div`
  border-radius: 1rem;
`;

const Wrapper = styled.div`
  min-width: 250px;
  max-width: 80vw;
  position: relative;
  left: 15%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 0.2rem;
`;

const Card = styled.div`
  margin: 5%;
  padding: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
  margin: 3%;
  background-color: grey;
  border-radius: 1rem;

  img {
    width: 80%;
    border-radius: 1rem;
    box-shadow: 15px 21px 34px -22px rgba(0, 0, 0, 0.58);
  }

  a {
    text-direction: none;
  }
  h4 {
    color: white;
    text-shadow: 10px 10px 25px rgb(81, 67, 21), -10px 10px 25px rgb(81, 67, 21),
      -10px -10px 25px rgb(81, 67, 21), 10px -10px 25px rgb(81, 67, 21);
    font-size: 16px;
  }
`;

export default SearchedExercise;

// background: rgb(0, 255, 235);
// background: linear-gradient(
//   252deg,
//   rgba(0, 255, 235, 0.9220281862745098) 0%,
//   rgba(0, 180, 181, 1) 65%
