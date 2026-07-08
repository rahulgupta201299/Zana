import { MouseEvent, useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { ALL_CATEGORY } from "@/Constants/AppConstant";
import {
  ProductCatalogDetailsType,
  ShopByProductDetailsType,
} from "@/Redux/Product/Types";
import { ROUTES } from "@/Constants/Routes";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import AllProductService from "@/Redux/Product/Services/AllProductService";
import { productCategorySelector } from "@/Redux/Product/Selectors";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import {
  allProductServiceName,
  categoryProductServiceName,
  filterProductServiceName,
} from "@/Redux/Product/Actions";
import useCart from "@/hooks/useCart";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { getSelectedCurrency } from "@/Redux/Landing/Selectors";
import withDeviceDetails from "@/Hocs/withDeviceDetails";
import ProductSection from "@/components/ProductSection";
import AppBreadcrumb from "@/components/AppBreadcrumb";
import { capitalise } from "@/Utils/global";
import { replaceSpecialCharactersWithHyphen } from "@/Utils/StringUtils";

function getProductCatalogCategoryPath(category: string) {
  return `${ROUTES.PRODUCT_CATALOG}/${replaceSpecialCharactersWithHyphen(
    category,
  )}`;
}

const ProductCatalogPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productCategory: productCategoryParams = "" } = useParams<{
    productCategory?: string;
  }>();
  const { category: categoryFromState = "" } = location.state || {};

  const { incrementToCart } = useCart();

  const productCategory = useSelector(productCategorySelector);
  const initialCategory = useMemo(() => {
    if (productCategoryParams) {
      const matchedCategory = productCategory.find(
        ({ name }) =>
          replaceSpecialCharactersWithHyphen(name) === productCategoryParams,
      );

      return (
        matchedCategory?.name.toLowerCase() ||
        productCategoryParams.split("-").join(" ")
      );
    }

    return categoryFromState.toLowerCase();
  }, [categoryFromState, productCategory, productCategoryParams]);

  const currency = useSelector(getSelectedCurrency);
  const isProductCategoryLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [
      categoryProductServiceName,
      filterProductServiceName,
      allProductServiceName,
    ]),
  );

  const [selectedCategory, setSelectedCategory] =
    useState<string>(initialCategory);
  const [subCategory, setSubCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<
    ShopByProductDetailsType[]
  >([]);
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [numberOfPages, setNumberOfPages] = useState<number>(0);
  const [isCatalogProductsHydrating, setIsCatalogProductsHydrating] =
    useState(true);
  const catalogRequestRef = useRef(0);

  const loginDetails = useSelector(getLoginDetails);
  const dispatch = useDispatch<TAppDispatch>();

  const LIMIT_PER_PAGE = 12;
  const isCatalogProductsPending =
    isProductCategoryLoading || isCatalogProductsHydrating;

  async function handleCategoryService(type: string, page = 1, skip = false) {
    const requestId = catalogRequestRef.current + 1;
    catalogRequestRef.current = requestId;
    const { phoneNumber = "" } = loginDetails;

    if (type === selectedCategory && page === currentPage && !skip) {
      setIsCatalogProductsHydrating(false);
      return;
    }

    try {
      setIsCatalogProductsHydrating(true);
      setFilteredProducts([]);
      setSelectedCategory(type);

      const action =
        type === ALL_CATEGORY
          ? AllProductService({
              page,
              limit: LIMIT_PER_PAGE,
              phoneNumber,
            })
          : CategoryProductService({
              category: type,
              queryParams: {
                page,
                limit: LIMIT_PER_PAGE,
                phoneNumber,
              },
            });

      const { data, pagination } = (await dispatch(
        action,
      )) as ProductCatalogDetailsType;

      if (catalogRequestRef.current !== requestId) return;
      setFilteredProducts(data);
      setNumberOfPages(pagination.totalPages);
      setCurrentPage(pagination.currentPage);
      setIsCatalogProductsHydrating(false);
    } catch (e) {
      if (catalogRequestRef.current === requestId) {
        setFilteredProducts([]);
        setNumberOfPages(0);
        setCurrentPage(page);
        setIsCatalogProductsHydrating(false);
      }
      console.error(e);
    }
  }

  const categoryDetails = useMemo(() => {
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

  async function pageOps() {
    window.scrollTo(0, 0);

    if (filteredProducts.length && initialCategory === selectedCategory) return;
    try {
      await handleCategoryService(initialCategory || ALL_CATEGORY, 1, true);
    } catch (error: any) {
      console.error(error);
    }
  }

  function handleAddToCart(
    e: MouseEvent<HTMLButtonElement>,
    product: ShopByProductDetailsType,
    productId: string,
    quantityAvailable: number,
  ) {
    e.stopPropagation();
    incrementToCart(product, productId, quantityAvailable, {
      navigateTo: ROUTES.CART,
    });
  }

  useEffect(() => {
    pageOps();
  }, [currency, initialCategory]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#2a2a2a" }}>
      {/* Hero Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <AppBreadcrumb
            className="mb-8"
            items={[
              { label: "Home", to: ROUTES.BASE_URL },
              { label: "Universal Products", to: ROUTES.PRODUCT_CATALOG },
              ...(selectedCategory && selectedCategory !== ALL_CATEGORY
                ? [{ label: capitalise(selectedCategory) }]
                : []),
            ]}
          />
          <div className="text-center">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
              PRODUCT CATALOG
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-8">
              Explore {categoryDetails?.[0]?.count || 0} premium motorcycle
              accessories
            </p>
          </div>

          <ProductSection
            type="catalog"
            subCategory={subCategory}
            setSubCategory={setSubCategory}
            products={filteredProducts}
            categoriesWithCount={categoryDetails}
            selectedCategory={selectedCategory}
            onSelectCategory={(category: string) => {
              handleCategoryService(category);
              navigate(getProductCatalogCategoryPath(category), {
                replace: true,
              });
            }}
            onChangeFilterProducts={(data, pagination) => {
              setFilteredProducts(data);
              if (pagination) {
                setCurrentPage(pagination.currentPage);
                setNumberOfPages(pagination.totalPages);
              }
              setIsCatalogProductsHydrating(false);
            }}
            onClearFilter={() =>
              handleCategoryService(selectedCategory, currentPage, true)
            }
            isLoading={isCatalogProductsPending}
            page={currentPage}
            totalPages={numberOfPages}
            onPageChange={(p) => {
              setCurrentPage(p);
              if (!subCategory) {
                handleCategoryService(selectedCategory, p);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default withDeviceDetails(ProductCatalogPage);
