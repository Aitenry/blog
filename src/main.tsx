import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import './i18n/config'
import App from './App.tsx'

// ── 路由恢复（必须在 React 渲染前执行）──

// 1) GitHub Pages SPA 回退：直接访问 /articles 等路径时，
//    服务器返回 404.html，它把目标路径存入 sessionStorage 并跳回根路径。
//    这里把真实路径恢复回地址栏，让 BrowserRouter 正确路由。
const redirect = sessionStorage.getItem('redirect')
if (redirect) {
    sessionStorage.removeItem('redirect')
    window.history.replaceState(null, '', redirect)
}

// 2) 旧版 hash 链接迁移：#/articles → /articles
if (window.location.hash.startsWith('#/')) {
    window.history.replaceState(null, '', window.location.hash.slice(1))
}

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
)
