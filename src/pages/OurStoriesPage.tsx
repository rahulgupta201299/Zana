
import { useState } from "react";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const OurStoriesPage = () => {
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

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#181818" }}>
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
      <div 
        className="relative h-[600px] bg-cover bg-center flex items-end"
        style={{ backgroundImage: "url('/uploads/bea60e6f-378c-4c52-a047-a7755c425785.png')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12">
          <h1 className="text-white text-4xl font-bold mb-4">Designed by Riders, Built for Legends.</h1>
          <p className="text-white text-lg mb-6">From hustling city streets to the hardest terrains — Zana's got your ride covered.</p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-8 text-white">
            <div>
              <h2 className="text-white text-2xl font-bold mb-6">Engineered for the Fearless</h2>
              <p className="text-base leading-relaxed mb-6">
                At Zana, we understand the uncompromising standards and craft confidence for riders across every road, trek, and terrain. Born 
                from a passion for motorcycles and the spirit of adventure, Zana is a proudly Indian brand inspired by thousands of bikers 
                who demand nothing but the best.
              </p>
              <p className="text-base leading-relaxed mb-6">
                We don't compromise on quality, design, or durability. We create high-performance crash guards, premium accessories, 
                and rider gear that's built to last. Every product is meticulously designed and tested to ensure rider protection, road 
                presence, function, and the genuine love for biking our customers live for — and helps everyone discover the hearts of 
                their personality.
              </p>
              <p className="text-base leading-relaxed mb-6">
                From weekend rides to cross-country expeditions, we ensure your bike is protected, your gear secure, and your journey 
                unforgettable.
              </p>
              <p className="text-base leading-relaxed mb-6">
                But our mission goes beyond just protection. At Zana, we're committed to elevating the entire riding experience — combining 
                aesthetics, unmatched engineering for gear that stands the test of time. Expectations of today's riders, Zana stands as a result of 
                their relentless journey. We don't just protect motorcycles; we elevate the experiences of the motorcycling community.
              </p>
              <p className="text-base leading-relaxed mb-6">
                Our in-house manufacturing ensures tight quality control, allowing us to deliver unmatched excellence — whether it's a rider 
                protection system or premium gear engineered for performance. Every accessory we design speaks to the passion, styling, and 
                riding dynamics that define us — and rider meets their diverse needs.
              </p>
              <p className="text-base leading-relaxed mb-6">
                It's no coincidence that bikers choose Zana for their most trusted equipment.
              </p>
              <p className="text-white text-lg font-bold mb-4">The rider comes first.</p>
              <p className="text-base leading-relaxed">
                We live to be part of a growing tribe that values performance, trust, and a shared love for the ride.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* White Separator */}
      <div className="w-full h-px bg-white"></div>

      <Footer />
    </div>
  );
};

export default OurStoriesPage;
