import { TAppDispatch, TAppStore } from "@/Configurations/AppStore";
import useCart from "@/hooks/useCart";
import { getNewArrivalsList, getSelectedCurrency } from "@/Redux/Landing/Selectors";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { newArrivalsName } from "@/Redux/Landing/Actions";
import { useEffect } from "react";
import { autoRetry } from "@/Utils/AutoRetryMechanism";
import newArrivalsServiceAction from "@/Redux/Landing/Services/NewArrivals";
import { getLoginDetails } from "@/Redux/Auth/Selectors";
import { setOpenSignupPopup } from "@/Redux/Auth/Reducer";

const NewArrivals = () => {
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [newArrivalsName]),
  );
  const products = useSelector((state: TAppStore) => getNewArrivalsList(state));
  const currency = useSelector(getSelectedCurrency);
  const { phoneNumber = "" } = useSelector(getLoginDetails);
  const dispatch = useDispatch<TAppDispatch>();

  const { incrementToCart, getQuantity } = useCart();

  useEffect(() => {
    const hasStaleCurrency =
      products.length > 0 && products[0].currency !== currency;

    if (products.length && !hasStaleCurrency) return;

    const retry = autoRetry();
    void retry(() => dispatch(newArrivalsServiceAction()));
  }, [currency, dispatch, products]);

  function handleAddToCart(productId: string) {
    const product = products.find((item) => item._id === productId);

    if (!product) return;

    const { quantityAvailable = 0 } = product;

    incrementToCart(product, productId, quantityAvailable, {
      easyCheckout: true,
    });
  }
  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];
  const isInitialLoading = isLoading && !products.length;

  return (
    <div
      className="py-6 md:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-5xl font-black text-white mb-1 md:mb-2">
            NEW ARRIVALS
          </h2>
          <p className="text-gray-300 text-xs md:text-lg">
            Fresh Drops for Fierce Rides.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-5 gap-2">
          {desktopColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2">
              {col.map((idx) => {
                const product = products[idx];

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
          {products.slice(0,8).map((product, idx) => {
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

export default NewArrivals;
