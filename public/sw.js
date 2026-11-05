/**
 * Service Worker for Tanmay Vaidya Portfolio
 * Provides offline support and caching for optimal performance
 */

const STATIC_CACHE = 'static-v2';
const DYNAMIC_CACHE = 'dynamic-v2';

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
    Promise.all([caches.delete('static-v1'), caches.delete('dynamic-v1')])
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

  // Never cache development modules or Vite's hot-reload client.
  if (
    url.pathname.startsWith('/src/') ||
    url.pathname.startsWith('/@vite/') ||
    url.pathname.startsWith('/node_modules/.vite/') ||
    url.pathname === '/@react-refresh'
  ) {
    return;
  }

  event.respondWith(
    fetch(request)
      .then((networkResponse) => {
        // Cache successful responses
        if (networkResponse.ok) {
          const responseClone = networkResponse.clone();
          const cacheName = request.mode === 'navigate' ? STATIC_CACHE : DYNAMIC_CACHE;
          event.waitUntil(caches.open(cacheName).then((cache) => cache.put(request, responseClone)));
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for navigation requests
        if (request.mode === 'navigate') {
          return caches.match('/index.html');
        }
        // Return a generic offline response for other requests
        return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
      }),
  );
});

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
  }
});