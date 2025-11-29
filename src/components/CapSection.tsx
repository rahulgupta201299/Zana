import { useDispatch } from "react-redux";
import { TAppDispatch } from "@/Configurations/AppStore";
import { useCartContext } from "@/Context/CartProvider";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import { PlusIcon } from "lucide-react";

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
}: {
  product: (typeof products)[0];
  onClick: () => void;
  height?: number;
}) => (
  <div className="relative group" style={{ height }}>
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-full object-cover rounded-lg shadow-lg"
    />
    <button
      onClick={onClick}
      className="absolute bottom-2 left-2 h-9 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 w-9 hover:w-auto hover:px-3 hover:justify-start group"
    >
      <span className="whitespace-nowrap text-sm font-semibold text-black opacity-0 w-0 group-hover:opacity-100 group-hover:w-auto group-hover:mr-1.5 transition-all duration-300">
        Add to cart
      </span>
      <PlusIcon className="w-4 h-4 text-black flex-shrink-0" />
    </button>
  </div>
);

const CapSection = () => {

  const { addToCart } = useCartContext()
  const dispatch = useDispatch<TAppDispatch>()

  function handleAddToCart(index: number) {
    const product = products[index];

    const {id: productId, name: productName, price, image, quantityAvailable } = product
    addToCart(productId, productName, price, image, quantityAvailable)
    dispatch(setOpenCart(true))
  }

  const desktopColumns = [[0], [1, 2], [3], [4, 5], [6, 7]];

  return (
    <div
      className="py-6 md:py-12 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#181818" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-white text-lg md:text-4xl lg:text-5xl font-black text-center mb-4 md:mb-8">
          CAPS Section
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CapSection;
