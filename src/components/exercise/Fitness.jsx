import React from "react";
import { useState, useEffect } from "react";
import SearchExercise from "./SearchExercise";
import styled from "styled-components";
import ExerciseCategory from "../../exericsecompoents/ExerciseCategory";
import Radio from "@mui/material/Radio";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import RadioGroup from "@mui/material/RadioGroup";

function Fitness() {
  const [equipmentselection, setEquipmentSelection] = useState("");
  const [exercises, setExercises] = useState([]);
  const [filteredexercises, setFilteredExercises] = useState([]);

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
      "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };

  const selectEquipmenthandler = (e) => {
    setEquipmentSelection(e.target.value);
    console.log("selectedequipmentis ", equipmentselection);
  };

  useEffect(() => {
    const arraysfilter = exercises.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(equipmentselection) ||
        exercise.equipment.toLowerCase().includes(equipmentselection) ||
        exercise.bodyPart.toLowerCase().includes(equipmentselection) ||
        exercise.target.toLowerCase().includes(equipmentselection)
    );
    setFilteredExercises(arraysfilter);
    console.log("filtered by", equipmentselection, arraysfilter);
  }, [equipmentselection]);

  // filter from radios selection function //

  // const arraysfilter = exerciseListdata.filter(
  //   (exercise) =>
  //     exercise.name.toLowerCase().includes(equipmentselection) ||
  //     exercise.equipment.toLowerCase().includes(equipmentselection) ||
  //     exercise.bodyPart.toLowerCase().includes(equipmentselection) ||
  //     exercise.target.toLowerCase().includes(equipmentselection)
  // );

  return (
    <Wrapper>
      <h1> Selected eqipment is: {equipmentselection}</h1>
      <div>Fitness</div>
      <SearchExercise />
      <ExerciseCategory />

      <SelectandViewdiv>
        <Selectdiv>
          <RadioGroup
            onChange={selectEquipmenthandler}
            className="Equipment_select"
          >
            <h1> Equipment</h1>
            <FormControlLabel
              value={"assisted"}
              control={<Radio />}
              label="assisted"
            />
            <FormControlLabel value={"band"} control={<Radio />} label="band" />

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
            <FormControlLabel value={"rope"} control={<Radio />} label="rope" />
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
            <FormControlLabel value={"lats"} control={<Radio />} label="lats" />
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

        <Grid>
          {!exercises ? (
            <h1> Select equipment or muscle group</h1>
          ) : (
            filteredexercises.map((exercise) => {
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
            })
          )}
        </Grid>
      </SelectandViewdiv>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 10%;
`;

const Selectdiv = styled.div`
  width: 180px;
`;

const SelectandViewdiv = styled.div`
  display: flex;
  width: 100%;
`;

const Grid = styled.div`
  width: 100%;
  display: flex;
  flexwrap: wrap;
  border: 1px solid;
  flex-direction: column;
`;
const TextWrapper = styled.div`
  border-radius: 1rem;
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
  background-color: 
  border-radius: 1rem;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;

  img {
    width: 90%;
    border-radius: 1rem;
    
   
  }

  a {
    text-direction: none;
  }
  h4 {
    color: black;
    
    font-size: 16px;
  }
`;

export default Fitness;
