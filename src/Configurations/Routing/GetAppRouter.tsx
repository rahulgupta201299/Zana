import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'

import ProtectedRoutes from './ProtectedRoutes'

import { ROUTES } from '@/Constants/Routes'

import { lazyLoadPage } from '@/Helpers/Route'

const PublicRoutes = () => <Outlet />

const Index = lazyLoadPage(() => import("@/pages/Index"));
const TopSellingProductsPage = lazyLoadPage(() => import("@/pages/TopSellingProductsPage"));
const ProductDetailPage = lazyLoadPage(() => import("@/pages/ProductDetailPage"));
const AccessoriesPage = lazyLoadPage(() => import("@/pages/AccessoriesPage"));
const ProductCatalogPage = lazyLoadPage(() => import("@/pages/ProductCatalogPage"));
const BikesPage = lazyLoadPage(() => import("@/pages/BikesPage"));
const BikeDetailPage = lazyLoadPage(() => import("@/pages/BikeDetailPage"));
const BikeAccessoriesPage = lazyLoadPage(() => import("@/pages/BikeAccessoriesPage"));
const BlogsPage = lazyLoadPage(() => import("@/pages/BlogsPage"));
const BlogDetailPage = lazyLoadPage(() => import("@/pages/BlogDetailPage"));
const OurStoriesPage = lazyLoadPage(() => import("@/pages/OurStoriesPage"));
const BikeViewPage = lazyLoadPage(() => import("@/pages/BikeViewPage"));
const CartCheckoutPage = lazyLoadPage(() => import("@/pages/CartCheckoutPage"));
const SearchPage = lazyLoadPage(() => import("@/pages/SearchPage"));
const NotFound = lazyLoadPage(() => import("@/pages/NotFound"));

export const routeObj: RouteObject[] = [
  {
    element: <PublicRoutes />,
    errorElement: <Navigate to={ROUTES.ANY} replace />,
    children: [
      { path: ROUTES.BASE_URL, element: Index },
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
      { path: ROUTES.ANY, element: NotFound },
    ],
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <Navigate to={ROUTES.ANY} replace />,
    children: []
  }
];

export const getAppRouter = () => createBrowserRouter(routeObj)
