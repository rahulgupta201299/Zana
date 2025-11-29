import ShopByBikeService from "@/Redux/Product/Services/ShopByBikeService";
import AppStore from "../AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";
import ZProBikeService from "@/Redux/Product/Services/ZProBikeService";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import { ROUTES } from "@/Constants/Routes";

export async function appServiceOnMount() {
  const state = AppStore.getState();
  const dispatch = AppStore.dispatch;

  const shopByBike = state.product.menu.shopByBike;
  const zProBike = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;

  window.scrollTo(0, 0);
  try {
    if (!shopByBike.length)
      await dispatch(ShopByBikeService({ category: BikeCategoryEnum.ZANA }));
    if (!zProBike.length)
      await dispatch(ZProBikeService({ category: BikeCategoryEnum.ZPRO }));
    if (!productCategory.length) await dispatch(ProductCategoryCountService());
  } catch (error: any) {}
}

export function onMountChecks() {
  const location = window.location;
  const dispatch = AppStore.dispatch;

  if (location.pathname === ROUTES.CHECKOUT) {
	// TODO handle open the otp login modal if not logged in
  }
}
