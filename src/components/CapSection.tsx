import { useDispatch } from "react-redux";
import { TAppDispatch } from "@/Configurations/AppStore";
import { useCartContext } from "@/Context/CartProvider";
import { setOpenCart } from "@/Redux/Cart/Reducer";
import { PlusIcon } from "lucide-react";
import CapImg1 from '@/Assets/Images/CapSection/IMG_1234.jpg'
import CapImg2 from '@/Assets/Images/CapSection/IMG_7994.jpg'
import CapImg3 from '@/Assets/Images/CapSection/IMG_8059.jpg'
import CapImg4 from '@/Assets/Images/CapSection/IMG_8132.jpg'
import CapImg5 from '@/Assets/Images/CapSection/IMG_8134.jpg'
import CapImg6 from '@/Assets/Images/CapSection/IMG_8136.jpg'
import CapImg7 from '@/Assets/Images/CapSection/IMG_8137.jpg'
import CapImg8 from '@/Assets/Images/CapSection/IMG_8139.jpg'
import CapImg9 from '@/Assets/Images/CapSection/IMG_8140.jpg'
import CapImg10 from '@/Assets/Images/CapSection/IMG_8142.jpg'

export const capProducts = [
  {
    id: "cap-1",
    name: "Throttle Up",
    price: 1500,
    quantityAvailable: 6,
    image: CapImg1,
  },
  {
    id: "cap-2",
    name: "Love Speed",
    price: 1600,
    quantityAvailable: 7,
    image: CapImg2,
  },
  {
    id: "cap-3",
    name: "Pure Love",
    price: 1800,
    quantityAvailable: 8,
    image: CapImg3,
  },
  {
    id: "cap-4",
    name: "Godzilla",
    price: 2000,
    quantityAvailable: 9,
    image: CapImg4,
  },
  {
    id: "cap-5",
    name: "Devil",
    price: 1500,
    quantityAvailable: 10,
    image: CapImg5,
  },
  {
    id: "cap-6",
    name: "Hard Tuned",
    price: 1700,
    quantityAvailable: 11,
    image: CapImg6,
  },
  {
    id: "cap-7",
    name: "Ride Easy",
    price: 1900,
    quantityAvailable: 12,
    image: CapImg7,
  },
  {
    id: "cap-8",
    name: "Decimo",
    price: 2000,
    quantityAvailable: 5,
    image: CapImg8,
  },
  {
    id: "cap-9",
    name: "Super veloce",
    price: 1600,
    quantityAvailable: 5,
    image: CapImg9,
  },
  {
    id: "cap-10",
    name: "Super Charged",
    price: 1800,
    quantityAvailable: 5,
    image: CapImg10,
  },
];

const ProductCard = ({
  product,
  onClick,
  height = 176,
}: {
  product: (typeof capProducts)[0];
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
    const product = capProducts[index];

    const { id: productId, name: productName, price, image, quantityAvailable } = product
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
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-lg md:text-5xl font-black text-white mb-1 md:mb-2">Moto Devil</h2>
          <p className="text-gray-300 text-xs md:text-lg">Brought To You by Zana</p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-5 gap-2">
          {desktopColumns.map((col, colIdx) => (
            <div key={colIdx} className="flex flex-col gap-2">
              {col.map((idx) => (
                <ProductCard
                  key={idx}
                  product={capProducts[idx]}
                  onClick={() => handleAddToCart(idx)}
                  height={col.length === 1 ? 360 : 176}
                />
              ))}
            </div>
          ))}
        </div>

        <div className="grid lg:hidden grid-cols-2 gap-2">
          {capProducts.slice(0, 4).map((product, idx) => (
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
