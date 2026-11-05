import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Service workers are only useful for production builds. Remove any older
// development registration and its caches so source changes are loaded live.
if ('serviceWorker' in navigator) {
  if (import.meta.env.PROD) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch((registrationError) => {
        console.error('SW registration failed: ', registrationError);
      });
    });
  } else {
    navigator.serviceWorker
      .getRegistrations()
      .then((registrations) =>
        Promise.all(registrations.map((registration) => registration.unregister())),
      )
      .then(() =>
        Promise.all(
          ['static-v1', 'dynamic-v1', 'static-v2', 'dynamic-v2'].map((cacheName) =>
            caches.delete(cacheName),
          ),
        ),
      )
      .catch((cleanupError) => {
        console.error('Failed to clear development service worker caches: ', cleanupError);
      });
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)