const Shimmer = () => {
  return (
    <div className="px-6 md:px-12">
      {/* Movie section title shimmer */}
      <div className="h-8 w-64 bg-gray-700 rounded-md mb-4 animate-pulse"></div>

      {/* Movie cards container */}
      <div className="flex overflow-x-scroll">
        {/* Generate 5 shimmer cards */}
        {Array(5)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="w-36 md:w-48 h-56 md:h-72 mr-4 bg-gray-800 rounded-md animate-pulse flex-shrink-0"
            ></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
