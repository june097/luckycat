const CACHE = "little-luck-web-test-v2";
const CORE = [
  "./",
  "./index.html",
  "./manifest.webmanifest",
  "./assets/app-icon.svg",
  "./assets/home-window-cat.png",
  "./assets/home-window-cat.webp",
  "./assets/cat-celebrate.webp",
  "./assets/cat-encourage.webp",
  "./assets/cat-happy.webp",
  "./assets/cat-hug.webp",
  "./assets/cat-sleep.webp",
  "./assets/cat-surprise.webp",
  "./assets/lucky-cat-1.png",
  "./assets/lucky-cat-2.png",
  "./assets/lucky-cat-3.png",
  "./assets/lucky-cat-4.png",
  "./assets/lucky-cat-5.png",
  "./assets/lucky-cat-6.png",
  "./assets/lucky-cat-7.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(response => {
      caches.open(CACHE).then(cache => cache.put("./index.html", response.clone()));
      return response;
    }).catch(() => caches.match("./index.html")));
    return;
  }
  event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  })));
});
