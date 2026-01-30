import { TAppStore } from "@/Configurations/AppStore";
import useCart from "@/hooks/useCart";
import { getNewArrivalsList } from "@/Redux/Landing/Selectors";
import { PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { newArrivalsName } from "@/Redux/Landing/Actions";

const NewArrivals = () => {
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [newArrivalsName]),
  );
  const products = useSelector((state: TAppStore) => getNewArrivalsList(state));

  const { incrementToCart, getQuantity } = useCart();

    function handleAddToCart(productId: string) {
    const product = products.find(item => item._id === productId)

    if (!product) return;

    const { quantityAvailable = 0 } = product

    incrementToCart(product, productId, quantityAvailable, { easyCheckout: true })
  }
  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];

  return (
    <div className="py-8 md:py-16" style={{ backgroundColor: "#181818" }}>
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
              {col.map((idx) => (
                <ProductCard
                  key={idx}
                  product={products[idx]}
                  onClick={() => handleAddToCart(products[idx]._id)}
                  height={col.length === 1 ? 360 : 176}
                  count={getQuantity(products[idx]?._id)}
                  loading={isLoading}
                />
              ))}
            </div>
          ))}
        </div>

      
          <div className="md:hidden grid grid-cols-3 grid-rows-3 gap-2">
          {products.slice(0, 8).map((product, idx) => {
            const isCenterFeatured = idx === 1;

            return (
              <div
                key={product._id}
                className={isCenterFeatured ? "row-span-2 col-start-2" : ""}
              >
                <ProductCard
                  product={product}
                  height={isCenterFeatured ? 310 : 150}
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
