const CACHE_NAME = "javi-portfolio-cache-v1";

const urlsToCache = [
  "/",
  "/logo.svg",
  "/site.webmanifest",
  "/worker.js",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("[Service Worker] Caching all");
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        console.log(
          "[Service Worker] Installation successful and all files cached",
        );
      })
      .catch((error) => {
        console.error(
          "[Service Worker] Failed to install and cache files",
          error,
        );
      }),
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    (async () => {
      const r = await caches.match(event.request);
      console.log(
        `%c[Service Worker] Fetching resource: ${event.request.url}`,
        "color: blue",
      );
      if (r) {
        console.log(
          `%c[Service Worker] Resource ${event.request.url} found in cache`,
          "color: green",
        );
        return r;
      }
      const response = await fetch(event.request);
      const cache = await caches.open(CACHE_NAME);
      console.log(
        `%c[Service Worker] Caching new resource: ${event.request.url}`,
        "color: orange",
      );
      cache.put(event.request, response.clone());
      return response;
    })(),
  );
});
