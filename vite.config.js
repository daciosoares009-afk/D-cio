import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': [
            '@radix-ui/react-accordion',
            '@radix-ui/react-alert-dialog',
            '@radix-ui/react-aspect-ratio',
            '@radix-ui/react-avatar',
            '@radix-ui/react-checkbox',
            '@radix-ui/react-collapsible',
            '@radix-ui/react-context-menu',
            '@radix-ui/react-dialog',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-hover-card',
            '@radix-ui/react-label',
            '@radix-ui/react-menubar',
            '@radix-ui/react-navigation-menu',
            '@radix-ui/react-popover',
            '@radix-ui/react-progress',
            '@radix-ui/react-radio-group',
            '@radix-ui/react-scroll-area',
            '@radix-ui/react-select',
            '@radix-ui/react-separator',
            '@radix-ui/react-slider',
            '@radix-ui/react-slot',
            '@radix-ui/react-switch',
            '@radix-ui/react-tabs',
            '@radix-ui/react-toast',
            '@radix-ui/react-toggle',
            '@radix-ui/react-toggle-group',
            '@radix-ui/react-tooltip',
          ],
        },
      },
    },
  },
  resolve: {
    alias: [
      {
        find: /^@\/components\/ui\/(.*)$/,
        replacement: path.resolve(__dirname, 'ui/$1'),
      },
      {
        find: /^@\/lib\/(.*)$/,
        replacement: path.resolve(__dirname, 'lib/$1'),
      },
      {
        find: /^@\/hooks\/(.*)$/,
        replacement: path.resolve(__dirname, 'hooks/$1'),
      },
      {
        find: /^@\/pages\/(.*)$/,
        replacement: path.resolve(__dirname, 'pages/$1'),
      },
      {
        find: /^@\/index\.css$/,
        replacement: path.resolve(__dirname, 'src/index.css'),
      },
      {
        find: /^@\/App$/,
        replacement: path.resolve(__dirname, 'src/app.jsx'),
      },
      {
        find: /^@\//,
        replacement: path.resolve(__dirname, 'src/') + '/',
      },
    ],
  },
})
