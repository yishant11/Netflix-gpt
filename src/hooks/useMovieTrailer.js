import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/moviesSlice";
const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMoviesVideos = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      
  
      const filterData = json.results.filter((video) => video.type === "Teaser");
      const trailer = filterData.length ? filterData[1] : json.results[0];
      
      dispatch(addTrailerVideo(trailer));
    };
    useEffect(() => {
      getMoviesVideos();
    }, []);
}

export default useMovieTrailer