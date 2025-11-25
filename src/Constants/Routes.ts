export const SUB_ROUTES = Object.freeze({
  PRODUCT: '/product',
  Z_PRO_BIKE: '/z-pro/bike',
  BIKE: '/bike',
  BLOG: '/blog',
})

export const ROUTES = Object.freeze({
  BASE_URL: '/',
  TOP_SELLING_PRODUCTS: '/top-selling-products',
  PRODUCT_DETAIL: `${SUB_ROUTES.PRODUCT}/:productCategory/:productItem/:productId`,
  PRODUCT_CATALOG: '/product-catalog',
  ACCESSORIES: '/accessories',
  Z_PRO: '/z-pro/bikes',
  Z_PRO_BIKE_DETAIL: `${SUB_ROUTES.Z_PRO_BIKE}/:bikeBrand/:bikeModel/:bikeId`,
  BIKES: '/bikes',
  BIKE_DETAIL: `${SUB_ROUTES.BIKE}/:bikeBrand/:bikeModel/:bikeId`,
  BIKE_ACCESSORIES: '/bike-accessories',
  BLOGS: '/blogs',
  BLOG_DETAIL: `${SUB_ROUTES.BLOG}/:id`,
  OUR_STORIES: '/our-stories',
  BIKE_VIEW: '/bike-view',
  CART: '/cart',
  SEARCH: '/search',
  CONTACT_US:'/contact-us',
  ANY: '*'
})
