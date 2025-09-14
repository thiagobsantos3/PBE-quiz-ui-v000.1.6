import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { federation } from '@module-federation/vite'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      react(),
      federation({
        name: 'quiz',
        filename: 'remoteEntry.js',
        exposes: {
          './App': './src/remote.tsx'
        },
        shared: {
          react: { singleton: true, requiredVersion: '^18 || ^19' },
          'react-dom': { singleton: true, requiredVersion: '^18 || ^19' }
        }
      })
    ],
    build: {
      target: 'es2022',
      modulePreload: false
    },
    server: {
      port: 4001
    }
  }
})
