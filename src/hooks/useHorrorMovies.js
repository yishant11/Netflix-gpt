





import { API_OPTIONS } from '../utils/constant';
import { useDispatch } from 'react-redux';
import{ addNowPlayingMovies, addHorrorMovies } from "../utils/moviesSlice";
import { useEffect } from 'react';


const useHorrorMovies = () => {
    //fetch data from TMDB APIs and update store
    const dispatch=useDispatch();
    const getHorrorMovies = async () => {
    const data = await fetch (
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
       API_OPTIONS
      );
      const json=await data.json();
      dispatch(addHorrorMovies(json.results));
   }
  useEffect(() => {
    getHorrorMovies();
  },[]);

};

export default useHorrorMovies;