/**
 * Service Worker for Tanmay Vaidya Portfolio
 * Provides offline support and caching for optimal performance
 */

const CACHE_NAME = 'tanmay-portfolio-v1';
const STATIC_CACHE = 'static-v1';
const DYNAMIC_CACHE = 'dynamic-v1';

// Assets to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/manifest.webmanifest',
  '/favicon.svg',
  '/tanmay-portrait.webp',
  '/world-map.webp',
  '/TanmayResume.pdf',
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(STATIC_CACHE).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== STATIC_CACHE && name !== DYNAMIC_CACHE)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') return;

  // Skip cross-origin requests (except for fonts)
  if (url.origin !== location.origin && !url.pathname.match(/\.(woff2?|ttf)$/)) return;

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Return cached response if available
      if (cachedResponse) {
        // Update cache in background
        event.waitUntil(
          fetch(request).then((networkResponse) => {
            if (networkResponse.ok) {
              caches.open(DYNAMIC_CACHE).then((cache) => {
                cache.put(request, networkResponse.clone());
              });
            }
          }).catch(() => {})
        );
        return cachedResponse;
      }

      // Fetch from network
      return fetch(request).then((networkResponse) => {
        // Cache successful responses
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          caches.open(DYNAMIC_CACHE).then((cache) => {
            cache.put(request, responseClone);
          });
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        // Return a generic offline response for other requests
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      });
    })
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});