export const SUB_ROUTES = Object.freeze({
  PRODUCT: '/product',
  BIKE: '/bike',
  BIKES: '/bikes',
  BLOG: '/blog',
})

export const ROUTES = Object.freeze({
  BASE_URL: '/',
  PRODUCT_DETAIL: `${SUB_ROUTES.PRODUCT}/:productCategory/:productItem/:productId`,
  PRODUCT_CATALOG: '/product-catalog',
  BIKES: `/:bikeType${SUB_ROUTES.BIKES}`,
  BIKE_DETAIL: `/:bikeType${SUB_ROUTES.BIKE}/:bikeBrand/:bikeModel/:bikeId`,
  BLOGS: '/blogs',
  BLOG_DETAIL: `${SUB_ROUTES.BLOG}/:id`,
  OUR_STORIES: '/our-stories',
  CART: '/cart',
  SEARCH: '/search',
  CONTACT_US:'/contact-us',
  CHECKOUT:'/checkout',
  PAGE_NOT_FOUND: '/page-not-found',
  ORDER_LIST: '/my-orders',
  ORDER_DETAILS:  `/my-orders/:id`,
  PROFILE: '/profile',
  WISHLIST: '/wishlist',
  TERMSANDCONDITIONS:'/terms-and-conditions',
  DISCLAIMER: '/disclaimer',
  PRIVACYPOLICY: '/privacy-policy',
  RETURN_EXCHANGE: '/return-and-exchange',
  ORDER_SUCCESSFUL: '/success/thank-you',
  ANY: '*'
})
