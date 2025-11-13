
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";
import { bikes, brands } from "@/data/bikes";

const BikesPage = () => {
  const navigate = useNavigate();
  const [isShopByBikeOpen, setIsShopByBikeOpen] = useState(false);
  const [isShopByProductOpen, setIsShopByProductOpen] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<string>("All");

  const toggleShopByBike = () => {
    setIsShopByBikeOpen(!isShopByBikeOpen);
    setIsShopByProductOpen(false);
  };

  const toggleShopByProduct = () => {
    setIsShopByProductOpen(!isShopByProductOpen);
    setIsShopByBikeOpen(false);
  };

  // Filter bikes by selected brand
  const filteredBikes = selectedBrand === "All" 
    ? bikes 
    : bikes.filter(bike => bike.brand === selectedBrand);

  const handleBikeClick = (bikeId: string) => {
    navigate(`/bike/${bikeId}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
      <Header 
        isShopByBikeOpen={isShopByBikeOpen}
        onToggleShopByBike={toggleShopByBike}
        isShopByProductOpen={isShopByProductOpen}
        onToggleShopByProduct={toggleShopByProduct}
      />
      <CollapsibleShopByBike 
        isOpen={isShopByBikeOpen}
        onClose={() => setIsShopByBikeOpen(false)}
      />
      <CollapsibleShopByProduct 
        isOpen={isShopByProductOpen}
        onClose={() => setIsShopByProductOpen(false)}
      />
      
      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">BIKES</h1>
            <p className="text-white/70 text-sm md:text-base">
              Explore our range of {bikes.length} bike models from {brands.length} premium brands
            </p>
          </div>

          {/* Brand Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedBrand("All")}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                selectedBrand === "All"
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Brands ({bikes.length})
            </button>
            {brands.map((brand) => {
              const count = bikes.filter(b => b.brand === brand).length;
              return (
                <button
                  key={brand}
                  onClick={() => setSelectedBrand(brand)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                    selectedBrand === brand
                      ? "bg-yellow-400 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {brand} ({count})
                </button>
              );
            })}
          </div>
          
          {/* Bikes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBikes.map((bike) => (
              <div 
                key={bike.id} 
                onClick={() => handleBikeClick(bike.id)}
                className="border-2 border-yellow-400 rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-400/20"
              >
                {/* Image Section */}
                <div className="bg-white p-6 md:p-8 h-48 md:h-64 flex items-center justify-center">
                  <img 
                    src={bike.image} 
                    alt={bike.fullName} 
                    className="max-h-full max-w-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = '/bike-placeholder.svg';
                    }}
                  />
                </div>
                
                {/* Info Section */}
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 text-black p-4 md:p-6">
                  <div className="mb-2">
                    <span className="text-xs md:text-sm font-medium opacity-80">
                      {bike.brand}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold mb-2">
                    {bike.name}
                  </h3>
                  <p className="text-xs md:text-sm opacity-75 mb-3">
                    {bike.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs md:text-sm font-medium px-3 py-1 bg-black/10 rounded-full">
                      {bike.category}
                    </span>
                    <span className="text-xs md:text-sm font-bold">
                      View Products →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBikes.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg">
                No bikes found for {selectedBrand}
              </p>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BikesPage;
