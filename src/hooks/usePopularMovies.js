

import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import{ addNowPlayingMovies, addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from 'react';


const usePopularMovies = () => {
    //fetch data from TMDB APIs and update store
    const dispatch=useDispatch();
    const getPopularMovies = async () => {
    const data = await fetch (
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
       API_OPTIONS
      );
      const json=await data.json();
      dispatch(addPopularMovies(json.results));
   }
  useEffect(() => {
    getPopularMovies();
  },[]);

};

export default usePopularMovies;