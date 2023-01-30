import React from "react";
import { useState, useEffect } from "react";
import SearchExercise from "./SearchExercise";
import styled from "styled-components";
import ExerciseCategory from "../../exericsecompoents/ExerciseCategory";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Stack } from "@mui/system";
import Pagination from "@mui/material/Pagination";
import { NavLink } from "react-router-dom";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";

import LinearProgress from "@mui/material/LinearProgress";

import RadioGroup from "@mui/material/RadioGroup";

function Fitness() {
  const [equipmentselection, setEquipmentSelection] = useState("");
  const [exercises, setExercises] = useState([]);
  const [filteredexercises, setFilteredExercises] = useState([]);
  const [equipmentselected, setEquipmentSelected] = useState(false);

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

  const currentExercises = exercises.slice(
    fistExerciseindex,
    lastExerciseindex
  );

  // api call to get exercises from exercise Db//

  const getSearchedExerise = async (name) => {
    let Response = await fetch(
      "https://exercisedb.p.rapidapi.com/exercises",
      Exerciseoptions
    );
    const exerciseListdata = await Response.json();
    setExercises(exerciseListdata);
    console.log("full array of exercises:", exerciseListdata);
  };

  useEffect(() => {
    getSearchedExerise();
  }, []);

  const Exerciseoptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c0122e8c44msh979a6d1e77700bbp13ce92jsn6336df6b62d3",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const selectEquipmenthandler = (e) => {
    setEquipmentSelection("");
    setEquipmentSelection(e.target.value);
    setEquipmentSelected(true);
    console.log("selectedequipmentis ", equipmentselection);
    console.log("length of equpmentselection", equipmentselection.length);
  };

  useEffect(() => {
    getSearchedExerise();
    const arraysfilter = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(equipmentselection) ||
        exercise.equipment.toLowerCase().includes(equipmentselection) ||
        exercise.bodyPart.toLowerCase().includes(equipmentselection) ||
        exercise.target.toLowerCase().includes(equipmentselection)
    );
    setFilteredExercises(arraysfilter);
    setExercises(arraysfilter);
    console.log("filtered by", equipmentselection, arraysfilter);
  }, [equipmentselection]);

  // reset equpmenyfilter on reset

  const resetequpmentonreset = () => {
    setEquipmentSelection("");
  };

  //resetfilterhandler

  const resetfilterhandler = () => {
    console.log("resetfilterhandler clicked");
    setExercises([]);
    getSearchedExerise();
    resetequpmentonreset();
  };

  // filter from radios selection function //

  // const arraysfilter = exerciseListdata.filter(
  //   (exercise) =>
  //     exercise.name.toLowerCase().includes(equipmentselection) ||
  //     exercise.equipment.toLowerCase().includes(equipmentselection) ||
  //     exercise.bodyPart.toLowerCase().includes(equipmentselection) ||
  //     exercise.target.toLowerCase().includes(equipmentselection)
  // );

  return (
    <Main>
      {exercises.length === 0 && (
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

      <Wrapper>
        <SearchExercise />

        <ExerciseCategory />

        <Description>
          {equipmentselection ? (
            <h3>Equipment Selected: {equipmentselection}</h3>
          ) : (
            <h3> Select equpment or Muscle to start</h3>
          )}
          <Button type="reset" onClick={resetfilterhandler} variant="contained">
            Reset Filter
          </Button>
        </Description>

        <SelectandViewdiv>
          <Selectdiv>
            <RadioGroup
              onChange={selectEquipmenthandler}
              className="Equipment_select"
            >
              <h4> Equipment Select: </h4>
              <FormControlLabel
                value={"assisted"}
                control={<Radio />}
                label="assisted"
              />
              <FormControlLabel
                value={"band"}
                control={<Radio />}
                label="band"
              />

              <FormControlLabel
                value={"body weight"}
                control={<Radio />}
                label="body weight"
              />
              <FormControlLabel
                value={"cable"}
                control={<Radio />}
                label="cable"
              />
              <FormControlLabel
                value={"dumbbell"}
                control={<Radio />}
                label="dumbbell"
              />
              <FormControlLabel
                value={"elliptical"}
                control={<Radio />}
                label="elliptical"
              />

              <FormControlLabel
                value={"hammer "}
                control={<Radio />}
                label="hammer "
              />
              <FormControlLabel
                value={"kettlebell"}
                control={<Radio />}
                label="kettlebell"
              />
              <FormControlLabel
                value={"leverage machine"}
                control={<Radio />}
                label="leverage machine"
              />
              <FormControlLabel
                value={" medicine ball"}
                control={<Radio />}
                label=" medicine ball"
              />
              <FormControlLabel
                value={"ez barbell"}
                control={<Radio />}
                label="ez barbell"
              />
              <FormControlLabel
                value={"olympic barbell "}
                control={<Radio />}
                label="olympic barbell "
              />
              <FormControlLabel
                value={"resistance band"}
                control={<Radio />}
                label="resistance band"
              />
              <FormControlLabel
                value={"roller"}
                control={<Radio />}
                label="roller"
              />

              <FormControlLabel
                value={"smith machine"}
                control={<Radio />}
                label="smith machine"
              />
              <FormControlLabel
                value={"stability ball"}
                control={<Radio />}
                label="stability ball"
              />
              <FormControlLabel
                value={"roller"}
                control={<Radio />}
                label="roller"
              />
              <FormControlLabel
                value={"rope"}
                control={<Radio />}
                label="rope"
              />
            </RadioGroup>

            <FormGroup className="Equipment_select">
              <h1> Muscle</h1>
              <FormControlLabel
                value={"abductors"}
                control={<Radio />}
                label="abductors"
              />
              <FormControlLabel value={"abs"} control={<Radio />} label="abs" />
              <FormControlLabel
                value={"adductors"}
                control={<Radio />}
                label="adductors"
              />
              <FormControlLabel
                value={"biceps"}
                control={<Radio />}
                label="biceps"
              />
              <FormControlLabel
                value={"calves"}
                control={<Radio />}
                label="calves"
              />
              <FormControlLabel
                value={"delts"}
                control={<Radio />}
                label="delts"
              />
              <FormControlLabel
                value={"cardiovascular system"}
                control={<Radio />}
                label="cardiovascular system"
              />
              <FormControlLabel
                value={"forearms"}
                control={<Radio />}
                label="forearms"
              />
              <FormControlLabel
                value={"glutes"}
                control={<Radio />}
                label="glutes "
              />
              <FormControlLabel
                value={"hamstrings"}
                control={<Radio />}
                label="hamstrings"
              />
              <FormControlLabel
                value={"lats"}
                control={<Radio />}
                label="lats"
              />
              <FormControlLabel
                value={"pectorals"}
                control={<Radio />}
                label="pectorals"
              />
              <FormControlLabel
                value={"quads"}
                control={<Radio />}
                label="quads"
              />
              <FormControlLabel
                value={"traps"}
                control={<Radio />}
                label="traps"
              />
              <FormControlLabel
                value={"triceps"}
                control={<Radio />}
                label="triceps"
              />
            </FormGroup>
          </Selectdiv>
          {exercises.length > 0 ? (
            <Grid>
              {currentExercises.map((exercise) => {
                return (
                  <NavLink to={"/exercise/" + exercise.id}>
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
                  </NavLink>
                );
              })}
            </Grid>
          ) : (
            <h2> Select a filter option to start! </h2>
          )}
        </SelectandViewdiv>

        <Stack
          direction="row"
          spacing={2}
          sx={{ gap: { lg: "110px", xs: "50px" } }}
          flexWrap="wrap"
          justifyContent="center"
          paddingTop={7}
          paddingBottom={5}
        >
          {exercises.length > 9 && (
            <Pagination
              variant="outlined"
              color="primary"
              shape="rounded"
              defaultPage={1}
              count={Math.ceil(exercises.length / exercisesPerPage)}
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

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  position: relative;

  h4 {
    color: black;
    font-weight: bold;
  }
`;

const Selectdiv = styled.div`
  width: 180px;
`;

const SelectandViewdiv = styled.div`
  display: flex;
  width: 85%;
  margin-left: 40px;

  @media (min-width: 560px) {
    margin-left: 70px;
  }

  @media (min-width: 900px) {
    margin-left: 80px;
  }
  @media (min-width: 1100px) {
    margin-left: 100px;
  }
`;

const Grid = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;

  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  a {
    text-decoration: none;
  }
`;
const TextWrapper = styled.div`
  text-align: center;
`;

const Card = styled.div`
  margin: 5px;
  min-width: 200px;
  border: 1px solid turquoise;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  img {
    width: 90%;
    border-radius: 2rem;
    @media (max-width: 500px) {
      display: none;
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
  width: 100%;
`;

const Description = styled.div`
  padding: 4px;
  max-width: 80%;
  margin-left: 54px;
  margin-bottom: 20px;
  border: 1px solid turquoise;
  border-radius: 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px, rgba(0, 0, 0, 0.22) 0px 8px 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    284deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(11, 205, 195, 0.9934567577030813) 100%
  );
  @media (min-width: 560px) {
    margin-left: 70px;
  }
`;

export default Fitness;
