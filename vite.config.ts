import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // 相对路径：兼容 GitHub Pages 子路径（/blog/）与自定义域名根路径
    base: './',
    plugins: [tailwindcss(), react()],
    build: {
        chunkSizeWarningLimit: 600,
        rollupOptions: {
            output: {
                manualChunks: {
                    react: ['react', 'react-dom', 'react-router-dom'],
                    motion: ['framer-motion'],
                    markdown: ['react-markdown', 'remark-gfm', 'rehype-highlight', 'rehype-raw'],
                    i18n: ['i18next', 'react-i18next'],
                    icons: ['@remixicon/react']
                }
            }
        }
    }
})
