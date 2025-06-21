import { IMG_CDN_URL } from "../utils/contants";

const MovieCard = ({posterPath}) => {
  return (
    <div className="w-48 pr-4 ">
      <img className="rounded-md" src={IMG_CDN_URL + posterPath} alt="Movie Card" />
    </div>
  );
};

export default MovieCard;