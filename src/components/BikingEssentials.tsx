
const BikingEssentials = () => {
  const products = [
    {
      name: "Crash Guard",
      price: "$500",
      image: "/uploads/3f568aa5-84f0-400d-bcee-50d7f72ac960.png"
    },
    {
      name: "Mobile Holder",
      price: "$500",
      image: "/uploads/a1bc180c-1729-4869-9875-7565313c92f5.png"
    },
    {
      name: "Saddle Bag",
      price: "$500",
      image: "/uploads/2f72e496-2fd9-4119-9f82-40c335b48e00.png"
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
    <div className="px-6 bg-transparent">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-white">BIKING ESSENTIALS</h2>
        </div>
        
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {allProducts.map((product, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 rounded-2xl overflow-hidden border-4 border-[#AF7603]"
              style={{
                background: 'linear-gradient(to right, #AF7603, white)'
              }}
            >
              <div className="relative px-[18px] pt-[18px]">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-64 object-contain"
                />
                <button
                  onClick={() => handleAddToCart(product)}
                  className="absolute top-4 left-4 w-8 h-8 bg-black/80 rounded-full flex items-center justify-center hover:bg-black transition-colors"
                >
                  <img 
                    src="/uploads/4953bcf2-4dec-4822-bfba-5b8eb684524a.png" 
                    alt="Add to cart" 
                    className="w-4 h-4 filter invert"
                  />
                </button>
              </div>
              <div className="p-4 bg-transparent">
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

export default BikingEssentials;
