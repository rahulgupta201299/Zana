import { Link } from "react-router-dom";

interface CollapsibleShopByProductProps {
  isOpen: boolean;
  onClose: () => void;
}

const CollapsibleShopByProduct = ({ isOpen, onClose }: CollapsibleShopByProductProps) => {
  const productCategories = [
    { icon: "🏍️", name: "BIKE PROTECTION" },
    { icon: "🎒", name: "LUGGAGE SOLUTION" },
    { icon: "💡", name: "LIGHTS" },
    { icon: "🪑", name: "COMFORT" },
    { icon: "🛠️", name: "RIDING ACCESSORIES" }
  ];

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
            {/* Left Side - Product Categories */}
            <div className="space-y-6">
              {productCategories.map((category, index) => (
                <Link
                  key={index}
                  to="/product-catalog"
                  className="flex items-center text-white hover:text-theme transition-colors cursor-pointer"
                  onClick={onClose}
                >
                  <span className="text-2xl mr-4">{category.icon}</span>
                  <span className="text-lg font-medium">{category.name}</span>
                </Link>
              ))}
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

export default CollapsibleShopByProduct;