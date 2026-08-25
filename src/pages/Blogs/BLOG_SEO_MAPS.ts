export type BlogSeoEntry = {
  title: string;
  description: string;
  slug: string;
  keywords?: string;
  image?: string;
};

export const STAGING_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
  "6a8d88c65c6d181142a88699": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "ladakh-bike-trip-checklist",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
  },
} as const;

export const PRODUCTION_BLOG_SEO_MAP: Record<string, BlogSeoEntry> = {
  "6a8d5876ef7087442fc00d1b": {
    title: "Ladakh Bike Trip Checklist 2026: What to Pack for the Ride | Zana",
    description:
      "Planning a Ladakh bike trip in 2026? Use Zana's packing list to prepare riding gear, tools, spares, luggage and essentials before you hit the Himalayan roads.",
    slug: "ladakh-bike-trip-checklist",
    keywords:
      "Ladakh bike trip checklist, Ladakh packing list, what to carry for Ladakh trip, Ladakh bike trip 2026, Himalayan road trip essentials, motorcycle touring gear India, Ladakh riding gear",
  },
} as const;
