import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { APP_DOMAIN_URL } from "@/Configurations/env";
// import { getHeroImageProps } from "@/Utils/ImageUtils";

const SITE_NAME = "Zana Motorcycles";
const DEFAULT_OG_IMAGE = "/HeroSection.webp";
const DEFAULT_OG_IMAGE_WIDTH = "1200";
const DEFAULT_OG_IMAGE_HEIGHT = "630";
const DEFAULT_OG_IMAGE_ALT =
  "Zana motorcycle accessories mounted on an adventure motorcycle";
const CUSTOM_OG_IMAGE_ALT = "Zana motorcycle product preview";
const DEFAULT_TITLE =
  "Zana Motorcycles | Premium Bike Accessories & Riding Gear India";
const DEFAULT_DESCRIPTION =
  "Shop genuine motorcycle accessories for Royal Enfield, KTM, BMW, Bajaj & more. Crash guards, saddle stays, bash plates & many more - Made in India Products.";

export type SeoMetaProps = {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  type?: "website" | "product";
  noIndex?: boolean;
  keywords?: string;
  productSchema?: string | object;
};

function normalizePath(pathname: string): string {
  if (pathname === "/" || pathname === "") return "/";
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncate(value: string, maxLength: number): string {
  const normalized = stripHtml(value);
  if (normalized.length <= maxLength) return normalized;
  // Cut at the nearest word boundary to avoid mid‑word truncation
  const tentative = normalized.slice(0, maxLength).trim();
  const lastSpace = tentative.lastIndexOf(' ');
  const final = lastSpace > 0 ? tentative.slice(0, lastSpace) : tentative;
  return `${final}...`;
}

function absoluteUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    return new URL(value, APP_DOMAIN_URL || window.location.origin).href;
  } catch {
    return undefined;
  }
}

export function SeoMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image,
  canonicalPath,
  type = "website",
  noIndex = false,
  keywords = "",
  productSchema,
}: SeoMetaProps) {
  const { pathname } = useLocation();
  // Skip Helmet injection on initial static-rendered pages to avoid duplicate meta tags
  // if (typeof document !== "undefined" && document.documentElement.dataset.staticRoute === pathname) {
  //   return null;
  // }

  const pageTitle = truncate(title, 70);
  const pageDescription = truncate(description, 160);
  const origin = APP_DOMAIN_URL || window.location.origin;
  const path = normalizePath(canonicalPath || pathname);
  const canonicalUrl = `${origin}${path}`;
  const imageUrl = absoluteUrl(image || DEFAULT_OG_IMAGE);
  // const { src: lcpSrc, srcSet: lcpSrcSet } = image ? getHeroImageProps(image) : { src: undefined, srcSet: undefined };

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta
        name="robots"
        content={
          noIndex
            ? "noindex, nofollow"
            : "index, follow, max-image-preview:large"
        }
      />
      <meta name="keywords" content={keywords} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />

      {imageUrl && <meta property="og:image" content={imageUrl || DEFAULT_OG_IMAGE} />}
      {imageUrl && <meta property="og:image:secure_url" content={imageUrl} />}
      {imageUrl && (
        <meta
          property="og:image:alt"
          content={pageTitle ? pageTitle : DEFAULT_OG_IMAGE_ALT}
        />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      {imageUrl && <meta name="twitter:image" content={imageUrl} />}
      {imageUrl && (
        <meta
          name="twitter:image:alt"
          content={pageTitle ? pageTitle : DEFAULT_OG_IMAGE_ALT}
        />
      )}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      <link rel="canonical" href={canonicalUrl} />

      {/* {lcpSrc && (
        <link
          rel="preload"
          as="image"
          href={lcpSrc}
          fetchPriority="high"
          data-lcp-preload="true"
          {...(lcpSrcSet
            ? {
                imageSrcSet: lcpSrcSet,
                imageSizes: "(min-width: 1024px) 560px, calc(100vw - 48px)",
              }
            : {})}
        />
      )} */}
      {/* {productSchema && (
        <script type="application/ld+json">
          {typeof productSchema === "string"
            ? productSchema
            : JSON.stringify(productSchema)}
        </script>
      )} */}
    </Helmet>
  );
}

export function getRouteSeo(pathname: string): SeoMetaProps {
  if (pathname === "/") {
    return {
      title: "PRECISION-BUILT MOTORCYCLE PROTECTION & TOURING ESSENTIALS",
      description: "Shop genuine motorcycle accessories for Royal Enfield, KTM, BMW, Bajaj & more. Crash guards, saddle stays, bash plates & many more - Made in India Products.",
      keywords: "Motorcycle Accessories Guide, Motorcycle Accessories, Bike Accessories, Essential Motorcycle Accessories, Must Have Motorcycle Accessories, Motorcycle Accessories for Beginners, Motorcycle Touring Accessories, Motorcycle Protection Accessories, Bike Accessories Guide, Motorcycle Accessories India, Best Motorcycle Accessories, What Motorcycle Accessories Do I Need, Essential Accessories for New Motorcycle, Best Motorcycle Accessories for Long Rides, Motorcycle Accessories for Touring, Motorcycle Accessories Checklist, Motorcycle Accessories for Daily Commuting, Beginner Motorcycle Accessories Guide, How to Choose Motorcycle Accessories, Best Accessories for Adventure Motorcycles, Motorcycle Accessories Buying Guid",
      image: "/HeroSection.webp"
    };
  }
  if (pathname === "/product-catalog") {
    return {
      title: "Motorcycle Accessories Catalog | Zana Motorcycles",
      description:
        "Explore Zana motorcycle accessories by category, fitment, and price.",
    };
  }
  if (pathname.endsWith("/bikes")) {
    return {
      title: "Shop Motorcycle Accessories by Bike | Zana Motorcycles",
      description:
        "Find motorcycle accessories matched to your bike model from Zana Motorcycles.",
    };
  }
  // if (pathname.startsWith("/bike-accessories/")) {
  //   return {
  //     title: "Bike Specific Motorcycle Accessories | Zana Motorcycles",
  //     description:
  //       "Browse crash guards, racks, guards, and touring accessories designed for your bike model.",
  //   };
  // }
  // if (pathname.startsWith("/product/")) {
  //   return {
  //     title: "Motorcycle Accessory | Zana Motorcycles",
  //     description:
  //       "View product details, fitment, price, and availability for this Zana motorcycle accessory.",
  //     type: "product",
  //   };
  // }
  if (pathname.startsWith("/blog/") || pathname === "/blogs") {
    return {
      title: "Motorcycle Stories and Guides | Zana Motorcycles",
      description:
        "Read motorcycle accessory guides, product stories, and Zana updates.",
    };
  }
  if (pathname === "/contact-us") {
    return {
      title: "Contact Zana Motorcycles",
      description:
        "Contact Zana Motorcycles for product support, fitment help, and order assistance.",
    };
  }

  return {};
}
