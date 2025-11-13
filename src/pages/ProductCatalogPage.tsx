import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";
import CartIcon from "@/components/ui/cart-icon";
import { products } from "@/data/products";
import { categories, getProductsByCategory } from "@/data/productCategories";
import { Heart, ShoppingCart } from "lucide-react";

const ProductCatalogPage = () => {
  const navigate = useNavigate();
  const [isShopByBikeOpen, setIsShopByBikeOpen] = useState(false);
  const [isShopByProductOpen, setIsShopByProductOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleShopByBike = () => {
    setIsShopByBikeOpen(!isShopByBikeOpen);
    setIsShopByProductOpen(false);
  };

  const toggleShopByProduct = () => {
    setIsShopByProductOpen(!isShopByProductOpen);
    setIsShopByBikeOpen(false);
  };

  // Filter products by selected category
  const displayedProducts = selectedCategory === "All"
    ? products
    : products.filter(p => p.category === selectedCategory);

  const handleProductClick = (productId: string) => {
    navigate(`/product/${productId}`);
  };

  const handleAddToCart = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    console.log('Added to cart:', productId);
    // TODO: Implement cart functionality
  };

  const handleAddToWishlist = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    console.log('Added to wishlist:', productId);
    // TODO: Implement wishlist functionality
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
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
      <div className="py-12 md:py-16 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            PRODUCT CATALOG
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8">
            Explore {products.length} premium motorcycle accessories
          </p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory("All")}
              className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${
                selectedCategory === "All"
                  ? "bg-yellow-400 text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
            >
              All Products ({products.length})
            </button>
            {categories.map((category) => {
              const count = products.filter(p => p.category === category.id).length;
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
        </div>
      </div>

      {/* Products Grid */}
      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {selectedCategory !== "All" && (
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
              {categories.find(c => c.id === selectedCategory)?.icon} {selectedCategory}
              <span className="text-white/60 ml-3 text-lg">({displayedProducts.length} products)</span>
            </h2>
          )}
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {displayedProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product.id)}
                className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
              >
                {/* Product Image */}
                <div className="relative bg-white p-4 md:p-6 h-48 md:h-64 flex items-center justify-center">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.currentTarget.src = '/bike-placeholder.svg';
                    }}
                  />
                  {product.featured && (
                    <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                      FEATURED
                    </div>
                  )}
                  {product.universal && (
                    <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                      UNIVERSAL
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="p-3 md:p-4">
                  <div className="mb-1">
                    <span className="text-xs text-yellow-400 font-medium">
                      {product.category}
                    </span>
                  </div>
                  <h3 className="text-white text-sm md:text-lg font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-yellow-400 text-lg md:text-xl font-bold">
                      ₹{product.price.toLocaleString()}
                    </span>
                    <div className="flex gap-1 md:gap-2">
                      <button
                        onClick={(e) => handleAddToWishlist(e, product.id)}
                        className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
                      >
                        <Heart size={14} className="md:w-4 md:h-4" />
                      </button>
                      <button
                        onClick={(e) => handleAddToCart(e, product.id)}
                        className="p-1.5 md:p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                      >
                        <ShoppingCart size={14} className="md:w-4 md:h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Products Found */}
          {displayedProducts.length === 0 && (
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

      <Footer />
    </div>
  );
};

export default ProductCatalogPage;
