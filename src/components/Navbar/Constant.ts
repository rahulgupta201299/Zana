import { Search, ShoppingCart, User } from "lucide-react";
import { TopLevelItemsType } from "./Types";
import { ROUTES } from "@/Constants/Routes";

export enum MenuItemsName {
  SEARCH = "Search",
  PROFILE = "Profile",
  CART = "Cart",
  SHOP_BY_BIKE = "SHOP BY BIKE",
  UNIVERSAL_PRODUCT = "UNIVERSAL PRODUCTS",
  RIDE_STORIES = "RIDE STORIES",
  OUR_STORY = "OUR STORY",
  Z_PRO = "Z PRO",
  MOTODEVIL = "MOTODEVIL"
}

export const TopLevelItems: TopLevelItemsType[] = [
  {
    name: MenuItemsName.SEARCH,
    Component: Search,
  },
  {
    name: MenuItemsName.PROFILE,
    Component: User,
  },
  {
    name: MenuItemsName.CART,
    Component: ShoppingCart,
  },
];

export const MenuItems = [
  {
    name: MenuItemsName.SHOP_BY_BIKE,
    route: "",
  },
  {
    name: MenuItemsName.UNIVERSAL_PRODUCT,
    route: "",
  },
  {
    name: MenuItemsName.Z_PRO,
    route: '',
  },
  // {
  //   name: MenuItemsName.RIDE_STORIES,
  //   route: ROUTES.BLOGS,
  // },
  {
    name: MenuItemsName.MOTODEVIL,
    route: 'https://motodevil.shop'
  },
  {
    name: MenuItemsName.OUR_STORY,
    route: ROUTES.OUR_STORIES,
  },
];
