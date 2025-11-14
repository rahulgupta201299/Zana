import { MenuItemsName } from "./Constant";

export type TopLevelItemsType = {
  name: string;
  route: string;
  Component: any;
};

export type MenuItemsType = {
  name: MenuItemsName
  route: string
}

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  description?: string;
}