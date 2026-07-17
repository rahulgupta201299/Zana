import { lazy, Suspense, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
// import OurPhilosophy from "@/components/OurPhilosophy";
import ShowcaseSection from "@/components/ShowcaseSection";
import BrandShowcase from "@/components/BrandShowcase";

// const GarageFavorite = lazy(() => import("@/components/GarageFavorite"));
// const NewArrivals = lazy(() => import("@/components/NewArrivals"));
const YouTubeSection = lazy(() => import("@/components/YouTubeSection"));
const InstagramFeed = lazy(() => import("@/components/InstagramFeed"));
// const BrandStory = lazy(() => import("@/components/BrandStory"));
// const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));

function LazyOnVisible({
  children,
  minHeight = 360,
}: {
  children: ReactNode;
  minHeight?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) return;

    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? undefined : minHeight }}>
      {isVisible && <Suspense fallback={null}>{children}</Suspense>}
    </div>
  );
}

function Landing() {

  return (
    <div className="min-h-screen">
      <BrandShowcase/>
      {/* <OurPhilosophy /> */}
      <ShowcaseSection 
        sectionTitle = "Your motorcycle. Your kit."
        sectionSubtitle = {`No drilling, no bending, no "universal-ish". Every part below bolts onto the model it's named after - and nothing else.`}
        type="bike"
      />
      <ShowcaseSection 
        sectionTitle = "Universal Products"
        sectionSubtitle = "Some gear doesn't care what you ride. Fog lights and luggage systems designed to move between motorcycles as easily as you do."
        sectionSupertitle = "FITS EVERY GARAGE"
        type="product"
      />
      {/* <LazyOnVisible minHeight={520}>
        <GarageFavorite />
      </LazyOnVisible>
      <LazyOnVisible minHeight={520}>
        <NewArrivals />
      </LazyOnVisible> */}
      <LazyOnVisible minHeight={320}>
        <YouTubeSection />
      </LazyOnVisible>
      <LazyOnVisible minHeight={480}>
        <InstagramFeed />
      </LazyOnVisible>
      {/* <BlogsSection /> */}
      {/* <LazyOnVisible minHeight={420}>
        <BrandStory />
      </LazyOnVisible> */}
      {/* <LazyOnVisible minHeight={360}>
        <TestimonialsSection />
      </LazyOnVisible> */}
        
    </div>
  );
}

export default Landing;
