import NewArrivals from "@/components/NewArrivals";
import OurPhilosophy from "@/components/OurPhilosophy";
import GarageFavorite from "@/components/GarageFavorite";
// import ShopTheLook from "@/components/ShopTheLook";
import YouTubeSection from "@/components/YouTubeSection";
import InstagramFeed from "@/components/InstagramFeed";
import BlogsSection from "@/components/BlogsSection";
import BrandStory from "@/components/BrandStory";
import TestimonialsSection from "@/components/TestimonialsSection";
import CapSection from "@/components/CapSection";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch } from "@/Configurations/AppStore";
import { useEffect, useMemo } from "react";
import newArrivalsServiceAction from "@/Redux/Landing/Services/NewArrivals";
import garageFavoriteServiceAction from "@/Redux/Landing/Services/GarageFavourite";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import { getGarageFavorite, getNewArrivalsList, getSelectedCurrency } from "@/Redux/Landing/Selectors";


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
      <GarageFavorite />
      {/* <ShopTheLook /> */}
      <NewArrivals />
      <YouTubeSection />
      <InstagramFeed />
      <BlogsSection />
      <BrandStory />
      {/* <CapSection /> */}
      <TestimonialsSection />
    </div>
  );
}

export default index;
