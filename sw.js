importScripts("engine/nve.sw.js");

addEventListener("install", () => {
  self.skipWaiting();
});

addEventListener("activate", (e) => {
  e.waitUntil(self.clients.claim());
});

addEventListener("fetch", (e) => {
  if ($nvectrl.shouldRoute(e)) {
    e.respondWith($nvectrl.route(e));
  }
});
