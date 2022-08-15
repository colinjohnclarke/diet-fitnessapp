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
      <AiOutlineSearch className="searchsvg" />
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
  width: 60%;
  min-width: 130px;
  min-width: 70%;
  min-height: 20px;
  max-height: 40px;
  border-radius: 0.5rem;
  position: relative;
  top: 20;
  left: 15%;
  backdrop-filter: blur(10px);

  input {
    background: white;
    border-radius: 0.5rem;
    font-family: "Abel", sans-serif;
    font-size: 1rem;
    padding: 2%;
    height: 5%;
    width: 90%;
    min-height: 30px;
    max-height: 30px;
    text-align: left;
    position: relative;
    left: 12%;
    top: 15%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default Search;
