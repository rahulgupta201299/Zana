import ShopByBikeService from "@/Redux/Product/Services/ShopByBikeService";
import AppStore from "../AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import ZProBikeService from "@/Redux/Product/Services/ZProBikeService";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import { ROUTES } from "@/Constants/Routes";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import getCartDetailServiceAction from "@/Redux/Cart/Services/GetCartDetailService";

export async function appServiceOnMount() {
  const state = AppStore.getState();
  const dispatch = AppStore.dispatch;

  const shopByBike = state.product.menu.shopByBike;
  const zProBike = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;
  const initialCartLoaded = state.cart.initialCartLoaded;

  const retry = autoRetry()

  window.scrollTo(0, 0);

  const requests: Promise<any>[] = []
  
  try {
    if (!shopByBike.length) requests.push(retry(() => dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }))))
    if (!zProBike.length) requests.push(retry(() => dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }))))
    if (!productCategory.length) requests.push(retry(() => dispatch(ProductCategoryCountService())));
    if (!initialCartLoaded) requests.push(retry(() => dispatch(getCartDetailServiceAction())))
    
    await Promise.allSettled(requests)
  } catch (error: any) {
  }
}

export function onMountChecks() {
  const location = window.location;
  const dispatch = AppStore.dispatch;

  if (location.pathname === ROUTES.CHECKOUT) {
	// TODO handle open the otp login modal if not logged in
  }
}
