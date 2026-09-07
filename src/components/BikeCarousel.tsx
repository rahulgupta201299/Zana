import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ChevronLeft, ChevronRight } from "lucide-react";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { shopByBikeSelector } from "@/Redux/Product/Selectors";
import { ROUTES } from "@/Constants/Routes";
import { encodedGeneratedPath } from "@/Utils/global";
import { replaceSpecialCharactersWithHyphen } from "@/Utils/StringUtils";

interface BikeSlide {
  id: string;
  name: string;
  brand: string;
  subtitle: string;
  imageUrl: string;
  brandPath: string;
  keywords: string[];
}

const BIKE_SLIDES: BikeSlide[] = [
  {
    id: "zana-cb350-rs",
    name: "CB350 RS",
    brand: "Honda",
    subtitle: "Precision Crash Guards & Touring Accessories",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-CB350-RS-Crash-Guard.webp",
    brandPath: "honda",
    keywords: ["cb350", "rs"],
  },
  {
    id: "zana-himalayan-450",
    name: "Himalayan 450",
    brand: "Royal Enfield",
    subtitle: "Adventure Protection & Luggage Carriers",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-Himalayan-450-Accessories.webp",
    brandPath: "royal-enfield",
    keywords: ["himalayan", "450"],
  },
  {
    id: "zana-klx-230",
    name: "KLX 230",
    brand: "Kawasaki",
    subtitle: "Dual-Sport & Trail Essential Protection",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-KLX-230-Accessories.webp",
    brandPath: "kawasaki",
    keywords: ["klx", "230"],
  },
  {
    id: "zana-ktm-adv-390",
    name: "KTM ADV 390",
    brand: "KTM",
    subtitle: "Extreme Adventure Crash Guards & Racks",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-KTM-ADV-390-Accessories.webp",
    brandPath: "ktm",
    keywords: ["adventure", "390", "250", "rally"],
  },
  {
    id: "zana-rtx-300",
    name: "RTX 300",
    brand: "TVS",
    subtitle: "Heavy-Duty Crash Guards & Engine Protection",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-RTX-300-Crash-Guard.webp",
    brandPath: "tvs",
    keywords: ["rtx", "300", "ronin"],
  },
  {
    id: "zana-scrambler-400",
    name: "Scrambler 400X",
    brand: "Triumph",
    subtitle: "Scrambler Protection & Touring Setup",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-SCRAMBLER-400-Accessories.webp",
    brandPath: "triumph",
    keywords: ["scrambler", "400"],
  },
  {
    id: "zana-speed-400",
    name: "Speed 400",
    brand: "Triumph",
    subtitle: "Roadster Protection & Tail Racks",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-SPEED-400-Accessories.webp",
    brandPath: "triumph",
    keywords: ["speed", "400"],
  },
  {
    id: "zana-v-strom",
    name: "V-Strom 250",
    brand: "Suzuki",
    subtitle: "Touring Protection & Top Box Mounts",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-V-STROM-Accessories.webp",
    brandPath: "suzuki",
    keywords: ["v-strom", "vstrom", "250"],
  },
  {
    id: "zana-x440",
    name: "X440",
    brand: "Harley Davidson",
    subtitle: "Premium Engine Guards & Accessories",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-X440-Accessories.webp",
    brandPath: "harley-davidson",
    keywords: ["x440"],
  },
  {
    id: "zana-xpulse-210",
    name: "Xpulse 200 / 210",
    brand: "Hero",
    subtitle: "Off-Road Crash Guards & Rally Gear",
    imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/homepage/Zana-XPULSE-210-Crashguard.webp",
    brandPath: "hero",
    keywords: ["xpulse", "200", "210"],
  },
];

