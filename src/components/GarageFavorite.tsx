import CartIcon from "@/components/ui/cart-icon";

interface GarageFavoriteProps {
  onAddToCart?: (productId: string, productName: string, price: number, image: string) => void;
}

const GarageFavorite = ({ onAddToCart }: GarageFavoriteProps) => {
  const products = [
    { id: "garage-1", name: "Crash Guard", price: 500, image: "/uploads/3f568aa5-84f0-400d-bcee-50d7f72ac960.png" },
    { id: "garage-2", name: "Saddle Stay", price: 500, image: "/uploads/a1bc180c-1729-4869-9875-7565313c92f5.png" },
    { id: "garage-3", name: "Radiator Guard", price: 500, image: "/uploads/2f72e496-2fd9-4119-9f82-40c335b48e00.png" },
    { id: "garage-4", name: "Saddle Bag", price: 500, image: "/uploads/681f7126-6997-49d7-b7df-cfcbbefcee1f.png" },
    { id: "garage-5", name: "Tank Bag", price: 500, image: "/uploads/c4a8d0de-712f-4e03-9ebd-fc8ca95fd796.png" },
    { id: "garage-6", name: "Aux Light", price: 500, image: "/uploads/2628a268-dabd-479c-8c8a-4aea7d9044f2.png" },
    { id: "garage-7", name: "Light Mount", price: 500, image: "/uploads/4e0cd1d8-aed1-4a03-88d2-f008c9f84ceb.png" },
    { id: "garage-8", name: "Fog Light", price: 500, image: "/uploads/51fb8fe4-8cdd-4935-8adf-f71da854df6e.png" }
  ];

  const handleAddToCart = (index: number) => {
    const product = products[index];
    if (onAddToCart) {
      onAddToCart(product.id, product.name, product.price, product.image);
    } else {
      console.log("Added to cart:", product.name);
    }
  };

  return (
    <div className="py-6 md:py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#181818' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-8">GARAGE Favorite</h2>
        
        {/* Desktop: 5 Column Layout | Mobile: 2 Column Grid */}
        <div className="hidden lg:grid grid-cols-5 gap-2">
          {/* Column 1: 1 Tall Image */}
          <div className="relative group">
            <img 
              src={products[0].image} 
              alt="Product 1" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ minHeight: '360px' }}
            />
            <button
              onClick={() => handleAddToCart(0)}
              className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
            >
              <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-5 h-5 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Column 2: 2 Stacked Images */}
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <img 
                src={products[1].image} 
                alt="Product 2" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(1)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
            <div className="relative group">
              <img 
                src={products[2].image} 
                alt="Product 3" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(2)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Column 3: 1 Tall Image */}
          <div className="relative group">
            <img 
              src={products[3].image} 
              alt="Product 4" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ minHeight: '360px' }}
            />
            <button
              onClick={() => handleAddToCart(3)}
              className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
            >
              <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-5 h-5 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Column 4: 2 Stacked Images */}
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <img 
                src={products[4].image} 
                alt="Product 5" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(4)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
            <div className="relative group">
              <img 
                src={products[5].image} 
                alt="Product 6" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(5)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
          </div>

          {/* Column 5: 2 Stacked Images */}
          <div className="flex flex-col gap-2">
            <div className="relative group">
              <img 
                src={products[6].image} 
                alt="Product 7" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(6)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
            <div className="relative group">
              <img 
                src={products[7].image} 
                alt="Product 8" 
                className="w-full h-[176px] object-cover rounded-lg shadow-lg"
              />
              <button
                onClick={() => handleAddToCart(7)}
                className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Layout: 2 Column Grid */}
        <div className="grid lg:hidden grid-cols-2 gap-2">
          {/* Product 1 - Tall */}
          <div className="relative group row-span-2">
            <img 
              src={products[0].image} 
              alt="Product 1" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ minHeight: '189px' }}
            />
            <button
              onClick={() => handleAddToCart(0)}
              className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
            >
              <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Product 2 */}
          <div className="relative group">
            <img 
              src={products[1].image} 
              alt="Product 2" 
              className="w-full h-[90px] object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={() => handleAddToCart(1)}
              className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
            >
              <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Product 3 */}
          <div className="relative group">
            <img 
              src={products[2].image} 
              alt="Product 3" 
              className="w-full h-[91px] object-cover rounded-lg shadow-lg"
            />
            <button
              onClick={() => handleAddToCart(2)}
              className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
            >
              <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
            </button>
          </div>

          {/* Product 4 - Tall */}
          <div className="relative group row-span-2">
            <img 
              src={products[3].image} 
              alt="Product 4" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ minHeight: '189px' }}
            />
            <button
              onClick={() => handleAddToCart(3)}
              className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
            >
              <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                Add to cart
              </span>
              <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GarageFavorite;