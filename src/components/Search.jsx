import React from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState([]);

  let navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    navigate("/searched/" + input);
  }

  return (
    <FormStyle onSubmit={submitHandler}>
      <AiOutlineSearch className="recipiesearchsvg" />
      <input
        placeholder="Search recipies"
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
  width: 20%;
  min-width: 130px;
  min-width: 70%;
  min-height: 10px;
  max-height: 25px;
  border-radius: 0.5rem;
  position: relative;
  top: 20%;
  padding: 5%;

  input {
    background: white;
    border-radius: 0.5rem;
    font-family: "Abel", sans-serif;
    font-size: 1rem;
    padding: 2%;
    width: 97%;
    max-width: 800px;
    min-height: 10px;
    max-height: 25px;
    text-align: left;
    position: relative;
    left: 10%;
    top: 15%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 10px 10px,
      rgba(0, 0, 0, 0.22) 0px 8px 10px;
    border: 1px solid turquoise;
  }
`;

export default Search;
