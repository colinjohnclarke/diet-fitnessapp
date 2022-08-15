import React from "react";
import "./App.css";
import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import Sidebar from "./components/Sidebar";
// require("dotenv").config();

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Pages />
    </BrowserRouter>
  );
}

export default App;
