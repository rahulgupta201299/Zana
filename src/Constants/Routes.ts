import Wishlist from "@/pages/ProfileDetails/Wishlist"

export const SUB_ROUTES = Object.freeze({
  PRODUCT: '/product',
  BIKE: '/bike',
  BIKES: '/bikes',
  BLOG: '/blog',
})

export const ROUTES = Object.freeze({
  BASE_URL: '/',
  TOP_SELLING_PRODUCTS: '/top-selling-products',
  PRODUCT_DETAIL: `${SUB_ROUTES.PRODUCT}/:productCategory/:productItem/:productId`,
  PRODUCT_CATALOG: '/product-catalog',
  ACCESSORIES: '/accessories',
  BIKES: `/:bikeType${SUB_ROUTES.BIKES}`,
  BIKE_DETAIL: `/:bikeType${SUB_ROUTES.BIKE}/:bikeBrand/:bikeModel/:bikeId`,
  BIKE_ACCESSORIES: '/bike-accessories',
  BLOGS: '/blogs',
  BLOG_DETAIL: `${SUB_ROUTES.BLOG}/:id`,
  OUR_STORIES: '/our-stories',
  BIKE_VIEW: '/bike-view',
  CART: '/cart',
  SEARCH: '/search',
  CONTACT_US:'/contact-us',
  CHECKOUT:'/checkout',
  PAGE_NOT_FOUND: '/page-not-found',
  ORDER_DETAILS: '/order-details',
  PROFILE: '/profile',
  WISHLIST: '/wishlist',
  ANY: '*'
})
