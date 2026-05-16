import type { RouteObject } from 'react-router-dom'
import { createBrowserRouter, Navigate, useLocation } from 'react-router-dom'

import ProtectedRoutes from '@/Configurations/Routing/ProtectedRoutes'

import { ROUTES } from '@/Constants/Routes'
import PublicRoutes from '@/Configurations/Routing/PublicRoutes'

import { lazyLoadPage } from '@/Helpers/Route'
import Loading from '@/components/Loading'
import AdminRoutes from '@/Admin/Configurations/AdminRoutes'
import ErrorBoundary from './ErrorBoundary'
import AppStore from '../AppStore'

const Landing = lazyLoadPage(() => import("@/pages/Landing"), Loading);
const ProductDetailPage = lazyLoadPage(() => import("@/pages/ProductDetail"), Loading);
const ProductCatalogPage = lazyLoadPage(() => import("@/pages/ProductCatalog"), Loading);
const BikesPage = lazyLoadPage(() => import("@/pages/Bikes"), Loading);
const BikeDetailPage = lazyLoadPage(() => import("@/pages/BikeDetail"), Loading);
const BlogsPage = lazyLoadPage(() => import("@/pages/Blogs"), Loading);
const BlogDetailPage = lazyLoadPage(() => import("@/pages/Blogs/BlogDetail"), Loading);
const OurStoriesPage = lazyLoadPage(() => import("@/pages/OurStories"), Loading);
const Cart = lazyLoadPage(() => import("@/pages/Cart"), Loading);
const NotFound = lazyLoadPage(() => import("@/pages/ErrorScreens/NotFound"), Loading);
const ContactUsForm = lazyLoadPage(() => import("@/pages/QuickLinks/ContactUs"), Loading);
const Checkout = lazyLoadPage(() => import("@/pages/Checkout"), Loading);
const OrderDetails = lazyLoadPage(() => import("@/pages/OrderDetails"), Loading)
const ProfileDetails = lazyLoadPage(() => import("@/pages/ProfileDetails"), Loading)
const Wishlist = lazyLoadPage(() => import("@/pages/Wishlist"), Loading)
const TermsAndCondition = lazyLoadPage(() => import("@/pages/QuickLinks/TermsConditions"), Loading);
const Disclaimer = lazyLoadPage(() => import("@/pages/QuickLinks/Disclaimer"), Loading);
const PrivacyPolicy = lazyLoadPage(() => import("@/pages/QuickLinks/PrivacyPolicy"), Loading);
const OrderList = lazyLoadPage(() => import("@/pages/OrderDetails/OrderList"), Loading);

const ReturnExchange = lazyLoadPage(() => import("@/pages/QuickLinks/ReturnAndExchange"), Loading);
const OrderSuccessful = lazyLoadPage(() => import("@/pages/OrderDetails/OrderSuccessful"), Loading);

const AdminLogin = lazyLoadPage(() => import("@/Admin/Login"), Loading);
const AdminDashboard = lazyLoadPage(() => import("@/Admin/Dashboard"), Loading);
const AdminProducts = lazyLoadPage(() => import("@/Admin/Products"), Loading);
const AdminActiveCarts = lazyLoadPage(() => import("@/Admin/ActiveCarts"), Loading);
const AdminOrderList = lazyLoadPage(() => import("@/Admin/OrderList"), Loading);

function DynamicRedirect() {
  const location = useLocation();
  const state = AppStore.getState();
  const initialLoading = state.landing.initialLoading
  const isAdminPath = location.pathname === ROUTES.ADMIN || location.pathname.startsWith(`${ROUTES.ADMIN}/`)

  return (
    <Navigate
      replace
      to={
        isAdminPath
          ? ROUTES.ADMIN
          :
        initialLoading
          ? ROUTES.PAGE_NOT_FOUND
          : ROUTES.BASE_URL
      }
    />
  );
}

export const routeObj: RouteObject[] = [
  {
    path: ROUTES.ADMIN,
    element: <AdminRoutes />,
    errorElement: <ErrorBoundary />,
    children: [
      { index: true, element: AdminLogin },
      { path: "login", element: AdminLogin },
      { path: "dashboard", element: AdminDashboard },
      { path: "products", element: AdminProducts },
      { path: "active-carts", element: AdminActiveCarts },
      { path: "orders", element: AdminOrderList },
      { path: "*", element: <Navigate replace to={ROUTES.ADMIN_DASHBOARD} /> },
    ]
  },
  {
    element: <PublicRoutes />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: ROUTES.BASE_URL, element: Landing },
      { path: ROUTES.PRODUCT_DETAIL, element: ProductDetailPage },
      { path: ROUTES.PRODUCT_CATALOG, element: ProductCatalogPage },
      { path: ROUTES.BIKES, element: BikesPage },
      { path: ROUTES.BIKE_DETAIL, element: BikeDetailPage },
      { path: ROUTES.BLOGS, element: BlogsPage },
      { path: ROUTES.BLOG_DETAIL, element: BlogDetailPage },
      { path: ROUTES.OUR_STORIES, element: OurStoriesPage },
      { path: ROUTES.CART, element: Cart },
      { path: ROUTES.CONTACT_US, element: ContactUsForm },
      { path: ROUTES.CHECKOUT, element: Checkout },
      { path: ROUTES.PAGE_NOT_FOUND, element: NotFound },
      { path: ROUTES.TERMSANDCONDITIONS, element: TermsAndCondition },
      { path: ROUTES.DISCLAIMER, element: Disclaimer },
      { path: ROUTES.PRIVACYPOLICY, element: PrivacyPolicy },
      { path: ROUTES.RETURN_EXCHANGE, element: ReturnExchange },
      { path: ROUTES.ANY, element: <DynamicRedirect /> }
    ],
  },
  {
    element: <ProtectedRoutes />,
    errorElement: <ErrorBoundary />,
    children: [
      { path: ROUTES.PROFILE, element: ProfileDetails },
      { path: ROUTES.WISHLIST, element: Wishlist },
      { path: ROUTES.ORDER_LIST, element: OrderList },
      { path: ROUTES.ORDER_DETAILS, element: OrderDetails },
      { path: ROUTES.ORDER_SUCCESSFUL, element: OrderSuccessful },
    ]
  }
];

export const getAppRouter = () => createBrowserRouter(routeObj)
