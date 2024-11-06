import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className=" bg-black">
      <div className="-mt-52 pl-12 relative z-20">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"UpComing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Top-Rated"} movies={movies.horrorMovies} />
        <MovieList title={"Popular"} movies={movies.popularMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
