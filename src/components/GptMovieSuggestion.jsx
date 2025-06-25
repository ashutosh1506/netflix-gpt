import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import Shimmer from "./Shimmer";

const GptMovieSuggestion = () => {
  const { movieResults, movieNames, isLoading } = useSelector((store) => store.gpt);

  // If loading, show shimmer UI
  if (isLoading) {
    return (
      <div className="md:p-4 md:mt-4 bg-black/90 text-white">
        <div className="mt-8">
          {/* Show multiple shimmer sections to represent multiple movie suggestions */}
          <Shimmer />
          <div className="mt-8">
            <Shimmer />
          </div>
        </div>
      </div>
    );
  }

  // If no results and not loading, show nothing
  if (!movieNames) return null;

  return (
    <div className="md:p-4 md:mt-4 bg-black/90 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
