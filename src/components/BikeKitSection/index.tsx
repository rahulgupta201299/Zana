import { Box, Typography } from "@mui/material";
import BikeKitItem from "./BikeKitItem";
import type { BikeKitProduct } from "./BikeKitItem";

type BikeKitData = {
  id: string;
  brandName: string;
  modelName: string;
  heroImageUrl: string;
  products: BikeKitProduct[];
  imagePosition?: "left" | "right";
  hideWishlistIcon?: boolean;
};

type Props = {
  sectionTitle?: string;
  sectionSubtitle?: string;
  data?: BikeKitData[];
};

const defaultStaticData: BikeKitData[] = [
  {
    id: "himalayan-450",
    brandName: "ROYAL ENFIELD",
    modelName: "Himalayan 450",
    heroImageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/bikes/himalayan M_12_65900dcf356cb_500X500.webp",
    imagePosition: "left",
    hideWishlistIcon: true,
    products: [
      {
        _id: "69e14e715685096a33ad853c",
        brand: "ROYAL ENFIELD",
        model: "Himalayan 450",
        name: "Crash Guard for Himalayan 450 (with Slider , Black Texture, Mild Steel) - Type-1 V-2",
        shortDescription: "Crash Guard for Himalayan 450 (with Slider, Black Texture, Mild Steel) - Type-1 V-2",
        longDescription: "",
        category: "PROTECTION",
        categoryIcon: "",
        price: 5499,
        currencySymbol: "₹",
        currency: "INR",
        originalPrice: 5499,
        imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/products/Zana-ROYAL-ENFIELD-Himalayan-450-Bike-Protection-Crash-Guard-Zana-Crash-Guard-for-Himalayan-450-with-Slider-Black-Texture-Mild-Steel-Type-1-V-2.webp",
        images: [],
        quantityAvailable: 10,
        specifications: "",
        shippingAndReturn: "",
        isBikeSpecific: true,
        isNewArrival: false,
        isGarageFavorite: false,
        isWishlist: false,
        productCode: "",
        priority: 1,
        isActive: true,
        isComingSoon: false,
        subCategory: ""
      },
      {
        _id: "69e14e715685096a33ad853d",
        brand: "ROYAL ENFIELD",
        model: "Himalayan 450",
        name: "Bash Plate Silver Aluminium For Himalayan 450",
        shortDescription: "Bash Plate Silver Aluminium for Himalayan 450 offers essential protection for your motorcycle’s vital components.",
        longDescription: "",
        category: "UNDERBODY",
        categoryIcon: "",
        price: 4299,
        currencySymbol: "₹",
        currency: "INR",
        originalPrice: 4299,
        imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/products/Zana-ROYAL-ENFIELD-Himalayan-450-Bike-Protection-Bash-Plate-Zana-BASH-PLATE-SILVER-ALUMINIUM-FOR-HIMALAYAN-450.webp",
        images: [],
        quantityAvailable: 10,
        specifications: "",
        shippingAndReturn: "",
        isBikeSpecific: true,
        isNewArrival: false,
        isGarageFavorite: false,
        isWishlist: false,
        productCode: "",
        priority: 1,
        isActive: true,
        isComingSoon: false,
        subCategory: ""
      },
      {
        _id: "69e14e715685096a33ad8544",
        brand: "ROYAL ENFIELD",
        model: "Himalayan 450",
        name: "Top Rack Plate for Himalayan 452 (Black Mild Steel)",
        shortDescription: "Top Rack Plate for Himalayan 452 is a practical and robust accessory, ideal for riders seeking versatile luggage solutions.",
        longDescription: "",
        category: "LUGGAGE",
        categoryIcon: "",
        price: 3799,
        currencySymbol: "₹",
        currency: "INR",
        originalPrice: 3799,
        imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/products/Zana-ROYAL-ENFIELD-Himalayan-450-Touring-Essentials-Top-Rack-Zana-Top-Rack-Plate-for-Himalayan-452-Black-Mild-Steel.webp",
        images: [],
        quantityAvailable: 10,
        specifications: "",
        shippingAndReturn: "",
        isBikeSpecific: true,
        isNewArrival: false,
        isGarageFavorite: false,
        isWishlist: false,
        productCode: "",
        priority: 1,
        isActive: true,
        isComingSoon: false,
        subCategory: ""
      }
    ],
  },
  {
    id: "scram-411",
    brandName: "ROYAL ENFIELD",
    modelName: "Scram 411",
    heroImageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/bikes/scram411.webp", // Using a placeholder for second bike
    imagePosition: "right",
    hideWishlistIcon: true,
    products: [
      {
        _id: "scram-p1",
        brand: "ROYAL ENFIELD",
        model: "Scram 411",
        name: "Engine Guard for Scram 411",
        shortDescription: "Protect your Scram 411 engine with this heavy-duty engine guard.",
        longDescription: "",
        category: "PROTECTION",
        categoryIcon: "",
        price: 3599,
        currencySymbol: "₹",
        currency: "INR",
        originalPrice: 3599,
        imageUrl: "https://d3s3r7gevtfrvd.cloudfront.net/products/scram-engine-guard.webp",
        images: [],
        quantityAvailable: 5,
        specifications: "",
        shippingAndReturn: "",
        isBikeSpecific: true,
        isNewArrival: false,
        isGarageFavorite: false,
        isWishlist: false,
        productCode: "",
        priority: 1,
        isActive: true,
        isComingSoon: false,
        subCategory: ""
      },
      // You can add more products here
    ],
  }
];

export default function BikeKitSection({
  sectionTitle = "Your motorcycle. Your kit.",
  sectionSubtitle = 'No drilling, no bending, no "universal-ish". Every part below bolts onto the model it\'s named after — and nothing else.',
  data = defaultStaticData,
}: Props) {
  return (
    <Box
      component="section"
      sx={{
        bgcolor: "#141416",
        py: { xs: 5, md: 8 },
        px: { xs: 2, sm: 3, md: 5, lg: 8 },
      }}
    >
      {/* Section header */}
      <Box sx={{ mb: { xs: 3, md: 5 } }}>
        <Typography
          variant="h3"
          component="h2"
          sx={{
            color: "rgba(255,255,255,0.92)",
            fontFamily: "'Georgia', serif",
            fontWeight: 400,
            fontSize: { xs: "1.75rem", sm: "2.25rem", md: "2.75rem" },
            mb: 1.5,
            lineHeight: 1.2,
          }}
        >
          {sectionTitle}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.5)",
            fontSize: { xs: "0.85rem", md: "0.95rem" },
            maxWidth: 480,
            lineHeight: 1.7,
          }}
        >
          {sectionSubtitle}
        </Typography>
      </Box>

      {/* Bike Kit Items */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: { xs: 5, md: 8 } }}>
        {data.map((item) => (
          <BikeKitItem
            key={item.id}
            brandName={item.brandName}
            modelName={item.modelName}
            heroImageUrl={item.heroImageUrl}
            products={item.products}
            imagePosition={item.imagePosition}
            hideWishlistIcon={item.hideWishlistIcon}
          />
        ))}
      </Box>
    </Box>
  );
}

export type { BikeKitData };
