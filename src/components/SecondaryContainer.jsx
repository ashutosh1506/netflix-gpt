import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies)
  return (
    <div className=" bg-gray-950 ">
      <div className="mt-0 pt-40 md:-mt-62 md:pt-0 md:pl-6 relative z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming Movies"} movies={movies?.upcomingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;