import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import BikePlaceholderImage from '@/Assets/Images/BikePlaceholder.svg'
import { SUB_ROUTES } from "@/Constants/Routes";
import { BikeDetailParamsType } from "./Types";
// import { shopByBikeSelector, zProBikeSelector } from "@/Redux/Product/Selectors";
import { BikeDetailResType, ShopByProductDetailsType } from "@/Redux/Product/Types";
import { ALL_CATEGORY, BikeCategoryEnum } from "@/Constants/AppConstant";
import BikeProductService from "@/Redux/Product/Services/BikeProductService";
import CategorySkeleton from "@/components/Skeleton/CategorySkeleton";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { bikeDetailServiceName, bikeProductServiceName, productCategoryCountServiceName, shopByBikeServiceName } from "@/Redux/Product/Actions";
import { Skeleton } from "@mui/material";
import ProductSection from "@/components/ProductSection";
import { getSelectedCurrency } from "@/Redux/Landing/Selectors";
import BikeDetailService from "@/Redux/Product/Services/BikeDetailService";

const BikeDetailPage = () => {
  const params = useParams<BikeDetailParamsType>();
  const { bikeType: bikeTypeParams = '', bikeId = '', bikeBrand: _bikeBrandParams = '', bikeModel: _bikeModelParams = '' } = params

  const isZProPath = bikeTypeParams.toLowerCase() === BikeCategoryEnum.ZPRO
  const bikeType = isZProPath ? BikeCategoryEnum.ZPRO : BikeCategoryEnum.ZANA

  // const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [bikeProductServiceName, shopByBikeServiceName, productCategoryCountServiceName]))
  const isBikeProductLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [bikeProductServiceName]))
  const isBikeDetailLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [bikeDetailServiceName]))

  // const shopByBike = useSelector(isZProPath ? zProBikeSelector : shopByBikeSelector)
  const currency = useSelector(getSelectedCurrency)

  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>()

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
  const [bikeProducts, setBikeProducts] = useState<ShopByProductDetailsType[]>([]);
  const [bikeDetails, setBikeDetails] = useState<BikeDetailResType | null>(null);
  const [filteredBikeProducts, setFilteredBikeProducts] = useState<ShopByProductDetailsType[]>([])

  const location = useLocation()

  async function getBikeProducts() {
    setFilteredBikeProducts([])
    try {
      const response = await dispatch(BikeProductService(bikeId)) as ShopByProductDetailsType[]
      setBikeProducts(response)
      setFilteredBikeProducts(response)
    } catch (error: any) {
      console.error(error)
    }
  }

  async function getBikeDetails() {
    try {
      const response = await dispatch(BikeDetailService(bikeId)) as BikeDetailResType
      setBikeDetails(response)
    } catch (error: any) {
      console.error(error)
    }
  }

  async function pageOps() {
    getBikeDetails()
    getBikeProducts()
  }

  function handleBackToBikes() {
    const { brand: { name: brandName = '' } = {} } = bikeDetails || {}
    navigate(`/${bikeType}${SUB_ROUTES.BIKES}`, { state: { brand: brandName.toLowerCase() } })
  }

  useEffect(() => {
    pageOps()
  }, [location.pathname, currency])

  // const bikeDetails = useMemo(() => {
  //   if (shopByBike.length === 0) return null
  //   const bikeModels = shopByBike.find(item => item.name.toLowerCase() === bikeBrand)?.models || []
  //   return bikeModels.find(item => item._id === bikeId)
  // }, [shopByBike.length, location.pathname])

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

  if (!bikeDetails && !isBikeDetailLoading) {
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

  const { name: modelName = '', description = '', type = '', imageUrl = '', brand: { name: brandName = '' } = {} } = bikeDetails || {}

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>

      {/* Hero Section with Bike Info */}
      <div className="relative py-12 md:py-20 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="bg-white rounded-2xl p-8 md:p-12 flex items-center justify-center">
              {
                imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={modelName}
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
                {modelName ? modelName : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={300} />}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-6">
                {description ? description : <Skeleton sx={{ backgroundColor: 'rgba(255,255,255,0.20)' }} width={150} />}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-yellow-400 text-lg font-medium">{brandName.toUpperCase()}</span>
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
              Products for {modelName.toUpperCase()}
            </h2>
            <p className="text-white/60">
              Browse {bikeProducts.length} accessories designed for your {modelName}
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
                  {categoryName} ({count})
                </button>
              )
            })}
            {
              categoriesWithCount.length === 0 && isBikeProductLoading && <CategorySkeleton />
            }
          </div>
          <ProductSection
            filteredBikeProducts={filteredBikeProducts}
            setSelectedCategory={setSelectedCategory}
          />
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;

