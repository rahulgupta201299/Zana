import { PlusIcon } from "lucide-react";
import useCart from "@/hooks/useCart";

const products = [
  {
    id: "garage-1",
    name: "Crash Guard",
    price: 500,
    quantityAvailable: 6,
    image: "/uploads/3f568aa5-84f0-400d-bcee-50d7f72ac960.png",
  },
  {
    id: "garage-2",
    name: "Saddle Stay",
    price: 500,
    quantityAvailable: 7,
    image: "/uploads/a1bc180c-1729-4869-9875-7565313c92f5.png",
  },
  {
    id: "garage-3",
    name: "Radiator Guard",
    price: 500,
    quantityAvailable: 8,
    image: "/uploads/2f72e496-2fd9-4119-9f82-40c335b48e00.png",
  },
  {
    id: "garage-4",
    name: "Saddle Bag",
    price: 500,
    quantityAvailable: 9,
    image: "/uploads/681f7126-6997-49d7-b7df-cfcbbefcee1f.png",
  },
  {
    id: "garage-5",
    name: "Tank Bag",
    price: 500,
    quantityAvailable: 10,
    image: "/uploads/c4a8d0de-712f-4e03-9ebd-fc8ca95fd796.png",
  },
  {
    id: "garage-6",
    name: "Aux Light",
    price: 500,
    quantityAvailable: 11,
    image: "/uploads/2628a268-dabd-479c-8c8a-4aea7d9044f2.png",
  },
  {
    id: "garage-7",
    name: "Light Mount",
    price: 500,
    quantityAvailable: 12,
    image: "/uploads/4e0cd1d8-aed1-4a03-88d2-f008c9f84ceb.png",
  },
  {
    id: "garage-8",
    name: "Fog Light",
    price: 500,
    quantityAvailable: 5,
    image: "/uploads/51fb8fe4-8cdd-4935-8adf-f71da854df6e.png",
  },
];

const ProductCard = ({
  product,
  onClick,
  height = 176,
  count = 0,
}: {
  product: (typeof products)[0];
  onClick: () => void;
  count: number,
  height?: number;
}) => (
  <div className="relative group" style={{ height }}>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
    <div className="absolute bottom-2 left-2 group">
      <button
        onClick={onClick}
        className="h-9 bg-white rounded-full flex items-center justify-center
               overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
               w-9 group-hover:w-auto group-hover:px-3"
      >
        <span
          className="whitespace-nowrap text-sm font-semibold text-black
                 hidden translate-x-[-6px]
                 group-hover:inline-block group-hover:translate-x-0
                 transition-all duration-300 mr-1"
        >
          Add to cart
        </span>
        <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
      </button>

      {
        count > 0 && (
          <span
            className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full
               bg-red-500 text-white text-xs flex items-center justify-center
               font-semibold shadow transition-all duration-300
               group-hover:translate-x-0"
          >
            {count}
          </span>
        )
      }
    </div>
  </div>
);

const GarageFavorite = () => {

  const { incrementToCart, getQuantity } = useCart()

  function handleAddToCart(index: number) {
    const product = products[index];

    const {id: productId, quantityAvailable } = product
    incrementToCart(productId, quantityAvailable, { saveToDb: true, easyCheckout: true })
  }

  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];

  return (
    <div
      className="py-6 md:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-8">
          GARAGE Favorite
        </h2>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-2">
          {desktopColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2">
              {col.map((idx) => (
                <ProductCard
                  key={idx}
                  product={products[idx]}
                  onClick={() => handleAddToCart(idx)}
                  height={col.length === 1 ? 360 : 176}
                  count={getQuantity(products[idx].id)}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:hidden grid-cols-2 gap-2">
          {products.slice(0, 4).map((product, idx) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => handleAddToCart(idx)}
              height={150}
              count={getQuantity(products[idx].id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GarageFavorite;
