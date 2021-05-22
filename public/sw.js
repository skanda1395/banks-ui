let API_ENDPOINT = "https://vast-shore-74260.herokuapp.com/banks";

// On install, cache some stuff
self.addEventListener("install", (event) => {
  // Activate right away
  self.skipWaiting();
  // Cache your core stuff...
  console.log("Installed: ", event);
});

self.addEventListener("activate", (event) => {
  console.log("V1 now ready to handle fetches!");
});

addEventListener("fetch", (event) => {
  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (
    event.request.cache === "only-if-cached" &&
    event.request.mode !== "same-origin"
  )
    return;

  if (request.url.includes(API_ENDPOINT)) {
    event.respondWith(
      caches.match(request).then(function (response) {
        console.log(
          response ? "Serving from cache" : "Making a network request"
        );
        // Look for a match in the cache
        return (
          response ||
          fetch(request).then((response) => {
            let copy = response.clone();
            event.waitUntil(
              caches.open("api").then((cache) => {
                return cache.put(request, copy);
              })
            );
            return response;
          })
        );
      })
    );
  }
});
