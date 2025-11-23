import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { MenuOptionsType, TopLevelItemsType } from "./Types";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import AppStore from "@/Configurations/AppStore";

export enum MenuItemsName {
  SEARCH = "Search",
  PROFILE = "Profile",
  CART = "Cart",
  SHOP_BY_BIKE = "SHOP BY BIKE",
  SHOP_BY_PRODUCT = "SHOP BY PRODUCT",
  RIDE_STORIES = "RIDE STORIES",
  OUR_STORY = "OUR STORY",
  Z_PRO = "Z PRO",
}

const state = AppStore.getState()
const shopByBike = state.product.menu.shopByBike

export const TopLevelItems: TopLevelItemsType[] = [
  {
    name: MenuItemsName.SEARCH,
    Component: SearchIcon,
  },
  {
    name: MenuItemsName.PROFILE,
    Component: PermIdentityOutlinedIcon,
  },
  {
    name: MenuItemsName.CART,
    Component: ShoppingCartOutlinedIcon,
  },
];

export const MenuItems = [
  {
    name: MenuItemsName.SHOP_BY_BIKE,
    route: "",
  },
  {
    name: MenuItemsName.SHOP_BY_PRODUCT,
    route: "",
  },
  {
    name: MenuItemsName.Z_PRO,
    route: '',
  },
  {
    name: MenuItemsName.RIDE_STORIES,
    route: ROUTES.BLOGS,
  },
  {
    name: MenuItemsName.OUR_STORY,
    route: ROUTES.OUR_STORIES,
  },
];

// TODO: replace it with BE data
export const MenuOption: MenuOptionsType[] = [
  {
    _id: "1",
    name: MenuItemsName.SHOP_BY_BIKE,
    models: shopByBike,
    route: `${SUB_ROUTES.BIKE}`
  },
  {
    _id: "2",
    name: MenuItemsName.SHOP_BY_PRODUCT,
    models: shopByBike,
    route: `${SUB_ROUTES.PRODUCT}`
  },
  {
    _id: "3",
    name: MenuItemsName.Z_PRO,
    models: shopByBike,
    route: `${SUB_ROUTES.Z_PRO_BIKE}`
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
