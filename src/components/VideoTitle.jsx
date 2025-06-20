const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>

      <div className="flex gap-2">
        <button className="bg-white text-black p-2 rounded-lg px-12 text-xl  cursor-pointer hover:opacity-80">
          Play
        </button>
        <button className="bg-gray-500 bg-opacity-500 text-white p-2 rounded-lg px-12 text-xl cursor-pointer hover:bg-gray-600">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;