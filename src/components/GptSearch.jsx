import { BG_URL } from "../utils/contants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSeachBar from "./GptSeachBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src= {BG_URL}
          alt="bg-image"
        />
      </div>
      <GptSeachBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
