import { MouseEvent, useEffect, useRef, useState, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { useSnackbar } from "notistack";

import {
  Minus,
  Plus,
  Facebook,
  Instagram,
  PlusIcon,
  Heart,
  ShoppingBag,
} from "lucide-react";

import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDetailParamsType } from "./Types";
import {
  ProductCatalogDetailsType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import ProductDetailService from "@/Redux/Product/Services/ProductDetailService";
import BikeProductService from "@/Redux/Product/Services/BikeProductService";
import {
  handleSocialMedia,
  replaceHiphenWithSpaces,
  replaceSpecialCharactersWithHyphen,
} from "@/Utils/StringUtils";
import {
  BikeCategoryEnum,
  SocialMediaPlatformEnum,
} from "@/Constants/AppConstant";
import { ROUTES } from "@/Constants/Routes";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import { Box, Skeleton, Tooltip } from "@mui/material";
import useCart from "@/hooks/useCart";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  bikeProductServiceName,
  categoryProductServiceName,
  productDetailServiceName,
} from "@/Redux/Product/Actions";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";
import { getSelectedCurrency } from "@/Redux/Landing/Selectors";
import { encodedGeneratedPath } from "@/Utils/global";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import { SUB_ROUTES } from "@/Constants/Routes";
import { SeoMeta } from "@/components/SeoMeta";
import {
  getHeroImageProps,
  getSuggestedProductImageProps,
  getThumbnailImageProps,
} from "@/Utils/ImageUtils";
import {
  STAGING_PRODUCT_SEO_MAP,
  PRODUCTION_PRODUCT_SEO_MAP,
} from "./PRODUCT_SEO_MAPS";

const IS_PRODUCTION = import.meta.env.VITE_NODE_ENV === "production";
const PRODUCT_SEO_MAP = IS_PRODUCTION
  ? PRODUCTION_PRODUCT_SEO_MAP
  : STAGING_PRODUCT_SEO_MAP;

type ProductDetailLocationState = {
  source?: "bike" | "catalog";
  bikeType?: string;
  bikeBrand?: string;
  bikeModel?: string;
  bikeId?: string;
  productCategory?: string;
};

const FALLBACK_PLACEHOLDER_IMAGE =
  "https://d3s3r7gevtfrvd.cloudfront.net/Zana+website/proMImg_07_1721457228.webp?width=960&quality=75&format=webp";

