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
import cartUtmServiceAction from "@/Redux/Cart/Services/UtmCartService";
import { setUtmParams, clearUtmParams } from "@/Redux/Cart/Reducer";
import { getUtmParamsFromUrl } from "@/Utils/global";
import { useLocation, useNavigationType } from "react-router";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";

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
  const location = useLocation();
  const initialLocation = useRef(location.pathname);

  const navigationType = useNavigationType();

  useEffect(() => {
    if (location.pathname !== initialLocation.current) {
      // Only close the signup popup when the user navigates backward (POP).
      // On PUSH / REPLACE the popup may have been opened intentionally as part
      // of the same action that triggered the navigation (e.g. "BUY NOW" when
      // the user has no phone number), so we must not close it here.
      if (navigationType === "POP") {
        dispatch(setOpenSignupPopup(false));
      }
      initialLocation.current = location.pathname;
    }
  }, [location.pathname, navigationType]);

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

      const currencyListRequest = !currencies.length
        ? retry(() => dispatch(currencyListServiceAction()))
        : null;

      if (!phoneNumber && newCurrency) {
        const newCartDetail = createProductConverter(newCurrency);
        dispatch(cartModifyActions.success(newCartDetail));
      }

      if (!shopByBike.length) requests.push(retry(() => dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))))
      if (!zProBike.length) requests.push(retry(() => dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))))
      if (!productCategory.length) requests.push(retry(() => dispatch(ProductCategoryCountService())));
      if (!initialCartLoaded && phoneNumber) requests.push(retry(() => getCartFromDB({ newCurrency })))
      if (!isdCode.length) requests.push(retry(() => dispatch(getIsdListServiceAction())))
      if (currencyListRequest) requests.push(currencyListRequest)

      const utmParams = getUtmParamsFromUrl();
      if (utmParams) {
        dispatch(setUtmParams(utmParams));
        if (phoneNumber) {
          requests.push(
            retry(() => dispatch(cartUtmServiceAction({ phoneNumber, ...utmParams }))).then(() => {
              // @ts-ignore
              dispatch(clearUtmParams());
            })
          );
        }
      }

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
