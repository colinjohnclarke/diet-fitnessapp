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
  width: 70%;
  min-width: 150px;
  min-width: 70%;
  min-height: 30px;
  max-height: 40px;
  height: 5%;
  border: none;
  border-radius: 2rem;
  position: relative;
  top: 20%;
  left: 15%;
  background: white;
  //   backdrop-filter: blur(10px);

  input {
    background: white;
    border-radius: 2rem;
    font-family: "Bebas Neue", cursive;
    font-size: 1.5rem;
    padding: 2%;
    height: 10%;
    width: 90%;
    min-width: 70%;
    min-height: 40px;
    max-height: 30px;
    border: none;
    border-box: none;
    border-radius: 1rem;
    text-align: left;
    position: relative;
    left: 12%;
    top: 10%;
    transition: all 0.2s ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export default Search;
