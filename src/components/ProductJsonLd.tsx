import { Helmet } from "react-helmet-async";
import { APP_DOMAIN_URL } from "@/Configurations/env";

// ─── Constants ────────────────────────────────────────────────────────────────

const FALLBACK_SITE_URL = "https://www.zanamotorcycles.com";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ProductJsonLdBreadcrumbItem = {
  /** Human-readable label shown in breadcrumb UI */
  label: string;
  /** Relative path (e.g. "/product-catalog/all/"). Absent for the current page. */
  to?: string;
};

export type ProductJsonLdProps = {
  /** Absolute canonical URL of the product page */
  canonicalUrl: string;
  /** Product display name */
  productName: string;
  /** Long-form product description (optional) */
  description?: string;
  /** All product image URLs in order. Empty/duplicate URLs are filtered automatically. */
  images: string[];
  /** Product SKU / product code (optional) */
  sku?: string;
  /** Product category string (optional) */
  category?: string;
  /** Product price as a number (optional; omitted when 0 or undefined) */
  price?: number;
  /** Breadcrumb trail — same array already computed for the UI breadcrumb */
  breadcrumbItems: ProductJsonLdBreadcrumbItem[];
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

/** Resolve a relative path to an absolute URL, returning empty string on failure. */
function toAbsoluteUrl(path: string, origin: string): string {
  if (!path) return "";
  if (path.startsWith("http")) return path;
  try {
    return new URL(path, origin).href;
  } catch {
    return "";
  }
}

/** Return true when a value should be included in the schema output. */
function isDefined(value: unknown): boolean {
  if (value === null || value === undefined) return false;
  if (typeof value === "string" && value.trim() === "") return false;
  if (typeof value === "number" && (isNaN(value) || value <= 0)) return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
}

// ─── Component ────────────────────────────────────────────────────────────────

/**
 * ProductJsonLd — injects a `<script type="application/ld+json">` tag into
 * `<head>` for the current product page via react-helmet-async.
 *
 * Purely declarative and read-only:
 * - No Redux state reads or writes
 * - No API calls
 * - No interaction with cart, checkout, GTM, or GA4
 * - Rendered only inside ProductDetailPage; absent on every other route
 */
export function ProductJsonLd({
  canonicalUrl,
  productName,
  description,
  images,
  sku,
  category,
  price,
  breadcrumbItems,
}: ProductJsonLdProps) {
  // Use the env domain (staging/production) or fallback to the main domain
  const origin = APP_DOMAIN_URL || FALLBACK_SITE_URL;

  // Deduplicate and filter out any falsy image URLs
  const validImages = [...new Set(images.filter(Boolean))];

  // ── Static Nodes using `origin` ─────────────────────────────────────────────
  
  const orgNode: Record<string, unknown> = {
    "@type": "Organization",
    "@id": `${origin}/#organization`,
    name: "Zana Motorcycles",
    url: `${origin}/`,
    logo: {
      "@type": "ImageObject",
      "@id": `${origin}/#logo`,
      url: `${origin}/assets/Zana-CH_-qJw1.webp`,
      contentUrl: `${origin}/assets/Zana-CH_-qJw1.webp`,
      caption: "Zana Motorcycles",
    },
    brand: { "@id": `${origin}/#brand` },
    sameAs: [
      "https://www.facebook.com/zanamotorcycles/",
      "https://www.instagram.com/zanamotorcycles/",
      "https://in.pinterest.com/zanamotorcycles/",
      "https://www.youtube.com/channel/UCDJ8YL2y9lipIe9n-YIMEXg",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: "+91-9953112277",
      email: "onlinesales@zanainternational.com",
      availableLanguage: ["English"],
    },
    knowsAbout: [
      "Motorcycle Accessories",
      "Motorcycle Luggage",
      "Motorcycle Touring Equipment",
      "Motorcycle Protection Accessories",
      "Motorcycle Panniers",
      "Motorcycle Top Boxes",
      "Motorcycle Luggage Racks",
    ],
  };

  const brandNode: Record<string, unknown> = {
    "@type": "Brand",
    "@id": `${origin}/#brand`,
    name: "Zana Motorcycles",
    url: `${origin}/`,
    logo: { "@id": `${origin}/assets/Zana-CH_-qJw1.webp#logo` },
  };

  const websiteNode: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": `${origin}/#website`,
    url: `${origin}/`,
    name: "Zana Motorcycles",
    publisher: { "@id": `${origin}/#organization` },
    inLanguage: "en-IN",
  };

  // ── WebPage node ────────────────────────────────────────────────────────────
  const webPageNode: Record<string, unknown> = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: productName,
    isPartOf: { "@id": `${origin}/#website` },
    about: { "@id": `${canonicalUrl}#product` },
    mainEntity: { "@id": `${canonicalUrl}#product` },
    publisher: { "@id": `${origin}/#organization` },
    breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
    inLanguage: "en-IN",
  };

  // ── Offer node (price only included when it is a positive number) ────────────
  const offerNode: Record<string, unknown> = {
    "@type": "Offer",
    "@id": `${canonicalUrl}#offer`,
    url: canonicalUrl,
    priceCurrency: "INR",
    seller: { "@id": `${origin}/#organization` },
  };
  if (isDefined(price)) offerNode.price = String(price);

  // ── Product node ────────────────────────────────────────────────────────────
  const productNode: Record<string, unknown> = {
    "@type": "Product",
    "@id": `${canonicalUrl}#product`,
    name: productName,
    url: canonicalUrl,
    brand: { "@id": `${origin}/#brand` },
    offers: offerNode,
    mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
  };
  if (isDefined(description)) productNode.description = description;
  if (validImages.length > 0) productNode.image = validImages;
  if (isDefined(sku)) productNode.sku = sku;
  if (isDefined(category)) productNode.category = category;

  // ── BreadcrumbList node ─────────────────────────────────────────────────────
  const breadcrumbListItems = breadcrumbItems
    .filter((item) => isDefined(item.label))
    .map((item, index) => {
      // Items with `to` get their URL resolved; the last item (current page,
      // no `to`) gets the product canonical URL as its item URL.
      const itemUrl = item.to
        ? toAbsoluteUrl(item.to, origin)
        : canonicalUrl;

      const listItem: Record<string, unknown> = {
        "@type": "ListItem",
        position: index + 1,
        name: item.label,
      };
      if (itemUrl) listItem.item = itemUrl;
      return listItem;
    });

  const breadcrumbNode = {
    "@type": "BreadcrumbList",
    "@id": `${canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbListItems,
  };

  // ── Compose full @graph ─────────────────────────────────────────────────────
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      orgNode,
      brandNode,
      websiteNode,
      webPageNode,
      productNode,
      breadcrumbNode,
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
