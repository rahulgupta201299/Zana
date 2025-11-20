import { User, Search, ShoppingCart} from "lucide-react";
import { TopLevelItemsType } from "./Types";

export enum MenuItemsName {
	Search = "Search",
	Profile = "Profile",
	Cart = "Cart",
	SHOP_BY_BIKE = 'SHOP BY BIKE',
	SHOP_BY_PRODUCT = 'SHOP BY PRODUCT',
	RIDE_STORIES = 'RIDE STORIES',
	OUR_STORY = 'OUR STORY'
}

export const TopLevelItems: TopLevelItemsType[] = [
	{
		name: MenuItemsName.Search,
		route: '/search',
		Component: Search
	},
	{
		name: MenuItemsName.Profile,
		route: '/profile',
		Component: User
	},
	{
		name: MenuItemsName.Cart,
		route: '/cart',
		Component: ShoppingCart
	},
]

export const MenuItems = [
	{
		name: MenuItemsName.SHOP_BY_BIKE,
		route: ''
	},
	{
		name: MenuItemsName.SHOP_BY_PRODUCT,
		route: ''
	},
	{
		name: MenuItemsName.RIDE_STORIES,
		route: '/blogs'
	},
	{
		name: MenuItemsName.OUR_STORY,
		route: '/our-stories'
	}
]