import SearchIcon from "@mui/icons-material/Search";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { MenuOptionsType, TopLevelItemsType } from "./Types";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";

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
    models: [
      {
        _id: "11",
        name: "BMW",
        models: [
          { _id: "111", name: "310 GS" },
          { _id: "112", name: "F 900 GSA" },
        ],
      },
      {
        _id: "12",
        name: "BSA",
        models: [{ _id: "121", name: "Gold Star 650" }],
      },
      {
        _id: "13",
        name: "Bajaj",
        models: [
          { _id: "131", name: "Pulsar NS 400" },
          { _id: "132", name: "Pulsar NS 400Z" },
        ],
      },
      {
        _id: "14",
        name: "Harley Davidson",
        models: [{ _id: "141", name: "X440" }],
      },
      {
        _id: "15",
        name: "Honda",
        models: [
          { _id: "151", name: "500 NX" },
          { _id: "152", name: "CB 200X" },
        ],
      },
      {
        _id: "16",
        name: "KTM",
        models: [
          { _id: "161", name: "Adventure 250-390" },
          { _id: "162", name: "Adventure" },
          { _id: "163", name: "390 Duke Gen 3" },
        ],
      },
      {
        _id: "17",
        name: "Kawasaki",
        models: [{ _id: "171", name: "Versys 650" }],
      },
      {
        _id: "18",
        name: "Royal Enfield",
        models: [
          { _id: "181", name: "GT 650" },
          { _id: "182", name: "Guerrilla 450" },
          { _id: "183", name: "Himalayan 450" },
          { _id: "184", name: "Bear 650" },
          { _id: "185", name: "Classic 350" },
          { _id: "186", name: "Hunter 350" },
          { _id: "187", name: "Interceptor 650" },
          { _id: "188", name: "Meteor 350" },
          { _id: "189", name: "Scram 411" },
          { _id: "1810", name: "Shotgun 650" },
          { _id: "1811", name: "Super Meteor 650" },
        ],
      },
      {
        _id: "19",
        name: "Suzuki",
        models: [{ _id: "191", name: "V-Strom 650" }],
      },
      {
        _id: "110",
        name: "Triumph",
        models: [
          { _id: "1101", name: "Scrambler 400X" },
          { _id: "1102", name: "Speed 400" },
        ],
      },
      {
        _id: "111",
        name: "Yezdi",
        models: [
          { _id: "1111", name: "Adventure" },
          { _id: "1112", name: "Roadster" },
        ],
      },
    ],
    route: `${SUB_ROUTES.BIKE}`
  },
  {
    _id: "2",
    name: MenuItemsName.SHOP_BY_PRODUCT,
    models: [
      {
        _id: "11",
        name: "BMW",
        models: [
          { _id: "111", name: "310 GS" },
          { _id: "112", name: "F 900 GSA" },
        ],
      },
      {
        _id: "12",
        name: "BSA",
        models: [{ _id: "121", name: "Gold Star 650" }],
      },
      {
        _id: "13",
        name: "Bajaj",
        models: [
          { _id: "131", name: "Pulsar NS 400" },
          { _id: "132", name: "Pulsar NS 400Z" },
        ],
      },
      {
        _id: "14",
        name: "Harley Davidson",
        models: [{ _id: "141", name: "X440" }],
      },
      {
        _id: "15",
        name: "Honda",
        models: [
          { _id: "151", name: "500 NX" },
          { _id: "152", name: "CB 200X" },
        ],
      },
      {
        _id: "16",
        name: "KTM",
        models: [
          { _id: "161", name: "Adventure 250-390" },
          { _id: "162", name: "Adventure" },
          { _id: "163", name: "390 Duke Gen 3" },
        ],
      },
      {
        _id: "17",
        name: "Kawasaki",
        models: [{ _id: "171", name: "Versys 650" }],
      },
      {
        _id: "18",
        name: "Royal Enfield",
        models: [
          { _id: "181", name: "GT 650" },
          { _id: "182", name: "Guerrilla 450" },
          { _id: "183", name: "Himalayan 450" },
          { _id: "184", name: "Bear 650" },
          { _id: "185", name: "Classic 350" },
          { _id: "186", name: "Hunter 350" },
          { _id: "187", name: "Interceptor 650" },
          { _id: "188", name: "Meteor 350" },
          { _id: "189", name: "Scram 411" },
          { _id: "1810", name: "Shotgun 650" },
          { _id: "1811", name: "Super Meteor 650" },
        ],
      },
      {
        _id: "19",
        name: "Suzuki",
        models: [{ _id: "191", name: "V-Strom 650" }],
      },
      {
        _id: "110",
        name: "Triumph",
        models: [
          { _id: "1101", name: "Scrambler 400X" },
          { _id: "1102", name: "Speed 400" },
        ],
      },
      {
        _id: "111",
        name: "Yezdi",
        models: [
          { _id: "1111", name: "Adventure" },
          { _id: "1112", name: "Roadster" },
        ],
      },
    ],
    route: `${SUB_ROUTES.PRODUCT}`
  },
  {
    _id: "3",
    name: MenuItemsName.Z_PRO,
    models: [
      {
        _id: "11",
        name: "BMW",
        models: [
          { _id: "111", name: "310 GS" },
          { _id: "112", name: "F 900 GSA" },
        ],
      },
      {
        _id: "12",
        name: "BSA",
        models: [{ _id: "121", name: "Gold Star 650" }],
      },
      {
        _id: "13",
        name: "Bajaj",
        models: [
          { _id: "131", name: "Pulsar NS 400" },
          { _id: "132", name: "Pulsar NS 400Z" },
        ],
      },
      {
        _id: "14",
        name: "Harley Davidson",
        models: [{ _id: "141", name: "X440" }],
      },
      {
        _id: "15",
        name: "Honda",
        models: [
          { _id: "151", name: "500 NX" },
          { _id: "152", name: "CB 200X" },
        ],
      },
      {
        _id: "16",
        name: "KTM",
        models: [
          { _id: "161", name: "Adventure 250-390" },
          { _id: "162", name: "Adventure" },
          { _id: "163", name: "390 Duke Gen 3" },
        ],
      },
      {
        _id: "17",
        name: "Kawasaki",
        models: [{ _id: "171", name: "Versys 650" }],
      },
      {
        _id: "18",
        name: "Royal Enfield",
        models: [
          { _id: "181", name: "GT 650" },
          { _id: "182", name: "Guerrilla 450" },
          { _id: "183", name: "Himalayan 450" },
          { _id: "184", name: "Bear 650" },
          { _id: "185", name: "Classic 350" },
          { _id: "186", name: "Hunter 350" },
          { _id: "187", name: "Interceptor 650" },
          { _id: "188", name: "Meteor 350" },
          { _id: "189", name: "Scram 411" },
          { _id: "1810", name: "Shotgun 650" },
          { _id: "1811", name: "Super Meteor 650" },
        ],
      },
      {
        _id: "19",
        name: "Suzuki",
        models: [{ _id: "191", name: "V-Strom 650" }],
      },
      {
        _id: "110",
        name: "Triumph",
        models: [
          { _id: "1101", name: "Scrambler 400X" },
          { _id: "1102", name: "Speed 400" },
        ],
      },
      {
        _id: "111",
        name: "Yezdi",
        models: [
          { _id: "1111", name: "Adventure" },
          { _id: "1112", name: "Roadster" },
        ],
      },
    ],
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
