import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    // 站点部署在自定义域名根路径（www.aitenry.cn），且使用 BrowserRouter：
    // 资源必须用根绝对路径，否则 /article/1 这类嵌套路由下相对路径会解析错位
    base: '/',
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
