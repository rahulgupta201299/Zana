import useCart from "@/hooks/useCart";
import { useDispatch, useSelector } from "react-redux";
import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import { getGarageFavorite, getSelectedCurrency } from "@/Redux/Landing/Selectors";
import ProductCard from "./ProductCard";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { garageFavoriteName } from "@/Redux/Landing/Actions";
import { useEffect } from "react";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import garageFavoriteServiceAction from "@/Redux/Landing/Services/GarageFavourite";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";

const GarageFavorite = () => {
  const productList = useSelector((state: TAppStore) =>
    getGarageFavorite(state),
  );
  const currency = useSelector(getSelectedCurrency);
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [garageFavoriteName]),
  );
  const dispatch = useDispatch<TAppDispatch>();
  const { incrementToCart, getQuantity } = useCart();
  const { phoneNumber = "" } = useSelector(getLoginDetails);

  useEffect(() => {
    const hasStaleCurrency =
      productList.length > 0 && productList[0].currency !== currency;

    if (productList.length && !hasStaleCurrency) return;

    const retry = autoRetry();
    void retry(() => dispatch(garageFavoriteServiceAction()));
  }, [currency, dispatch, productList]);

  function handleAddToCart(productId: string) {
    const product = productList.find((item) => item._id === productId);

    if (!product) return;

    const { quantityAvailable = 0 } = product;

    if (!phoneNumber) {
      dispatch(setOpenSignupPopup(true));
      return;
    }

    incrementToCart(product, productId, quantityAvailable, {
      easyCheckout: true,
    });
  }

  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];
  const isInitialLoading = isLoading && !productList.length;

  return (
    <div
      className="py-6 md:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-8">
          GARAGE FAVORITE
        </h2>

        <div className="hidden md:grid grid-cols-5 gap-2">
          {desktopColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2">
              {col.map((idx) => {
                const product = productList[idx];

                return (
                  <ProductCard
                    key={product?._id ?? idx}
                    product={product}
                    onClick={() => product && handleAddToCart(product._id)}
                    height={col.length === 1 ? 380 : 186}
                    count={getQuantity(product?._id ?? "")}
                    loading={isInitialLoading}
                  />
                );
              })}
            </div>
          ))}
        </div>
       <div
          className="md:hidden grid grid-cols-2 gap-2 p-3"
          style={{ gridAutoRows: "160px" }}
        >
          {productList.slice(0,8).map((product, idx) => {
            const tallRight = [1, 8];
            const tallLeft = [4];

            const isTall = [...tallRight, ...tallLeft].includes(idx);

            return (
              <div
                key={product._id}
                style={{
                  gridRow: isTall ? "span 2" : "span 1",
                }}
              >
                <ProductCard
                  product={product}
                  height={isTall ? 328 : 160}
                  count={getQuantity(product._id)}
                  loading={isLoading}
                  onClick={() => handleAddToCart(product._id)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GarageFavorite;
