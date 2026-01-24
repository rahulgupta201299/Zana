import { TAppStore } from "@/Configurations/AppStore";
import useCart from "@/hooks/useCart";
import { getNewArrivalsList } from "@/Redux/Landing/Selectors";
import { PlusIcon } from "lucide-react";
import { useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { newArrivalsName } from "@/Redux/Landing/Actions";

const NewArrivals = () => {
  const isLoading = useSelector<TAppStore, boolean>(state => isServiceLoading(state, [newArrivalsName]))
  const products = useSelector((state: TAppStore) => getNewArrivalsList(state))

  const { incrementToCart, getQuantity } = useCart()

  return (
    <div className="py-8 md:py-16" style={{ backgroundColor: '#181818' }}>
      <div className="px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-5xl font-black text-white mb-1 md:mb-2">
            NEW ARRIVALS
          </h2>
          <p className="text-gray-300 text-xs md:text-lg">
            Fresh Drops for Fierce Rides.
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:block max-w-7xl mx-auto">
          <div className="flex gap-2">
            {/* Column 1 */}
            <div className="flex-[1.5] flex flex-col gap-2">
              {
                products.slice(0, 2).map((item, ind) => (
                  <ProductCard
                    key={item._id}
                    product={item}
                    onClick={() => incrementToCart(item, item._id, item.quantityAvailable, { easyCheckout: true })}
                    height={295}
                    count={getQuantity(item._id)}
                    loading={isLoading}
                  />
                ))
              }
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-2">
              {
                products.slice(2, 2).map((item, ind) => (
                  <ProductCard
                    key={item._id}
                    product={item}
                    onClick={() => incrementToCart(item, item._id, item.quantityAvailable, { easyCheckout: true })}
                    height={295}
                    count={getQuantity(item._id)}
                    loading={isLoading}
                  />
                ))
              }
            </div>

            {/* Column 3 */}
            <div className="flex-1 flex flex-col gap-2">
              {
                products.slice(4, 2).map((item, ind) => (
                  <ProductCard
                    key={item._id}
                    product={item}
                    onClick={() => incrementToCart(item, item._id, item.quantityAvailable, { easyCheckout: true })}
                    height={295}
                    count={getQuantity(item._id)}
                    loading={isLoading}
                  />
                ))
              }
            </div>
          </div>
        </div>

        {/* Mobile Grid */}
        <div className="md:hidden max-w-7xl mx-auto">
          <div className="grid grid-cols-2 gap-2">
            {products.slice(0, 4).map((item, idx) => (
              <ProductCard
                key={item._id}
                product={item}
                onClick={() => incrementToCart(item, item._id, item.quantityAvailable, { easyCheckout: true })}
                height={150}
                count={getQuantity(item._id)}
                loading={isLoading}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewArrivals;