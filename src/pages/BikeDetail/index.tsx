import { useEffect, useMemo, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import { SUB_ROUTES } from "@/Constants/Routes";
import { BikeDetailParamsType } from "./Types";
import {
  BikeDetailResType,
  PaginationType,
  ProductCatergoryCountType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { ALL_CATEGORY, BikeCategoryEnum } from "@/Constants/AppConstant";
import BikeProductService from "@/Redux/Product/Services/BikeProductService";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  bikeDetailServiceName,
  bikeProductServiceName,
} from "@/Redux/Product/Actions";
import { Skeleton } from "@mui/material";
import ProductSection from "@/components/ProductSection";
import { getSelectedCurrency } from "@/Redux/Landing/Selectors";
import BikeDetailService from "@/Redux/Product/Services/BikeDetailService";
import bikeCategoryCountServiceAction from "@/Redux/Product/Services/BikeCategoryCount";
import { bikeProductCategorySelector } from "@/Redux/Product/Selectors";

const BikeDetailPage = () => {
  const params = useParams<BikeDetailParamsType>();
  const { bikeType: bikeTypeParams = "", bikeId = "" } = params;
  const productCategory = useSelector(bikeProductCategorySelector);
  const isZProPath = bikeTypeParams.toLowerCase() === BikeCategoryEnum.ZPRO;
  const bikeType = isZProPath ? BikeCategoryEnum.ZPRO : BikeCategoryEnum.ZANA;

  const isBikeProductLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [bikeProductServiceName]),
  );
  const isBikeDetailLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [bikeDetailServiceName]),
  );

  const currency = useSelector(getSelectedCurrency);
  const navigate = useNavigate();
  const dispatch = useDispatch<TAppDispatch>();
  const location = useLocation();

  const [selectedCategory, setSelectedCategory] =
    useState<string>(ALL_CATEGORY);
  const [filters, setFilters] = useState<{
    category: string;
    subCategory: string;
  }>({
    category: "",
    subCategory: "",
  });
  const [bikeProducts, setBikeProducts] = useState<ShopByProductDetailsType[]>(
    [],
  );
  const [subCategory, setSubCategory] = useState<string>("");
  const [filteredBikeProducts, setFilteredBikeProducts] = useState<
    ShopByProductDetailsType[]
  >([]);
  const [bikeDetails, setBikeDetails] = useState<BikeDetailResType | null>(
    null,
  );

  async function getBikeProducts(category?: string, subCategory?: string) {
    setFilteredBikeProducts([]);
    try {
      const response = (await dispatch(
        BikeProductService({ modelId: bikeId, category, subCategory }),
      )) as ShopByProductDetailsType[];
      setBikeProducts(response);
      setFilteredBikeProducts(response);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function getBikeDetails() {
    try {
      const response = (await dispatch(
        BikeDetailService(bikeId),
      )) as BikeDetailResType;
      setBikeDetails(response);
    } catch (error: any) {
      console.error(error);
    }
  }

  async function getBikeModelCategoryCount() {
    try {
      const response = (await dispatch(
        bikeCategoryCountServiceAction(bikeId),
      )) as ProductCatergoryCountType[];
    } catch (error: any) {
      console.error(error);
    }
  }

  async function pageOps() {
    getBikeDetails();
    getBikeModelCategoryCount();
    getBikeProducts();
  }

  function handleSelectCategory(val: string) {
    const newFilters = { category: val, subCategory: "" };
    setFilters(newFilters);
    setSelectedCategory(val);
    getBikeProducts(val);
  }

  function handleClearFilter() {
    setFilters({ category: selectedCategory, subCategory: "" });
    getBikeProducts(selectedCategory);
  }

  function handleBackToBikes() {
    const { brand: { name: brandName = "" } = {} } = bikeDetails || {};
    navigate(`/${bikeType}${SUB_ROUTES.BIKES}`, {
      state: { brand: brandName.toLowerCase() },
    });
  }

  useEffect(() => {
    pageOps();
  }, [location.pathname, currency]);

  const categoriesWithCount = useMemo(() => {
    if (productCategory.length === 0) return [];

    const totalCategoryCount = productCategory.reduce(
      (acc, curr) => acc + curr.count,
      0,
    );
    return [
      { name: ALL_CATEGORY, count: totalCategoryCount, icon: "" },
      ...productCategory,
    ];
  }, [productCategory]);

  const [page, setPage] = useState<number>(1);

  // categoryService wraps getBikeProducts for the current selected category
  async function categoryService(p: number) {
    setPage(p);
    await getBikeProducts(selectedCategory);
  }

  // onChangeFilterProducts — called by ProductFilter when filter results come in
  function handleChangeFilterProducts(
    data: ShopByProductDetailsType[],
    pagination?: PaginationType,
  ) {
    setFilteredBikeProducts(data);
    if (pagination) setPage(pagination.currentPage);
  }

  if (!bikeDetails && !isBikeDetailLoading) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#181818" }}
      >
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

  const {
    name: modelName = "",
    description = "",
    type = "",
    imageUrl = "",
    brand: { name: brandName = "" } = {},
  } = bikeDetails || {};

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Hero Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl flex items-center justify-center">
              {!isBikeProductLoading ? (
                <img
                  src={imageUrl}
                  alt={modelName}
                  className="max-w-full max-h-96 object-contain"
                  loading="lazy"
                  onError={(e) => (e.currentTarget.src = BikePlaceholderImage)}
                />
              ) : (
                <Skeleton width={500} height={380} />
              )}
            </div>

            <div className="text-white">
              <div className="mb-4">
                {!isBikeProductLoading ? (
                  <span
                    style={{ textTransform: "capitalize" }}
                    className="px-4 py-2 bg-yellow-400/20 text-yellow-400 rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ) : (
                  <Skeleton
                    sx={{ backgroundColor: "#facc1533", borderRadius: "1rem" }}
                    width={80}
                    height={40}
                  />
                )}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {!isBikeProductLoading ? (
                  modelName
                ) : (
                  <Skeleton
                    sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                    width={300}
                  />
                )}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-6">
                {!isBikeProductLoading ? (
                  description
                ) : (
                  <Skeleton
                    sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                    width={150}
                  />
                )}
              </p>
              <div className="flex items-center gap-4 mb-8">
                <span className="text-yellow-400 text-lg font-medium">
                  {
                    !isBikeProductLoading ? brandName.toUpperCase() : (
                      <Skeleton
                        sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                        width={100}
                      />
                    )
                  }
                </span>
                <span className="text-white/50">•</span>
                <span className="text-white/70">
                  {
                    !isBikeProductLoading ? `${bikeProducts.length} Products Available` : (
                      <Skeleton
                        sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                        width={150}
                      />
                    )
                  }
                </span>
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
          <div className="mb-8">
            <h2
              style={{ textTransform: "capitalize" }}
              className="text-white text-3xl md:text-4xl font-bold mb-2"
            >
              Products for {modelName.toUpperCase()}
            </h2>
            <p className="text-white/60">
              Browse {bikeProducts.length} accessories designed for your{" "}
              {modelName}
            </p>
          </div>

          {bikeId && (
            <ProductSection
              type="bike"
              subCategory={subCategory}
              setSubCategory={setSubCategory}
              modelId={bikeId}
              products={filteredBikeProducts}
              categoriesWithCount={categoriesWithCount}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              onChangeFilterProducts={(data) => setFilteredBikeProducts(data)} // no pagination
              onClearFilter={handleClearFilter}
              isLoading={isBikeProductLoading}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;
