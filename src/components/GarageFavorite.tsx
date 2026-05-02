import { PlusIcon } from "lucide-react";
import useCart from "@/hooks/useCart";
import { useSelector } from "react-redux";
import { TAppStore } from "@/Configurations/AppStore";
import { getGarageFavorite } from "@/Redux/Landing/Selectors";
import ProductCard from "./ProductCard";
import { isServiceLoading } from "@/Redux/ServiceTracker/Selectors";
import { garageFavoriteName } from "@/Redux/Landing/Actions";

const GarageFavorite = () => {
  const productList = useSelector((state: TAppStore) =>
    getGarageFavorite(state),
  );
  const isLoading = useSelector<TAppStore, boolean>((state) =>
    isServiceLoading(state, [garageFavoriteName]),
  );
  const { incrementToCart, getQuantity } = useCart();

  function handleAddToCart(productId: string) {
    const product = productList.find((item) => item._id === productId);

    if (!product) return;

    const { quantityAvailable = 0 } = product;

    incrementToCart(product, productId, quantityAvailable, {
      easyCheckout: true,
    });
  }

  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];

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
              {col.map((idx) => (
                <ProductCard
                  key={idx}
                  product={productList[idx]}
                  onClick={() => handleAddToCart(productList[idx]._id)}
                  height={col.length === 1 ? 380 : 186}
                  count={getQuantity(productList[idx]?._id)}
                  loading={isLoading}
                />
              ))}
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