// Dynamic model finder that queries the Redux store at runtime
function findDynamicBikeModel(slide: BikeSlide, shopByBike: any[]) {
  if (!shopByBike || !shopByBike.length) return null;

  const brandSlug = replaceSpecialCharactersWithHyphen(slide.brandPath.toLowerCase());
  const matchingBrandObj = shopByBike.find((b) => {
    const bNameSlug = replaceSpecialCharactersWithHyphen((b.name || "").toLowerCase());
    return bNameSlug.includes(brandSlug) || brandSlug.includes(bNameSlug);
  });

  const targetModels = matchingBrandObj?.models
    ? matchingBrandObj.models
    : shopByBike.flatMap((b) => b.models || []);

  let bestMatch: any = null;
  let highestScore = 0;

  for (const model of targetModels) {
    const modelNameLower = (model.name || "").toLowerCase();
    const brandNameLower = (model.brandName || model.brand || "").toLowerCase();
    const combinedText = `${brandNameLower} ${modelNameLower}`;

    let score = 0;
    for (const kw of slide.keywords) {
      const kwLower = kw.toLowerCase();
      if (modelNameLower.includes(kwLower)) {
        score += 5;
      } else if (combinedText.includes(kwLower)) {
        score += 3;
      }
    }

    const searchTokens = slide.name.toLowerCase().split(/[\s/-]+/);
    for (const token of searchTokens) {
      if (token.length > 2 && modelNameLower.includes(token)) {
        score += 2;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = model;
    }
  }

  return highestScore > 0 ? bestMatch : null;
}

type BikeCarouselPropsType = {
  isMobile?: boolean;
};

const BikeCarousel = ({ isMobile }: BikeCarouselPropsType) => {
  const navigate = useNavigate();
  const shopByBike = useSelector(shopByBikeSelector);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % BIKE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + BIKE_SLIDES.length) % BIKE_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 40;
    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleSlideClick = (slide: BikeSlide) => {
    const matchedModel = findDynamicBikeModel(slide, shopByBike);

    if (matchedModel) {
      const path = encodedGeneratedPath(ROUTES.BIKE_DETAIL, {
        bikeType: "zana",
        bikeBrand: matchedModel.brandName || matchedModel.brand || slide.brandPath,
        bikeModel: matchedModel.name,
        bikeId: matchedModel._id,
      });
      navigate(path);
    } else {
      navigate(`/zana/bikes/${replaceSpecialCharactersWithHyphen(slide.brandPath)}/`);
    }
  };

  const currentSlide = BIKE_SLIDES[currentIndex];

  return (
    <section
      className="relative flex h-[520px] sm:h-[600px] md:h-screen md:min-h-[640px] items-end sm:items-center overflow-hidden bg-[#0d0d0d] text-white select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Images */}
      {BIKE_SLIDES.map((slide, index) => {
        const isCurrent = index === currentIndex;
        // Smart loading: only load current slide, adjacent slides, or initial slide to reduce payload
        const isAdjacent = Math.abs(index - currentIndex) <= 1 || (currentIndex === 0 && index === BIKE_SLIDES.length - 1) || (currentIndex === BIKE_SLIDES.length - 1 && index === 0);
        const shouldLoadImage = isCurrent || isAdjacent || index === 0;

        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isCurrent ? "opacity-100 z-0 pointer-events-auto" : "opacity-0 -z-10 pointer-events-none"
            }`}
            onClick={() => handleSlideClick(slide)}
          >
            {shouldLoadImage && (
              <img
                src={slide.imageUrl}
                alt={`${slide.brand} ${slide.name}`}
                loading={index === 0 ? "eager" : "lazy"}
                fetchPriority={index === 0 ? "high" : "low"}
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover object-center cursor-pointer transform transition-transform duration-7000 ease-out scale-105 hover:scale-100"
              />
            )}
          </div>
        );
      })}

      {/* Dark Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-black/70 via-black/50 to-black/30 pointer-events-none" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

      {/* Watermark Brand Text */}
      <div
        className="absolute right-[-5%] top-[45%] -translate-y-1/2 select-none pointer-events-none opacity-[0.07] text-[25vw] font-serif font-bold leading-none uppercase text-transparent tracking-widest z-[2]"
        style={{
          WebkitTextStroke: "2px rgba(255, 255, 255, 0.8)",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        ZANA
      </div>

      {/* Slide Foreground Content */}
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 z-10 pb-16 sm:pb-16 md:py-0">
        <div className="max-w-[800px] text-left">
          {/* Main Headline (Bike Name) */}
          <h1
            className="text-white text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-medium leading-[1.15] mb-1.5 sm:mb-4 md:mb-6 tracking-tight font-serif cursor-pointer hover:text-yellow-400 transition-colors"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
            onClick={() => handleSlideClick(currentSlide)}
          >
            {currentSlide.name}
          </h1>

          {/* Subtitle */}
          <p
            className="text-white/80 text-xs sm:text-base md:text-xl font-serif max-w-[620px] leading-relaxed mb-4 md:mb-10"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            {currentSlide.subtitle}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 max-w-[320px] sm:max-w-none">
            <button
              onClick={() => handleSlideClick(currentSlide)}
              className="border-2 border-yellow-400 text-black bg-yellow-400 hover:bg-yellow-500 hover:border-yellow-500 transition-all duration-300 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg text-[11px] sm:text-sm font-bold tracking-[0.12em] sm:tracking-[0.15em] uppercase cursor-pointer shadow-lg shadow-yellow-500/20 text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EXPLORE {currentSlide.name} →
            </button>
            <button
              onClick={() => navigate("/zana/bikes/all/")}
              className="border border-white/40 text-white bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-all duration-300 px-5 sm:px-8 py-2.5 sm:py-3.5 rounded-lg text-[11px] sm:text-sm font-semibold tracking-[0.12em] sm:tracking-[0.15em] uppercase cursor-pointer text-center"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              ALL BIKES
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows - Only visible on desktop screens to prevent overlap on mobile */}
      <button
        onClick={prevSlide}
        aria-label="Previous Bike Slide"
        className="hidden md:flex absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group shadow-lg"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 group-hover:-translate-x-0.5 transition-transform" />
      </button>
      <button
        onClick={nextSlide}
        aria-label="Next Bike Slide"
        className="hidden md:flex absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer group shadow-lg"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Bottom Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 w-full max-w-7xl px-4 sm:px-6 flex items-center justify-center sm:justify-between gap-4 pointer-events-auto">
        <div className="hidden sm:flex items-center gap-2 text-xs font-semibold tracking-widest text-white/60">
          <span className="text-yellow-400 font-bold text-sm">{String(currentIndex + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(BIKE_SLIDES.length).padStart(2, "0")}</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-1 px-2 scrollbar-hide">
          {BIKE_SLIDES.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}: ${slide.name}`}
              className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentIndex
                  ? "w-6 sm:w-8 bg-yellow-400 shadow-md shadow-yellow-400/50"
                  : "w-2 sm:w-2.5 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default withDeviceDetails(BikeCarousel);
