import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import vm from "node:vm";

const OUTPUT_FILE = resolve("public/sitemap.xml");
const HTML_OUTPUT_FILE = resolve("public/sitemap.html");
const ROBOTS_FILE = resolve("public/robots.txt");
const PRODUCT_REDIRECT_MAPPINGS_FILE = resolve("src/Constants/ProductRedirectMappings.ts");
const PRODUCT_SEO_MAPS_FILE = resolve("src/pages/ProductDetail/PRODUCT_SEO_MAPS.ts");
const BIKE_SEO_MAPS_FILE = resolve("src/pages/BikeDetail/BIKE_SEO_MAPS.ts");
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

const envNodeEnv = getEnvValue(["VITE_NODE_ENV", "NODE_ENV"]) || "development";
const isProduction = envNodeEnv === "production";

const siteOrigin = getEnvironmentOrigin(
  SITE_ORIGIN_ENV_KEYS,
  "https://www.zanamotorcycles.com",
  "https://staging.dc5j4f0as6jwq.amplifyapp.com",
);

const apiOrigin = getEnvironmentOrigin(
  API_ORIGIN_ENV_KEYS,
  "https://zana-motor-0d2fc2df02c6.herokuapp.com",
  "https://zana-motor-staging-d0a0c868c063.herokuapp.com",
);

const productSeoMap = loadSelectedStaticMap(
  PRODUCT_SEO_MAPS_FILE,
  "STAGING_PRODUCT_SEO_MAP",
  "PRODUCTION_PRODUCT_SEO_MAP",
);
const bikeSeoMap = loadSelectedStaticMap(
  BIKE_SEO_MAPS_FILE,
  "STAGING_BIKE_SEO_MAP",
  "PRODUCTION_BIKE_SEO_MAP",
);
const productSeoIds = new Set(Object.keys(productSeoMap));
const bikeSeoIds = new Set(Object.keys(bikeSeoMap));

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
  const processValue = getProcessEnvValue(envKeys);
  if (processValue) return processValue;

  return envKeys
    .map((key) => env[key])
    .find((value) => String(value || "").trim());
}

function getProcessEnvValue(keys) {
  const envKeys = Array.isArray(keys) ? keys : [keys];
  return envKeys
    .map((key) => process.env[key])
    .find((value) => String(value || "").trim());
}

function getEnvironmentOrigin(keys, productionOrigin, stagingOrigin) {
  return normalizeOrigin(getProcessEnvValue(keys)) || (isProduction
    ? productionOrigin
    : stagingOrigin);
}

function loadSelectedStaticMap(filePath, stagingExportName, productionExportName) {
  if (!existsSync(filePath)) return {};

  const exportName = isProduction ? productionExportName : stagingExportName;
  const source = readFileSync(filePath, "utf8")
    .replace(/export\s+const\s+/g, "const ")
    .replace(/}\s+as\s+const\s*;/g, "};");
  const script = new vm.Script(`${source}
    ;(typeof ${exportName} === "undefined" ? {} : ${exportName});
  `);

  return script.runInNewContext(Object.create(null), { timeout: 1000 });
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, "-")
    .replace(/^-+|-+$/g, "");
}

function getMappedProductCategory(productId, fallbackCategory = "zana-accessories") {
  return productSeoMap[productId]?.category || fallbackCategory;
}

function createProductPath(productId, productName, fallbackCategory) {
  return `/product/${slugify(getMappedProductCategory(productId, fallbackCategory))}/${slugify(productName || productId)}/${productId}`;
}

