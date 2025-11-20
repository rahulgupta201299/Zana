import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const navigate = useNavigate();

  const trendingSearches = [
    "Saddle Stay",
    "Top Rack",
    "Crash Guard",
    "Radiator Guard"
  ];

  const handleSearchClick = (searchTerm: string) => {
    console.log("Searching for:", searchTerm);
    navigate("/bike-accessories");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Search Content */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-16">
        {/* Search Title */}
        <h1 className="text-white text-2xl md:text-4xl font-bold mb-6 md:mb-12">Search</h1>

        {/* Trending Search Section */}
        <div>
          <h2 className="text-white text-xl md:text-2xl font-bold mb-4 md:mb-8">TRENDING SEARCH</h2>
          
          {/* Search Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl">
            {trendingSearches.map((term, index) => (
              <button
                key={index}
                onClick={() => handleSearchClick(term)}
                className="relative bg-transparent border-2 border-white text-white px-4 py-3 md:px-6 md:py-4 rounded-lg text-sm md:text-lg font-medium hover:bg-white hover:text-black transition-colors duration-300 text-left"
              >
                {term}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;

