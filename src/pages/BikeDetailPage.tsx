import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBikeById } from "@/data/bikes";
import { products } from "@/data/products";
import { categories } from "@/data/productCategories";
import { ShoppingCart, Heart } from "lucide-react";

const BikeDetailPage = () => {
  const { bikeId } = useParams<{ bikeId: string }>();
  const navigate = useNavigate();
  
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Get bike data
  const bike = bikeId ? getBikeById(bikeId) : null;

  if (!bike) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#181818' }}>
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Bike Not Found</h1>
          <button
            onClick={() => navigate('/bikes')}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Back to Bikes
          </button>
        </div>
      </div>
    );
  }

  // Get products for this bike
  const bikeProducts = products.filter(
    product => product.bikeId === bike.id || product.universal
  );

  // Filter by category
  const filteredProducts = selectedCategory === "All" 
    ? bikeProducts 
    : bikeProducts.filter(product => product.category === selectedCategory);

  // Count products per category for this bike
  const categoryCount = (categoryName: string) => {
    if (categoryName === "All") return bikeProducts.length;
    return bikeProducts.filter(p => p.category === categoryName).length;
  };

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>

      {/* Hero Section with Bike Info */}
      <div className="relative py-12 md:py-20 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Bike Image */}
            <div className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center">
              <img
                src={bike.image}
                alt={bike.fullName}
                className="max-w-full max-h-96 object-contain"
                onError={(e) => {
                  e.currentTarget.src = '/bike-placeholder.svg';
                }}
              />
            </div>

            {/* Bike Info */}
            <div className="text-white">
              <div className="mb-4">
                <span className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium">
                  {bike.category}
                </span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{bike.fullName}</h1>
              <p className="text-xl md:text-2xl text-white/70 mb-6">
                {bike.description}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-yellow-400 text-lg font-medium">{bike.brand}</span>
                <span className="text-white/50">•</span>
                <span className="text-white/70">{bikeProducts.length} Products Available</span>
              </div>
              <button
                onClick={() => navigate('/bikes')}
                className="text-yellow-400 hover:text-yellow-300 font-medium text-lg transition-colors"
              >
                ← Back to All Bikes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-2">
              Products for {bike.name}
            </h2>
            <p className="text-white/60">
              Browse {bikeProducts.length} accessories designed for your {bike.fullName}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All ({categoryCount("All")})
            </button>
            {categories.map((category) => {
              const count = categoryCount(category.id);
              if (count === 0) return null;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                    selectedCategory === category.id
                      ? "bg-yellow-400 text-black"
                      : "bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {category.icon} {category.name} ({count})
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
                onClick={() => handleProductClick(product.id)}
              >
                {/* Product Image */}
                <div className="relative bg-white p-6 h-64 flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/bike-placeholder.svg';
                    }}
                  />
                  {product.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  {product.universal && (
                    <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      UNIVERSAL
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-4 md:p-6">
                  <div className="mb-2">
                    <span className="text-xs text-yellow-400 font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 text-xl md:text-2xl font-bold">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to wishlist logic
                        }}
                        className="p-2 bg-white/10 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
                      >
                        <Heart size={18} />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          // Add to cart logic
                        }}
                        className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                      >
                        <ShoppingCart size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg mb-4">
                No products found in this category
              </p>
              <button
                onClick={() => setSelectedCategory("All")}
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;

