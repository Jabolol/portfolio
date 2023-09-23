const CACHE_VERSION = 2;
const CURRENT_CACHE = `javi-portfolio-cache-v${CACHE_VERSION}`;

self.addEventListener("install", (event) => {
  const precache = async () => {
    const cache = await caches.open(CURRENT_CACHE);
    await cache.addAll([
      "/",
      "/logo.svg",
      "/site.webmanifest",
      "/worker.js",
    ]);
  };
  event.waitUntil(precache());
});

self.addEventListener("activate", (evt) => {
  const purge = async () => {
    const cacheNames = caches.keys();
    await Promise.all(
      cacheNames.map((cacheName) => {
        if (cacheName !== CURRENT_CACHE) {
          return caches.delete(cacheName);
        }
      }),
    );
  };
  evt.waitUntil(purge());
});

self.addEventListener("fetch", (event) => {
  const handler = async () => {
    const response = await caches.match(event.request);
    const isOutdated = response ? await isCacheOutdated(event.request) : false;
    if (response && !isOutdated) {
      return response;
    }
    return fetch(event.request);
  };
  event.respondWith(handler());
});

async function isCacheOutdated(request) {
  const cachedResponse = await caches.match(request);

  if (!cachedResponse) {
    return false;
  }

  const cachedLastModified = cachedResponse.headers.get("Last-Modified");
  const serverRequest = await fetch(request, { method: "HEAD" });
  const serverLastModified = serverRequest.headers.get("Last-Modified");

  return serverLastModified > cachedLastModified;
}
