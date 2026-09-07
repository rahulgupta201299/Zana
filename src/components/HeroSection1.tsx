import { Link as RouterLink } from "react-router-dom";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/Constants/Routes";
import Zana from "@/Assets/Icons/Zana.webp";
import HeroDesktop from "@/Assets/Images/HeroDesktop.webp";
import HeroMobile from "@/Assets/Images/HeroMobile.webp";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import { VITE_VIDEO_URL } from "@/Configurations/env";
import { useEffect, useState } from "react";

const HeroSection = ({ isMobile }: { isMobile: boolean }) => {
  const navigate = useNavigate();
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!VITE_VIDEO_URL) {
      setShouldLoadVideo(false);
      return;
    }

    const loadVideo = () => setShouldLoadVideo(true);

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(loadVideo, { timeout: 4000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = setTimeout(loadVideo, 2500);
    return () => clearTimeout(timeoutId);
  }, [isMobile]);

  return (
    <section className="relative flex h-[280px] items-center overflow-hidden md:h-screen">
      <div className="absolute inset-0 overflow-hidden bg-black">
        <picture className="block h-full w-full">
          <source media="(max-width: 767px)" srcSet={HeroMobile} />
          <img
            src={HeroDesktop}
            alt=""
            aria-hidden="true"
            width={1200}
            height={1200}
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </picture>

        {shouldLoadVideo && (
          <video
            src={VITE_VIDEO_URL}
            poster={isMobile ? HeroMobile : HeroDesktop}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
            preload="none"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="absolute left-1/2 top-5 -translate-x-1/2">
        <RouterLink
          to={ROUTES.BASE_URL}
          className="flex cursor-pointer"
        >
          <img
            src={Zana}
            alt={`Zana Logo`}
            loading="eager"
            decoding="async"
            fetchPriority="low"
            style={{
              height: isMobile ? "3.5rem" : "5rem",
              width: "auto",
              cursor: "pointer",
              transition: "opacity 0.2s",
              filter:
              "brightness(0) sepia(10%) saturate(200%) hue-rotate(10deg) invert(90%)",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.8")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          />
        </RouterLink>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 md:px-6">
        <div className="max-w-[650px]">
          <h1 className="mb-1 text-2xl font-bold leading-[1.1] text-white md:mb-3 md:text-6xl lg:text-7xl">
            FORGED IN FIRE
            <br />
            MORE THAN METAL
          </h1>

          <p className="mb-2 text-xs text-white/90 md:mb-4 md:text-xl lg:text-3xl">
            Made in India - Ridden Everywhere
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-stretch sm:items-center">
            <button
              onClick={() => navigate("/zana/bikes/all/")}
              className="border border-white text-white bg-transparent hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-2.5 md:py-3.5 rounded-none text-xs md:text-sm font-semibold tracking-[0.15em] uppercase cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              SHOP BY BIKE
            </button>
            <button
              onClick={() => navigate("/product-catalog/all/")}
              className="border border-white/20 text-white/60 bg-transparent hover:border-white hover:text-white transition-all duration-300 px-6 md:px-8 py-2.5 md:py-3.5 rounded-none text-xs md:text-sm font-semibold tracking-[0.15em] uppercase sm:ml-2 cursor-pointer"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              EXPLORE UNIVERSAL PRODUCTS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withDeviceDetails(HeroSection);

