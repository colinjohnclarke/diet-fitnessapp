import React from "react";
import styled from "styled-components";
// import { useState, useEffect } from "react";
import { response } from "express";

function News() {
  //   useEffect(() => {
  //     getNews();
  //   }, [""]);

  //   const getNews = async () => {
  //     const options = {
  //       method: "GET",
  //       headers: {
  //         "X-RapidAPI-Key": "b771f19133msh110a0da829ffdcbp173199jsn9a994ff2278b",
  //         "X-RapidAPI-Host": "newslit-news-search.p.rapidapi.com",
  //       },
  //     };

  //     try {
  //       const response = await fetch(
  //         "https://newslit-news-search.p.rapidapi.com/news?q=bodybuilding",
  //         options
  //       );
  //       const newsdata = await response.json();
  //       console.log(newsdata);
  //     } catch (error) {
  //       throw response;
  //     }
  //   };

  return (
    <Wrapper>
      <h1>News</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 5%;
`;

export default News;
