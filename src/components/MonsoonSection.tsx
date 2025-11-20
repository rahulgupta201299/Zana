
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const MonsoonSection = () => {
  const products = [
    {
      name: "Tank Bag",
      price: "$500",
      image: "/uploads/681f7126-6997-49d7-b7df-cfcbbefcee1f.png"
    },
    {
      name: "Fog Light Mounts",
      price: "$500",
      image: "/uploads/c4a8d0de-712f-4e03-9ebd-fc8ca95fd796.png"
    },
    {
      name: "Saddle Bag",
      price: "$500",
      image: "/uploads/2628a268-dabd-479c-8c8a-4aea7d9044f2.png"
    },
    {
      name: "Brake Oil Reservoir",
      price: "$500",
      image: "/uploads/4e0cd1d8-aed1-4a03-88d2-f008c9f84ceb.png"
    }
  ];

  // Create 10 cards by repeating the products
  const allProducts = [];
  for (let i = 0; i < 10; i++) {
    allProducts.push({
      ...products[i % products.length],
      id: i
    });
  }

  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product);
    // Add cart functionality here
  };

  return (
    <div className="py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">GEAR UP FOR THE MONSOON THRILL</h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {allProducts.map((product, index) => (
            <div key={index} className="flex-shrink-0 w-64 rounded-2xl overflow-hidden border-4 border-[#AF7603]">
              <div 
                className="relative"
                style={{
                  background: 'linear-gradient(to bottom, #AF7603, white)'
                }}
              >
                <div className="pt-[18px] px-[18px] pb-8">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-contain"
                  />
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute bottom-4 left-4 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                >
                  <img 
                    src="/uploads/4953bcf2-4dec-4822-bfba-5b8eb684524a.png" 
                    alt="Add to cart" 
                    className="w-4 h-4 filter invert"
                  />
                </button>
              </div>
              <div className="p-4 bg-white">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-black">{product.name}</h3>
                  <span className="text-lg font-bold text-black">{product.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MonsoonSection;
