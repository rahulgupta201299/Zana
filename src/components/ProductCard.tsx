import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import { Skeleton } from "@mui/material";
import { PlusIcon } from "lucide-react";

const ProductCard = ({
  product,
  onClick,
  height = 176,
  count = 0,
  loading = false
}: {
  product: ShopByProductDetailsType;
  onClick: () => void;
  count: number,
  height?: number;
  loading?: boolean
}) => {

  const { imageUrl = '', name = '', quantityAvailable = 0 } = product || {}
  const isDisabled = Boolean(product && count >= quantityAvailable)

  return (
    <div className="relative group" style={{ height }}>
      {loading ? (
        <Skeleton
          variant="rectangular"
          width="100%"
          height="100%"

          sx={{ borderRadius: 2, backgroundColor: "rgba(255,255,255,0.1)", }}
        />
      ) : (
        <>
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute bottom-2 left-2 group">
            <button
              style={{ cursor: isDisabled ? 'not-allowed' : 'pointer', opacity: isDisabled ? 0.7 : 1 }}
              onClick={onClick}
              disabled={isDisabled}
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
        </>
      )}
    </div>
  )
}


export default ProductCard;