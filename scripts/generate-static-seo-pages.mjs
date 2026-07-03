import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import vm from "node:vm";

const DIST_DIR = resolve("dist");
const DIST_INDEX_FILE = join(DIST_DIR, "index.html");
const DIST_SITEMAP_FILE = join(DIST_DIR, "sitemap.xml");
const PUBLIC_SITEMAP_FILE = resolve("public/sitemap.xml");
const SITE_ORIGIN_ENV_KEYS = ["APP_DOMAIN_URL", "VITE_APP_DOMAIN_URL"];
const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";
const DEFAULT_OG_IMAGE_WIDTH = "1200";
const DEFAULT_OG_IMAGE_HEIGHT = "630";
const DEFAULT_OG_IMAGE_ALT =
  "Zana motorcycle accessories mounted on an adventure motorcycle";
const HOME_TITLE =
  "Zana Motorcycles | Premium Bike Accessories & Riding Gear India";
const HOME_DESCRIPTION =
  "Shop genuine motorcycle accessories for Royal Enfield, KTM, BMW, Bajaj & more. Crash guards, saddle stays, bash plates & many more - Made in India Products.";
const PRODUCT_SEO_MAPS_FILE = resolve("src/pages/ProductDetail/PRODUCT_SEO_MAPS.ts");

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return {};

  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((env, line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (!match || match[1].startsWith("#")) return env;

      env[match[1]] = (match[2] || "").replace(/^['"]|['"]$/g, "");
      return env;
    }, {});
}

const env = {
  ...loadEnvFile(resolve(".env")),
  ...process.env,
};

function normalizeOrigin(value) {
  const normalizedValue = String(value || "").trim();
  if (!normalizedValue) return "";

  return new URL(normalizedValue).origin;
}

function getEnvValue(keys) {
  const envKeys = Array.isArray(keys) ? keys : [keys];
  const processValue = envKeys
    .map((key) => process.env[key])
    .find((value) => String(value || "").trim());
  if (processValue) return processValue;

  return envKeys
    .map((key) => env[key])
    .find((value) => String(value || "").trim());
}

const envNodeEnv = getEnvValue(["VITE_NODE_ENV", "NODE_ENV"]) || "development";
const isProduction = envNodeEnv === "production";

const siteOrigin = normalizeOrigin(getEnvValue(SITE_ORIGIN_ENV_KEYS)) || (isProduction
  ? "https://www.zanamotorcycles.com"
  : "https://staging.dc5j4f0as6jwq.amplifyapp.com");

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function stripHtml(value) {
  return String(value || "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function truncate(value, maxLength) {
  const stripped = stripHtml(value);
  if (stripped.length <= maxLength) return stripped;
  return `${stripped.slice(0, maxLength - 1).trim()}...`;
}

function titleCaseSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function loadProductSeoMaps() {
  if (!existsSync(PRODUCT_SEO_MAPS_FILE)) {
    return {
      staging: {},
      production: {},
    };
  }

  const source = readFileSync(PRODUCT_SEO_MAPS_FILE, "utf8")
    .replace(/export\s+const\s+STAGING_PRODUCT_SEO_MAP\s*=/, "const STAGING_PRODUCT_SEO_MAP =")
    .replace(/export\s+const\s+PRODUCTION_PRODUCT_SEO_MAP\s*=/, "const PRODUCTION_PRODUCT_SEO_MAP =")
    .replace(/}\s+as\s+const\s*;/g, "};");
  const script = new vm.Script(`${source}
    ;({
      staging: typeof STAGING_PRODUCT_SEO_MAP === "undefined" ? {} : STAGING_PRODUCT_SEO_MAP,
      production: typeof PRODUCTION_PRODUCT_SEO_MAP === "undefined" ? {} : PRODUCTION_PRODUCT_SEO_MAP,
    });
  `);

  return script.runInNewContext(Object.create(null), { timeout: 1000 });
}

const productSeoMaps = loadProductSeoMaps();

function getProductSeo(productId) {
  const productMap = isProduction
    ? productSeoMaps.production
    : productSeoMaps.staging;

  return productMap?.[productId];
}

function readSitemapUrls() {
  const sitemapFile = existsSync(DIST_SITEMAP_FILE)
    ? DIST_SITEMAP_FILE
    : PUBLIC_SITEMAP_FILE;
  if (!existsSync(sitemapFile)) return [];

  const sitemap = readFileSync(sitemapFile, "utf8");
  return [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map(([, loc]) => loc.trim())
    .filter(Boolean);
}

function getSeoForPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);

  if (pathname === "/") {
    return {
      title: HOME_TITLE,
      description: HOME_DESCRIPTION,
      type: "website",
    };
  }

  if (pathname === "/product-catalog") {
    return {
      title: "Motorcycle Accessories Catalog | Zana Motorcycles",
      description:
        "Explore Zana motorcycle accessories by category, fitment, and price.",
      type: "website",
    };
  }

  if (parts.length === 2 && parts[1] === "bikes") {
    const label = parts[0].toLowerCase() === "zpro" ? "ZPro" : "Zana";
    return {
      title: `${label} Bike Accessories | Zana Motorcycles`,
      description:
        "Find motorcycle accessories matched to your bike model from Zana Motorcycles.",
      type: "website",
    };
  }

  if (
    parts[0] === "bike-accessories" &&
    parts[2] === "bike" &&
    parts.length >= 6
  ) {
    const brand = titleCaseSlug(parts[3]);
    const model = titleCaseSlug(parts[4]);
    return {
      title: `${brand} ${model} Accessories | Zana Motorcycles`,
      description: `Shop crash guards, racks, guards, and motorcycle accessories for ${brand} ${model}.`,
      type: "website",
    };
  }

  if (parts[0] === "product" && parts.length >= 4) {
    const category = titleCaseSlug(parts[1]);
    const productName = titleCaseSlug(parts[2]);
    const productSeo = getProductSeo(parts[3]);

    if (productSeo) {
      return {
        title: productSeo.title || `${productName} | ${category} | Zana Motorcycles`,
        description:
          productSeo.description ||
          `Shop ${productName} motorcycle accessories from Zana Motorcycles.`,
        keywords: productSeo.keywords,
        image: productSeo.image,
        type: "product",
      };
    }

    return {
      title: `${productName} | ${category} | Zana Motorcycles`,
      description: `Shop ${productName} motorcycle accessories from Zana Motorcycles.`,
      type: "product",
    };
  }

  if (pathname === "/blogs") {
    return {
      title: "Motorcycle Stories and Guides | Zana Motorcycles",
      description:
        "Read motorcycle accessory guides, product stories, and Zana updates.",
      type: "website",
    };
  }

  if (parts[0] === "blog") {
    return {
      title: "Motorcycle Guide | Zana Motorcycles",
      description:
        "Read motorcycle accessory guides, product stories, and Zana updates.",
      type: "article",
    };
  }

  if (pathname === "/contact-us") {
    return {
      title: "Contact Zana Motorcycles",
      description:
        "Contact Zana Motorcycles for product support, fitment help, and order assistance.",
      type: "website",
    };
  }

  return {
    title: HOME_TITLE,
    description: HOME_DESCRIPTION,
    type: "website",
  };
}

