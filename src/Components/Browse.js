import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useHorrorMovies from "../hooks/useHorrorMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) =>store.gpt.showGptSearch)
  useNowPlayingMovies();
  usePopularMovies();
  useHorrorMovies();
  
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch/>
      ) : (
        <>
          <MainContainer/>
          <SecondaryContainer/>
        </>
      )}
    </div>
  );
};

export default Browse;
