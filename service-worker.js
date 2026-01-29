self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("almuzn-cache").then(cache => {
      return cache.addAll([
        "/",
        "/index.html",
        "/style.css",
        "/script.js"
      ]);
    })
  );
});
