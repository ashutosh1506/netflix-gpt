import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <MainContainer />
      <Header />
      <div className="relative z-20 pt-[100vh]">
        <SecondaryContainer />
      </div>
    </div>
  );
};

export default Browse;
