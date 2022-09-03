import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import SearchExercise from "../../components/exercise/SearchExercise";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function SearchedExercise() {
  const [searchedexercise, setSearchedExercise] = useState([]);
  const [equipmentfilterselection, setEquipmentFilterSelection] = useState("");
  const [filteredbyequipment, setFilteredbyEquipment] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 10;
  const paginate = (e, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // find indexes of current pages
  const lastExerciseindex = currentPage * exercisesPerPage;
  const fistExerciseindex = lastExerciseindex - exercisesPerPage;

  const currentExercises = searchedexercise.slice(
    fistExerciseindex,
    lastExerciseindex
  );

  // Equipment filter handler

  const handlefilterChange = (event) => {
    console.log("handlefilterChange handler clicked");
    setEquipmentFilterSelection(event.target.value);
  };

  // keeps the state udpdated to the current selection
  useEffect(() => {
    console.log(`equipment filter selected: `, equipmentfilterselection);
    const newEquipmentfilteredbyarray = searchedexercise.filter((item) =>
      item.equipment.toLowerCase().includes(equipmentfilterselection)
    );
    setFilteredbyEquipment(newEquipmentfilteredbyarray);
    setSearchedExercise(newEquipmentfilteredbyarray);
    console.log("filtered arraY", equipmentfilterselection, searchedexercise);
  }, [equipmentfilterselection]);

  // BodyPart filter handler

  // const handlebodypartfilterChange = (event) => {
  //   console.log("handlebodypartfilterChange handler clicked");
  //   setEquipmentbodypartSelection(event.target.value);
  // };
  //

  // useEffect(() => {
  //   console.log("equipment filter selected:", filterbodypartselection);
  //   const newBodypartfilterdarray = () => {
  //     searchedexercise.filter((item) =>
  //       item.bodyPart.toLowerCase().includes(filterbodypartselection)
  //     );
  //     setSearchedExercise(newBodypartfilterdarray);
  //     console.log(
  //       "filtered bodypart arraY",
  //       filterbodypartselection,
  //       searchedexercise
  //     );
  //   };
  // }, [filterbodypartselection]);

  //  filter reset handler. recall api search from params

  const resfilteretHandler = () => {
    getSearchedExerise(params.type);
    console.log("params type is;", params.type);
  };

  /// use params from search function
  let params = useParams();
  console.log("filtered array,", searchedexercise);
  let typeparams = params.type;

  useEffect(() => {
    getSearchedExerise(params.type);
    console.log("params type is;", params.type);
  }, [params.type]);

  // API Call options for exercise searchbar search
  const Exerciseoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  // API fetch from params + filter

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
      <Wrapper className="SearchExerciseWrapper">
        <SearchExercise />
        {/* <h1>{filterbodypartselection}</h1> */}

        <h1>Selected Exercise: {params.type}</h1>
        {/* drop down form for filter by equipment */}
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">
            Filter Equipment
          </InputLabel>
          <Select
            labelId="filter-select"
            id="filter-select"
            label="Filter Equipment"
            onChange={handlefilterChange}
            value={equipmentfilterselection}
          >
            <MenuItem value={"barbell"}>Barbell</MenuItem>
            <MenuItem value={"machine"}>Machine</MenuItem>
            <MenuItem value={"dumbells"}>Dumbells</MenuItem>
            <MenuItem value={"kettelbell"}>Kettlebell</MenuItem>
            <MenuItem value={"cable"}>Cable</MenuItem>
            <MenuItem value={"body weight"}>Body Weight</MenuItem>
            <MenuItem value={"stability ball"}>Stability Ball</MenuItem>
            <MenuItem value={"medicine ball"}>Medicine Ball</MenuItem>
          </Select>
        </FormControl>
        {/* 
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">
            Filter Body Part
          </InputLabel>
          <Select
            labelId="bodypart-filter-select"
            id="bodypart-filter-select"
            label="bodypart-filter-select"
            onChange={handlebodypartfilterChange}
            value={equipmentfilterselection}
          >
            <MenuItem value={"back"}>Back</MenuItem>
            <MenuItem value={"legs"}>Legs</MenuItem>
            <MenuItem value={"chest"}>Chest</MenuItem>
            <MenuItem value={"arms"}>Arms</MenuItem>
            <MenuItem value={"shoulders"}>Shoulders</MenuItem>
          </Select>
        </FormControl> */}

        <Button type="reset" onClick={resfilteretHandler} variant="contained">
          Reset Filter
        </Button>

        {/* map of exercises that have been searched and filtered */}
        <Grid>
          {currentExercises.map((exercise) => {
            return (
              <Card className="searchExerciseCard" key={exercise.id}>
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
        <Stack
          direction="row"
          spacing={2}
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
        >
          {searchedexercise.length > 9 && (
            <Pagination
              variant="outlined"
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(searchedexercise.length / exercisesPerPage)}
              page={currentPage}
              onChange={paginate}
              size="medium"
            ></Pagination>
          )}
        </Stack>
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
  max-width: 85vw;
  // max-width: 1000px;
  position: relative;
  left: 12%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
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
