export type BlogSeoEntry = {
  title: string;
  description: string;
  slug: string;
  keywords?: string;
  image?: string;
};

export const STAGING_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
  "6a92f5da925c4f62ab8f7813": {
    title:
      "How to Build the Perfect Motorcycle Touring Setup for Long-Distance Rides | Zana",
    description:
      "Build a complete motorcycle touring setup with the right protection, luggage, comfort upgrades, lighting, navigation, tools, riding gear, load management, and pre-ride checks.",
    slug: "motorcycle-touring-setup-for-long-distance-rides",
    
    keywords:
      "motorcycle touring setup, motorcycle touring accessories, long distance motorcycle setup, bike touring setup, motorcycle luggage setup, touring accessories for motorcycle, motorcycle travel setup, Zana motorcycle accessories",
  },
  "6a8d88c65c6d181142a88699": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "checklist-for-ladakh-bike-trip",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
  },
} as const;

export const PRODUCTION_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
  "6a8d5876ef7087442fc00d1b": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "checklist-for-ladakh-bike-trip",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
  },
} as const;
