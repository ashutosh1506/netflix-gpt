import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestion = () => {
  const  {movieResults, movieNames}  = useSelector((store) => store.gpt)
  
  if(!movieNames) return null;

  return (
    <div className="md:p-4 md:mt-4  bg-black/90 text-white">
      <div>
        {movieNames.map((movieName, index) => (
          <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
