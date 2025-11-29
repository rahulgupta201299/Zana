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

function index() {
  return (
    <div className="min-h-screen">
      <OurPhilosophy />
      <GarageFavorite />
      <ShopTheLook />
      <NewArrivals />
      <YouTubeSection />
      <InstagramFeed />
      <BlogsSection />
      <BrandStory />
      <TestimonialsSection />
    </div>
  );
}

export default index;
