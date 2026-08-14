# Design System Master File

> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** 琉璃博客
**Updated:** 2026-08-14（编辑部风格重构 · 去除 AI 味）
**Category:** General

---

## 设计理念

简约、编辑感、有个性。参考 Reeoo 极简画廊 / Page Flows 交互模式 /
Remarque 排版优先设计系统。**禁绝 AI 模板感**：不用紫蓝渐变、不用玻璃拟态、
不用旋转角色词、不用"欢迎语"徽章。

## Global Rules

### Color Palette（暖纸 + 墨 + 信号橙，单一强调色）

| Role | Light | Dark | CSS Variable |
|------|-------|------|--------------|
| Paper（底色） | `#F3F0E9` | `#14120E` | `--paper` |
| Paper-soft（悬停底） | `#E9E5DA` | `#1E1B15` | `--paper-soft` |
| Ink（正文） | `#1B1915` | `#EDE9DF` | `--ink` |
| Mute（次要文字） | `#6E6759` | `#938B79` | `--mute` |
| Line（描边） | `rgba(27,25,21,.18)` | `rgba(237,233,223,.16)` | `--line` |
| **Accent（信号橙）** | `#FF4D00` | `#FF5A1F` | `--accent` |
| Accent 上文字 | `#14120E` | `#14120E` | `--accent-ink` |
| Code block | `#17150F` | `#0D0C09` | `--block` |

**规则：全站只允许一个强调色（橙）。无渐变、无阴影泛滥、无圆角卡片。**

### Typography

| 角色 | 字体 |
|------|------|
| Display（大标题/衬线） | Fraunces（含斜体，中文回退宋体系） |
| Body / UI | Space Grotesk（中文回退苹方/雅黑） |
| 标签 / 日期 / 代码 | JetBrains Mono |

- 大标题左对齐、`tracking-tight`、斜体强调词
- 元信息一律等宽小字：`eyebrow`（0.6875rem / letter-spacing .18em / uppercase）
- 区块编号：`01 — 关于`（等宽 + 橙色）

### 布局语言

- **行式索引**：文章/日记/技能用 border 分隔的行列表，悬停 `bg-soft` + 标题斜体
- **细线网格**：项目用 `gap-px bg-line` 发丝线网格块，直角、无圆角
- **跑马灯彩带**：斜向 -1.2° 橙底等宽滚动条（hero 与 about 之间）
- **噪点纹理**：全屏 SVG 噪点覆盖层（opacity .055，z-60，pointer-events-none）
- **硬阴影**（仅 404 / 搜索弹层）：`8px 8px 0 0 var(--ink)` 直角投影
- 区块分隔：`border-top: 1px solid var(--line)`

---

## 组件规范（`src/components/ui/`）

| 组件 | 用途 |
|------|------|
| `Eyebrow` | 等宽编号标签（橙色） |
| `SectionTitle` | `01 — 标签` + 衬线大标题 + 可选附加信息 |
| `Reveal` | 滚动入场（小幅上浮，克制） |
| `Marquee` | 橙底跑马灯彩带（hover 暂停） |
| `CountUp` | 等宽数字计数（补零 `01`） |
| `ArrowLink` | 下划线链接 + 箭头（hover 右移） |
| `NoiseOverlay` | 全屏噪点纹理 |

### 按钮

```css
/* 主按钮：墨底 */
background: var(--ink); color: var(--paper);
border: 1px solid var(--ink); padding: 14px 28px;
hover: background: var(--accent); color: var(--accent-ink); border-color: var(--accent);

/* 次按钮：细线描边 */
border: 1px solid var(--line); color: var(--ink);
hover: border-color: var(--ink);
```

### 行列表（索引）

- `grid-cols-12`：日期(mono) / 标题(衬线)+摘要 / 元信息+箭头
- hover：`bg-soft`、标题斜体并变橙、箭头右移
- 悬停反转（`hover-invert`，墨底纸字）保留用于特殊强调行

### 代码块（终端风）

- 常驻深色底 `--block`（两种主题一致，如终端）
- 标题栏：`❯ language` 等宽标签 + 复制按钮
- 语法高亮使用暖色终端盘（`--hl-*` 变量）

### 目录（TOC）

- 等宽"目录"标签 + 左侧编号，active 项橙色 + 左侧 2px 橙线

---

## Anti-Patterns (Do NOT Use)

- ❌ 紫/蓝/青渐变、玻璃拟态、模糊光球
- ❌ 旋转角色词、欢迎徽章、"Hi, I'm" 模板 Hero
- ❌ 圆角卡片 + 投影的"模板感"卡片墙
- ❌ Emoji 图标 — 用 Remix Icon 或纯文本符号（✦ § ❯ ▮）
- ❌ 过度动画（保持 200-600ms 克制动效）
- ❌ 低对比度文字（mute 仅用于次要信息）
- ❌ 忽略 `prefers-reduced-motion`（全局 reduce 规则）

---

## Pre-Delivery Checklist

- [ ] 全站仅一个强调色（橙）
- [ ] 无渐变、无玻璃拟态
- [ ] 所有可点击元素 `cursor-pointer`
- [ ] 悬停过渡 200-300ms
- [ ] 键盘焦点可见（2px 橙 outline）
- [ ] `prefers-reduced-motion` 已尊重
- [ ] 响应式：375 / 768 / 1024 / 1440px
- [ ] heading `scroll-margin-top: 96px`（不被固定导航遮挡）
- [ ] 移动端无横向滚动
