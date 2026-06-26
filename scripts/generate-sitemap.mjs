import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";

const OUTPUT_FILE = resolve("public/sitemap.xml");
const ROBOTS_FILE = resolve("public/robots.txt");
const PAGE_SIZE = 1000;
const SITE_ORIGIN_ENV_KEYS = ["APP_DOMAIN_URL", "VITE_APP_DOMAIN_URL"];
const API_ORIGIN_ENV_KEYS = ["SITEMAP_API_URL", "VITE_API_DOMAIN"];

function loadEnvFile(filePath) {
  if (!existsSync(filePath)) return {};

  return readFileSync(filePath, "utf8")
    .split(/\r?\n/)
    .reduce((env, line) => {
      const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
      if (!match || match[1].startsWith("#")) return env;

      const value = (match[2] || "").replace(/^['"]|['"]$/g, "");
      env[match[1]] = value;
      return env;
    }, {});
}

const env = {
  ...loadEnvFile(resolve(".env")),
  ...process.env,
};

const siteOrigin = getRequiredOrigin(SITE_ORIGIN_ENV_KEYS, "site origin");
const apiOrigin = getOptionalOrigin(API_ORIGIN_ENV_KEYS);

const staticSections = [
  {
    name: "Core Pages",
    urls: [
      { path: "/", priority: "1.0", changefreq: "daily" },
      { path: "/product-catalog", priority: "0.9", changefreq: "daily" },
      { path: "/our-stories", priority: "0.7", changefreq: "monthly" },
      { path: "/contact-us", priority: "0.6", changefreq: "monthly" },
      { path: "/return-and-exchange", priority: "0.6", changefreq: "monthly" },
      { path: "/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
      { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
      { path: "/disclaimer", priority: "0.2", changefreq: "yearly" },
    ],
  },
  {
    name: "Blog",
    urls: [{ path: "/blogs", priority: "0.7", changefreq: "weekly" }],
  },
  {
    name: "Bike Pages",
    urls: [
      { path: "/zana/bikes", priority: "0.8", changefreq: "weekly" },
      { path: "/zpro/bikes", priority: "0.8", changefreq: "weekly" },
    ],
  },
];

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

function getRequiredOrigin(keys, label) {
  const rawValue = getEnvValue(keys);
  if (!rawValue) {
    const envKeys = Array.isArray(keys) ? keys : [keys];
    throw new Error(`Missing ${label}. Set one of: ${envKeys.join(", ")}.`);
  }

  return normalizeOrigin(rawValue);
}

function getOptionalOrigin(keys) {
  const rawValue = getEnvValue(keys);
  if (!rawValue) return "";

  return normalizeOrigin(rawValue);
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function toAbsoluteUrl(path) {
  const normalizedPath =
    path === "/" ? "/" : `/${String(path).replace(/^\/+/, "")}`;
  return `${siteOrigin}${normalizedPath}`;
}

function escapeXml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function getLastModified(item) {
  const date = item?.updatedAt || item?.createdAt;
  if (!date || Number.isNaN(Date.parse(date))) return undefined;

  return new Date(date).toISOString();
}

function createUrl(path, options = {}) {
  return {
    loc: toAbsoluteUrl(path),
    lastmod: options.lastmod,
    changefreq: options.changefreq || "weekly",
    priority: options.priority || "0.6",
  };
}

function createSection(name, routes) {
  return {
    name,
    urls: routes.map((route) => createUrl(route.path, route)),
  };
}

async function fetchJson(path, params = {}) {
  if (!apiOrigin) {
    throw new Error(
      `Missing API origin. Set one of: ${API_ORIGIN_ENV_KEYS.join(", ")}.`,
    );
  }

  const url = new URL(path, `${apiOrigin}/`);

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      url.searchParams.set(key, String(value));
    }
  });

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText} from ${url.pathname}`,
    );
  }

  return response.json();
}

async function fetchPaginated(
  path,
  params = {},
  getItems = (response) => response.data || [],
) {
  const items = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await fetchJson(path, {
      ...params,
      page,
      limit: PAGE_SIZE,
    });
    items.push(...getItems(response));
    totalPages = Number(response?.pagination?.totalPages || 1);
    page += 1;
  } while (page <= totalPages);

  return items;
}

async function getProductUrls() {
  const products = await fetchPaginated("/api/v1/product/all", {
    currency: "INR",
  });

  return products
    .filter((product) => product?._id && product?.name && product?.category)
    .map((product) =>
      createUrl(
        `/product/${slugify(product.category)}/${slugify(product.name)}/${product._id}`,
        {
          lastmod: getLastModified(product),
          priority: "0.8",
          changefreq: "weekly",
        },
      ),
    );
}

async function getBlogUrls() {
  const blogs = await fetchPaginated("/api/v1/blog");

  return blogs
    .filter((blog) => blog?._id)
    .map((blog) =>
      createUrl(`/blog/${blog._id}`, {
        lastmod: getLastModified(blog),
        priority: "0.6",
        changefreq: "monthly",
      }),
    );
}

async function getBikeUrls() {
  const bikeTypes = ["zana", "zpro"];
  const urls = [];

  for (const bikeType of bikeTypes) {
    const response = await fetchJson("/api/v1/brand/with-models", {
      category: bikeType,
    });
    const brands = Array.isArray(response?.data) ? response.data : [];

    for (const brand of brands) {
      const models = Array.isArray(brand?.models) ? brand.models : [];
      for (const model of models) {
        const brandName = model?.brandName || brand?.name;
        if (!model?._id || !brandName || !model?.name) continue;

        urls.push(
          createUrl(
            `/bike-accessories/${bikeType}/bike/${slugify(brandName)}/${slugify(model.name)}/${model._id}`,
            {
              lastmod: getLastModified(model),
              priority: "0.7",
              changefreq: "weekly",
            },
          ),
        );
      }
    }
  }

  return urls;
}

function formatUrl({ loc, lastmod, changefreq, priority }) {
  const lastmodTag = lastmod
    ? `\n    <lastmod>${escapeXml(lastmod)}</lastmod>`
    : "";

  return `  <url>
    <loc>${escapeXml(loc)}</loc>${lastmodTag}
    <changefreq>${escapeXml(changefreq)}</changefreq>
    <priority>${escapeXml(priority)}</priority>
  </url>`;
}

function renderSitemap(sections) {
  const seen = new Set();
  const entries = sections
    .map((section) => {
      const urls = section.urls.filter(({ loc }) => {
        if (seen.has(loc)) return false;
        seen.add(loc);
        return true;
      });

      if (urls.length === 0) return "";

      return `  <!-- ${escapeXml(section.name)} -->
${urls.map(formatUrl).join("\n")}`;
    })
    .filter(Boolean)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>
`;
}

function updateRobotsTxt() {
  const existingRobots = existsSync(ROBOTS_FILE)
    ? readFileSync(ROBOTS_FILE, "utf8")
    : "User-agent: *\nAllow: /\n";

  const withoutSitemap = existingRobots
    .split(/\r?\n/)
    .filter((line) => !/^sitemap:/i.test(line.trim()))
    .join("\n")
    .trimEnd();

  writeFileSync(
    ROBOTS_FILE,
    `${withoutSitemap}\n\nSitemap: ${toAbsoluteUrl("/sitemap.xml")}\n`,
  );
}

async function main() {
  const sections = staticSections.map((section) =>
    createSection(section.name, section.urls),
  );
  const dynamicSources = [
    ["Blog Detail Pages", "blogs", getBlogUrls],
    ["Bike Model Pages", "bike models", getBikeUrls],
    ["Product Pages", "products", getProductUrls],
  ];

  for (const [sectionName, label, getUrls] of dynamicSources) {
    try {
      const sourceUrls = await getUrls();
      sections.push({ name: sectionName, urls: sourceUrls });
      console.log(`Added ${sourceUrls.length} ${label} to sitemap.`);
    } catch (error) {
      console.warn(`Could not add ${label} to sitemap: ${error.message}`);
    }
  }

  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, renderSitemap(sections));
  updateRobotsTxt();
  const urlCount = sections.reduce(
    (count, section) => count + section.urls.length,
    0,
  );
  console.log(
    `Generated ${OUTPUT_FILE} with ${urlCount} URLs for ${siteOrigin}.`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
