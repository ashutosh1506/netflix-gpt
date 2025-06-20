import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/contants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
  // fetch trailer video and updating the store with trailer video data
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const trailer = json.results.filter(
      (video) => video.name === "Official Trailer"
    );
    if (!trailer) trailer = json.results[0];
    dispatch(addTrailerVideo(trailer[0]));
  };
  useEffect(() => {
    getMovieVideos();
  }, []);
};

export default useMovieTrailer;
