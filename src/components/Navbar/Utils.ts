import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import { MenuItemsName } from "./Constant";
import { MenuOptionsType } from "./Types";
import AppStore from "@/Configurations/AppStore";
import { BikeCategoryEnum } from "@/Constants/AppConstant";

export const getMenuOption = (): MenuOptionsType[] => {
  const state = AppStore.getState();
  const shopByBike = state.product.menu.shopByBike;
  const zProBikes = state.product.menu.zProBikes;
  const productCategory = state.product.menu.productCategory;

  const productCategoryList: MenuOptionsType[] = productCategory.map((item) => {
    return {
      _id: Math.floor(Math.random() * 100 + 1).toString(),
      name: item.name,
      models: [],
      route: ROUTES.PRODUCT_CATALOG,
    };
  });

  return [
    {
      _id: "1",
      name: MenuItemsName.SHOP_BY_BIKE,
      models: shopByBike,
      route: `${SUB_ROUTES.BIKE_ACCESSORIES}/${BikeCategoryEnum.ZANA}${SUB_ROUTES.BIKE}`,
    },
    {
      _id: "2",
      name: MenuItemsName.SHOP_BY_PRODUCT,
      models: productCategoryList,
      route: `${SUB_ROUTES.PRODUCT}`,
    },
    {
      _id: "3",
      name: MenuItemsName.Z_PRO,
      models: zProBikes,
      route: `${SUB_ROUTES.BIKE_ACCESSORIES}/${BikeCategoryEnum.ZPRO}${SUB_ROUTES.BIKE}`,
    },
    {
      _id: "4",
      name: MenuItemsName.RIDE_STORIES,
      models: [],
      route: ROUTES.BLOGS,
    },
    {
      _id: "5",
      name: MenuItemsName.MOTODEVIL,
      models: [],
      route: "https://motodevil.shop",
    },
    {
      _id: "6",
      name: MenuItemsName.OUR_STORY,
      models: [],
      route: ROUTES.OUR_STORIES,
    },
  ];
};

export function convertCurrency(originalPrice: number, toCurrency: string) {
  const state = AppStore.getState();
  const data = state.landing.currencyList;

  // Create a map for quick lookup
  const rates = data.find(curr => curr.code === toCurrency)?.exchangeRate || 0;

  // TODO get the value from BE or env variables 1.7 is a fixed conversion factor
  const result = originalPrice * 1.7 * rates;
  
  return Number(result.toFixed(2)); // rounded to 2 decimals
}