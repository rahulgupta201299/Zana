import { MouseEvent, useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import BikePlaceholderImage from '@/Assets/Images/BikePlaceholder.svg'
import { ShoppingCart, Heart } from "lucide-react";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import { BikeDetailParamsType } from "./Types";
import { shopByBikeSelector, zProBikeSelector } from "@/Redux/Product/Selectors";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { ALL_CATEGORY, BikeCategoryEnum } from "@/Constants/AppConstant";
import BikeProductService from "@/Redux/Product/Services/BikeProductService";
import { replaceHiphenWithSpaces, replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import ProductSkeleton from "@/components/Skeleton/ProductSkeleton";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { bikeProductServiceName, productCategoryCountServiceName, shopByBikeServiceName } from "@/Redux/Product/Actions";
import Loading from "@/components/Loading";
import { Skeleton } from "@mui/material";
import useCart from "@/hooks/useCart";

const BikeDetailPage = () => {
  const params = useParams<BikeDetailParamsType>();
  const { bikeType: bikeTypeParams = '', bikeId = '', bikeBrand = '', bikeModel = '' } = params || {}

  const isZProPath = bikeTypeParams.toLowerCase() === BikeCategoryEnum.ZPRO
  const bikeType = isZProPath ? BikeCategoryEnum.ZPRO : BikeCategoryEnum.ZANA

  const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [bikeProductServiceName, shopByBikeServiceName, productCategoryCountServiceName]))

  const shopByBike = useSelector(isZProPath ? zProBikeSelector : shopByBikeSelector)

  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>()
  const { addToCart } = useCart()

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
  const [bikeProducts, setBikeProducts] = useState<ShopByProductDetailsType[]>([])
  const [filteredBikeProducts, setFilteredBikeProducts] = useState<ShopByProductDetailsType[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  const location = useLocation()

  async function getBikeProducts() {
    setLoading(true)
    setFilteredBikeProducts([])
    try {
      const response = await dispatch(BikeProductService(bikeId)) as ShopByProductDetailsType[]
      setBikeProducts(response)
      setFilteredBikeProducts(response)
    } catch (error: any) {
      console.error(error)
    } finally {
      setTimeout(() => {
        setLoading(false)
      }, 1000)
    }
  }

  function handleBackToBikes() {
    navigate(`/${bikeType}${SUB_ROUTES.BIKES}`, { state: { brand: replaceHiphenWithSpaces(bikeBrand) } })
  }

  function handleProductClick(productCategory: string, productSubCategory: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory)
    const subCategory = replaceSpacesWithHiphen(productSubCategory)

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${subCategory}/${productId}`);
  };

  useEffect(() => {
    getBikeProducts()
  }, [location.pathname])

  const bikeDetails = useMemo(() => {
    if (shopByBike.length === 0) return null
    const bikeModels = shopByBike.find(item => item.name.toLowerCase() === replaceHiphenWithSpaces(bikeBrand))?.models || []
    return bikeModels.find(item => item._id === bikeId)
  }, [shopByBike.length, location.pathname])

  const categoriesWithCount: { name: string, count: number }[] = useMemo(() => {

    if (bikeProducts.length === 0) return []

    const map = new Map()
    const result = [{ name: ALL_CATEGORY, count: bikeProducts.length }]

    bikeProducts.forEach(item => {
      const category = item.category.toLowerCase()

      if (map.has(category)) map.set(category, map.get(category) + 1)
      else map.set(category, 1)
    })

    for (const [key, value] of map) {
      result.push({
        name: key,
        count: value
      })
    }

    return result
  }, [bikeProducts.length])

  function handleSelectCategory(val: string) {

    if (val === ALL_CATEGORY) setFilteredBikeProducts(bikeProducts)
    else setFilteredBikeProducts(bikeProducts.filter(item => item.category.toLowerCase() === val))

    setSelectedCategory(val)
  }

  if (!bikeDetails && !loading && !isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#181818' }}>
        <div className="text-center">
          <h1 className="text-white text-4xl font-bold mb-4">Bike Not Found</h1>
          <button
            onClick={handleBackToBikes}
            className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
          >
            Back to Bikes
          </button>
        </div>
      </div>
    );
  }

  const { name = '', description = '', type = '', imageUrl = '' } = bikeDetails || {}

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#181818' }}>

      {/* Hero Section with Bike Info */}
      <div className="relative py-12 md:py-20 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center">
              {/* TODO image */}
              {
                imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={name}
                    className="max-w-full max-h-96 object-contain"
                    loading="lazy"
                    onError={(e) => e.currentTarget.src = BikePlaceholderImage}
                  />
                ) : <Skeleton width={500} height={380} />
              }
            </div>

            {/* Bike Info */}
            <div className="text-white">
              <div className="mb-4">
                {
                  type ? (
                    <span style={{ textTransform: 'capitalize' }} className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium">
                      {type}
                    </span>
                  ) : (
                    <Skeleton sx={{ backgroundColor: '#facc1533', borderRadius: '1rem' }} width={80} height={40} />
                  )
                }
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {name ? name : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={300} />}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-6">
                {description ? description : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={150} />}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-yellow-400 text-lg font-medium">{replaceHiphenWithSpaces(bikeBrand).toUpperCase()}</span>
                <span className="text-white/50">•</span>
                <span className="text-white/70">{bikeProducts.length} Products Available</span>
              </div>
              <button
                onClick={handleBackToBikes}
                className="text-yellow-400 hover:text-yellow-300 font-medium text-lg transition-colors"
              >
                ← Back to All Bikes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Section */}
      <div className="py-12 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-8">
            <h2 style={{ textTransform: 'capitalize' }} className="text-white text-3xl md:text-4xl font-bold mb-2">
              Products for {replaceHiphenWithSpaces(bikeModel).toUpperCase()}
            </h2>
            <p className="text-white/60">
              Browse {bikeProducts.length} accessories designed for your {name}
            </p>
          </div>

          {/* Category Filter */}
          <div className="mb-8 flex flex-wrap gap-3">
            {categoriesWithCount.map((category, ind) => {
              const { name, count } = category
              const categoryName = name.toLowerCase()

              return (
                <button
                  key={ind}
                  onClick={() => handleSelectCategory(categoryName)}
                  style={{ textTransform: 'capitalize' }}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${selectedCategory === categoryName
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  {/* TODO icon */}
                  {categoryName} ({count})
                </button>
              )
            })}
            {
              categoriesWithCount.length === 0 && <CategorySkeleton />
            }
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBikeProducts.map((product) => {
              const { _id, category, name, shortDescription, imageUrl, isBikeSpecific, price, quantityAvailable } = product

              return (
                <div
                  key={_id}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
                  onClick={() => handleProductClick(category, name, _id)}
                >
                  {/* Product Image */}
                  <div className="relative bg-white p-6 h-64 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => e.currentTarget.src = BikePlaceholderImage}
                    />
                    {isBikeSpecific && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                    {!isBikeSpecific && (
                      <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                        UNIVERSAL
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-4 md:p-6">
                    <div className="mb-2">
                      <span className="text-xs text-yellow-400 font-medium">
                        {category}
                      </span>
                    </div>
                    <h3 className="text-white text-lg md:text-xl font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                      {name}
                    </h3>
                    <p className="text-white/60 text-sm mb-4 line-clamp-2">
                      {shortDescription}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 text-xl md:text-2xl font-bold">
                        ₹ {price.toLocaleString()}
                      </span>
                      <div className="flex gap-2">
                        {/* <button
                          onClick={(e) => {
                            e.stopPropagation();
                            // Add to wishlist logic
                          }}
                          className="p-2 bg-white/10 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
                        >
                          <Heart size={18} />
                        </button> */}
                        <button
                          onClick={(e: MouseEvent<HTMLButtonElement>) => {
                            e.stopPropagation()
                            addToCart(_id, quantityAvailable, { navigateTo: ROUTES.CART })
                          }}
                          className="p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                        >
                          <ShoppingCart size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {
            filteredBikeProducts.length === 0 && isLoading && <ProductSkeleton gridSize="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" />
          }

          {/* No Products Found */}
          {filteredBikeProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-white/50 text-lg mb-4">
                No products found in this category
              </p>
              <button
                onClick={() => setSelectedCategory(ALL_CATEGORY)}
                className="px-6 py-3 bg-yellow-400 text-black rounded-lg font-medium hover:bg-yellow-500 transition-colors"
              >
                View All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;

