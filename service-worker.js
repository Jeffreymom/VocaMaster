const CACHE_PREFIX = "vocab-master-shell-";
const CACHE_NAME = `${CACHE_PREFIX}v12`;
const APP_SHELL = [
  "./", "./index.html", "./manifest.json", "./css/style.css",
  "./css/keyboard-quest.css", "./js/app.js", "./js/keyboard-quest.js",
  "./js/data/keyboard-curriculum.js",
  "./js/data/subjects.js", "./js/data/vocabulary-workbook/week01.js",
  "./js/data/vocabulary-workbook/week02.js", "./js/data/vocabulary-workbook/week03.js",
  "./js/data/vocabulary-workbook/week04.js", "./js/data/vocabulary-workbook/week05.js",
  "./js/data/vocabulary-workbook/week06.js", "./js/data/vocabulary-workbook/week07.js",
  "./js/data/vocabulary-workbook/week08.js", "./js/data/vocabulary-workbook/week09.js",
  "./js/data/vocabulary-workbook/week10.js", "./js/data/critical-reading/week01.js",
  "./icons/icon-192.png", "./icons/icon-512.png",
  "./images/stamps/stamps2.png"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(caches.keys().then(names => Promise.all(
    names
      .filter(name => name.startsWith(CACHE_PREFIX) && name !== CACHE_NAME)
      .map(name => caches.delete(name))
  )));
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).then(response => {
      if (response.ok && response.type !== "opaque") {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(() => caches.match(event.request).then(cached =>
      cached || (event.request.mode === "navigate"
        ? caches.match(new URL("./index.html", self.registration.scope).href)
        : undefined)
    ))
  );
});