function normalizePath(path) {
  const pathOnly = String(path || "").split(/[?#]/)[0];
  const normalizedPath =
    pathOnly === "/" ? "/" : `/${pathOnly.replace(/^\/+|\/+$/g, "")}`;

  return normalizedPath || "/";
}

function toAbsoluteUrl(path) {
  const normalizedPath = normalizePath(path);
  return `${siteOrigin}${normalizedPath}`;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
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
    path: normalizePath(path),
    title: options.title,
    id: options.id,
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

function mergeUrls(...urlGroups) {
  const seen = new Set();
  const urls = [];

  for (const group of urlGroups) {
    for (const url of group) {
      if (!url?.loc || seen.has(url.loc)) continue;
      seen.add(url.loc);
      urls.push(url);
    }
  }

  return urls;
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

function readProductRedirectMappingUrls() {
  if (!existsSync(PRODUCT_REDIRECT_MAPPINGS_FILE)) return [];

  const source = readFileSync(PRODUCT_REDIRECT_MAPPINGS_FILE, "utf8");
  const seen = new Set();
  const urls = [];

  for (const match of source.matchAll(/"targetPath":\s*"([^"]+)"/g)) {
    const path = match[1];
    const productId = path.split("/").filter(Boolean).at(-1);
    if (!path.startsWith("/product/") || seen.has(path)) continue;
    if (productSeoIds.size > 0 && !productSeoIds.has(productId)) continue;
    seen.add(path);
    urls.push(
      createUrl(path, {
        priority: "0.8",
        changefreq: "weekly",
      }),
    );
  }

  return urls;
}

function readProductSeoMapUrls() {
  return Object.entries(productSeoMap).map(([productId, seoData]) =>
    createUrl(
      createProductPath(productId, seoData?.title, "zana-accessories"),
      {
        id: productId,
        title: seoData?.title,
        priority: "0.8",
        changefreq: "weekly",
      },
    ),
  );
}

function readBikeSeoMapUrls(excludeIds = new Set()) {
  return Object.entries(bikeSeoMap)
    .filter(([bikeId]) => !excludeIds.has(bikeId))
    .map(([bikeId, seoData]) =>
      createUrl(
        `/bike-accessories/zana/bike/zana/${slugify(seoData?.title || bikeId)}/${bikeId}`,
        {
          id: bikeId,
          title: seoData?.title,
          priority: "0.7",
          changefreq: "weekly",
        },
      ),
    );
}

async function getProductUrls() {
  const products = await fetchPaginated("/api/v1/product/all", {
    currency: "INR",
  });

  const apiProductUrls = products
    .filter((product) => product?._id && product?.name && product?.category)
    .filter((product) => productSeoIds.size === 0 || productSeoIds.has(product._id))
    .map((product) =>
      createUrl(
        createProductPath(product._id, product.name, product.category),
        {
          id: product._id,
          title: product.name,
          lastmod: getLastModified(product),
          priority: "0.8",
          changefreq: "weekly",
        },
      ),
    );

  return mergeUrls(
    apiProductUrls,
    readProductRedirectMappingUrls(),
    readProductSeoMapUrls(),
  );
}

async function getBlogUrls() {
  const blogs = await fetchPaginated("/api/v1/blog");

  return blogs
    .filter((blog) => blog?._id)
    .map((blog) =>
      createUrl(`/blog/${blog._id}`, {
        title: blog.title || blog.name,
        lastmod: getLastModified(blog),
        priority: "0.6",
        changefreq: "monthly",
      }),
    );
}

async function getBikeUrls() {
  const bikeTypes = ["zana", "zpro"];
  const urls = [];
  const apiBikeIds = new Set();

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
        if (bikeSeoIds.size > 0 && !bikeSeoIds.has(model._id)) continue;
        apiBikeIds.add(model._id);

        urls.push(
          createUrl(
            `/bike-accessories/${bikeType}/bike/${slugify(brandName)}/${slugify(model.name)}/${model._id}`,
            {
              id: model._id,
              title: `${brandName} ${bikeSeoMap[model._id]?.title || model.name}`,
              lastmod: getLastModified(model),
              priority: "0.7",
              changefreq: "weekly",
            },
          ),
        );
      }
    }
  }

  return mergeUrls(urls, readBikeSeoMapUrls(apiBikeIds));
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

function sectionLabel(section) {
  return `${section.name} (${section.urls.length})`;
}

const MAIN_PAGE_LABELS = new Map([
  ["/", "Home"],
  ["/product-catalog", "Product Catalog"],
  ["/zana/bikes", "Shop by Bike - ZANA"],
  ["/zpro/bikes", "Shop by Bike - Z-PRO"],
  ["/blogs", "Blogs"],
  ["/our-stories", "Our Stories"],
  ["/contact-us", "Contact Us"],
  ["/return-and-exchange", "Return & Exchange"],
  ["/terms-and-conditions", "Terms & Conditions"],
  ["/privacy-policy", "Privacy Policy"],
  ["/disclaimer", "Disclaimer"],
]);

function titleCaseSlug(value) {
  return String(value || "")
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function getUniqueUrls(sections) {
  const seen = new Set();
  const urls = [];

  for (const section of sections) {
    for (const url of section.urls) {
      if (!url?.loc || seen.has(url.loc)) continue;
      seen.add(url.loc);
      urls.push(url);
    }
  }

  return urls;
}

function getDisplayLabel(url) {
  return MAIN_PAGE_LABELS.get(url.path) || url.title || titleCaseSlug(url.path);
}

function getUrlParts(url) {
  return String(url.path || "").split("/").filter(Boolean);
}

function groupUrls(urls, getGroupName) {
  return urls.reduce((groups, url) => {
    const groupName = getGroupName(url);
    if (!groupName) return groups;
    if (!groups.has(groupName)) groups.set(groupName, []);
    groups.get(groupName).push(url);
    return groups;
  }, new Map());
}

function renderLinks(urls) {
  return urls
    .map(
      (url) =>
        `          <li><a href="${escapeHtml(url.loc)}">${escapeHtml(getDisplayLabel(url))}</a></li>`,
    )
    .join("\n");
}

function renderGroupedLinks(groups) {
  return [...groups.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([groupName, urls]) => {
      const links = [...urls]
        .sort((a, b) => getDisplayLabel(a).localeCompare(getDisplayLabel(b)))
        .map(
          (url) =>
            `            <li><a href="${escapeHtml(url.loc)}">${escapeHtml(getDisplayLabel(url))}</a></li>`,
        )
        .join("\n");

      return `        <div class="group">
          <h3>${escapeHtml(groupName)}</h3>
          <ul class="link-grid">
${links}
          </ul>
        </div>`;
    })
    .join("\n");
}

function renderSection(id, heading, countLabel, body) {
  return `      <section id="${escapeHtml(id)}">
        <h2>${escapeHtml(heading)} <span>${escapeHtml(countLabel)}</span></h2>
${body}
      </section>`;
}

function renderHtmlSitemap(sections) {
  const urls = getUniqueUrls(sections);
  const mainUrls = urls.filter((url) => MAIN_PAGE_LABELS.has(url.path));
  const blogUrls = urls.filter((url) => getUrlParts(url)[0] === "blog");
  const bikeUrls = urls.filter((url) => {
    const parts = getUrlParts(url);
    return parts[0] === "bike-accessories" && parts[2] === "bike";
  });
  const zanaBikeUrls = bikeUrls.filter((url) => getUrlParts(url)[1] === "zana");
  const zproBikeUrls = bikeUrls.filter((url) => getUrlParts(url)[1] === "zpro");
  const productUrls = urls.filter((url) => getUrlParts(url)[0] === "product");
  const updatedDate = new Date().toISOString().slice(0, 10);
  const zanaBikeGroups = groupUrls(zanaBikeUrls, (url) =>
    titleCaseSlug(getUrlParts(url)[3]),
  );
  const zproBikeGroups = groupUrls(zproBikeUrls, (url) =>
    titleCaseSlug(getUrlParts(url)[3]),
  );
  const productGroups = groupUrls(productUrls, (url) =>
    titleCaseSlug(getUrlParts(url)[1]),
  );
  const renderedSections = [
    renderSection(
      "main-pages",
      "Main Pages",
      `(${mainUrls.length})`,
      `        <ul class="link-grid main-grid">
${renderLinks(mainUrls)}
        </ul>`,
    ),
    blogUrls.length
      ? renderSection(
          "blog-pages",
          "Blog Pages",
          `(${blogUrls.length})`,
          `        <ul class="link-grid main-grid">
${renderLinks(blogUrls)}
        </ul>`,
        )
      : "",
    renderSection(
      "zana-bike-accessories",
      "ZANA Bike Accessories",
      `(${zanaBikeUrls.length} bike models)`,
      renderGroupedLinks(zanaBikeGroups),
    ),
    renderSection(
      "zpro-bike-accessories",
      "Z-PRO Bike Accessories",
      `(${zproBikeUrls.length} bike models)`,
      renderGroupedLinks(zproBikeGroups),
    ),
    renderSection(
      "products",
      "Products",
      `(${productUrls.length})`,
      renderGroupedLinks(productGroups),
    ),
  ]
    .filter(Boolean)
    .join("\n");

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="index, follow" />
    <title>Sitemap | Zana Motorcycles</title>
    <style>
      :root {
        color-scheme: light;
        font-family: Arial, Helvetica, sans-serif;
        color: #191919;
        background: #ffffff;
        --brand-red: #cf1233;
        --muted: #666666;
        --line: #e3e3e3;
      }
      body {
        margin: 0;
        background: #ffffff;
      }
      main {
        width: min(1480px, calc(100% - 48px));
        margin: 0 auto;
        padding: 48px 0 72px;
      }
      h1 {
        margin: 0 0 18px;
        font-size: clamp(36px, 4vw, 56px);
        line-height: 1.08;
        font-weight: 800;
        letter-spacing: 0;
      }
      p {
        margin: 0;
        color: var(--muted);
        font-size: clamp(18px, 2vw, 24px);
        font-weight: 700;
      }
      .rule {
        height: 4px;
        margin: 34px 0 36px;
        background: var(--brand-red);
      }
      nav {
        display: flex;
        flex-wrap: wrap;
        gap: 18px 28px;
        margin-bottom: 54px;
        padding: 28px;
        border: 1px solid var(--line);
        border-radius: 10px;
        background: #fbfbfb;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.02);
      }
      nav a {
        color: var(--brand-red);
        font-size: clamp(18px, 1.6vw, 24px);
        font-weight: 800;
      }
      section {
        margin-top: 54px;
        scroll-margin-top: 28px;
      }
      h2 {
        margin: 0 0 30px;
        padding-bottom: 20px;
        border-bottom: 3px solid var(--line);
        color: var(--brand-red);
        font-size: clamp(28px, 2.5vw, 36px);
        line-height: 1.2;
        font-weight: 800;
        letter-spacing: 0;
      }
      h2 span {
        color: var(--muted);
        font-size: 0.68em;
        font-weight: 800;
      }
      h3 {
        margin: 0 0 24px;
        font-size: clamp(22px, 2vw, 28px);
        line-height: 1.2;
        font-weight: 800;
      }
      .group {
        margin-top: 36px;
      }
      ul {
        padding: 0;
        margin: 0;
        list-style: none;
      }
      .link-grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 20px 80px;
      }
      .main-grid {
        margin-top: -4px;
      }
      a {
        color: #202020;
        text-decoration: none;
        overflow-wrap: anywhere;
        font-size: clamp(18px, 1.7vw, 24px);
        line-height: 1.25;
        font-weight: 500;
      }
      a:hover {
        color: var(--brand-red);
        text-decoration: underline;
      }
      @media (max-width: 720px) {
        main {
          width: min(100% - 32px, 1480px);
          padding-top: 32px;
        }
        nav {
          padding: 20px;
        }
        .link-grid {
          grid-template-columns: 1fr;
          gap: 14px;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Zana Motorcycles - Sitemap</h1>
      <p>${urls.length} pages - Last updated ${updatedDate}</p>
      <div class="rule"></div>
      <nav aria-label="Sitemap sections">
        <a href="#main-pages">Main Pages</a>
        ${blogUrls.length ? '<a href="#blog-pages">Blog Pages</a>' : ""}
        <a href="#zana-bike-accessories">ZANA Bike Accessories</a>
        <a href="#zpro-bike-accessories">Z-PRO Bike Accessories</a>
        <a href="#products">Products</a>
      </nav>
${renderedSections}
    </main>
  </body>
</html>
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
      if (label === "products") {
        const fallbackUrls = mergeUrls(
          readProductRedirectMappingUrls(),
          readProductSeoMapUrls(),
        );
        if (fallbackUrls.length) {
          sections.push({ name: "Product Pages", urls: fallbackUrls });
          console.log(
            `Added ${fallbackUrls.length} products from local ${isProduction ? "production" : "staging"} maps.`,
          );
        }
      }
      if (label === "bike models") {
        const fallbackUrls = readBikeSeoMapUrls();
        if (fallbackUrls.length) {
          sections.push({ name: "Bike Model Pages", urls: fallbackUrls });
          console.log(
            `Added ${fallbackUrls.length} bike models from local ${isProduction ? "production" : "staging"} map.`,
          );
        }
      }
    }
  }

  mkdirSync(dirname(OUTPUT_FILE), { recursive: true });
  writeFileSync(OUTPUT_FILE, renderSitemap(sections));
  writeFileSync(HTML_OUTPUT_FILE, renderHtmlSitemap(sections));
  updateRobotsTxt();
  const urlCount = sections.reduce(
    (count, section) => count + section.urls.length,
    0,
  );
  console.log(
    `Generated ${OUTPUT_FILE} with ${urlCount} URLs for ${siteOrigin}.`,
  );
  console.log(`Generated ${HTML_OUTPUT_FILE}.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
