const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen -mt-30 pt-[40%] md:pt-[25%] px-6 md:px-12 absolute text-white top-0 left-0">
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">{title}</h1>
      <p className="py-4 md:py-6 text-sm md:text-lg w-full md:w-2/3 lg:w-1/2 xl:w-1/3 line-clamp-3 md:line-clamp-none">
        {overview}
      </p>

      <div className="flex gap-2 mt-2">
        <button className="bg-white text-black py-1 px-4 md:p-2 cursor-pointer md:px-12 rounded-lg text-sm md:text-xl hover:bg-white/80 flex items-center">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            ></path>
          </svg>
          Play
        </button>
        <button className="bg-gray-500/70 text-white py-1 px-4 cursor-pointer md:p-2 md:px-12 rounded-lg text-sm md:text-xl hover:bg-gray-500/50 flex items-center">
          <svg
            className="w-4 h-4 md:w-6 md:h-6 mr-1 "
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
            <path
              fillRule="evenodd"
              d="M11 4a1 1 0 10-2 0v1H5a1 1 0 00-1 1v10a1 1 0 001 1h10a1 1 0 001-1V6a1 1 0 00-1-1h-4V4z"
              clipRule="evenodd"
            ></path>
          </svg>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
