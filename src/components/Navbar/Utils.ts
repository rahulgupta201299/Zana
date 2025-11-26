import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import { MenuItemsName } from "./Constant";
import { MenuOptionsType } from "./Types";
import AppStore from "@/Configurations/AppStore";

export const getMenuOption = (): MenuOptionsType[] => {
  const state = AppStore.getState();
  const shopByBike = state.product.menu.shopByBike;
  const productCategory = state.product.menu.productCategory;

  const productCategoryList: MenuOptionsType[] = productCategory.map(item => {
    return {
      _id: Math.floor(Math.random() * 100 + 1).toString(),
      name: item.name,
      models: [],
      route: ROUTES.PRODUCT_CATALOG
    }
  })

  return [
    {
      _id: "1",
      name: MenuItemsName.SHOP_BY_BIKE,
      models: shopByBike,
      route: `${SUB_ROUTES.BIKE}`,
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
      models: shopByBike,
      route: `${SUB_ROUTES.Z_PRO_BIKE}`,
    },
    {
      _id: "4",
      name: MenuItemsName.RIDE_STORIES,
      models: [],
      route: ROUTES.BLOGS,
    },
    {
      _id: "5",
      name: MenuItemsName.OUR_STORY,
      models: [],
      route: ROUTES.OUR_STORIES,
    },
  ];
};
