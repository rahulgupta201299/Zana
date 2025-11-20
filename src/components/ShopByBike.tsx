import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ShopByBike = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const brands = [
    { name: "BMW", image: "/uploads/20709197-5c83-4c84-8889-91302137d4b6.png" },
    { name: "ROYAL ENFIELD", image: "/uploads/83ba68f0-f2ca-4ee6-a076-4689e0ac48a9.png" },
    // { name: "BSA", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "HONDA", image: "/uploads/20709197-5c83-4c84-8889-91302137d4b6.png" },
    { name: "YAMAHA", image: "/uploads/83ba68f0-f2ca-4ee6-a076-4689e0ac48a9.png" },
    // { name: "DUCATI", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "HARLEY", image: "/uploads/20709197-5c83-4c84-8889-91302137d4b6.png" },
    { name: "SUZUKI", image: "/uploads/83ba68f0-f2ca-4ee6-a076-4689e0ac48a9.png" }
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? brands.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === brands.length - 1 ? 0 : prev + 1));
  };

  const handleBikeClick = () => {
    navigate('/bikes', { state: { selectedBike: brands[currentIndex] } });
  };

  const getPrevIndex = () => (currentIndex === 0 ? brands.length - 1 : currentIndex - 1);
  const getNextIndex = () => (currentIndex === brands.length - 1 ? 0 : currentIndex + 1);

  return (
    <div className="py-6 md:py-12 px-4 md:px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-4xl font-black text-black mb-6 md:mb-12 text-center">SHOP THE BIKE</h2>
        
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 md:left-16 z-10 cursor-pointer"
          >
            <ChevronLeft className="h-8 w-4 md:h-14 md:w-7 text-black stroke-[3]" />
          </button>
          
          {/* Bikes Container */}
          <div className="relative flex items-center justify-center w-full max-w-[1252px] h-[180px] md:h-[320px]">
            {/* Left Side Bike (Faded) - Hidden on mobile */}
            <div className="hidden md:block absolute left-0 w-[313px] h-[183px] opacity-40 cursor-pointer">
              <img 
                src={brands[getPrevIndex()].image}
                alt={brands[getPrevIndex()].name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>

            {/* Center Bike (Main) */}
            <div 
              className="relative w-[240px] h-[150px] md:w-[360px] md:h-[230px] cursor-pointer z-10"
              onClick={handleBikeClick}
            >
              <img 
                src={brands[currentIndex].image}
                alt={brands[currentIndex].name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Right Side Bike (Faded) - Hidden on mobile */}
            <div className="hidden md:block absolute right-0 w-[313px] h-[183px] opacity-40 cursor-pointer">
              <img 
                src={brands[getNextIndex()].image}
                alt={brands[getNextIndex()].name}
                className="w-full h-full object-cover opacity-70"
              />
            </div>
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 md:right-16 z-10 cursor-pointer"
          >
            <ChevronRight className="h-8 w-4 md:h-14 md:w-7 text-black stroke-[3]" />
          </button>
        </div>

        {/* Bike Name */}
        <div className="text-center mt-4 md:mt-8">
          <h3 className="text-xl md:text-[32px] font-black text-black">{brands[currentIndex].name}</h3>
        </div>

        {/* Progress Indicator (Mobile Only) */}
        <div className="flex md:hidden justify-center gap-2 mt-4">
          {brands.map((_, index) => (
            <div 
              key={index}
              className={`h-0.5 transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-black' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByBike;