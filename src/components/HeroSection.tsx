import { useNavigate } from "react-router-dom";
import withDeviceDetails from "@/Hocs/withDeviceDetails";

const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();

  return (
    <section className="relative flex h-screen min-h-[600px] items-center overflow-hidden bg-[#0d0d0d] text-white">
      {/* Background Giant Outline Text "ZANA" */}
      <div 
        className="absolute right-[-5%] top-[45%] -translate-y-1/2 select-none pointer-events-none opacity-[0.03] text-[25vw] font-serif font-bold leading-none uppercase text-transparent tracking-widest z-0" 
        style={{ WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)", fontFamily: "'Playfair Display', serif" }}
      >
        ZANA
      </div>

      {/* Decorative subtle ambient lights */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.01] rounded-full blur-[120px] pointer-events-none z-0" />
      <div className="absolute bottom-10 right-1/4 w-[300px] h-[300px] bg-white/[0.015] rounded-full blur-[80px] pointer-events-none z-0" />

      {/* Foreground Container */}
      <div className="relative w-full max-w-7xl mx-auto px-6 md:px-12 z-10">
        <div className="max-w-[800px] text-left">
          {/* Subtitle */}
          <span 
            className="block text-white/50 text-[10px] md:text-xs font-serif tracking-[0.25em] uppercase mb-4 md:mb-6 font-semibold"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Precision-Built Motorcycle Protection & Touring Gear
          </span>

          {/* Main Headline */}
          <h1 
            className="text-white text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.08] mb-6 md:mb-8 tracking-tight font-serif"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Forged in Fire.
            <br />
            More Than Metal.
          </h1>

          {/* Description */}
          <p 
            className="text-white/60 text-sm md:text-lg lg:text-xl font-serif max-w-[680px] leading-relaxed mb-10 md:mb-14"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            From your first Sunday breakfast ride to the last fuel stop before Khardung La
            – Zana builds crash guards, racks and touring systems that let your motorcycle
            go exactly as far as you dare to.{" "}
            <span className="italic block mt-3 text-white/80">Made in India – Ridden Everywhere.</span>
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
            <button
              onClick={() => navigate("/zana/bikes/all")}
              className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 px-8 py-3.5 rounded-none text-xs md:text-sm font-semibold tracking-[0.15em] uppercase"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Shop By Your Bike
            </button>
            <button
              onClick={() => navigate("/product-catalog")}
              className="border border-white/20 text-white/60 bg-transparent hover:border-white hover:text-white transition-all duration-300 px-8 py-3.5 rounded-none text-xs md:text-sm font-semibold tracking-[0.15em] uppercase sm:ml-2"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Explore Universal Gear
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4 select-none"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-white/30 rotate-90 origin-bottom translate-y-[-20px] font-semibold">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default withDeviceDetails(HeroSection);
