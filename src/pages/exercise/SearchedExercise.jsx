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
import LinearProgress from "@mui/material/LinearProgress";

function SearchedExercise() {
  const [searchedexercise, setSearchedExercise] = useState([]);
  const [equipmentfilterselection, setEquipmentFilterSelection] = useState("");
  const [filteredbyequipment, setFilteredbyEquipment] = useState([]);
  const [storedsearch, setStoredSearch] = useState([]);

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const exercisesPerPage = 12;
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
    // getSearchedExerise(params.type);
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

  //  filter reset handler. recall api search from params

  const resfilteretHandler = () => {
    getSearchedExerise(params.type);
    console.log("params type is;", params.type);
    console.log("resfilteretHandler clicked");
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
      "X-RapidAPI-Key": "c0122e8c44msh979a6d1e77700bbp13ce92jsn6336df6b62d3",
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

  // filtereset handler

  return (
    <Main>
      <Loading>
        {searchedexercise.length === 0 && (
          <div>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
            <Stack sx={{ width: "100%" }} spacing={2}>
              <LinearProgress color="primary" />
            </Stack>
          </div>
        )}
      </Loading>
      <Wrapper className="SearchExerciseWrapper">
        <SearchExercise />
        {/* <h1>{filterbodypartselection}</h1> */}

        <h2>Selected Exercise: {params.type}</h2>
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

        {searchedexercise.length === 0 && <h1> No Exercises found</h1>}

        {/* map of exercises that have been searched and filtered */}
        <Grid>
          {currentExercises.map((exercise) => {
            return (
              <NavLink to={"/exercise/" + exercise.id}>
                <Card className="searchExerciseCard" key={exercise.id}>
                  <TextWrapper>
                    <h4> NAME: {exercise.name}</h4>
                    <h4>
                      BODYPART: {exercise.bodyPart}( {exercise.target})
                    </h4>
                    <h4>EQUIPMENT: {exercise.equipment}</h4>
                    <img src={exercise.gifUrl}></img>
                  </TextWrapper>
                </Card>
              </NavLink>
            );
          })}
        </Grid>

        <Stack
          direction="row"
          spacing={2}
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
          paddingTop={7}
          paddingBottom={5}
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
    </Main>
  );
}

const Buttondiv = styled.div`
height: 20px
width: 20px; 
background-color: green; 
  `;

const TextWrapper = styled.div`
  border-radius: 1rem;

  // @media (max-width: 600px) {
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  // }
`;

const Wrapper = styled.div`
  min-width: 250px;
  max-width: 100vw;
  position: relative;
  margin-left: 40px;

  @media (max-width: 450px) {
    margin-left: 50px;
  }

  @media (min-width: 600px) {
    margin-left: 15px;
  }
`;

const Grid = styled.div`
  position: relative;
  top: 20px;
  right: 10px;
  width: 100%;
  display: grid;

  @media (min-width: 480px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
   
  }

  @media (min-width: 830px) {
    padding
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
  }

  a {
    text-decoration: none;
  }
`;

const Card = styled.div`
  padding: 3%;
  min-width: 150px;
  min-height: 200px;
  max-width: 400px;
  margin: 4%;
  border: 1px solid turquoise;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
}

  img {
    position: relative;
    left: 20px;
    border-radius: 2rem;
    width: 90%;
    @media (max-width: 400px) {
      display: flex;
      justify-content: center;
      width: 40%;
    }
    @media (min-width: 470px) {
      display: flex;
      justify-content: center;
      width: 70%;
    }

    
  }

  a {
    text-decoration: none;
  }
  h4 {
    color: black;
    font-weight: bold;
  }
`;

const Loading = styled.div`
  width: 100%;
`;

const Main = styled.div`
  margin-top: 10px;
  width: 100%;
`;

export default SearchedExercise;

// background: rgb(0, 255, 235);
// background: linear-gradient(
//   252deg,
//   rgba(0, 255, 235, 0.9220281862745098) 0%,
//   rgba(0, 180, 181, 1) 65%
