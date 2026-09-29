import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';
import {VitePWA} from 'vite-plugin-pwa';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      VitePWA({
        registerType: 'autoUpdate',
        includeAssets: ['favicon-32x32.png', 'apple-touch-icon.png', 'icon.svg', 'pwa-192x192.png', 'pwa-512x512.png', 'pwa-maskable-512x512.png'],
        manifest: {
          id: '/',
          name: 'Bíblia Teológica',
          short_name: 'Bíblia Teol.',
          description: 'Bíblia Teológica - Leitura Bíblica em 365 Dias com ordens Canônica e Histórico-Cronológica, contexto teológico e história da igreja.',
          theme_color: '#09090b',
          background_color: '#09090b',
          display: 'standalone',
          orientation: 'portrait-primary',
          start_url: '/',
          scope: '/',
          icons: [
            {
              src: '/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any',
            },
            {
              src: '/pwa-maskable-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable',
            },
          ],
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg,woff,woff2}'],
          runtimeCaching: [
            {
              urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'google-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
            {
              urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
              handler: 'CacheFirst',
              options: {
                cacheName: 'gstatic-fonts-cache',
                expiration: {
                  maxEntries: 10,
                  maxAgeSeconds: 60 * 60 * 24 * 365,
                },
                cacheableResponse: {
                  statuses: [0, 200],
                },
              },
            },
          ],
        },
        devOptions: {
          enabled: true,
          type: 'module',
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              if (id.includes('react') || id.includes('react-dom') || id.includes('scheduler')) {
                return 'vendor-react';
              }
              if (id.includes('lucide-react')) {
                return 'vendor-icons';
              }
              return 'vendor-libs';
            }
            if (id.includes('src/data/readings_') || id.includes('src/data/allReadings')) {
              return 'data-readings';
            }
            if (id.includes('src/data/theologicalComparisonData') || id.includes('src/data/theologicalSystemsData') || id.includes('src/data/confessionalDocumentsData')) {
              return 'data-theology';
            }
            if (
              id.includes('src/data/churchHistoryData') ||
              id.includes('src/data/catholicTraditionData') ||
              id.includes('src/data/orthodoxTraditionData') ||
              id.includes('src/data/reformationHistoryData') ||
              id.includes('src/data/theologicalPeriods') ||
              id.includes('src/data/worldHistorySyncData') ||
              id.includes('src/data/secondTempleHistoricalData') ||
              id.includes('src/data/ecumenicalCouncilsData') ||
              id.includes('src/data/manuscriptsTranslationsData')
            ) {
              return 'data-history';
            }
            if (id.includes('src/data/biblicalTexts') || id.includes('src/data/bibleBooks') || id.includes('src/data/chronologicalPlan') || id.includes('src/data/canonicalPlan')) {
              return 'data-plans-biblical';
            }
          },
        },
      },
    },
  };
});
