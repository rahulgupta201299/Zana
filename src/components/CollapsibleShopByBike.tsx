import { Link } from "react-router-dom";
import { bikes, brands, getBikesByBrand } from "@/data/bikes";

interface CollapsibleShopByBikeProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollapsibleShopByBike = ({ isOpen, onClose }: CollapsibleShopByBikeProps) => {
  const bikeImages = [
    {
      image: "/uploads/c1f33cf7-3f69-43ca-8a8b-0aa8b2e842d2.png",
      logo: "/uploads/c2bb4371-218b-461f-ac66-81bae820d6cf.png",
      text: "650CC"
    },
    {
      image: "/uploads/43f916ad-77fe-4071-97d1-1a7f979e51bb.png", 
      logo: "/uploads/cbe5100d-8646-410c-a1d8-0dc27142311a.png",
      text: "650CC+"
    }
  ];

  if (!isOpen) return null;

  // Split brands into two columns
  const midpoint = Math.ceil(brands.length / 2);
  const firstColumn = brands.slice(0, midpoint);
  const secondColumn = brands.slice(midpoint);

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Collapsible Section */}
      <div className="fixed top-0 left-0 right-0 z-50 w-full text-white rounded-bl-3xl rounded-br-3xl"
           style={{ top: '160px', backgroundColor: '#181818' }}>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Side - Brand List */}
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                {firstColumn.map((brand) => {
                  const brandBikes = getBikesByBrand(brand);
                  return (
                    <div key={brand} className="space-y-2">
                      <Link
                        to="/bikes"
                        className="flex items-center text-white hover:text-theme transition-colors cursor-pointer font-bold"
                        onClick={onClose}
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {brand}
                      </Link>
                      {/* Show bike models under each brand */}
                      <div className="ml-5 space-y-1">
                        {brandBikes.map((bike) => (
                          <Link
                            key={bike.id}
                            to={`/bike/${bike.id}`}
                            className="block text-white/70 hover:text-theme text-sm transition-colors"
                            onClick={onClose}
                          >
                            {bike.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-4">
                {secondColumn.map((brand) => {
                  const brandBikes = getBikesByBrand(brand);
                  return (
                    <div key={brand} className="space-y-2">
                      <Link
                        to="/bikes"
                        className="flex items-center text-white hover:text-theme transition-colors cursor-pointer font-bold"
                        onClick={onClose}
                      >
                        <span className="w-2 h-2 bg-white rounded-full mr-3"></span>
                        {brand}
                      </Link>
                      {/* Show bike models under each brand */}
                      <div className="ml-5 space-y-1">
                        {brandBikes.map((bike) => (
                          <Link
                            key={bike.id}
                            to={`/bike/${bike.id}`}
                            className="block text-white/70 hover:text-theme text-sm transition-colors"
                            onClick={onClose}
                          >
                            {bike.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Side - Bike Images */}
            <div className="col-span-2 flex justify-center lg:justify-end space-x-6">
              {bikeImages.map((bike, index) => (
                <div key={index} className="relative">
                  <div className="relative w-96 h-72">
                    <img 
                      src={bike.image} 
                      alt={`Bike ${bike.text}`}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    {/* Logo overlay - top left */}
                    <img 
                      src={bike.logo}
                      alt="Zana Logo"
                      className="absolute top-2 left-2 w-8 h-8 object-contain"
                    />
                    {/* Text overlay - bottom center */}
                    <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
                      <p className="text-white font-bold text-lg shadow-lg">{bike.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CollapsibleShopByBike;