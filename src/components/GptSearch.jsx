import { BG_URL } from "../utils/contants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSeachBar from "./GptSeachBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:w-screen object-cover" src={BG_URL} alt="bg-image" />
      </div>
      <div className="">
        <GptSeachBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GptSearch;
