import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import fs from 'node:fs'

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isApp = mode === 'app'
  const isBuildLib = command === 'build' && !isApp

  return {
    plugins: [
      vue(),
      tailwindcss(),
      isBuildLib &&
        dts({
          tsconfigPath: './tsconfig.app.json',
        }),
      isBuildLib && {
        name: 'copy-style-css',
        closeBundle() {
          const outDir = path.resolve(import.meta.dirname, 'dist')
          const cssFile = path.resolve(outDir, 'smartisan-ui.css')
          const styleFile = path.resolve(outDir, 'style.css')
          if (fs.existsSync(cssFile) && !fs.existsSync(styleFile)) {
            fs.copyFileSync(cssFile, styleFile)
          }
        },
      },
    ].filter(Boolean),
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, './src'),
      },
    },
    build: isApp
      ? {
          outDir: 'dist-app',
        }
      : {
          outDir: 'dist',
          lib: {
            entry: path.resolve(import.meta.dirname, 'src/index.ts'),
            name: 'SmartisanUI',
            fileName: (format) => `smartisan-ui.${format === 'es' ? 'js' : 'umd.cjs'}`,
          },
          rollupOptions: {
            external: ['vue'],
            output: {
              globals: {
                vue: 'Vue',
              },
              exports: 'named',
              assetFileNames: (assetInfo) => {
                if (assetInfo.name === 'style.css') return 'style.css'
                return assetInfo.name || 'asset.[ext]'
              },
            },
          },
          cssCodeSplit: false,
        },
  }
})
