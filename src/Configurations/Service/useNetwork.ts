import ShopByBikeService from "@/Redux/Product/Services/ShopByBikeService";
import AppStore from "../AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import ZProBikeService from "@/Redux/Product/Services/ZProBikeService";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import useCart from "@/hooks/useCart";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getLoginDetails, isdCodeDetails } from "@/Redux/Auth/Selectors";
import getIsdListServiceAction from "@/Redux/Auth/Services/GetIsdCodes";
import currencyListServiceAction from "@/Redux/Landing/Services/CurrencyList";
import { getCurrencyList } from "@/Redux/Landing/Selectors";

export function useNetwork() {
  const state = AppStore.getState();
  const dispatch = AppStore.dispatch;

  const shopByBike = state.product.menu.shopByBike;
  const zProBike = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;
  const initialCartLoaded = state.cart.initialCartLoaded;
  const currencies = state.landing.currencyList
  const loginDetails = useSelector(getLoginDetails);
  const isdCode = useSelector(isdCodeDetails);

  const { phoneNumber = "" } = loginDetails;

  const { getCartFromDB } = useCart()

  const retry = autoRetry()

  async function performOps() {
    const requests: Promise<any>[] = []
  
    try {
      if (!shopByBike.length) requests.push(retry(() => dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))))
      if (!zProBike.length) requests.push(retry(() => dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))))
      if (!productCategory.length) requests.push(retry(() => dispatch(ProductCategoryCountService())));
      if (!initialCartLoaded && phoneNumber) requests.push(retry(() => getCartFromDB()))
      if (!isdCode.length) requests.push(retry(() => dispatch(getIsdListServiceAction())))
      if (!currencies.length) requests.push(retry(()  => dispatch(currencyListServiceAction())))
      await Promise.allSettled(requests)
    } catch (error: any) {
    }
  }

  useEffect(() => {
    performOps()
  }, [])

  return null;
}
