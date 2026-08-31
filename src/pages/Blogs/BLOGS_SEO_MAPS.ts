export type BlogSeoEntry = {
  title: string;
  description: string;
  slug: string;
  keywords?: string;
  image?: string;
};

export const STAGING_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
  "6a95a46f61788d1d1b1e3462": {
    title:
      "How to Build the Perfect Motorcycle Touring Setup for Long-Distance Rides | Zana",
    description:
      "Build a complete motorcycle touring setup with the right protection, luggage, comfort upgrades, lighting, navigation, tools, riding gear, load management, and pre-ride checks.",
    slug: "motorcycle-touring-setup-for-long-distance-rides",
    keywords:
      "motorcycle touring setup, motorcycle touring accessories, long distance motorcycle setup, bike touring setup, motorcycle luggage setup, touring accessories for motorcycle, motorcycle travel setup, Zana motorcycle accessories",
    image: "https://d3s3r7gevtfrvd.cloudfront.net/blogs/hero_image-1788193138619-80090605.jpg",
  },
  "6a8d88c65c6d181142a88699": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "checklist-for-ladakh-bike-trip",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
      image:"https://d1bw1i3fxlc6zi.cloudfront.net/blogs/Hero-Image---Ladakh-Bike-Trip-Packing-List-2026-1787648117779-257717408.jpg"
  },
} as const;

export const PRODUCTION_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
   "6a92f94dd24c7eb8243ccc5e": {
    title:
      "How to Build the Perfect Motorcycle Touring Setup for Long-Distance Rides | Zana",
    description:
      "Before a long ride, most riders think about the route, fuel, and luggage. But what about the motorcycle carrying all of it? Good preparation means knowing those limits before the journey begins.",
    slug: "motorcycle-touring-setup-for-long-distance-rides",   
    keywords:
      "motorcycle touring setup, motorcycle touring accessories, long distance motorcycle setup, bike touring setup, motorcycle luggage setup, touring accessories for motorcycle, motorcycle travel setup, Zana motorcycle accessories",
    image: "https://d1bw1i3fxlc6zi.cloudfront.net/blogs/hero_image-1788193335238-969763535.jpg",
  },
  "6a8d5876ef7087442fc00d1b": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "checklist-for-ladakh-bike-trip",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
      image:"https://d1bw1i3fxlc6zi.cloudfront.net/blogs/Hero-Image---Ladakh-Bike-Trip-Packing-List-2026-1787648117779-257717408.jpg"
  },
} as const;
