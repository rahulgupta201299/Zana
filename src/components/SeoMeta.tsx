import { useLayoutEffect } from "react";
import { useLocation } from "react-router";

import { APP_DOMAIN_URL } from "@/Configurations/env";

const SITE_NAME = "Zana Motorcycles";
const DEFAULT_TITLE =
  "Zana Motorcycles | Premium Motorcycle Accessories Online in India";
const DEFAULT_DESCRIPTION =
  "Shop crash guards, saddlestays, top racks, bash plates, fog light mounts, and premium motorcycle accessories from Zana Motorcycles.";

type SeoMetaProps = {
  title?: string;
  description?: string;
  image?: string;
  canonicalPath?: string;
  type?: "website" | "product";
  noIndex?: boolean;
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
  return `${normalized.slice(0, maxLength - 1).trim()}...`;
}

function absoluteUrl(value?: string): string | undefined {
  if (!value) return undefined;
  try {
    return new URL(value, APP_DOMAIN_URL || window.location.origin).href;
  } catch {
    return undefined;
  }
}

function getMetaByName(name: string): HTMLMetaElement {
  let element = document.querySelector(
    `meta[name="${name}"]`,
  ) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }
  return element;
}

function getMetaByProperty(property: string): HTMLMetaElement {
  let element = document.querySelector(
    `meta[property="${property}"]`,
  ) as HTMLMetaElement | null;
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }
  return element;
}

function setLink(rel: string, href: string) {
  let link = document.querySelector(
    `link[rel="${rel}"]`,
  ) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }
  link.href = href;
}

export function SeoMeta({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  image,
  canonicalPath,
  type = "website",
  noIndex = false,
}: SeoMetaProps) {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    const pageTitle = truncate(title, 70);
    const pageDescription = truncate(description, 160);
    const origin = APP_DOMAIN_URL || window.location.origin;
    const path = normalizePath(canonicalPath || pathname);
    const canonicalUrl = `${origin}${path}`;
    const imageUrl = absoluteUrl(image || "/placeholder.svg");

    document.title = pageTitle;
    getMetaByName("description").content = pageDescription;
    getMetaByName("robots").content = noIndex
      ? "noindex, nofollow"
      : "index, follow, max-image-preview:large";

    getMetaByProperty("og:site_name").content = SITE_NAME;
    getMetaByProperty("og:title").content = pageTitle;
    getMetaByProperty("og:description").content = pageDescription;
    getMetaByProperty("og:type").content = type;
    getMetaByProperty("og:url").content = canonicalUrl;

    getMetaByName("twitter:card").content = "summary_large_image";
    getMetaByName("twitter:title").content = pageTitle;
    getMetaByName("twitter:description").content = pageDescription;

    if (imageUrl) {
      getMetaByProperty("og:image").content = imageUrl;
      getMetaByName("twitter:image").content = imageUrl;
    }

    setLink("canonical", canonicalUrl);
  }, [canonicalPath, description, image, noIndex, pathname, title, type]);

  return null;
}

export function getRouteSeo(pathname: string): SeoMetaProps {
  if (pathname === "/") return {};
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
  if (pathname.startsWith("/bike-accessories/")) {
    return {
      title: "Bike Specific Motorcycle Accessories | Zana Motorcycles",
      description:
        "Browse crash guards, racks, guards, and touring accessories designed for your bike model.",
    };
  }
  if (pathname.startsWith("/product/")) {
    return {
      title: "Motorcycle Accessory | Zana Motorcycles",
      description:
        "View product details, fitment, price, and availability for this Zana motorcycle accessory.",
      type: "product",
    };
  }
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
