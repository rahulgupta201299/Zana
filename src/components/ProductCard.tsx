import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { PlusIcon } from "lucide-react";
import { ShopByProductDetailsType } from "@/Redux/Product/Types";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { ROUTES } from "@/Constants/Routes";
import { encodedGeneratedPath } from "@/Utils/global";
import { getProductImageProps } from "@/Utils/ImageUtils";
import BikePlaceholderImage from "@/Assets/Images/BikePlaceholder.svg";

const ProductCard = ({
  product,
  onClick,
  height = 186,
  count = 0,
  loading = false,
  priority = false,
}: {
  product?: ShopByProductDetailsType;
  onClick: () => void;
  count: number;
  height?: number;
  loading?: boolean;
  priority?: boolean;
}) => {
  const {
    imageUrl = "",
    name = "",
    quantityAvailable = 0,
    category,
    _id,
  } = product || {};
  const isDisabled = Boolean(product && count >= quantityAvailable);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const showSkeleton = loading || !product || !imageUrl || !isImageLoaded;
  const imageProps = getProductImageProps(imageUrl);

  const navigate = useNavigate();

  useEffect(() => {
    setIsImageLoaded(false);

    const syncLoadedImage = () => {
      const image = imageRef.current;

      if (image?.complete && image.naturalWidth > 0) {
        setIsImageLoaded(true);
      }
    };

    const animationFrameId = window.requestAnimationFrame(syncLoadedImage);
    window.addEventListener("pageshow", syncLoadedImage);

    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener("pageshow", syncLoadedImage);
    };
  }, [imageUrl]);

  function handleProductClick(
    productCategory?: string,
    productItem?: string,
    productId?: string,
  ) {
    if (!productCategory || !productItem || !productId) return;

    const path = encodedGeneratedPath(ROUTES.PRODUCT_DETAIL, {
      productCategory,
      productItem,
      productId,
    });

    navigate(path);
  }

  return (
    <div
      className="relative group hover:border-yellow-400 transition-all duration-300"
      style={{
        height,
        border: "2px solid #5b5858", 
        borderRadius: 8,
        overflow: "hidden",
      }}
    >
      {showSkeleton && (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height="100%"
          sx={{
            position: "absolute",
            inset: 0,
            borderRadius: 2,
            backgroundColor: "rgba(255,255,255,0.1)",
          }}
        />
      )}

      {product && imageUrl && (
        <>
          <img
            ref={imageRef}
            onClick={() => handleProductClick(category, name, _id)}
            {...imageProps}
            alt={name}
            data-original-src={imageUrl}
            sizes="(min-width: 768px) 298px, 50vw"
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            decoding="async"
            onLoad={() => setIsImageLoaded(true)}
            onError={(event) => {
              const originalSrc = event.currentTarget.dataset.originalSrc;

              if (
                originalSrc &&
                event.currentTarget.src !== originalSrc &&
                event.currentTarget.dataset.fallbackApplied !== "true"
              ) {
                event.currentTarget.removeAttribute("srcset");
                event.currentTarget.dataset.fallbackApplied = "true";
                event.currentTarget.src = originalSrc;
                return;
              }

              event.currentTarget.removeAttribute("srcset");
              event.currentTarget.src = BikePlaceholderImage;
              setIsImageLoaded(true);
            }}
            className="w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-opacity duration-200"
            style={{ opacity: isImageLoaded ? 1 : 0 }}
          />
          {isImageLoaded && (
            <div className="absolute bottom-2 left-2 group">
              <button
                style={{
                  cursor: isDisabled ? "not-allowed" : "pointer",
                  opacity: isDisabled ? 0.7 : 1,
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  onClick();
                }}
                disabled={isDisabled}
                className="h-9 bg-white rounded-full flex items-center justify-center
                 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300
                 w-9 group-hover:w-auto group-hover:px-3"
              >
                <span
                  className="whitespace-nowrap text-sm font-semibold text-black
                   hidden translate-x-[-6px]
                   md:group-hover:inline-block group-hover:translate-x-0
                   transition-all duration-300 mr-1"
                >
                  Add to cart
                </span>

                <ShoppingCartOutlinedIcon className="block md:!hidden !w-5 !h-5 text-black" />

                <PlusIcon className="hidden md:block w-4 h-4 text-black flex-shrink-0" />
              </button>

              {count > 0 && (
                <span
                  className="absolute -top-2 -right-2 min-w-[18px] h-[18px] px-1 rounded-full
                          bg-red-500 text-white text-xs flex items-center justify-center
                          font-semibold shadow transition-all duration-300
                          group-hover:translate-x-0"
                >
                  {count}
                </span>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductCard;
