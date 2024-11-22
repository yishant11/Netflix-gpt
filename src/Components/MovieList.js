import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6 bg-black">
      <h1 className="text-3xl py-4 font-bold text-white">{title}</h1>
      <div style={{ scrollbarWidth: "none"}} className="flex overflow-x-auto  space-x-4 no-scrollbar">
        <div className="flex">
          {movies && movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available</p> // This line provides feedback if no movies are found
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
