import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Heart } from "lucide-react";
import CartIcon from "@/components/ui/cart-icon";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";

const BikeAccessoriesPage = () => {
  const navigate = useNavigate();
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [availability, setAvailability] = useState({
    inStock: true,
    outOfStock: true,
  });
  const [selectedProducts, setSelectedProducts] = useState({
    crashGuard: false,
    saddleBag: false,
    auxLight: false,
    tankBag: false,
    sideStandExtender: false,
    handleRiser: false,
    frontNumberPlate: false,
    paddockStand: false,
    mirrorExtender: false,
  });
  const [favorites, setFavorites] = useState<number[]>([]);
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

  const products = [
    {
      id: 1,
      name: "Tank Bag - Pluto",
      description: "Secure luggage for daily use or touring.",
      price: 500,
      image: "/uploads/e96937c4-7862-430b-a49c-d7c0989b25b3.png",
      category: "tankBag",
      inStock: true,
    },
    {
      id: 2,
      name: "Side Stand Extender",
      description: "Get through the rain and fog with ease, visibility",
      price: 500,
      image: "/uploads/96e83269-c42e-40ac-a00c-c23dabaf5f9f.png",
      category: "sideStandExtender",
      inStock: true,
    },
    {
      id: 3,
      name: "Saddle Bag",
      description: "Keep saddle bags stable and secure.",
      price: 500,
      image: "/uploads/1425392e-ff4b-4539-ad11-77190526e434.png",
      category: "saddleBag",
      inStock: false,
    },
    {
      id: 4,
      name: "Aux Light",
      description: "Secure luggage for daily use or touring.",
      price: 500,
      image: "/uploads/fa312037-ba86-42f8-9966-6a2117942465.png",
      category: "auxLight",
      inStock: true,
    },
    {
      id: 5,
      name: "Maximus Tail Bag",
      description: "Cut through the rain and fog with clear, visibility",
      price: 500,
      image: "/uploads/30473091-6f64-4332-a2c1-6073d5a76055.png",
      category: "saddleBag",
      inStock: true,
    },
    {
      id: 6,
      name: "Crash Guard",
      description: "Keeps saddle bags stable and secure.",
      price: 500,
      image: "/uploads/49e85114-f314-4864-a0ce-601637829a90.png",
      category: "crashGuard",
      inStock: true,
    },
    {
      id: 7,
      name: "Maximus Tail Bag",
      description: "Secure luggage for daily use or touring.",
      price: 500,
      image: "/uploads/30473091-6f64-4332-a2c1-6073d5a76055.png",
      category: "saddleBag",
      inStock: false,
    },
    {
      id: 8,
      name: "BMW F850 Crash Guards",
      description: "Cut through the rain and fog with clear, visibility",
      price: 500,
      image: "/uploads/a2a4d615-3801-4253-a779-bd71953d3fe8.png",
      category: "crashGuard",
      inStock: true,
    },
    {
      id: 9,
      name: "Jerry Can Mount",
      description: "Keeps saddle bags stable and secure.",
      price: 500,
      image: "/uploads/01ada14f-f36c-42cc-904c-f336b818dcef.png",
      category: "tankBag",
      inStock: true,
    },
  ];

  const productCategories = [
    { key: "crashGuard", label: "Crash Guard" },
    { key: "saddleBag", label: "Saddle Bag" },
    { key: "auxLight", label: "Aux Light" },
    { key: "tankBag", label: "Tank Bag" },
    { key: "sideStandExtender", label: "Side Stand Extender" },
    { key: "handleRiser", label: "Handle Riser" },
    { key: "frontNumberPlate", label: "Front Number Plate" },
    { key: "paddockStand", label: "Paddock Stand" },
    { key: "mirrorExtender", label: "Mirror Extender" },
  ];

  const filteredProducts = products; // Show all products without filters

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handleProductClick = (productId: number) => {
    navigate(`/product/${productId}`);
  };

  const getBrandDisplayName = (brandParam: string) => {
    return brandParam?.toUpperCase().replace(/-/g, ' ') || 'BIKE';
  };

  return (
    <div className="min-h-screen text-white" style={{ backgroundColor: '#181818' }}>
      {/* Header and Navigation */}
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
      
      {/* Full Width Header */}
      {/* Header Image */}
      <div className="w-full">
        <div className="relative w-full h-[410px] overflow-hidden">
          <img 
            src="/uploads/678585e7-a765-403c-87e7-18f91091169e.png"
            alt="Bike Accessories Header"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Title Section */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h1 className="text-3xl font-bold text-white text-left">
          BAJAJ DOMINAR 400 ACCESSORIES
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div 
              className="p-6 rounded-lg"
              style={{ 
                background: 'linear-gradient(to bottom, #7B7575, #FFFFFF)'
              }}
            >
              <h2 className="text-lg font-bold mb-6 text-black">Refine Your Ride</h2>

              {/* Availability Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-black">Availability</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="inStock"
                      checked={availability.inStock}
                      onCheckedChange={(checked) =>
                        setAvailability(prev => ({ ...prev, inStock: checked as boolean }))
                      }
                      className="border-gray-400"
                    />
                    <label htmlFor="inStock" className="text-sm text-black">In stock</label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox
                      id="outOfStock"
                      checked={availability.outOfStock}
                      onCheckedChange={(checked) =>
                        setAvailability(prev => ({ ...prev, outOfStock: checked as boolean }))
                      }
                      className="border-gray-400"
                    />
                    <label htmlFor="outOfStock" className="text-sm text-black">Out of stock</label>
                  </div>
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h3 className="font-medium mb-3 text-black">Price</h3>
                <div className="space-y-4">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={5000}
                    min={1000}
                    step={100}
                    className="w-full"
                  />
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>₹{priceRange[0]}</span>
                    <span>₹{priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Products Filter */}
              <div>
                <h3 className="font-medium mb-3 text-black">Products</h3>
                <div className="space-y-3">
                  {productCategories.map((category) => (
                    <div key={category.key} className="flex items-center space-x-3">
                      <Checkbox
                        id={category.key}
                        checked={selectedProducts[category.key as keyof typeof selectedProducts]}
                        onCheckedChange={(checked) =>
                          setSelectedProducts(prev => ({
                            ...prev,
                            [category.key]: checked as boolean
                          }))
                        }
                        className="border-gray-400"
                      />
                      <label htmlFor={category.key} className="text-sm text-black">{category.label}</label>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Main Content - Product Grid */}
          <div className="lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="rounded-lg overflow-hidden transition-all duration-300 cursor-pointer group"
                  style={{ 
                    background: 'linear-gradient(to bottom, #7B7575, #FFFFFF)'
                  }}
                  onClick={() => handleProductClick(product.id)}
                >
                  {/* Product Image Section */}
                  <div className="relative p-2">
                    <div className="aspect-square bg-white/10 overflow-hidden rounded-lg relative">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Add to Cart Button - Bottom Left of Image */}
                      <button
                        className="absolute bottom-4 left-4 group w-8 h-8 hover:w-auto bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 overflow-hidden hover:px-4"
                        onClick={(e) => {
                          e.stopPropagation();
                          console.log("Added to cart:", product.id);
                          navigate("/cart");
                        }}
                      >
                        <CartIcon className="w-4 h-4 text-black flex-shrink-0" />
                        <span className="ml-2 text-black text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 max-w-0 group-hover:max-w-[100px]">
                          Add to cart
                        </span>
                      </button>
                    </div>
                  </div>
                  
                  {/* Product Info Section */}
                  <div className="px-2 pb-2">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-black mb-1">{product.name}</h3>
                      </div>
                      {/* Heart Favorite Button - Right side of title */}
                      <button
                        className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(product.id);
                        }}
                      >
                        <Heart
                          className={`w-5 h-5 ${
                            favorites.includes(product.id) 
                              ? "fill-red-500 text-red-500" 
                              : "text-black hover:text-red-500"
                          }`}
                        />
                      </button>
                    </div>
                    
                    {/* Subtitle */}
                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">{product.description}</p>
                    
                    {/* Price and Stock Status */}
                    <div className="flex items-center justify-between">
                      <p className="text-black font-semibold">₹ {product.price}</p>
                      {!product.inStock && (
                        <span className="text-red-600 text-xs">Out of stock</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No products found matching your filters.</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BikeAccessoriesPage;