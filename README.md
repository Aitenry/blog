# 琉璃博客 · Aitenry Blog

> 写代码，也写生活。

基于 React 19 + Vite + TypeScript + Tailwind CSS v4 + Framer Motion 的个人博客。
**编辑部风格**：衬线大标题 + 等宽标签 + 单一信号橙 + 暖纸底色 + 噪点纹理，
参考 [Reeoo](https://reeoo.com/style/minimalism/) 极简画廊与优秀个人站的排版语言，刻意去除 AI 模板感。

## ✨ 特性

- **编辑排版**：Fraunces 衬线标题（斜体强调）+ Space Grotesk 正文 + JetBrains Mono 标签
- **单一强调色**：信号橙（`#FF4D00`），暖纸/墨双主题，无渐变无玻璃拟态
- **动效克制**：跑马灯彩带、滚动入场、行悬停斜体/变橙、闪烁块光标、噪点纹理
- **文章与日记**：行式索引 + 标签筛选；详情页终端风代码块（`❯ language` + 复制）、
  目录滚动高亮 + 阅读进度百分比、字数/阅读时长、上下篇切换
- **全局搜索**：`⌘K / Ctrl+K` 唤起，键盘导航（↑↓ 选择 · ⏎ 打开 · ESC 关闭），
  等宽输入 + 硬阴影弹层，实时搜索文章与日记
- **主题切换**：localStorage 持久化，默认跟随系统
- **i18n**：中英文自动切换
- **性能**：详情页懒加载 + vendor 分包

## 🚀 开发

```bash
pnpm install
pnpm dev        # 启动开发服务器
pnpm build      # 类型检查 + 生产构建
pnpm lint       # ESLint
pnpm preview    # 预览生产构建
```

## 📁 目录结构

```
src/
├── components/
│   ├── ui/               # 编辑风格 UI 组件（Eyebrow/Reveal/Marquee/CountUp…）
│   ├── Navigation.tsx    # 导航（搜索 / 主题 / 全屏移动端菜单）
│   ├── Footer.tsx        # 页脚（大号衬线致谢）
│   ├── MarkdownContent.tsx  # Markdown 渲染 + 终端代码块
│   ├── TableOfContents.tsx  # 目录
│   └── *Section.tsx      # 首页/列表页各板块
├── pages/                # 路由页面（详情页懒加载）
├── data/                 # 文章 / 日记 / 技能 / 项目数据
├── i18n/                 # 中英文语言包
└── utils/content.ts      # 词数 / 阅读时长 / 锚点 / 目录提取
```

## 🛠 技术栈

React 19 · Vite 7 · TypeScript · Tailwind CSS v4 · Framer Motion 12 ·
React Router 7 · React Markdown · highlight.js · Remix Icon · i18next
