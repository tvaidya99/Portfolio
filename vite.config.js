import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/src/assets/company/nlhydro.png'],
    },
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
  build: {
    // Optimize for production
    minify: 'esbuild',
    cssMinify: true,
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          emailjs: ['@emailjs/browser'],
        },
        // Optimize chunk file names for caching
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/\.(png|jpe?g|gif|svg|webp|avif|ico)$/.test(assetInfo.name)) {
            return `assets/images/[name]-[hash].${ext}`
          }
          if (/\.(woff2?|ttf|eot|otf)$/.test(assetInfo.name)) {
            return `assets/fonts/[name]-[hash].${ext}`
          }
          if (/\.css$/.test(assetInfo.name)) {
            return `assets/css/[name]-[hash].${ext}`
          }
          return `assets/[name]-[hash].${ext}`
        },
      },
    },
    // Optimize asset inlining
    assetsInlineLimit: 4096, // 4kb
    // Report compressed sizes
    reportCompressedSize: true,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion', '@emailjs/browser'],
  },
  // Resolve aliases
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
})