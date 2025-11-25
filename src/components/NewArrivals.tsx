;
import { PlusIcon } from "lucide-react";

interface NewArrivalsProps {
  onAddToCart?: (productId: string, productName: string, price: number, image: string, description?: string) => void;
}

const NewArrivals = ({ onAddToCart }: NewArrivalsProps) => {
  
  const products = [
    {
      id: "new-arrival-1",
      name: "Triumph Bike with Accessories",
      price: 500,
      image: "/uploads/565e17f1-53ab-4367-aa31-3448ba30c50b.png",
      alt: "Triumph Bike with Accessories"
    },
    {
      id: "new-arrival-2",
      name: "Luggage Rack Platform",
      price: 500,
      image: "/uploads/541e4934-ac81-4da2-92fa-97c949bc6340.png",
      alt: "Luggage Rack Platform"
    },
    {
      id: "new-arrival-3",
      name: "Windscreen Fairing",
      price: 500,
      image: "/uploads/d60b6a26-30f5-4662-8b62-2d7161398039.png",
      alt: "Windscreen Fairing"
    },
    {
      id: "new-arrival-4",
      name: "Blue Bike Part",
      price: 500,
      image: "/uploads/343f7510-7c35-4261-a6a3-30857f9b05cf.png", 
      alt: "Blue Bike Part"
    },
    {
      id: "new-arrival-5",
      name: "Bike Stand",
      price: 500,
      image: "/uploads/9f936388-954a-4ece-b203-e73a59d3af67.png",
      alt: "Bike Stand"
    },
    {
      id: "new-arrival-6",
      name: "LED Headlight",
      price: 500,
      image: "/uploads/bca53fd6-ffc1-4498-ac6c-3162dd7221fe.png",
      alt: "LED Headlight"
    }
  ];

  const handleAddToCart = (index: number) => {
    const product = products[index];
    if (onAddToCart) {
      onAddToCart(product.id, product.name, product.price, product.image, product.alt);
    } else {
      console.log("Added to cart:", product.name);
    }
  };

  return (
    <div className="py-8 md:py-16" style={{ backgroundColor: '#181818' }}>
      <div className="px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-5xl font-black text-white mb-1 md:mb-2">NEW ARRIVALS</h2>
          <p className="text-gray-300 text-xs md:text-lg">Fresh Drops for Fierce Rides.</p>
        </div>

        {/* Desktop Products Grid - 3 Columns with 2 images each */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <div className="flex gap-2">
            {/* Column 1: Wider column with 2 images */}
            <div className="flex-[1.5] flex flex-col gap-2">
              {/* Top Image */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[0].image}
                  alt={products[0].alt}
                  className="w-full h-[295px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(0)}
                  className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
                >
                  <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
                </button>
              </div>

              {/* Bottom Image */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[1].image}
                  alt={products[1].alt}
                  className="w-full h-[295px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(1)}
                  className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
                >
                  <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* Column 2: Small top, Large bottom */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Top Small */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[2].image}
                  alt={products[2].alt}
                  className="w-full h-[190px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(2)}
                  className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
                >
                  <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
                </button>
              </div>

              {/* Bottom Large */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[3].image}
                  alt={products[3].alt}
                  className="w-full h-[402px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(3)}
                  className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
                >
                  <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
                </button>
              </div>
            </div>

            {/* Column 3: Large top, Small bottom */}
            <div className="flex-1 flex flex-col gap-2">
              {/* Top Large */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[4].image}
                  alt={products[4].alt}
                  className="w-full h-[402px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(4)}
                  className="absolute bottom-3 left-3 h-10 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-10 hover:w-auto hover:px-4 hover:justify-start group"
                >
                  <span className="whitespace-nowrap font-semibold text-black text-base opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-2 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
                </button>
              </div>

              {/* Bottom Small */}
              <div className="relative group cursor-pointer">
                <img
                  src={products[5].image}
                  alt={products[5].alt}
                  className="w-full h-[190px] object-cover rounded-lg"
                />
                <button
                  onClick={() => handleAddToCart(5)}
                  className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
                >
                  <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                    Add to cart
                  </span>
                  <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Products Grid - 2 Columns */}
        <div className="md:hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {/* Product 1 - Wider */}
            <div className="relative group cursor-pointer col-span-2">
              <img
                src={products[0].image}
                alt={products[0].alt}
                className="w-full h-[87px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(products[0].id)}
                className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>

            {/* Product 2 */}
            <div className="relative group cursor-pointer">
              <img
                src={products[1].image}
                alt={products[1].alt}
                className="w-full h-[86px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(products[1].id)}
                className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>

            {/* Product 3 */}
            <div className="relative group cursor-pointer">
              <img
                src={products[2].image}
                alt={products[2].alt}
                className="w-full h-[43px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(2)}
                className="absolute bottom-1 left-1 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-6 hover:w-auto hover:px-2 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-3 h-3 text-black flex-shrink-0" />
              </button>
            </div>

            {/* Product 4 */}
            <div className="relative group cursor-pointer">
              <img
                src={products[3].image}
                alt={products[3].alt}
                className="w-full h-[99px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(3)}
                className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>

            {/* Product 5 */}
            <div className="relative group cursor-pointer">
              <img
                src={products[4].image}
                alt={products[4].alt}
                className="w-full h-[99px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(4)}
                className="absolute bottom-2 left-2 h-8 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-8 hover:w-auto hover:px-3 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
              </button>
            </div>

            {/* Product 6 */}
            <div className="relative group cursor-pointer">
              <img
                src={products[5].image}
                alt={products[5].alt}
                className="w-full h-[55px] object-cover rounded-lg"
              />
              <button
                onClick={() => handleAddToCart(5)}
                className="absolute bottom-1 left-1 h-6 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-6 hover:w-auto hover:px-2 hover:justify-start group"
              >
                <span className="whitespace-nowrap text-xs font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1 transition-all duration-300">
                  Add to cart
                </span>
                <PlusIcon className="w-3 h-3 text-black flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;