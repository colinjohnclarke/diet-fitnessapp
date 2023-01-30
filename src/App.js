import React from "react";
import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Logo from "./components/GetMassivelogo";
import { useSelector } from "react-redux";
import { selectUser } from "./components/features/Userslice";
import { useState } from "react";
import { FavouriteRecipieProvider } from "./components/FavouriteRecipiecontext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#03fcf8",
    },
  },
  typography: {
    fontFamily: "Didact Gothic",
  },
});

function App() {
  let user = useSelector(selectUser);
  let userval = user.value;

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Logo />

        {userval && <Sidebar />}

        <Pages />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
