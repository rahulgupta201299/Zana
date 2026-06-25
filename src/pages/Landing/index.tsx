import { lazy, Suspense, useEffect, useMemo, useRef, useState } from "react";
import type { ReactNode } from "react";
import OurPhilosophy from "@/components/OurPhilosophy";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch } from "@/Configurations/AppStore";
import newArrivalsServiceAction from "@/Redux/Landing/Services/NewArrivals";
import garageFavoriteServiceAction from "@/Redux/Landing/Services/GarageFavourite";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import { getGarageFavorite, getNewArrivalsList, getSelectedCurrency } from "@/Redux/Landing/Selectors";

const GarageFavorite = lazy(() => import("@/components/GarageFavorite"));
const NewArrivals = lazy(() => import("@/components/NewArrivals"));
const YouTubeSection = lazy(() => import("@/components/YouTubeSection"));
const InstagramFeed = lazy(() => import("@/components/InstagramFeed"));
const BrandStory = lazy(() => import("@/components/BrandStory"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));

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
      { rootMargin: "600px 0px" },
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


function index() {
  const garageFavoriteList = useSelector(getGarageFavorite)
  const newArrivalsList = useSelector(getNewArrivalsList)
  const currency = useSelector(getSelectedCurrency)

  const dispatch = useDispatch<TAppDispatch>();
  const actions = useMemo(
    () => ({
      newArrivalList: () => dispatch(newArrivalsServiceAction()),
      garageFavorite: () => dispatch(garageFavoriteServiceAction()),

    }),
    [dispatch]
  );

  const retry = autoRetry()

  const fetchData = async () => {
    const requests: Promise<any>[] = []

    const checkNewCurrency = garageFavoriteList.length > 0 && garageFavoriteList[0].currency !== currency

    if (!garageFavoriteList.length || checkNewCurrency) requests.push(retry(() => actions.newArrivalList()))
    if (!newArrivalsList.length || checkNewCurrency) requests.push(retry(() => actions.garageFavorite()))
    await Promise.allSettled(requests)
  };

  useEffect(() => {
    fetchData();
  }, [currency]);

  return (
    <div className="min-h-screen">
      <OurPhilosophy />
      <LazyOnVisible minHeight={520}>
        <GarageFavorite />
      </LazyOnVisible>
      <LazyOnVisible minHeight={520}>
        <NewArrivals />
      </LazyOnVisible>
      <LazyOnVisible minHeight={320}>
        <YouTubeSection />
      </LazyOnVisible>
      <LazyOnVisible minHeight={480}>
        <InstagramFeed />
      </LazyOnVisible>
      {/* <BlogsSection /> */}
      <LazyOnVisible minHeight={420}>
        <BrandStory />
      </LazyOnVisible>
      <LazyOnVisible minHeight={360}>
        <TestimonialsSection />
      </LazyOnVisible>
        
    </div>
  );
}

export default index;
