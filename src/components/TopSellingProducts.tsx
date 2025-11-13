
import { useNavigate } from "react-router-dom";
import CartIcon from "@/components/ui/cart-icon";

const TopSellingProducts = () => {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Saddle Stay",
      price: "$500",
      image: "/uploads/40252713-24dd-4503-9b4b-969d57798314.png"
    },
    {
      id: 2,
      name: "Paddock Spool", 
      price: "$500",
      image: "/uploads/9232391b-ffc7-4188-b494-0ba0dfe0d46b.png"
    },
    {
      id: 3,
      name: "Radiator Guard",
      price: "$500",
      image: "/uploads/9613b2a1-bae0-412d-b175-3a450db3dae3.png"
    },
    {
      id: 4,
      name: "Top Rack",
      price: "$500",
      image: "/uploads/73d06910-f0be-45fb-933e-2684a216678f.png"
    },
    {
      id: 5,
      name: "Crash Guard",
      price: "$500",
      image: "/uploads/d4bc2fba-7a64-420f-a9d2-239ab5fb2c94.png"
    }
  ];

  const handleAddToCart = (productId: number) => {
    console.log("Added product to cart:", productId);
    navigate("/cart");
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="py-16 px-6" style={{ backgroundColor: '#181818' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-left">TOP SELLING PRODUCTS</h2>
        
        <div className="grid grid-cols-4 gap-6 max-w-6xl mx-auto">
          {/* Left column - 2 products */}
          <div className="space-y-6">
            {products.slice(0, 2).map((product) => (
              <div key={product.id} className="relative rounded-lg overflow-hidden h-64" style={{
                background: 'linear-gradient(180deg, #AF7603 0%, #FFFFFF 100%)'
              }}>
                <div className="p-4 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-32 max-w-full object-contain cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-black font-bold text-sm">{product.name}</h3>
                    <span className="text-black font-bold text-sm">{product.price}</span>
                  </div>
                  <button 
                    className="absolute bottom-4 left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <CartIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Middle column - 1 large product */}
          <div className="col-span-2">
            {products.slice(2, 3).map((product) => (
              <div key={product.id} className="relative rounded-lg overflow-hidden h-[536px]" style={{
                background: 'linear-gradient(180deg, #AF7603 0%, #FFFFFF 100%)'
              }}>
                <div className="p-6 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-4">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-96 max-w-full object-contain cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-black font-bold text-lg">{product.name}</h3>
                    <span className="text-black font-bold text-lg">{product.price}</span>
                  </div>
                  <button 
                    className="absolute bottom-6 left-6 w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <CartIcon className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right column - 2 products */}
          <div className="space-y-6">
            {products.slice(3, 5).map((product) => (
              <div key={product.id} className="relative rounded-lg overflow-hidden h-64" style={{
                background: 'linear-gradient(180deg, #AF7603 0%, #FFFFFF 100%)'
              }}>
                <div className="p-4 h-full flex flex-col">
                  <div className="flex-1 flex items-center justify-center mb-3">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="max-h-32 max-w-full object-contain cursor-pointer"
                      onClick={() => handleProductClick(product.id)}
                    />
                  </div>
                  <div className="flex justify-between items-center">
                    <h3 className="text-black font-bold text-sm">{product.name}</h3>
                    <span className="text-black font-bold text-sm">{product.price}</span>
                  </div>
                  <button 
                    className="absolute bottom-4 left-4 w-8 h-8 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    <CartIcon className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSellingProducts;
