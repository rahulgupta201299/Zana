import { MouseEvent, useState } from "react";
import { X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/Constants/Routes";
import { useCartContext } from "@/Context/CartProvider";

interface BikePartData {
  id: string;
  name: string;
  price: number;
  description: string;
  quantityAvailable: number;
  image: string;
}

interface YellowDot {
  id: string;
  x: number; // percentage from left
  y: number; // percentage from top
  partData: BikePartData;
}

interface BikeView {
  id: string;
  name: string;
  image: string;
  dots: YellowDot[];
}

const ShopTheLook = () => {
  const navigate = useNavigate();

  const { addToCart } = useCartContext()

  const [currentViewIndex, setCurrentViewIndex] = useState(0);
  const [selectedPart, setSelectedPart] = useState<BikePartData | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isRotating, setIsRotating] = useState(false);

  // Sample bike data with multiple views - different side images with same dimensions
  const bikeViews: BikeView[] = [
    {
      id: "side-view-1",
      name: "Side View - Left",
      image: "/uploads/2ec2bf66-f502-4f10-bb9e-6e304d83a854.png",
      dots: [
        {
          id: "top-rack-1",
          x: 26.97,
          y: 29.66,
          partData: {
            id: "top-rack",
            name: "Top Rack",
            price: 500,
            description:
              "Spacious, rugged, and ready for every ride — your ultimate top rack for adventure and utility.",
            image: "/uploads/eff9f866-19fc-4f25-b82d-d52a9464ce6c.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "headlight-1",
          x: 66.43,
          y: 30.16,
          partData: {
            id: "headlight",
            name: "Headlight Assembly",
            price: 1500,
            description:
              "High-performance LED headlight for enhanced visibility and style.",
            image: "/uploads/7f595850-f9ae-41ae-a1b4-15a130e88029.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "crash-guard-1",
          x: 74.2,
          y: 70.16,
          partData: {
            id: "crash-guard",
            name: "Crash Guard",
            price: 1200,
            description:
              "Heavy-duty protection for your bike's engine and frame during adventures.",
            image: "/uploads/7f595850-f9ae-41ae-a1b4-15a130e88029.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "skid-plate-1",
          x: 52.16,
          y: 74.33,
          partData: {
            id: "skid-plate",
            name: "Skid Plate",
            price: 900,
            description: "Durable engine protection for off-road adventures.",
            image: "/uploads/65fa3801-e56f-4fa5-91c0-ced6fd64024b.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "rear-brake-1",
          x: 32,
          y: 70,
          partData: {
            id: "rear-brake",
            name: "Rear Brake System",
            price: 2000,
            description:
              "Premium rear brake assembly for superior stopping power.",
            image: "/uploads/65fa3801-e56f-4fa5-91c0-ced6fd64024b.png",
            quantityAvailable: 10,
          },
        },
      ],
    },
    {
      id: "side-view-2",
      name: "Side View - Right",
      image: "/uploads/99b42158-dc7a-48aa-8b06-3d9b6ca0b44c.png",
      dots: [
        {
          id: "top-rack-2",
          x: 79,
          y: 33,
          partData: {
            id: "top-rack",
            name: "Top Rack",
            price: 500,
            description:
              "Spacious, rugged, and ready for every ride — your ultimate top rack for adventure and utility.",
            image: "/uploads/eff9f866-19fc-4f25-b82d-d52a9464ce6c.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "headlight-2",
          x: 30,
          y: 29.5,
          partData: {
            id: "headlight",
            name: "Headlight Assembly",
            price: 1500,
            description:
              "High-performance LED headlight for enhanced visibility and style.",
            image: "/uploads/7f595850-f9ae-41ae-a1b4-15a130e88029.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "engine-guard-2",
          x: 46,
          y: 74,
          partData: {
            id: "engine-guard",
            name: "Engine Guard",
            price: 1800,
            description: "Robust engine protection for all riding conditions.",
            image: "/uploads/7f595850-f9ae-41ae-a1b4-15a130e88029.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "front-wheel-2",
          x: 73,
          y: 76,
          partData: {
            id: "front-wheel",
            name: "Front Wheel",
            price: 3500,
            description:
              "Premium alloy wheels for superior performance and style.",
            image: "/uploads/65fa3801-e56f-4fa5-91c0-ced6fd64024b.png",
            quantityAvailable: 10,
          },
        },
        {
          id: "rear-wheel-2",
          x: 24,
          y: 75,
          partData: {
            id: "rear-wheel",
            name: "Rear Wheel Assembly",
            price: 3800,
            description:
              "High-performance rear wheel for enhanced traction and stability.",
            image: "/uploads/65fa3801-e56f-4fa5-91c0-ced6fd64024b.png",
            quantityAvailable: 10,
          },
        },
      ],
    },
  ];

  // ----Use to set coordinates---//
  // const handleImageClick = (e) => {
  //   const rect = e.currentTarget.getBoundingClientRect();

  //   const x = ((e.clientX - rect.left) / rect.width) * 100;
  //   const y = ((e.clientY - rect.top) / rect.height) * 100;

  //   const newDot = { x, y };
  //   console.log("Dot added:", newDot);
  // };

  const currentView = bikeViews[currentViewIndex];

  const handleDotClick = (partData: BikePartData) => {
    setSelectedPart(partData);
    setIsDialogOpen(true);
  };

  const handleViewChange = (index: number) => {
    if (index !== currentViewIndex) {
      setIsRotating(true);
      setIsDialogOpen(false); // Close any open popups during rotation

      // Wait for rotation animation to complete before changing the view
      setTimeout(() => {
        setCurrentViewIndex(index);
        setIsRotating(false);
      }, 600); // Match the animation duration
    }
  };

  function handleAddToCart(e: MouseEvent<HTMLButtonElement>, data: BikePartData, navigateTo: string) {
    const { id, name, price, description, quantityAvailable, image } = data
    e.stopPropagation()
    addToCart(id, name, price, image, quantityAvailable, description)
    navigate(navigateTo)
  }

  return (
    <div className="py-8 md:py-16" style={{ backgroundColor: "#181818" }}>
      <div className="max-w-none mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-white mb-6 md:mb-12 text-center px-4 md:px-6">
          SHOP THE LOOK
        </h2>

        <div className="relative w-full" style={{ perspective: "2000px" }}>
          {/* Main bike image with interactive dots */}
          <div
            className="relative transition-transform duration-600 ease-in-out"
            style={{
              transform: isRotating ? "rotateY(90deg)" : "rotateY(0deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <img
              src={currentView.image}
              // onClick={handleImageClick}
              alt="Shop the Look Bike"
              className="w-full h-[300px] md:h-[500px] lg:h-[600px] object-contain"
            />

            {/* Yellow interactive dots */}
            {!isRotating &&
              currentView.dots.map((dot) => (
                <div key={dot.id}>
                  <button
                    className="absolute w-4 h-4 md:w-6 md:h-6 bg-yellow-400 rounded-full transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 transition-all duration-300"
                    style={{
                      left: `${dot.x}%`,
                      top: `${dot.y}%`,
                      boxShadow: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow =
                        "0 0 20px rgba(250, 204, 21, 0.8)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "none";
                    }}
                    onClick={() => handleDotClick(dot.partData)}
                  />

                  {/* Compact popup box */}
                  {isDialogOpen && selectedPart?.id === dot.partData.id && (
                    <>
                      {/* Backdrop to close popup when clicking outside */}
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsDialogOpen(false)}
                      />

                      <div
                        className="absolute z-20 bg-black/95 rounded-lg p-3 md:p-4 w-64 md:w-80"
                        style={{
                          left: dot.x < 50 ? `${dot.x + 5}%` : "auto",
                          right: dot.x >= 50 ? `${100 - dot.x + 5}%` : "auto",
                          top: `${dot.y}%`,
                          transform: "translateY(-50%)",
                          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.5)",
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {/* Close button */}
                        <button
                          onClick={() => setIsDialogOpen(false)}
                          className="absolute top-2 right-2 text-white hover:text-gray-300 transition-colors z-30"
                        >
                          <X className="h-4 w-4 md:h-5 md:w-5" />
                        </button>

                        {/* Content with image on left and text on right */}
                        <div className="flex gap-3 md:gap-4 mb-3">
                          {/* Product Image */}
                          <div className="flex-shrink-0">
                            <img
                              src={selectedPart.image}
                              alt={selectedPart.name}
                              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-lg"
                              style={{
                                backgroundColor: "rgba(255, 255, 255, 0.1)",
                              }}
                            />
                          </div>

                          {/* Product Info */}
                          <div className="flex-1 pr-4">
                            <h3 className="text-white font-bold text-sm md:text-base mb-1 md:mb-2">
                              {selectedPart.name}
                            </h3>
                            <p className="text-gray-300 text-xs md:text-sm leading-tight line-clamp-3">
                              {selectedPart.description}
                            </p>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="mb-3">
                          <span className="text-white font-bold text-lg md:text-xl">
                            ₹ {selectedPart.price}
                          </span>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-2">
                          <button
                            onClick={(e: MouseEvent<HTMLButtonElement>) => handleAddToCart(e, selectedPart, ROUTES.CART)}
                            className="relative flex-1 bg-transparent border-2 border-white text-white rounded px-3 py-1.5 md:py-2 text-xs md:text-sm font-bold overflow-hidden transition-colors duration-500"
                            style={{
                              background:
                                "linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)",
                              backgroundSize: "200% 200%",
                              backgroundPosition: "0% 0%",
                              transition:
                                "background-position 0.4s ease, color 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundPosition =
                                "100% 100%";
                              e.currentTarget.style.color = "#000";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundPosition =
                                "0% 0%";
                              e.currentTarget.style.color = "#fff";
                            }}
                          >
                            <span className="relative z-10">ADD TO CART</span>
                          </button>
                          <button
                            onClick={(e: MouseEvent<HTMLButtonElement>) => handleAddToCart(e, selectedPart, ROUTES.CHECKOUT)}
                            className="relative flex-1 bg-transparent border-2 border-white text-white rounded px-3 py-1.5 md:py-2 text-xs md:text-sm font-bold overflow-hidden transition-colors duration-500"
                            style={{
                              background:
                                "linear-gradient(-45deg, white 0%, white 50%, transparent 50%, transparent 100%)",
                              backgroundSize: "200% 200%",
                              backgroundPosition: "0% 0%",
                              transition:
                                "background-position 0.4s ease, color 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.backgroundPosition =
                                "100% 100%";
                              e.currentTarget.style.color = "#000";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.backgroundPosition =
                                "0% 0%";
                              e.currentTarget.style.color = "#fff";
                            }}
                          >
                            <span className="relative z-10">SHOP NOW</span>
                          </button>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
          </div>

          {/* Navigation dots for different bike views */}
          <div className="flex justify-center gap-2 md:gap-3 mt-4 md:mt-8">
            {bikeViews.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-colors ${
                  index === currentViewIndex
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                onClick={() => handleViewChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopTheLook;