function getProductCatalogCategoryPath(category: string) {
  return `${ROUTES.PRODUCT_CATALOG}/${replaceSpecialCharactersWithHyphen(
    category,
  )}`;
}

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { addToCart, getQuantity, incrementToCart } = useCart();

  const params = useParams<ProductDetailParamsType>();
  const { productCategory = "", productId = "", productItem = "" } = params;

  // Derive a human-readable title from the URL slug immediately —
  // no API call needed. Used for FCP/LCP before the API resolves.
  const staticName = replaceHiphenWithSpaces(productItem).replace(
    /\b\w/g,
    (c) => c.toUpperCase(),
  );

  // Resolve the static product seoData from the pre-built map keyed by productId.
  // The correct map (staging vs. production) is selected at module load time
  // via VITE_NODE_ENV so no runtime env checks are needed here.
  const seoData = PRODUCT_SEO_MAP[productId];
  const staticPlaceholderImage = seoData?.image ?? FALLBACK_PLACEHOLDER_IMAGE;

  const [quantity, setQuantity] = useState<number>(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState<ShopByProductDetailsType | null>(null);
  const [suggestedProducts, setSuggestedProducts] = useState<
    ShopByProductDetailsType[]
  >([]);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isProductHydrating, setIsProductHydrating] = useState(true);
  // true while the real hero image is still downloading after product data arrives
  const [isHeroImageLoaded, setIsHeroImageLoaded] = useState(false);
  const productRequestRef = useRef(0);

  const dispatch = useDispatch<TAppDispatch>();
  const { enqueueSnackbar } = useSnackbar();

  const getQuantityValue = getQuantity(productId);

  const loginDetails = useSelector(getLoginDetails);

  const currency = useSelector(getSelectedCurrency);

  const isCategoryLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      categoryProductServiceName,
      bikeProductServiceName,
    ]),
  );

  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>, product: ShopByProductDetailsType, _id: string, quantity: number, quantityAvailable: number) => {
     e.stopPropagation();                 
    addToCart(product, _id, quantity, quantityAvailable);
  };


  const isProductLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [productDetailServiceName]),
  );
  const isProductDetailPending = isProductLoading || isProductHydrating;

  function handleBackToProducts() {
    navigate(getProductCatalogCategoryPath(productCategory));
  }

  async function handleWishList(productId: string) {
    const { phoneNumber = "" } = loginDetails;
    const prevValue = isWishlisted;
    if (!phoneNumber) {
      enqueueSnackbar({
        message: "Login required to save products to your wishlist.",
        variant: "info",
      });
      dispatch(setOpenSignupPopup(true));
      return;
    }

    setIsWishlisted((p) => !p);

    try {
      const action = prevValue
        ? removeWishlistServiceAction({
            phoneNumber,
            productIds: [productId],
          })
        : addWishListServiceAction({
            phoneNumber,
            productIds: [productId],
          });

      const result = await dispatch(action);

      if (result) {
        enqueueSnackbar({
          variant: prevValue ? "info" : "success",
          message: prevValue ? "Removed from wishlist" : "Added to wishlist",
        });
      }
    } catch (error) {
      setIsWishlisted(prevValue);
    }
  }

  async function pageOps() {
    const requestId = productRequestRef.current + 1;
    productRequestRef.current = requestId;
    const { phoneNumber = "" } = loginDetails;

    setQuantity(getQuantityValue || 1);
    setIsProductHydrating(true);

    try {
      const response = (await dispatch(
        ProductDetailService({
          productId: productId,
          phoneNumber,
        }),
      )) as ShopByProductDetailsType;
      if (productRequestRef.current !== requestId) return;
      setProduct(response);
      setIsProductHydrating(false);

      const eventPayload = {
        currency: response.currency,
        value: response.price,
        ecommerce: {
          item: {
            item_id: response._id,
            item_name: response.name,
            item_category: response.category,
            // item_brand: response.brand,
            price: response.price,
            currency: response.currency,
          },
        },
      };

      // GTM — dataLayer push
      if ((window as any).dataLayer) {
        (window as any).dataLayer.push({
          event: "view_item",
          ...eventPayload,
        });
      }

      // GA4 — gtag direct
      if ((window as any).gtag) {
        (window as any).gtag("event", "view_item", eventPayload);
      }

      const { category, isBikeSpecific, model } = response;

      let relatedProductsData: ShopByProductDetailsType[] = [];

      if (isBikeSpecific) {
        relatedProductsData = (await dispatch(
          BikeProductService({
            modelId: model,
            category,
            queryParams: { page: 1, limit: 10 },
          }),
        )) as ShopByProductDetailsType[];
      } else {
        const { data } = (await dispatch(
          CategoryProductService({
            category,
            queryParams: { page: 1, limit: 10 },
          }),
        )) as ProductCatalogDetailsType;

        relatedProductsData = data;
      }

      if (productRequestRef.current !== requestId) return;
      setSuggestedProducts(relatedProductsData);
    } catch (error: any) {
      if (productRequestRef.current === requestId) {
        setProduct(null);
        setSuggestedProducts([]);
        setIsProductHydrating(false);
      }
      console.error(error);
    }
  }

  function handleSuggestedProductClick(
    productCategory: string,
    name: string,
    productId: string,
  ) {
    const currentBreadcrumbState = (location.state ||
      {}) as ProductDetailLocationState;
    const productDetailState =
      currentBreadcrumbState.source === "bike"
        ? {
            ...currentBreadcrumbState,
            productCategory,
          }
        : {
            source: "catalog",
            productCategory,
          };
    const path = encodedGeneratedPath(ROUTES.PRODUCT_DETAIL, {
      productCategory,
      productItem: name,
      productId,
    });

    navigate(path, { state: productDetailState });
    window.scrollTo(0, 0);
  }

  // Reset hero-image-loaded flag whenever the URL or currency changes so the
  // placeholder is shown again until the new real image finishes downloading.
  useEffect(() => {
    setIsHeroImageLoaded(false);
    pageOps();
  }, [currency, location.pathname]);

  if (!product && !isProductDetailPending) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#181818" }}
      >
        <SeoMeta
          title="Product Not Found | Zana Motorcycles"
          description="The requested Zana motorcycle accessory could not be found."
          noIndex
        />
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">
            Product Not Found
          </h1>
          <button
            onClick={handleBackToProducts}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  const {
    _id = "",
    name = seoData?.title || staticName || "",
    shippingAndReturn = "",
    shortDescription = "",
    longDescription = seoData?.description || "",
    category = "",
    price = 0,
    currencySymbol = "",
    imageUrl = seoData?.image || "",
    images = [],
    quantityAvailable = 0,
    specifications = "",
    isBikeSpecific = false,
    productCode = "",
    isComingSoon = false,
  } = product || {};

  const isPlusDisabled = quantity >= quantityAvailable;
  const isMinusDisabled = quantity === 1;

  const newImages = [...new Set([imageUrl, ...images].filter(Boolean))];
  const heroImageProps = getHeroImageProps(newImages[selectedImageIndex] || "");
  const breadcrumbState = (location.state || {}) as ProductDetailLocationState;
  const breadcrumbCategory = breadcrumbState.productCategory || category;
  const isBikeBreadcrumb =
    breadcrumbState.source === "bike" &&
    breadcrumbState.bikeType &&
    breadcrumbState.bikeBrand &&
    breadcrumbState.bikeModel &&
    breadcrumbState.bikeId;
  const bikeListPath = isBikeBreadcrumb
    ? `/${breadcrumbState.bikeType}${SUB_ROUTES.BIKES}`
    : "";
  const bikeDetailPath = isBikeBreadcrumb
    ? encodedGeneratedPath(ROUTES.BIKE_DETAIL, {
        bikeType: breadcrumbState.bikeType,
        bikeBrand: breadcrumbState.bikeBrand,
        bikeModel: breadcrumbState.bikeModel,
        bikeId: breadcrumbState.bikeId,
      })
    : "";
  const bikeCategoryPath =
    isBikeBreadcrumb && breadcrumbCategory
      ? encodedGeneratedPath(ROUTES.BIKE_DETAIL_WITH_CATEGORY, {
          bikeType: breadcrumbState.bikeType,
          bikeBrand: breadcrumbState.bikeBrand,
          bikeModel: breadcrumbState.bikeModel,
          bikeId: breadcrumbState.bikeId,
          productCategory: replaceSpecialCharactersWithHyphen(
            breadcrumbCategory,
          ),
        })
      : bikeDetailPath;
  const bikeBreadcrumbLabel =
    breadcrumbState.bikeType?.toLowerCase() === BikeCategoryEnum.ZPRO
      ? BikeCategoryEnum.ZPRO
      : "Shop By Bike";
      const bikeBrandPath = isBikeBreadcrumb
  ? `/${breadcrumbState.bikeType}${SUB_ROUTES.BIKES}/${replaceSpecialCharactersWithHyphen(
      (breadcrumbState.bikeBrand || "").toLowerCase(),
    )}`
  : "";
  const productBreadcrumbItems = isBikeBreadcrumb
    ?   [
      { label: "Home", to: ROUTES.BASE_URL },
      { label: bikeBreadcrumbLabel, to: bikeListPath },
      {
        label: breadcrumbState.bikeBrand || "",
        to: bikeBrandPath,
        state: { brand: breadcrumbState.bikeBrand?.toLowerCase() },
      },
      { label: breadcrumbState.bikeModel || "", to: bikeDetailPath },
      {
        label: breadcrumbCategory,
        to: bikeCategoryPath,
        state: { category: breadcrumbCategory.toLowerCase() },
      },
      { label: name || staticName },
    ]
    : [
        { label: "Home", to: ROUTES.BASE_URL },
        { label: "Universal Products", to: ROUTES.PRODUCT_CATALOG },
        {
          label: breadcrumbCategory,
          to: getProductCatalogCategoryPath(breadcrumbCategory),
          state: { category: breadcrumbCategory.toLowerCase() },
        },
        { label: name || staticName },
      ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#181818" }}>
      <SeoMeta
        title={
          name
            ? `${name} | ${breadcrumbCategory || productCategory || "Motorcycle Accessories"} | Zana Motorcycles`
            : seoData?.title
        }
        description={
          longDescription ||
          seoData?.description ||
          `Shop ${name || staticName} motorcycle accessories from Zana Motorcycles.`
        }
        image={newImages[0] || seoData?.image}
        type="product"
        keywords={seoData?.keywords}
      />
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <AppBreadcrumb className="mb-8" items={productBreadcrumbItems} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Product Images List */}
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] scrollbar-hide">
              {newImages.map((image, index) => {
                const thumbnailProps = getThumbnailImageProps(image);

                return (
                  <Fragment key={index}>
                    {!isProductDetailPending ? (
                      <button
                        type="button"
                        aria-label={`View ${name} image ${index + 1}`}
                        aria-current={
                          selectedImageIndex === index ? "true" : undefined
                        }
                        className={`flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 border-2 rounded cursor-pointer transition-all overflow-hidden ${
                          selectedImageIndex === index
                            ? "border-white"
                            : "border-gray-600"
                        }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img
                          {...thumbnailProps}
                          alt={`${name} ${index + 1}`}
                          width={96}
                          height={96}
                          sizes="96px"
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          className="w-full h-full object-cover p-2"
                        />
                      </button>
                    ) : (
                      <Skeleton
                        sx={{
                          width: { xs: 80, lg: 96 },
                          height: { xs: 80, lg: 96 },
                          backgroundColor: "grey",
                        }}
                        variant="rectangular"
                      />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </div>

          {/* Center - Main Product Image */}
          <div className="lg:col-span-5">
            <div className=" rounded-lg  h-96 lg:h-[600px] flex items-center justify-center">
              {/* Show static placeholder immediately; swap to real image once
                  product data has loaded AND the real image has finished
                  downloading. Both images are always in the DOM so the browser
                  can preload the real one in the background. */}
              <img
                src={
                  !isProductDetailPending && isHeroImageLoaded
                    ? heroImageProps.src
                    : staticPlaceholderImage
                }
                srcSet={
                  !isProductDetailPending && isHeroImageLoaded
                    ? heroImageProps.srcSet
                    : undefined
                }
                alt={name || staticName}
                width={480}
                height={480}
                sizes="(min-width: 1024px) 480px, calc(100vw - 48px)"
                className="max-w-full max-h-full object-contain"
                loading="eager"
                fetchPriority="high"
                decoding="async"
              />
              {/* Hidden preloader: once the real product image finishes
                  downloading we flip isHeroImageLoaded → true, which causes
                  the visible img above to switch src to the real image. */}
              {!isProductDetailPending && (
                <img
                  {...heroImageProps}
                  alt=""
                  aria-hidden="true"
                  width={480}
                  height={480}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  className="sr-only"
                  onLoad={() => setIsHeroImageLoaded(true)}
                  onError={() => setIsHeroImageLoaded(true)}
                />
              )}
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:col-span-5">
            <div className="flex justify-end gap-4 mb-2">
              {!isProductDetailPending ? (
                <p className="text-white text-lg mb-2 leading-relaxed">
                  {productCode}
                </p>
              ) : (
                <Skeleton
                  sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                  width={100}
                  height={40}
                />
              )}
            </div>
            <div className="flex items-center justify-between">
              {/* Show static title from URL slug immediately (FCP/LCP) — real name
                  replaces it once the API responds. Both render the same <h1> node
                  so the browser never removes and re-adds the LCP element. */}
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">{name}</h1>
            </div>

            {shortDescription ? (
              <p className="text-white text-lg mb-6 leading-relaxed">
                {shortDescription}
              </p>
            ) : (
              <Skeleton
                sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                width={450}
                height={40}
              />
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
              {!isProductDetailPending ? (
                <span className="text-xl md:text-2xl font-bold text-white whitespace-nowrap shrink-0">
                  {currencySymbol}{" "}
                  {price?.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </span>
              ) : (
                <Skeleton
                  sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                  width={100}
                  height={60}
                />
              )}

              {isProductDetailPending ? (
                <Skeleton
                  sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                  width={180}
                  height={48}
                />
              ) : quantityAvailable > 0 ? (
                <div className="flex items-center gap-2 self-end sm:self-auto shrink-0">
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={isMinusDisabled}
                    aria-label="Decrease quantity"
                    onClick={() => setQuantity((p) => p - 1)}
                    style={{ cursor: "pointer" }}
                    className="text-white hover:bg-white/10 w-9 h-9 sm:w-10 sm:h-10 border border-white shrink-0"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="px-3 sm:px-4 py-2 text-white font-semibold min-w-[40px] sm:min-w-[50px] text-center">
                    {quantity}
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    disabled={isPlusDisabled}
                    aria-label="Increase quantity"
                    onClick={() => setQuantity((p) => p + 1)}
                    style={{ cursor: "pointer" }}
                    className="text-white hover:bg-white/10 w-9 h-9 sm:w-10 sm:h-10 border border-white shrink-0"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <Button
                  disabled
                  style={{
                    backgroundColor: "#BDBDBD",
                    width: "50%",
                    color: "#FFFFFF",
                    borderRadius: "0.5rem",
                    cursor: "not-allowed",
                    fontWeight: "bold",
                  }}
                >
                  <ShoppingBag />{" "}
                  {isComingSoon ? "Coming Soon" : "Out of Stock"}
                </Button>
              )}
            </div>

            {!isProductDetailPending && quantityAvailable > 0 && (
              <div
                className="fixed bottom-0 left-0 right-0 z-30 flex gap-3 bg-[#181818]/95 px-4 py-3
               shadow-[0_-12px_30px_rgba(0,0,0,0.35)] backdrop-blur
               sm:gap-4
               lg:static lg:mb-6 lg:rounded-lg lg:px-0 lg:py-0 lg:shadow-none lg:bg-transparent lg:backdrop-blur-none"
              >
                <Button
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    handleAddToCart(e, product, _id, quantity, quantityAvailable);
                  }}
                  disabled={!price}
                  className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold"
                >
                  ADD TO CART
                </Button>
                <Button
                  onClick={(e: MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();
                    addToCart(product, _id, quantity, quantityAvailable, {
                      navigateTo: ROUTES.CHECKOUT,
                    });
                  }}
                  disabled={!price}
                  className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold"
                >
                  BUY NOW
                </Button>
              </div>
            )}
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Share Section */}
              <div className="flex items-center gap-4">
                <span className="text-white font-semibold">Share:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Share on Instagram"
                  onClick={() =>
                    handleSocialMedia(
                      SocialMediaPlatformEnum.INSTAGRAM,
                      window.location.href,
                      `Check out this ${name}`,
                    )
                  }
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Share on Facebook"
                  onClick={() =>
                    handleSocialMedia(
                      SocialMediaPlatformEnum.FACEBOOK,
                      window.location.href,
                    )
                  }
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Share on WhatsApp"
                  onClick={() =>
                    handleSocialMedia(
                      SocialMediaPlatformEnum.WHATSAPP,
                      window.location.href,
                      `Check out this ${name}`,
                    )
                  }
                  className="text-white hover:bg-white/10 p-2"
                >
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </Button>
              </div>
              <div className="flex gap-1 md:gap-2">
                <Tooltip title="Add to Wishlist">
                  <button
                    type="button"
                    aria-label={
                      (isWishlisted ?? product.isWishlist)
                        ? "Remove from wishlist"
                        : "Add to wishlist"
                    }
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishList(product._id);
                    }}
                    className={` p-1.5 md:p-2 rounded-lg transition-all duration-200
                     ${
                       (isWishlisted ?? product.isWishlist)
                         ? "bg-yellow-400 text-black"
                         : "bg-white/10 text-white hover:bg-yellow-400 hover:text-black"
                     }`}
                  >
                    <Heart size={20} className="md:w-6 md:h-6" />
                  </button>
                </Tooltip>
              </div>
            </div>

            <Separator className="bg-white/20 mb-6" />

            {/* Info Tabs */}
            <Tabs
              value={activeTab}
              onValueChange={setActiveTab}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-[#7B7575] to-white">
                <TabsTrigger
                  value="description"
                  className="text-black font-medium text-[10px] sm:text-sm px-1 py-2"
                >
                  DESCRIPTION
                </TabsTrigger>
                <TabsTrigger
                  value="specification"
                  className="text-black font-medium text-[10px] sm:text-sm px-1 py-2"
                >
                  SPECIFICATION
                </TabsTrigger>
                <TabsTrigger
                  value="shipping"
                  className="text-black font-medium text-[10px] sm:text-sm px-1 py-2"
                >
                  SHIPPING & RETURN
                </TabsTrigger>
              </TabsList>

              <div className="bg-white rounded-b-lg p-6 min-h-[200px] max-h-[300px] overflow-y-auto">
                <TabsContent
                  value="description"
                  className="text-black text-sm leading-relaxed whitespace-pre-line"
                >
                  {longDescription ? (
                    longDescription
                  ) : (
                    <Skeleton width={"100%"} height={200} />
                  )}
                </TabsContent>
                <TabsContent
                  value="specification"
                  className="text-black text-sm leading-relaxed whitespace-pre-line"
                >
                  {specifications ? (
                    specifications
                  ) : (
                    <Skeleton width={"100%"} height={200} />
                  )}
                </TabsContent>
                <TabsContent
                  value="shipping"
                  className="text-black text-sm leading-relaxed whitespace-pre-line"
                >
                  {shippingAndReturn ? (
                    shippingAndReturn
                  ) : (
                    <Skeleton width={"100%"} height={200} />
                  )}
                </TabsContent>

                {/* <div className="flex justify-center mt-6">
                  <Button
                    disabled={!price}
                    className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-2 font-bold"
                  >
                    BROCHURE
                  </Button>
                </div> */}
              </div>
            </Tabs>
          </div>
        </div>
      </div>

      {/* See It. Hear It. Shop It. */}
      {/* <div className="max-w-7xl mx-auto px-2 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">See It. Hear It. Shop It.</h2>
        <div className="w-full">
          <img
            src={SeeAndHearImage}
            alt="See It. Hear It. Shop It."
            className="w-full h-80 object-cover rounded-lg"
          />
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-white text-center mb-8">
          You may also like
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {isCategoryLoading &&
            Array.from({ length: 5 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                width={240}
                height={280}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "rgba(235, 228, 228, 0.1)",
                }}
              />
            ))}
          {!isCategoryLoading &&
            suggestedProducts.map((relatedProduct, index) => {
              const {
                _id,
                name,
                imageUrl,
                price,
                category,
                quantityAvailable,
                currencySymbol,
              } = relatedProduct;

              const productQuantity = getQuantity(_id);
              const isDisabled = productQuantity >= quantityAvailable;

              const suggestedImageProps =
                getSuggestedProductImageProps(imageUrl);

              return (
                <div
                  key={index}
                  className="flex-shrink-0 w-64 bg-gradient-to-b from-[#7B7575] to-white rounded-lg overflow-hidden cursor-pointer"
                  onClick={() =>
                    handleSuggestedProductClick(category, name, _id)
                  }
                >
                  <div className="relative p-2">
                    <div className="aspect-square bg-white/10 overflow-hidden rounded-lg relative flex items-center justify-center">
                      <img
                        {...suggestedImageProps}
                        alt={name}
                        width={256}
                        height={256}
                        sizes="256px"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain"
                      />
                      <div className="absolute bottom-2 left-2 group">
                        <button
                          type="button"
                          aria-label={`Add ${name} to cart`}
                          style={{
                            cursor: isDisabled ? "not-allowed" : "pointer",
                            opacity: isDisabled ? 0.7 : 1,
                          }}
                          disabled={isDisabled}
                          onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation();
                            incrementToCart(
                              relatedProduct,
                              _id,
                              quantityAvailable,
                            );
                          }}
                          className="h-9 bg-white rounded-full flex items-center justify-center
                            overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
                            w-9 group-hover:w-auto group-hover:px-3"
                        >
                          <span
                            className="whitespace-nowrap text-sm font-semibold text-black
                              hidden translate-x-[-6px]
                              group-hover:inline-block group-hover:translate-x-0
                              transition-all duration-300 mr-1"
                          >
                            Add to cart
                          </span>
                          <PlusIcon className="w-5 h-5 text-black flex-shrink-0" />
                        </button>
                        {productQuantity > 0 && (
                          <span
                            className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full
                                bg-red-500 text-white text-xs flex items-center justify-center
                                font-semibold shadow transition-all duration-300
                                group-hover:translate-x-0"
                          >
                            {productQuantity}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="px-2 pb-2 flex items-center  gap-3">
                    <h3 className="font-bold text-black text-sm leading-snug break-words flex-1">
                      {name}
                    </h3>

                    <span className="font-bold text-black text-sm whitespace-nowrap">
                      {currencySymbol}{" "}
                      {price?.toLocaleString("en-IN", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>

      {/* Customer Review */}
      {/* <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 font-bold mb-8">
          CUSTOMER REVIEW
        </Button>
        <Separator className="bg-white/20" />
      </div> */}
    </div>
  );
};

export default ProductDetailPage;
