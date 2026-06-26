import { useEffect, useMemo, useRef, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import AppBreadcrumb from "@/components/AppBreadcrumb";
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
import { capitalise } from "@/Utils/global";
import { SeoMeta } from "@/components/SeoMeta";

type BikeDetailLocationState = {
  category?: string;
};

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
  const { category: categoryFromState = ALL_CATEGORY } = (location.state ||
    {}) as BikeDetailLocationState;
  const initialCategory = (categoryFromState || ALL_CATEGORY).toLowerCase();

  const [selectedCategory, setSelectedCategory] = useState<string>(
    initialCategory || ALL_CATEGORY,
  );
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
  const [isBikeProductsHydrating, setIsBikeProductsHydrating] = useState(true);
  const [isBikeDetailsHydrating, setIsBikeDetailsHydrating] = useState(true);
  const bikeProductsRequestRef = useRef(0);
  const bikeDetailsRequestRef = useRef(0);
  const isBikeProductsPending =
    isBikeProductLoading || isBikeProductsHydrating;
  const isBikeDetailsPending = isBikeDetailLoading || isBikeDetailsHydrating;

  async function getBikeProducts(
    category = ALL_CATEGORY,
    subCategory?: string,
  ) {
    const requestId = bikeProductsRequestRef.current + 1;
    bikeProductsRequestRef.current = requestId;

    setIsBikeProductsHydrating(true);
    setFilteredBikeProducts([]);
    try {
      const response = (await dispatch(
        BikeProductService({
          modelId: bikeId,
          ...(category &&
            category !== ALL_CATEGORY && { category, subCategory }),
        }),
      )) as ShopByProductDetailsType[];
      if (bikeProductsRequestRef.current !== requestId) return;
      setBikeProducts(response);
      setFilteredBikeProducts(response);
      setIsBikeProductsHydrating(false);
    } catch (error: any) {
      if (bikeProductsRequestRef.current === requestId) {
        setBikeProducts([]);
        setFilteredBikeProducts([]);
        setIsBikeProductsHydrating(false);
      }
      console.error(error);
    }
  }

  async function getBikeDetails() {
    const requestId = bikeDetailsRequestRef.current + 1;
    bikeDetailsRequestRef.current = requestId;

    setIsBikeDetailsHydrating(true);
    try {
      const response = (await dispatch(
        BikeDetailService(bikeId),
      )) as BikeDetailResType;
      if (bikeDetailsRequestRef.current !== requestId) return;
      setBikeDetails(response);
      setIsBikeDetailsHydrating(false);
    } catch (error: any) {
      if (bikeDetailsRequestRef.current === requestId) {
        setBikeDetails(null);
        setIsBikeDetailsHydrating(false);
      }
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
    const activeCategory = initialCategory || ALL_CATEGORY;
    setSelectedCategory(activeCategory);
    setFilters({ category: activeCategory, subCategory: "" });
    setSubCategory("");
    getBikeDetails();
    getBikeModelCategoryCount();
    getBikeProducts(activeCategory);
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
  }, [location.pathname, currency, initialCategory]);

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
    setIsBikeProductsHydrating(false);
  }

  if (!bikeDetails && !isBikeDetailsPending) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{ backgroundColor: "#181818" }}
      >
        <SeoMeta
          title="Bike Not Found | Zana Motorcycles"
          description="The requested bike model could not be found."
          noIndex
        />
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
  const bikeBreadcrumbLabel = isZProPath
    ? BikeCategoryEnum.ZPRO
    : "Shop By Bike";
  const bikeListPath = `/${bikeType}${SUB_ROUTES.BIKES}`;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      <SeoMeta
        title={`${brandName} ${modelName} Accessories | Zana Motorcycles`}
        description={
          description ||
          `Shop crash guards, racks, guards, and motorcycle accessories for ${brandName} ${modelName}.`
        }
        image={imageUrl}
      />
      {/* Hero Section */}
      <div className="relative py-12 md:py-20 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <AppBreadcrumb
            className="mb-8"
            items={[
              { label: "Home", to: ROUTES.BASE_URL },
              { label: bikeBreadcrumbLabel, to: bikeListPath },
              {
                label: brandName,
                to: bikeListPath,
                state: { brand: brandName.toLowerCase() },
              },
              { label: modelName },
              ...(selectedCategory && selectedCategory !== ALL_CATEGORY
                ? [{ label: capitalise(selectedCategory) }]
                : []),
            ]}
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl flex items-center justify-center">
              {!isBikeDetailsPending ? (
                <img
                  src={imageUrl}
                  alt={modelName}
                  className="max-w-full max-h-96 object-contain"
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  onError={(e) => (e.currentTarget.src = BikePlaceholderImage)}
                />
              ) : (
                <Skeleton width={500} height={380} />
              )}
            </div>

            <div className="text-white">
              <div className="mb-4">
                {!isBikeDetailsPending ? (
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
                {!isBikeDetailsPending ? (
                  modelName
                ) : (
                  <Skeleton
                    sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                    width={300}
                  />
                )}
              </h1>
              <p className="text-xl md:text-2xl text-white/70 mb-6">
                {!isBikeDetailsPending ? (
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
                  {!isBikeDetailsPending ? (
                    brandName.toUpperCase()
                  ) : (
                    <Skeleton
                      sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                      width={100}
                    />
                  )}
                </span>
                <span className="text-white/50">•</span>
                <span className="text-white/70">
                  {!isBikeProductsPending ? (
                    `${bikeProducts.length} Products Available`
                  ) : (
                    <Skeleton
                      sx={{ backgroundColor: "rgba(255,255,255,0.20)" }}
                      width={150}
                    />
                  )}
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
              breadcrumbState={{
                bikeType,
                bikeBrand: brandName,
                bikeModel: modelName,
                bikeId,
              }}
              products={filteredBikeProducts}
              categoriesWithCount={categoriesWithCount}
              selectedCategory={selectedCategory}
              onSelectCategory={handleSelectCategory}
              onChangeFilterProducts={handleChangeFilterProducts}
              onClearFilter={handleClearFilter}
              isLoading={isBikeProductsPending}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BikeDetailPage;
