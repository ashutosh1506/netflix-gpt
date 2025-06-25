import { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addGptMovieResult, setGptLoading } from "../utils/gptSlice";
// import OpenAI from "openai";
const GptSeachBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);
  const [loading, setLoading] = useState(false);
  const [lastCalled, setLastCalled] = useState(0); // Track last request time
  const cooldownTime = 10000; // 10 seconds
  const dispatch = useDispatch();
  // Search Movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleGptSearchClick = async () => {
    const now = Date.now();
    if (loading || now - lastCalled < cooldownTime) {
      alert("Please wait before trying again.");
      return;
    }

    setLastCalled(now);
    setLoading(true);
    dispatch(setGptLoading(true));

    const gptQuery =
      "Act as a Movie recommendation system and suggest some movies for the query: " +
      searchText.current.value +
      ". Only give names of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, PK, Dangal";

    try {
      const gptResults = await openai.chat.completions.create({
        model: "gpt-4.1-mini",
        messages: [{ role: "user", content: gptQuery }],
      });

      const gptMovies = gptResults.choices?.[0]?.message?.content.split(","); // Array of movies

      // for each movie i will search TMDB API
      const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(promiseArray);
      dispatch(
        addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults })
      );
    } catch (error) {
      console.error(error);
      if (error.status === 429) {
        alert("Rate limit hit. Please wait a moment.");
      } else {
        alert("Something went wrong.");
      }
      dispatch(setGptLoading(false));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center ">
      <form
        className="w-full md:w-1/2 bg-black border  shadow-[0_0_10px_2px_rgba(239,68,68,0.7)] grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 w-11/12 text-sm md:p-4 m-4 md:w-auto md:text-lg col-span-9 rounded-lg bg-white"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="px-2 mx-2 py-2 text-sm md:px-4 m-4 col-span-3 bg-red-700 text-white rounded-lg cursor-pointer md:text-xl"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSeachBar;
