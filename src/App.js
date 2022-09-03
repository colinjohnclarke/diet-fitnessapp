import React from "react";
import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03fcf8",
    },
  },
  typography: {
    fontFamily: "Kanit",
  },
});

// require("dotenv").config();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Sidebar />
        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
