import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { products } from "@/data/products";
import { TAppDispatch } from "@/Configurations/AppStore";
import { categories } from "@/data/productCategories";
import { Heart, ShoppingCart } from "lucide-react";
import { ALL_CATEGORY, CartQuantityEnum } from "@/Constants/AppConstant"
import BikePlaceholderImage from '@/Assets/Images/BikePlaceholder.svg';
import { PaginationType, ProductCatalogDetailsType, ProductCatergoryCountType, ShopByProductDetailsType } from "@/Redux/Product/Types";
import { replaceSpacesWithHiphen } from "@/Utils/StringUtils";
import { ROUTES, SUB_ROUTES } from "@/Constants/Routes";
import ProductCategoryCountService from "@/Redux/Product/Services/ProductCategoryCountService";
import CategoryProductService from "@/Redux/Product/Services/CategoryProductService";
import { handleCart } from "@/Utils/CartUtils";

const ProductCatalogPage = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState<string>(ALL_CATEGORY);
  const [categoryDetails, setCategoryDetails] = useState<ProductCatergoryCountType[]>([])
  const [filteredProducts, setFilteredProducts] = useState<ShopByProductDetailsType[]>([])
  const [currentPage, setCurrentPage] = useState<number>(0)
  const [limit, setLimit] = useState<number>(0)
  const [numberOfPages, setNumberOfPages] = useState<number>(0)

  const dispatch = useDispatch<TAppDispatch>()

  function handleProductClick(productCategory: string, productName: string, productId: string) {
    const category = replaceSpacesWithHiphen(productCategory)
    const name = replaceSpacesWithHiphen(productName)

    navigate(`${SUB_ROUTES.PRODUCT}/${category}/${name}/${productId}`);
  }

  async function handleCategoryService(type: string) {
    let products: ShopByProductDetailsType[], pagination: PaginationType;
    try {
      const { data, pagination: paginationResponse } = await dispatch(CategoryProductService({ category: selectedCategory, queryParams: { page: 1, limit: 10 } })) as ProductCatalogDetailsType
      products = data
      pagination = paginationResponse

      const { totalPages, productsPerPage, currentPage } = pagination

      setNumberOfPages(totalPages)
      setCurrentPage(currentPage)
      setLimit(productsPerPage)
      setFilteredProducts(products)
      setSelectedCategory(type)

    } catch (error: any) {
      throw error
    }
  }

  async function pageOps() {
    try {
      const res = await dispatch(ProductCategoryCountService()) as ProductCatergoryCountType[]

      const totalCategoryCount = res.reduce((acc, curr) => acc + curr.count, 0)
      setCategoryDetails([{ name: ALL_CATEGORY, count: totalCategoryCount, icon: "" }, ...res])

      await handleCategoryService(selectedCategory)

    } catch (error: any) {
      console.error(error)
    }
  }

  useEffect(() => {
    pageOps()
  }, [])

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2a2a2a' }}>
      {/* Hero Section */}
      <div className="py-12 md:py-16 px-4 md:px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
            PRODUCT CATALOG
          </h1>
          <p className="text-white/70 text-lg md:text-xl mb-8">
            Explore {categoryDetails?.[0]?.count || 0} premium motorcycle accessories
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categoryDetails.map((category, ind) => {
              const { name, count, icon } = category
              const categoryName = name.toLowerCase()

              return (
                <button
                  key={ind}
                  onClick={() => handleCategoryService(categoryName)}
                  style={{ textTransform: 'capitalize' }}
                  className={`px-4 py-2 rounded-lg text-sm md:text-base font-medium transition-all ${selectedCategory === categoryName
                    ? "bg-yellow-400 text-black"
                    : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                >
                  {
                    categoryName !== ALL_CATEGORY && (
                      <img
                        src={icon}
                        alt={categoryName}
                        style={{ display: 'inline-block' }}
                        className="w-5 h-5 object-contain"
                      />
                    )
                  }
                  <span>
                    {categoryName === ALL_CATEGORY ? 'All Products' : categoryName} ({count})
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="py-8 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          {/* {selectedCategory !== "All" && (
            <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
              {categories.find(c => c.id === selectedCategory)?.icon} {selectedCategory}
              <span className="text-white/60 ml-3 text-lg">({displayedProducts.length} products)</span>
            </h2>
          )} */}

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product) => {

              const { _id, category, name, imageUrl, isBikeSpecific, price } = product

              return (
                <div
                  key={_id}
                  onClick={() => handleProductClick(category, name, _id)}
                  className="bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-400 transition-all duration-300 cursor-pointer group"
                >
                  {/* Product Image */}
                  <div className="relative bg-white p-4 md:p-6 h-48 md:h-64 flex items-center justify-center">
                    <img
                      src={imageUrl}
                      alt={name}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => e.currentTarget.src = BikePlaceholderImage}
                    />
                    {isBikeSpecific && (
                      <div className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-bold">
                        FEATURED
                      </div>
                    )}
                    {!isBikeSpecific && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                        UNIVERSAL
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-3 md:p-4">
                    <div className="mb-1">
                      <span className="text-xs text-yellow-400 font-medium">
                        {category}
                      </span>
                    </div>
                    <h3 className="text-white text-sm md:text-lg font-bold mb-2 line-clamp-2 group-hover:text-yellow-400 transition-colors">
                      {name}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 text-lg md:text-xl font-bold">
                        ₹ {price.toLocaleString()}
                      </span>
                      <div className="flex gap-1 md:gap-2">
                        {/* <button
                          onClick={(e) => handleAddToWishlist(e, product.id)}
                          className="p-1.5 md:p-2 bg-white/10 rounded-lg hover:bg-yellow-400 hover:text-black transition-all"
                        >
                          <Heart size={14} className="md:w-4 md:h-4" />
                        </button> */}
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            handleCart(CartQuantityEnum.INCREMENT, _id, price, ROUTES.CART)
                          }}
                          className="p-1.5 md:p-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition-all"
                        >
                          <ShoppingCart size={14} className="md:w-4 md:h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* No Products Found */}
          {filteredProducts.length === 0 && (
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

export default ProductCatalogPage;
