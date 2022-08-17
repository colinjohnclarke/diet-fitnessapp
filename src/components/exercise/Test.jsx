import React from "react";
import styled from "styled-components";

import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function Test() {
  return (
    <FormStyle>
      <Button
        className="search-btn"
        sx={{
          backgroundColor: "red",
          color: "#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          fontSize: { lg: "20px", xs: "12px" },
          height: "56px",
          position: "absolute",
        }}
      >
        Search
      </Button>
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
`;

export default Test;
