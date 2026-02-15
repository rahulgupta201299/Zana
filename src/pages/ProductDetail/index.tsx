import { MouseEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Facebook, Instagram, PlusIcon, Heart, ShoppingBag } from "lucide-react";
// import SeeAndHearImage from '@/Assets/Images/SeeAndHearImage.png'


import SeeAndHearImage from '@/Assets/Images/SeeAndHearImage.png'
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { useNavigate, useParams } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDetailParamsType } from "./Types";
import { ProductCatalogDetailsType, ShopByProductDetailsType } from "@/Redux/Product/Types";
import ProductDetailService from "@/Redux/Product/Services/ProductDetailService";
import { handleSocialMedia, replaceHiphenWithSpaces, replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { SocialMediaPlatformEnum } from "@/Constants/AppConstant";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import { Box, Skeleton, Tooltip } from "@mui/material";
import useCart from "@/hooks/useCart";
import removeWishlistServiceAction from "@/Redux/Auth/Services/RemoveWishlist";
import addWishListServiceAction from "@/Redux/Auth/Services/AddWishlist";
import { getProfileDetails } from "@/Redux/Auth/Selectors";
import { useSnackbar } from "notistack";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { categoryProductServiceName } from "@/Redux/Product/Actions";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const { addToCart, getQuantity, incrementToCart } = useCart()
  const { productCategory, productId, productItem } = useParams<ProductDetailParamsType>();

  const [quantity, setQuantity] = useState<number>(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("description");
  const [product, setProduct] = useState<ShopByProductDetailsType | null>(null)
  const [suggestedProducts, setSuggestedProducts] = useState<ShopByProductDetailsType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [isWishlisted, setIsWishlisted] = useState(false);



  const dispatch = useDispatch<TAppDispatch>()
  const { enqueueSnackbar } = useSnackbar();

  const getQuantityValue = getQuantity(productId);

  const profileDetails = useSelector((state: any) => getProfileDetails(state));
   const isLoading = useSelector<TAppStore, boolean>((state) =>
      isServiceLoading(state, [categoryProductServiceName]),
    );
  function handleBackToProducts() {
    const category = replaceHiphenWithSpaces(productCategory)
    navigate(ROUTES.PRODUCT_CATALOG, { state: { category } })
  }

  async function handleWishList(productId: string) {
    const prevValue = isWishlisted;

    setIsWishlisted(!prevValue);
   try {
    const action = prevValue
      ? removeWishlistServiceAction({
          phoneNumber: profileDetails?.phoneNumber,
          productIds: [productId],
        })
      : addWishListServiceAction({
          phoneNumber: profileDetails?.phoneNumber,
          productIds: [productId],
        });

    const result = await dispatch(action);

    if (result) {
      enqueueSnackbar(
        prevValue
          ? "Product removed from wishlist"
          : "Product added to wishlist",
        {
          variant: prevValue ? "info" : "success",
          anchorOrigin: { vertical: "top", horizontal: "right" },
          autoHideDuration: 2000,
        }
      );
    }
  }  catch (error) {
      setIsWishlisted(prevValue);
    }
  }

  async function pageOps() {
    setLoading(true)
    setQuantity(getQuantityValue || 1)
    try {
      const response = await dispatch(ProductDetailService({productId:productId, phoneNumber: profileDetails?.phoneNumber})) as ShopByProductDetailsType
      setProduct(response)

      const { category } = response

      const { data } = await dispatch(CategoryProductService({ category, queryParams: { page: 1, limit: 10 } })) as ProductCatalogDetailsType
      setSuggestedProducts(data)

    } catch (error: any) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  function handleSuggestedProductClick(productCategory: string, productName: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory)
    const name = replaceSpacesWithHiphen(productName)

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`);
  }

  useEffect(() => {
    pageOps()
  }, [])

  if (!product && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#181818' }}>
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Product Not Found</h1>
          <button
            onClick={handleBackToProducts}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Back to Products
          </button>
        </div>
      </div>
    )
  }

  const { _id = '', name = '', shippingAndReturn = '', shortDescription = '', longDescription = '', category = '', price = 0, imageUrl = '', images = [], quantityAvailable = 0, specifications = '', isBikeSpecific = false } = product || {}

  const isPlusDisabled = quantity >= quantityAvailable;
  const isMinusDisabled = quantity === 1;

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>
      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left - Product Images List */}
          <div className="lg:col-span-2">
            <div className="flex lg:flex-col gap-4 overflow-x-auto lg:overflow-y-auto lg:max-h-[600px] scrollbar-hide">
              {images.map((image, index) => (
                <>
                  {
                    image ? (
                      <div
                        key={index}
                        className={`flex-shrink-0 w-20 h-20 lg:w-full lg:h-24 border-2 rounded cursor-pointer transition-all bg-gradient-to-b from-[#7B7575] to-white ${selectedImageIndex === index ? 'border-white' : 'border-gray-600'
                          }`}
                        onClick={() => setSelectedImageIndex(index)}
                      >
                        <img src={image} alt={`${name} ${index + 1}`} className="w-full h-full object-contain p-2" />
                      </div>
                    ) : (
                      <Skeleton sx={{ backgroundColor: 'grey' }} width={180} height={160} />
                    )
                  }
                </>

              ))}
            </div>
          </div>

          {/* Center - Main Product Image */}
          <div className="lg:col-span-5">
            <div className="bg-gradient-to-b from-[#7B7575] to-white rounded-lg p-8 h-96 lg:h-[600px] flex items-center justify-center">
              {
                imageUrl ? (
                  <img
                    src={images[selectedImageIndex]}
                    alt={name}
                    className="max-w-full max-h-full object-contain"
                  />
                ) : (
                  <Skeleton width={500} height={700} />
                )
              }
            </div>
          </div>

          {/* Right - Product Info */}
          <div className="lg:col-span-5">
            {
              name ? (
                <h1 className="text-4xl font-bold text-white mb-4">
                  {name}
                </h1>
              ) : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={300} height={60} />
            }
            {
              shortDescription ? (
                <p className="text-white text-lg mb-6 leading-relaxed">
                  {shortDescription}
                </p>
              ) : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={450} height={40} />
            }

            <div className="flex items-center justify-between mb-6">
              {
                price ? (
                  <span className="text-2xl font-bold text-white">
                    ₹ {price.toLocaleString()}
                  </span>
                ) : (
                  <Box sx={{ display: 'flex', gap: 2 }}>
                    <span style={{ margin: 'auto 0' }} className="text-2xl font-bold text-white">₹{' '}</span>
                    <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={100} height={60} />
                  </Box>
                )
              }
              {
                quantityAvailable > 0 ? (
                  <div className="flex items-center gap-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={isMinusDisabled}
                      onClick={() => setQuantity(p => p - 1)}
                      style={{ cursor: 'pointer' }}
                      className="text-white hover:bg-white/10 w-10 h-10 border border-white"
                    >
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="px-4 py-2 text-white font-semibold min-w-[50px] text-center">{quantity}</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={isPlusDisabled}
                      onClick={() => setQuantity(p => p + 1)}
                      style={{ cursor: 'pointer' }}
                      className="text-white hover:bg-white/10 w-10 h-10 border border-white"
                    >
                      <Plus className="w-4 h-4" />
                    </Button>
                  </div>
                ) : (
                  <Button
                    disabled
                    style={{
                      backgroundColor: "#BDBDBD",
                      width: '50%',
                      color: "#FFFFFF",
                      borderRadius: '0.5rem',
                      cursor: 'not-allowed',
                      fontWeight: 'bold',
                    }}
                  >
                    <ShoppingBag /> Out of Stock
                  </Button>
                )
              }
            </div>

            {
              quantityAvailable > 0 && (
                <div className="flex gap-4 mb-6">
                  <Button
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation()
                      addToCart(product, _id, quantity, quantityAvailable, { navigateTo: ROUTES.CART })
                    }}
                    disabled={!price}
                    className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold"
                  >
                    ADD TO CART
                  </Button>
                  <Button
                    onClick={(e: MouseEvent<HTMLButtonElement>) => {
                      e.stopPropagation()
                      addToCart(product, _id, quantity, quantityAvailable, { navigateTo: ROUTES.CHECKOUT })
                    }}
                    disabled={!price}
                    className="bg-black text-white border-2 border-white hover:bg-white hover:text-black flex-1 py-3 text-lg font-bold"
                  >
                    BUY NOW
                  </Button>
                </div>
              )
            }
            <div className="flex items-center justify-between gap-4 mb-6">
              {/* Share Section */}
              <div className="flex items-center gap-4">
                <span className="text-white font-semibold">Share:</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSocialMedia(SocialMediaPlatformEnum.INSTAGRAM, window.location.href, `Check out this ${name}`)}
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSocialMedia(SocialMediaPlatformEnum.FACEBOOK, window.location.href)}
                  className="text-white hover:bg-white/10 p-2"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleSocialMedia(SocialMediaPlatformEnum.WHATSAPP, window.location.href, `Check out this ${name}`)}
                  className="text-white hover:bg-white/10 p-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                </Button>
              </div>
              <div className="flex gap-1 md:gap-2">
                <Tooltip title="Add to Wishlist">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleWishList(product._id);
                    }}
                    className={` p-1.5 md:p-2 rounded-lg transition-all duration-200
                     ${(isWishlisted ?? product.isWishlist)
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
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 bg-gradient-to-r from-[#7B7575] to-white">
                <TabsTrigger value="description" className="text-black font-medium">DESCRIPTION</TabsTrigger>
                <TabsTrigger value="specification" className="text-black font-medium">SPECIFICATION</TabsTrigger>
                <TabsTrigger value="shipping" className="text-black font-medium">SHIPPING & RETURN</TabsTrigger>
              </TabsList>

              <div className="bg-white rounded-b-lg p-6 min-h-[200px] max-h-[300px] overflow-y-auto">
                <TabsContent value="description" className="text-black text-sm leading-relaxed whitespace-pre-line">
                  {
                    longDescription ? longDescription : (
                      <Skeleton width={"100%"} height={200} />
                    )
                  }
                </TabsContent>
                <TabsContent value="specification" className="text-black text-sm leading-relaxed whitespace-pre-line">
                  {
                    specifications ? specifications : (
                      <Skeleton width={"100%"} height={200} />
                    )
                  }
                </TabsContent>
                <TabsContent value="shipping" className="text-black text-sm leading-relaxed whitespace-pre-line">
                  {
                    shippingAndReturn ? shippingAndReturn : (
                      <Skeleton width={"100%"} height={200} />
                    )
                  }
                </TabsContent>

                <div className="flex justify-center mt-6">
                  <Button disabled={!price} className="bg-white text-black border-2 border-black hover:bg-black hover:text-white px-8 py-2 font-bold">
                    BROCHURE
                  </Button>
                </div>
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
        <h2 className="text-4xl font-bold text-white text-center mb-8">You may also like</h2>
        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {
          isLoading?
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
          ))
          : suggestedProducts.map((relatedProduct, index) => {
            const { _id, name, imageUrl, price, category, quantityAvailable } = relatedProduct
            const productQuantity = getQuantity(_id)
            const isDisabled = productQuantity >= quantityAvailable
            return (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-gradient-to-b from-[#7B7575] to-white rounded-lg overflow-hidden cursor-pointer"
                onClick={() => handleSuggestedProductClick(category, name, _id)}
              >
                <div className="relative p-2">
                  <div className="aspect-square bg-white/10 overflow-hidden rounded-lg relative flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="max-w-full max-h-full object-contain"
                    />
                    <div className="absolute bottom-2 left-2 group">
                      <button
                        style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.7 : 1 }}
                        disabled={isDisabled}
                        onClick={(e: MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation()
                          incrementToCart(relatedProduct, _id, quantityAvailable, { navigateTo: ROUTES.CART })
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
                      {
                        productQuantity > 0 && (
                          <span
                            className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full
                                bg-red-500 text-white text-xs flex items-center justify-center
                                font-semibold shadow transition-all duration-300
                                group-hover:translate-x-0"
                          >
                            {productQuantity}
                          </span>
                        )
                      }
                    </div>
                  </div>
                </div>
                <div className="px-2 pb-2 flex items-center  gap-3">
                  <h3 className="font-bold text-black text-sm leading-snug break-words flex-1">
                    {name}
                  </h3>

                  <span className="font-bold text-black text-sm whitespace-nowrap">
                    ₹ {price}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Customer Review */}
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <Button className="bg-black text-white border-2 border-white hover:bg-white hover:text-black px-8 py-3 font-bold mb-8">
          CUSTOMER REVIEW
        </Button>
        <Separator className="bg-white/20" />
      </div>
    </div>
  );
};

export default ProductDetailPage;
