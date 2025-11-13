import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import CollapsibleShopByBike from "@/components/CollapsibleShopByBike";
import CollapsibleShopByProduct from "@/components/CollapsibleShopByProduct";
import Footer from "@/components/Footer";

const BlogDetailPage = () => {
  const { id } = useParams();
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

  const relatedBlogs = [
    {
      title: "Exhaust Wraps: Improving Performance While Reducing Heat",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Zana Engineered for India's Harshest Roads. Trusted Across the World.",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      title: "Battery Chargers and Tenders: Essential for Off-Season Motorcycle Storage",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    },
    {
      title: "Decal and Graphic Kits: Easy Ways to Customize Without Breaking the Bank",
      image: "/uploads/0fe74faf-510e-47a2-b7a1-5088ed551f39.png"
    },
    {
      title: "Locking Systems Reviewed: Keeping Your Bike Secure on the Go",
      image: "/uploads/4c58e7da-974c-454c-98fb-590dcaa884ef.png"
    }
  ];

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
      
      <div className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Side - Blog Content */}
            <div className="lg:col-span-2">
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-6">
                Zana Engineered for India's Harshest Roads. Trusted Across the World.
              </h1>
              
              <p className="text-white text-lg mb-8 leading-relaxed">
                India is not easy to ride in. 35 states. Weather from -50 to +50. Rain-soaked wetlands to harsh deserts. Salt saturated coastlines to tall mountains.
              </p>
              
              <div className="mb-8">
                <img 
                  src="/uploads/d791f0f3-6cb4-4507-910d-cf54cd27082a.png" 
                  alt="Motorcycle on urban street" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              
              <div className="text-white space-y-6 leading-relaxed">
                <p>
                  India's roads test machines like no other — from blistering highways to unpredictable terrain, steep mountains rails, to crowded urban chaos. That's exactly where Zana is built to thrive.
                </p>
                
                <p>
                  Every Zana product is designed, developed, and tested in India, under real riding conditions that push both rider and machine to their limits. We get it. For looks — they're built to withstand extremes: potholes, rain, dust, heat, and rough terrain.
                </p>
                
                <p>
                  From the busiest city streets to the most challenging mountain passes, our machine-to-machine solutions that endure long hauls across states — Zana is engineered with precision, resilience, and rider insight.
                </p>
                
                <p>
                  But our commitment doesn't stop at India's borders.
                </p>
                
                <p>
                  Today, Zana products are trusted and celebrated by riders from touring communities in Southeast Asia to adventure bikers in Europe and Africa. Our reputation for durability and performance has made Zana a go-to choice worldwide, wherever they ride.
                </p>
                
                <p>
                  At Zana, we believe that every product should speak the language of the road. That's why we don't rely on compromises as we build machines. Instead, we offer from daily commuters to solo explorers, cross-country tourers to off-road warriors. Their insights help us refine, evolve, and innovate accessories that perform, where it truly counts — on the road.
                </p>
                
                <p>
                  Each component is crafted in-house at our state-of-the-art facility in India, ensuring complete control over quality and performance. We don't just build; we don't just build products, we build trust that handles the weight of long hauls. Zana products are stress-tested and road-proven before they reach your hands.
                </p>
                
                <p>
                  Our legacy lies in understanding what Indian riders face daily, and then extending those insights not only across India, but in countries like Nepal, Sri Lanka, the UAE, South Africa, and beyond. As demand for dependable gear continues to rise as a range that represents strength, reliability, durability, and style.
                </p>
                
                <p>
                  But above all, Zana is a rider-first brand. We don't just build products — we support journeys. Whether it's your first 100 kms or your 10,000th, Zana is here to equip, protect, and power every moment.
                </p>
                
                <p>
                  Our relentless commitment to reliability and functionality has earned us the trust of thousands of riders — not only across India, but in countries like Nepal, Sri Lanka, the UAE, South Africa, and beyond. As demand for dependable gear continues to rise as a range that represents strength, reliability, durability, and style.
                </p>
                
                <p>
                  But above all, Zana is a rider-first brand. We don't just build products — we support journeys. Whether it's your first 100 kms or your 10,000th, Zana is here to equip, protect, and power every moment.
                </p>
                
                <p className="font-bold">
                  Join the tribe. Trust the ride. Choose Zana.
                </p>
              </div>
            </div>
            
            {/* Right Side - Related Reads */}
            <div className="lg:col-span-1">
              <div 
                className="bg-related-reads-gradient rounded-lg p-6 h-full min-h-[800px] flex flex-col"
                style={{
                  background: "linear-gradient(to bottom, #7B7575, #FFFFFF)"
                }}
              >
                <h2 className="text-white text-xl font-bold mb-6">RELATED READS</h2>
                
                <div className="space-y-6 overflow-y-auto flex-1">
                  {relatedBlogs.map((blog, index) => (
                    <div key={index} className="cursor-pointer hover:opacity-80 transition-opacity">
                      <div className="mb-3">
                        <img 
                          src={blog.image} 
                          alt={blog.title} 
                          className="w-full h-32 object-cover rounded-lg"
                        />
                      </div>
                      <h3 className="text-black text-sm font-semibold leading-tight">
                        {blog.title}
                      </h3>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetailPage;