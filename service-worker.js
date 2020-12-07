var cacheName = 'calculator-thing';
var filesToCache = [
  './icon-512.png',
  './index.html',
  './light.css',
  './manifest.json',
  './service-worker.js',
  './dark.css'
];

// start the service and cache content
self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    })
  );
});

// serve cached content when offline
self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});