import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-48 h-72 pt-4 ml-3 mr-3 transform transition-transform duration-300 hover:scale-110">
      <img
        className="rounded-md h-60 w-48 "
        src={IMG_CDN_URL + posterPath}
        alt="Movie Card"
      />
    </div>
  );
};

export default MovieCard;
