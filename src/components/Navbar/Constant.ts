import SearchIcon from '@mui/icons-material/Search';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { TopLevelItemsType } from "./Types";
import { ROUTES } from '@/Constants/Routes';

export enum MenuItemsName {
	SEARCH = "Search",
	PROFILE = "Profile",
	CART = "Cart",
	SHOP_BY_BIKE = 'SHOP BY BIKE',
	SHOP_BY_PRODUCT = 'SHOP BY PRODUCT',
	RIDE_STORIES = 'RIDE STORIES',
	OUR_STORY = 'OUR STORY',
	Z_PRO = 'Z PRO'
}

export const TopLevelItems: TopLevelItemsType[] = [
	{
		name: MenuItemsName.SEARCH,
		Component: SearchIcon
	},
	{
		name: MenuItemsName.PROFILE,
		Component: PermIdentityOutlinedIcon
	},
	{
		name: MenuItemsName.CART,
		Component: ShoppingCartOutlinedIcon
	}
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
		name: MenuItemsName.Z_PRO,
		route: ROUTES.Z_PRO
	},
	{
		name: MenuItemsName.RIDE_STORIES,
		route: ROUTES.BLOGS
	},
	{
		name: MenuItemsName.OUR_STORY,
		route: ROUTES.OUR_STORIES
	}
]