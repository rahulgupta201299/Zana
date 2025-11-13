
import { useState } from "react";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import HeroSection from "@/components/HeroSection";
import OurPhilosophy from "@/components/OurPhilosophy";
import GarageFavorite from "@/components/GarageFavorite";
import ShopByBike from "@/components/ShopByBike";
import YouTubeSection from "@/components/YouTubeSection";
import InstagramFeed from "@/components/InstagramFeed";
import BrandStory from "@/components/BrandStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShopTheLook from "@/components/ShopTheLook";
import BlogsSection from "@/components/BlogsSection";
import NewArrivals from "@/components/NewArrivals";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SignupPopup from "@/components/SignupPopup";
import CartSidebar from "@/components/CartSidebar";
import { useCart } from "@/hooks/useCart";

const Index = () => {
  const [isShopByBikeOpen, setIsShopByBikeOpen] = useState(false);
  const [isShopByProductOpen, setIsShopByProductOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // Use cart hook for cart management with localStorage
  const { cartItems, addToCart, updateQuantity, removeItem, totalItems } = useCart();

  const toggleShopByBike = () => {
    setIsShopByBikeOpen(!isShopByBikeOpen);
    setIsShopByProductOpen(false); // Close other collapsible when opening this one
  };

  const toggleShopByProduct = () => {
    setIsShopByProductOpen(!isShopByProductOpen);
    setIsShopByBikeOpen(false); // Close other collapsible when opening this one
  };

  // Add item to cart handler
  const handleAddToCart = (productId: string, productName: string, price: number, image: string, description?: string) => {
    addToCart(productId, productName, price, image, description);
    setIsCartOpen(true); // Open cart sidebar
  };

  return (
    <div className="min-h-screen">
      <Header 
        isShopByBikeOpen={isShopByBikeOpen}
        onToggleShopByBike={toggleShopByBike}
        isShopByProductOpen={isShopByProductOpen}
        onToggleShopByProduct={toggleShopByProduct}
        onCartClick={() => setIsCartOpen(true)}
        cartItemCount={totalItems}
      />
      <CollapsibleShopByBike 
        isOpen={isShopByBikeOpen}
        onClose={() => setIsShopByBikeOpen(false)}
      />
      <CollapsibleShopByProduct 
        isOpen={isShopByProductOpen}
        onClose={() => setIsShopByProductOpen(false)}
      />
      
      {/* Cart Sidebar */}
      <CartSidebar
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeItem}
      />

      <HeroSection />
      <OurPhilosophy />
      <GarageFavorite onAddToCart={handleAddToCart} />
      <ShopByBike />
      <ShopTheLook />
      <NewArrivals onAddToCart={handleAddToCart} />
      
      <YouTubeSection />
      <InstagramFeed />
      <BlogsSection />
      <BrandStory />
      <TestimonialsSection />
      <Footer />
      <WhatsAppButton />
      <SignupPopup />
    </div>
  );
};

export default Index;
