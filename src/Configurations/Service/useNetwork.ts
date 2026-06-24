import ShopByBikeService from "@/Redux/Product/Services/ShopByBikeService";
import AppStore from "../AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import ZProBikeService from "@/Redux/Product/Services/ZProBikeService";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import useCart from "@/hooks/useCart";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { getLoginDetails, isdCodeDetails } from "@/Redux/Auth/Selectors";
import getIsdListServiceAction from "@/Redux/Auth/Services/GetIsdCodes";
import currencyListServiceAction from "@/Redux/Landing/Services/CurrencyList";

import ipLocationCurrencyServiceAction from "@/Redux/Landing/Services/IpLocationCurrency";
import { IpLocationCurrencyType } from "@/Redux/Landing/Types";
import { createProductConverter } from "@/components/Navbar/Utils";
import { cartModifyActions } from "@/Redux/Cart/Action";

// import geoLocationServiceAction from "@/Redux/Landing/Services/GeoLocation";
// import { GeolocationType } from "@/Redux/Landing/Types";

// function getCurrentPosition(): Promise<GeolocationPosition> {
//   return new Promise((resolve, reject) => {
//     if (!navigator.geolocation) {
//       reject(new Error("Geolocation is not supported"));
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(resolve, reject, {
//       enableHighAccuracy: false,
//       maximumAge: 30 * 60 * 1000,
//       timeout: 5000,
//     });
//   });
// }

export function useNetwork() {
  const state = AppStore.getState();
  const dispatch = AppStore.dispatch;
  const geolocationCurrencyLoaded = useRef(false);

  const shopByBike = state.product.menu.shopByBike;
  const zProBike = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;
  const initialCartLoaded = state.cart.initialCartLoaded;
  const currencies = state.landing.currencyList;
  const loginDetails = useSelector(getLoginDetails);
  const isdCode = useSelector(isdCodeDetails);

  const { phoneNumber = "" } = loginDetails;

  const { getCartFromDB } = useCart()

  const retry = autoRetry()

  async function setCurrencyFromGeolocation(): Promise<IpLocationCurrencyType> {
    if (geolocationCurrencyLoaded.current) return;

    try {
      // const position = await getCurrentPosition();
      // const { latitude: lat, longitude: lng } = position.coords;
      // const geoLocation = await dispatch(geoLocationServiceAction({ lat, lng }));
      const ipLocationCurrency = await dispatch(ipLocationCurrencyServiceAction()) as IpLocationCurrencyType;

      geolocationCurrencyLoaded.current = true;
      // const currency = ipLocationCurrency.currency || ipLocationCurrency.currencyDetails?.code;

     return ipLocationCurrency;
    } catch (error) {
      return;
    }
  }

  async function performOps() {
    const requests: Promise<any>[] = []
  
    try {
      const ipLocationCurrency = await setCurrencyFromGeolocation();
      const newCurrency = ipLocationCurrency?.currency || ipLocationCurrency?.currencyDetails?.code;

      if (!currencies.length) await dispatch(currencyListServiceAction());

      if (!phoneNumber && newCurrency) {
        const newCartDetail = createProductConverter(newCurrency);
        dispatch(cartModifyActions.success(newCartDetail));
      }

      if (!shopByBike.length) requests.push(retry(() => dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))))
      if (!zProBike.length) requests.push(retry(() => dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))))
      if (!productCategory.length) requests.push(retry(() => dispatch(ProductCategoryCountService())));
      if (!initialCartLoaded && phoneNumber) requests.push(retry(() => getCartFromDB({ newCurrency })))
      if (!isdCode.length) requests.push(retry(() => dispatch(getIsdListServiceAction())))
      // Recalling if failed before, so that we can get the latest currency list and update the cart accordingly
      if (!currencies.length) requests.push(retry(()  => dispatch(currencyListServiceAction())))

      await Promise.allSettled(requests)
    } catch (error: any) {
      return;
    }
  }

  useEffect(() => {
    performOps()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    let permissionStatus: PermissionStatus | null = null;

    if (!navigator.permissions?.query) return;

    navigator.permissions
      .query({ name: "geolocation" })
      .then((status) => {
        permissionStatus = status;
        status.onchange = () => {
          if (status.state === "granted") setCurrencyFromGeolocation();
        };
      })
      .catch(() => undefined);

    return () => {
      if (permissionStatus) permissionStatus.onchange = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return null;
}
