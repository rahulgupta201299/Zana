import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");

  // Product data with local images
  const product = {
    name: "Mobile Holder",
    description: "Built for riders who demand durability, space, and effortless functionality whether you're on daily commutes or extreme off-road trails.",
    price: 500,
    images: [
      "/uploads/565e17f1-53ab-4367-aa31-3448ba30c50b.png",
      "/uploads/d60b6a26-30f5-4662-8b62-2d7161398039.png",
      "/uploads/565e17f1-53ab-4367-aa31-3448ba30c50b.png",
      "/uploads/d60b6a26-30f5-4662-8b62-2d7161398039.png"
    ]
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev > 0 ? prev - 1 : product.images.length - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev < product.images.length - 1 ? prev + 1 : 0));
  };

  const handleAddToCart = () => {
    console.log("Added to cart:", quantity);
  };

  const handleBuyNow = () => {
    console.log("Buy now:", quantity);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
      
      {/* Product Section */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-6 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          {/* Left - Thumbnail Images - Hidden on mobile */}
          <div className="hidden lg:flex lg:col-span-1 flex-col items-center space-y-4">
            {/* Up Arrow */}
            <button
              onClick={handlePrevImage}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ChevronUp className="w-6 h-6" />
            </button>

            {/* Thumbnails */}
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-full aspect-square bg-gradient-to-b from-[#7b7575] to-white rounded-lg overflow-hidden ${
                  currentImageIndex === index ? "ring-2 ring-white" : ""
                }`}
              >
                <div className="bg-white m-2 rounded-lg h-[calc(100%-16px)] p-2">
                  <img
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </button>
            ))}

            {/* Down Arrow */}
            <button
              onClick={handleNextImage}
              className="text-white hover:text-gray-300 transition-colors"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>

          {/* Center - Main Product Image */}
          <div className="lg:col-span-6">
            <div className="bg-gradient-to-b from-[#7b7575] to-white rounded-lg p-2 md:p-4">
              <div className="bg-white rounded-lg h-[300px] md:h-[600px] flex items-center justify-center p-4 md:p-8">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
            
            {/* Mobile Thumbnail Dots */}
            <div className="flex lg:hidden justify-center gap-2 mt-4">
              {product.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === index ? 'bg-white w-8' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Right - Product Details */}
          <div className="lg:col-span-5 text-white">
            <h1 className="text-2xl md:text-5xl font-black mb-2 md:mb-4">{product.name}</h1>
            <p className="text-xs md:text-sm text-white mb-4 md:mb-6 leading-relaxed">{product.description}</p>

            {/* Price and Quantity */}
            <div className="flex items-center justify-between mb-4 md:mb-6">
              <div className="flex items-center gap-1">
                <span className="text-xl md:text-2xl font-normal">₹</span>
                <span className="text-xl md:text-2xl font-normal">{product.price}</span>
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-2 md:gap-3 border-2 border-white rounded px-2 md:px-3 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-white text-base md:text-lg"
                >
                  -
                </button>
                <span className="text-base md:text-lg w-6 md:w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-white text-base md:text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6">
              <button
                onClick={handleAddToCart}
                className="relative flex-1 bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-bold overflow-hidden transition-colors duration-500"
                style={{
                  background: 'linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 0%',
                  transition: 'background-position 0.4s ease, color 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 100%';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <span className="relative z-10">ADD TO CART</span>
              </button>
              <button
                onClick={handleBuyNow}
                className="relative flex-1 bg-transparent border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-lg text-sm md:text-lg font-bold overflow-hidden transition-colors duration-500"
                style={{
                  background: 'linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 0%',
                  transition: 'background-position 0.4s ease, color 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 100%';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <span className="relative z-10">BUY NOW</span>
              </button>
            </div>

            {/* Share */}
            <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
              <span className="text-xs text-white">Share:</span>
              <svg className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:opacity-80 fill-white" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/></svg>
              <svg className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:opacity-80 fill-white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              <svg className="w-4 h-4 md:w-5 md:h-5 cursor-pointer hover:opacity-80 fill-white" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            </div>

            {/* Tabs */}
            <div className="bg-gradient-to-r from-[#7b7575] to-white rounded-t-lg">
              <div className="flex border-b border-black">
                <button
                  onClick={() => setActiveTab("description")}
                  className={`flex-1 px-2 py-2 md:px-6 md:py-3 text-xs md:text-sm font-black ${
                    activeTab === "description" ? "text-black" : "text-black/60"
                  }`}
                >
                  DESCRIPTION
                </button>
                <button
                  onClick={() => setActiveTab("specification")}
                  className={`flex-1 px-2 py-2 md:px-6 md:py-3 text-xs md:text-sm font-black ${
                    activeTab === "specification" ? "text-black" : "text-black/60"
                  }`}
                >
                  SPECIFICATION
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`flex-1 px-2 py-2 md:px-6 md:py-3 text-xs md:text-sm font-black ${
                    activeTab === "shipping" ? "text-black" : "text-black/60"
                  }`}
                >
                  SHIPPING
                </button>
              </div>
            </div>
            <div className="bg-white rounded-b-lg p-3 md:p-6 min-h-[150px] md:min-h-[200px]">
              {activeTab === "description" && (
                <div className="text-black text-xs md:text-sm">
                  <p>{product.description}</p>
                </div>
              )}
              {activeTab === "specification" && (
                <div className="text-black text-sm">
                  <p>Specifications content</p>
                </div>
              )}
              {activeTab === "shipping" && (
                <div className="text-black text-sm">
                  <p>Shipping and return information</p>
                </div>
              )}
            </div>

            {/* Brochure Button */}
            <div className="mt-4 md:mt-6 flex justify-center">
              <button 
                className="relative bg-transparent border-2 border-white text-white px-6 py-2 md:px-12 md:py-3 rounded-lg text-base md:text-xl font-bold overflow-hidden transition-colors duration-500"
                style={{
                  background: 'linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)',
                  backgroundSize: '200% 200%',
                  backgroundPosition: '0% 0%',
                  transition: 'background-position 0.4s ease, color 0.4s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundPosition = '100% 100%';
                  e.currentTarget.style.color = '#000';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundPosition = '0% 0%';
                  e.currentTarget.style.color = '#fff';
                }}
              >
                <span className="relative z-10">BROCHURE</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* See It. Hear It. Shop It. */}
      <div className="py-8 md:py-16 text-center">
        <h2 className="text-white text-2xl md:text-5xl font-black mb-4 md:mb-8 px-4">See It. Hear It. Shop It.</h2>
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-gray-800 flex items-center justify-center">
            <svg className="w-16 h-16 text-white/50" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-white text-2xl md:text-5xl font-black mb-6 md:mb-12 text-center">You may also like</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
            {[
              { name: "Tank Bag- Pluto", image: "/uploads/83ba68f0-f2ca-4ee6-a076-4689e0ac48a9.png", price: 500 },
              { name: "Aux Light Mounts", image: "/uploads/24fe0526-e33b-4ae3-bd7e-0831a759fb52.png", price: 500 },
              { name: "Saddle Bag", image: "/uploads/681f7126-6997-49d7-b7df-cfcbbefcee1f.png", price: 500 },
              { name: "Brake Oil Reservoir", image: "/uploads/65fa3801-e56f-4fa5-91c0-ced6fd64024b.png", price: 500 }
            ].map((product, index) => (
              <div 
                key={index}
                className="bg-gradient-to-b from-[#7b7575] to-white rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              >
                <div className="h-[150px] md:h-[250px] lg:h-[306px] p-2 md:p-4 flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="px-2 py-2 md:px-4 md:py-4 bg-white">
                  <h3 className="text-black font-extrabold text-sm md:text-xl mb-1 md:mb-2">{product.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-black font-bold text-sm md:text-lg">₹</span>
                    <span className="text-black font-bold text-sm md:text-lg">{product.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Customer Review Button */}
      <div className="py-6 md:py-12 text-center px-4">
        <button 
          className="relative bg-transparent border-2 border-white text-white px-8 py-3 md:px-32 md:py-4 rounded-lg text-lg md:text-2xl font-semibold overflow-hidden transition-colors duration-500"
          style={{
            background: 'linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)',
            backgroundSize: '200% 200%',
            backgroundPosition: '0% 0%',
            transition: 'background-position 0.4s ease, color 0.4s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundPosition = '100% 100%';
            e.currentTarget.style.color = '#000';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundPosition = '0% 0%';
            e.currentTarget.style.color = '#fff';
          }}
        >
          <span className="relative z-10">CUSTOMER REVIEW</span>
        </button>
      </div>
    </div>
  );
};

export default CartPage;
