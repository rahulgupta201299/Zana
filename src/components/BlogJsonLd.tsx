import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.zanamotorcycles.com";

type BlogFaq = { question: string; answer: string };

export type BlogJsonLdProps = {
  canonicalUrl: string;
  metaTitle: string;
  summary: string;
  headline: string;
  bannerUrl?: string;
  datePublished?: string;
  dateModified?: string;
  content?: string;
};

function toPlainText(value: string): string {
  const documentValue = new DOMParser().parseFromString(value, "text/html");
  return (documentValue.body.textContent || "").replace(/\s+/g, " ").trim();
}

/**
 * Extract FAQs only from an explicit FAQ section in the authored blog HTML.
 * A section begins with a heading containing "FAQ" or "frequently asked
 * questions" and each following h3-h6 heading is treated as a question.
 */
function extractFaqsFromContent(content?: string): BlogFaq[] {
  if (!content) return [];

  const documentValue = new DOMParser().parseFromString(content, "text/html");
  const heading = Array.from(documentValue.querySelectorAll("h1, h2, h3, h4, h5, h6")).find(
    (element) => /\bfaq(?:s)?\b|frequently asked questions/i.test(element.textContent || ""),
  );

  if (!heading) return [];

  const faqs: BlogFaq[] = [];
  let node = heading.nextElementSibling;
  while (node) {
    if (/^H[1-2]$/.test(node.tagName)) break;

    if (/^H[3-6]$/.test(node.tagName)) {
      const question = toPlainText(node.innerHTML);
      const answerParts: string[] = [];
      let answerNode = node.nextElementSibling;

      while (answerNode && !/^H[1-6]$/.test(answerNode.tagName)) {
        const answer = toPlainText(answerNode.innerHTML);
        if (answer) answerParts.push(answer);
        answerNode = answerNode.nextElementSibling;
      }

      const answer = answerParts.join(" ").trim();
      if (question && answer) faqs.push({ question, answer });
    }

    node = node.nextElementSibling;
  }

  return faqs;
}

/** Renders the full JSON-LD graph for one blog detail page. */
export function BlogJsonLd({
  canonicalUrl,
  metaTitle,
  summary,
  headline,
  bannerUrl,
  datePublished,
  dateModified,
  content,
}: BlogJsonLdProps) {
  // The post-build generator already embeds this graph in static blog pages.
  // Avoid adding a second identical script when that page hydrates in React.
  const isStaticRoute =
    typeof document !== "undefined" &&
    document.documentElement.dataset.staticRoute ===
      (window.location.pathname.replace(/\/+$/, "") || "/");

  if (isStaticRoute) return null;

  const validFaqs = extractFaqsFromContent(content);

  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Zana Motorcycles",
      url: `${SITE_URL}/`,
      logo: {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        url: `${SITE_URL}/assets/Zana-CH_-qJw1.webp`,
        contentUrl: `${SITE_URL}/assets/Zana-CH_-qJw1.webp`,
        caption: "Zana Motorcycles",
      },
      brand: { "@id": `${SITE_URL}/#brand` },
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
    },
    {
      "@type": "Brand",
      "@id": `${SITE_URL}/#brand`,
      name: "Zana Motorcycles",
      url: `${SITE_URL}/`,
      logo: { "@id": `${SITE_URL}/#logo` },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "Zana Motorcycles",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "WebPage",
      "@id": `${canonicalUrl}#webpage`,
      url: canonicalUrl,
      name: metaTitle,
      description: summary,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${canonicalUrl}#article` },
      mainEntity: { "@id": `${canonicalUrl}#article` },
      primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-IN",
    },
    {
      "@type": "BlogPosting",
      "@id": `${canonicalUrl}#article`,
      url: canonicalUrl,
      headline,
      description: summary,
      image: {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#primaryimage`,
        url: bannerUrl,
        contentUrl: bannerUrl,
        caption: headline,
      },
      datePublished,
      dateModified,
      author: { "@id": `${SITE_URL}/#organization` },
      publisher: { "@id": `${SITE_URL}/#organization` },
      mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
      isPartOf: { "@id": `${SITE_URL}/#website` },
      inLanguage: "en-IN",
    },
  ];

  if (validFaqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
      url: canonicalUrl,
      isPartOf: { "@id": `${canonicalUrl}#webpage` },
      mainEntity: validFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question.trim(),
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.trim(),
        },
      })),
    });
  }

  const schema = { "@context": "https://schema.org", "@graph": graph };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
