import ShopByBikeService from "@/Redux/Product/Services/ShopByBikeService";
import AppStore from "../AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import ZProBikeService from "@/Redux/Product/Services/ZProBikeService";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import { ROUTES } from "@/Constants/Routes";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import useCart from "@/hooks/useCart";
import { useEffect } from "react";

export function useNetwork() {
  const state = AppStore.getState();
  const dispatch = AppStore.dispatch;

  const shopByBike = state.product.menu.shopByBike;
  const zProBike = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;
  const initialCartLoaded = state.cart.initialCartLoaded;
  const phoneNumber = state.auth.login.phoneNumber;

  const { getCartFromDB } = useCart()

  const retry = autoRetry()

  async function performOps() {
    window.scrollTo(0, 0);
    const requests: Promise<any>[] = []
  
    try {
      if (!shopByBike.length) requests.push(retry(() => dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))))
      if (!zProBike.length) requests.push(retry(() => dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))))
      if (!productCategory.length) requests.push(retry(() => dispatch(ProductCategoryCountService())));
      if (!initialCartLoaded && phoneNumber) requests.push(retry(() => getCartFromDB()))
      
      await Promise.allSettled(requests)
    } catch (error: any) {
    }
  }

  useEffect(() => {
    performOps()
  }, [])

  return null;
}
