import { MenuItemsName } from "./Constant";

export type TopLevelItemsType = {
  name: MenuItemsName;
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

export type MenuOptionsType = {
  _id: string
  name: string
  models?: MenuOptionsType[]
  route?: string
}