function upsertTitle(html, title) {
  const escapedTitle = escapeHtml(truncate(title, 70));
  if (/<title>[\s\S]*?<\/title>/i.test(html)) {
    return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapedTitle}</title>`);
  }
  return html.replace(/<head>/i, `<head>\n    <title>${escapedTitle}</title>`);
}

function upsertMetaName(html, name, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(
    `<meta\\s+name=["']${name}["'][^>]*>`,
    "i",
  );
  const tag = `<meta name="${name}" content="${escapedContent}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function upsertMetaProperty(html, property, content) {
  const escapedContent = escapeHtml(content);
  const regex = new RegExp(
    `<meta\\s+property=["']${property}["'][^>]*>`,
    "i",
  );
  const tag = `<meta property="${property}" content="${escapedContent}" />`;
  if (regex.test(html)) return html.replace(regex, tag);
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function upsertCanonical(html, href) {
  const escapedHref = escapeHtml(href);
  const tag = `<link rel="canonical" href="${escapedHref}" />`;
  if (/<link\s+rel=["']canonical["'][^>]*>/i.test(html)) {
    return html.replace(/<link\s+rel=["']canonical["'][^>]*>/i, tag);
  }
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`);
}

function addStaticRouteMarker(html, pathname) {
  return html.replace(
    /<html([^>]*)>/i,
    `<html$1 data-static-route="${escapeHtml(pathname)}">`,
  );
}

function createRouteHtml(baseHtml, absoluteUrl, pathname) {
  const seo = getSeoForPath(pathname);
  const title = truncate(seo.title, 70);
  const description = truncate(seo.description, 160);
  const hasCustomImage = Boolean(seo.image);
  const ogImageUrl = absoluteUrl
    ? new URL(seo.image || DEFAULT_OG_IMAGE_PATH, absoluteUrl).href
    : "";
  const imageAlt = hasCustomImage
    ? "Zana motorcycle product preview"
    : DEFAULT_OG_IMAGE_ALT;
  let html = baseHtml;

  html = addStaticRouteMarker(html, pathname);
  html = upsertTitle(html, title);
  html = upsertMetaName(html, "description", description);
  if (seo.keywords) {
    html = upsertMetaName(html, "keywords", seo.keywords);
  }
  html = upsertMetaName(html, "robots", "index, follow, max-image-preview:large");
  html = upsertMetaProperty(html, "og:site_name", "Zana Motorcycles");
  html = upsertMetaProperty(html, "og:title", title);
  html = upsertMetaProperty(html, "og:description", description);
  html = upsertMetaProperty(html, "og:type", seo.type);
  html = upsertMetaProperty(html, "og:url", absoluteUrl);
  html = upsertMetaProperty(html, "og:image", ogImageUrl);
  html = upsertMetaProperty(html, "og:image:secure_url", ogImageUrl);
  if (!hasCustomImage) {
    html = upsertMetaProperty(html, "og:image:type", "image/jpeg");
    html = upsertMetaProperty(html, "og:image:width", DEFAULT_OG_IMAGE_WIDTH);
    html = upsertMetaProperty(html, "og:image:height", DEFAULT_OG_IMAGE_HEIGHT);
  }
  html = upsertMetaProperty(html, "og:image:alt", imageAlt);
  html = upsertMetaName(html, "twitter:card", "summary_large_image");
  html = upsertMetaName(html, "twitter:title", title);
  html = upsertMetaName(html, "twitter:description", description);
  html = upsertMetaName(html, "twitter:image", ogImageUrl);
  html = upsertMetaName(html, "twitter:image:alt", imageAlt);
  html = upsertCanonical(html, absoluteUrl);

  return html;
}

function outputFileForPath(pathname) {
  const normalizedPath = pathname.replace(/^\/+|\/+$/g, "");
  return normalizedPath
    ? join(DIST_DIR, normalizedPath, "index.html")
    : DIST_INDEX_FILE;
}

function main() {
  if (!existsSync(DIST_INDEX_FILE)) {
    throw new Error("Missing dist/index.html. Run this script after vite build.");
  }

  const baseHtml = readFileSync(DIST_INDEX_FILE, "utf8");
  const urls = readSitemapUrls();
  let generatedCount = 0;

  for (const loc of urls) {
    const url = new URL(loc);
    const pathname = url.pathname.replace(/\/+$/, "") || "/";
    if (/\.[a-z0-9]+$/i.test(pathname)) continue;
    if (siteOrigin && url.origin !== siteOrigin) continue;

    const outputFile = outputFileForPath(pathname);
    mkdirSync(dirname(outputFile), { recursive: true });
    writeFileSync(outputFile, createRouteHtml(baseHtml, url.href, pathname));
    generatedCount += 1;
  }

  console.log(`Generated ${generatedCount} static SEO route pages in ${DIST_DIR}.`);
}

main();
