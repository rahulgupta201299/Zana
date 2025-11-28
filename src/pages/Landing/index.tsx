import React, { useState } from "react";

import NewArrivals from "@/components/NewArrivals";
import OurPhilosophy from "@/components/OurPhilosophy";
import GarageFavorite from "@/components/GarageFavorite";
import ShopByBike from "@/components/ShopByBike";
import ShopTheLook from "@/components/ShopTheLook";
import YouTubeSection from "@/components/YouTubeSection";
import InstagramFeed from "@/components/InstagramFeed";
import BlogsSection from "@/components/BlogsSection";
import BrandStory from "@/components/BrandStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import SignupPopup from "@/components/SignupPopup";
import CartSidebar from "@/components/CartSidebar";
import { useCartContext } from "@/Context/CartProvider";

function index() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { addToCart } = useCartContext();

  const handleAddToCart = (
    productId: string,
    productName: string,
    price: number,
    image: string,
    description?: string
  ) => {
    addToCart(productId, productName, price, image, description);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen">
      <OurPhilosophy />
      <GarageFavorite onAddToCart={handleAddToCart} />
      {/* <ShopByBike /> */}
      <ShopTheLook />
      <NewArrivals onAddToCart={handleAddToCart} />
      <YouTubeSection />
      <InstagramFeed />
      <BlogsSection />
      <BrandStory />
      <TestimonialsSection />
      <SignupPopup />
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}

export default index;
