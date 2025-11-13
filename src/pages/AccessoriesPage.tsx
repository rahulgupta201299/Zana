
import { useState } from "react";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const AccessoriesPage = () => {
  const [isShopByBikeOpen, setIsShopByBikeOpen] = useState(false);
  const [isShopByProductOpen, setIsShopByProductOpen] = useState(false);

  const toggleShopByBike = () => {
    setIsShopByBikeOpen(!isShopByBikeOpen);
    setIsShopByProductOpen(false);
  };

  const toggleShopByProduct = () => {
    setIsShopByProductOpen(!isShopByProductOpen);
    setIsShopByBikeOpen(false);
  };

  const accessories = [
    { name: "Saddle Stay", price: "₹2,999", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Crash Guard", price: "₹3,499", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Top Deck", price: "₹1,899", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Paddock Spool", price: "₹899", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Saddle Stay", price: "₹2,999", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Crash Guard", price: "₹3,499", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Top Deck", price: "₹1,899", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" },
    { name: "Paddock Spool", price: "₹899", image: "/uploads/41d681cc-f97d-4924-a37e-09765c9be629.png" }
  ];

  return (
    <div className="min-h-screen bg-white">
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
      
      {/* Hero Section */}
      <div 
        className="relative h-96 bg-cover bg-center flex items-center"
        style={{ backgroundImage: "url('/uploads/11100999-35b2-48ab-b5e4-d06d7e5a37a7.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h1 className="text-white text-5xl font-bold mb-4">BUILT FOR THE WILD. ENGINEERED FOR YOU.</h1>
          <p className="text-white text-xl mb-6">Ride Safe. Ride Strong. Ride <span className="text-theme font-bold">ZANA</span>.</p>
        </div>
      </div>

      {/* Accessories Section */}
      <div className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-black text-4xl font-bold mb-12">ACCESSORIES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {accessories.slice(0, 4).map((accessory, index) => (
              <div key={index} className="border-4 border-theme rounded-lg overflow-hidden bg-theme">
                <div className="bg-white p-8 h-48 flex items-center justify-center">
                  <img src={accessory.image} alt={accessory.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-bold mb-2">{accessory.name}</h3>
                  <p className="text-sm mb-4">{accessory.price}</p>
                  <Button className="bg-white text-theme font-bold hover:bg-gray-100 rounded-none px-8">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {accessories.slice(4).map((accessory, index) => (
              <div key={index + 4} className="border-4 border-theme rounded-lg overflow-hidden bg-theme">
                <div className="bg-white p-8 h-48 flex items-center justify-center">
                  <img src={accessory.image} alt={accessory.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-bold mb-2">{accessory.name}</h3>
                  <p className="text-sm mb-4">{accessory.price}</p>
                  <Button className="bg-white text-theme font-bold hover:bg-gray-100 rounded-none px-8">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Top Selling Products Section */}
          <div className="mt-16">
            <h2 className="text-black text-4xl font-bold mb-12">TOP-SELLING PRODUCTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {accessories.slice(0, 4).map((product, index) => (
                <div key={index} className="border-4 border-theme rounded-lg overflow-hidden bg-theme">
                  <div className="bg-white p-8 h-48 flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain" />
                  </div>
                  <div className="p-4 text-center text-white">
                    <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                    <p className="text-sm mb-4">{product.price}</p>
                    <Button className="bg-white text-theme font-bold hover:bg-gray-100 rounded-none px-8">
                      SHOP NOW
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              <div className="border-4 border-theme rounded-lg overflow-hidden bg-theme max-w-xs">
                <div className="bg-white p-8 h-48 flex items-center justify-center">
                  <img src={accessories[0].image} alt={accessories[0].name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-4 text-center text-white">
                  <h3 className="text-lg font-bold mb-2">{accessories[0].name}</h3>
                  <p className="text-sm mb-4">{accessories[0].price}</p>
                  <Button className="bg-white text-theme font-bold hover:bg-gray-100 rounded-none px-8">
                    SHOP NOW
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AccessoriesPage;
