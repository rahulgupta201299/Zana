import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, Navigate } from 'react-router-dom'

import ProtectedRoutes from '@/Configurations/Routing/ProtectedRoutes'

import { ROUTES } from '@/Constants/Routes'
import PublicRoutes from '@/Configurations/Routing/PublicRoutes'

import { lazyLoadPage } from '@/Helpers/Route'
import Loading from '@/components/Loading'

const Landing = lazyLoadPage(() => import("@/pages/Landing"), Loading);
const TopSellingProductsPage = lazyLoadPage(() => import("@/pages/TopSellingProductsPage"), Loading);
const ProductDetailPage = lazyLoadPage(() => import("@/pages/ProductDetail"), Loading);
const AccessoriesPage = lazyLoadPage(() => import("@/pages/AccessoriesPage"), Loading);
const ProductCatalogPage = lazyLoadPage(() => import("@/pages/ProductCatalog"), Loading);
const BikesPage = lazyLoadPage(() => import("@/pages/Bikes"), Loading);
const BikeDetailPage = lazyLoadPage(() => import("@/pages/BikeDetail"), Loading);
const BikeAccessoriesPage = lazyLoadPage(() => import("@/pages/BikeAccessoriesPage"), Loading);
const BlogsPage = lazyLoadPage(() => import("@/pages/Blogs"), Loading);
const BlogDetailPage = lazyLoadPage(() => import("@/pages/Blogs/BlogDetail"), Loading);
const OurStoriesPage = lazyLoadPage(() => import("@/pages/OurStories"), Loading);
const BikeViewPage = lazyLoadPage(() => import("@/pages/BikeViewPage"), Loading);
const CartCheckoutPage = lazyLoadPage(() => import("@/pages/CartCheckoutPage"), Loading);
const SearchPage = lazyLoadPage(() => import("@/pages/SearchPage"), Loading);
const NotFound = lazyLoadPage(() => import("@/pages/ErrorScreens/NotFound"), Loading);
const ContactUsForm = lazyLoadPage(() => import("@/pages/QuickLinks/ContactUs"), Loading);
const Checkout = lazyLoadPage(() => import("@/pages/Checkout"), Loading);
const OrderDetails = lazyLoadPage(() => import("@/pages/OrderDetails"), Loading )
const ProfileDetails = lazyLoadPage(() => import("@/pages/ProfileDetails"), Loading)
const Wishlist = lazyLoadPage(() => import("@/pages/Wishlist"), Loading)


export const routeObj: RouteObject[] = [
  {
    element: <PublicRoutes />,
    errorElement: <Navigate to={ROUTES.ANY} replace />,
    children: [
      { path: ROUTES.BASE_URL, element: Landing },
      { path: ROUTES.TOP_SELLING_PRODUCTS, element: TopSellingProductsPage },
      { path: ROUTES.PRODUCT_DETAIL, element: ProductDetailPage },
      { path: ROUTES.ACCESSORIES, element: AccessoriesPage },
      { path: ROUTES.PRODUCT_CATALOG, element: ProductCatalogPage },
      { path: ROUTES.BIKES, element: BikesPage },
      { path: ROUTES.BIKE_DETAIL, element: BikeDetailPage },
      { path: ROUTES.BIKE_ACCESSORIES, element: BikeAccessoriesPage },
      { path: ROUTES.BLOGS, element: BlogsPage },
      { path: ROUTES.BLOG_DETAIL, element: BlogDetailPage },
      { path: ROUTES.OUR_STORIES, element: OurStoriesPage },
      { path: ROUTES.BIKE_VIEW, element: BikeViewPage },
      { path: ROUTES.CART, element: CartCheckoutPage },
      { path: ROUTES.SEARCH, element: SearchPage },
      { path: ROUTES.CONTACT_US, element: ContactUsForm },
      { path: ROUTES.CHECKOUT, element: Checkout },
      { path: ROUTES.PAGE_NOT_FOUND, element: NotFound },
      { path: ROUTES.ANY, element: NotFound },
      { path: ROUTES.ORDER_DETAILS, element: OrderDetails },
      { path: ROUTES.PROFILE, element: ProfileDetails },
      { path: ROUTES.WISHLIST, element: Wishlist }
    ],
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <Navigate to={ROUTES.ANY} replace />,
    children: [
      // { path: ROUTES.ORDER_DETAILS, element: OrderDetails  },
    ]
  }
];

export const getAppRouter = () => createBrowserRouter(routeObj)
