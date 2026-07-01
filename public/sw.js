const CACHE_NAME = "zana-cloudfront-images-v1";
const CLOUDFRONT_DOMAINS = [
  "d1bw1i3fxlc6zi.cloudfront.net",
  "d3s3r7gevtfrvd.cloudfront.net"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);

  // Check if request is for our CloudFront domains and is a Zana website asset (e.g. image/video)
  const isCloudFrontAsset = CLOUDFRONT_DOMAINS.some(domain => url.host === domain) && 
                            url.pathname.includes("Zana+website");

  if (isCloudFrontAsset && event.request.method === "GET") {
    event.respondWith(
      caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }

          return fetch(event.request).then((networkResponse) => {
            // Safe cache: normal 200 OK responses or opaque responses from cross-origin image requests
            if (networkResponse && (networkResponse.status === 200 || networkResponse.type === "opaque")) {
              cache.put(event.request, networkResponse.clone());
            }
            return networkResponse;
          }).catch((err) => {
            console.error("[Service Worker] Fetch failed:", err);
            return new Response("Network error", { status: 480, statusText: "Network Error" });
          });
        });
      })
    );
  }
});
