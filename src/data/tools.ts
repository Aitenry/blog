// data/tools.ts — 工具箱数据：日常开发/设计/效率工具精选

export interface Tool {
    name: string;
    url: string;
    category: string;
    desc: string;
}

export const tools: Tool[] = [
    // 开发
    {name: 'GitHub', url: 'https://github.com', category: '开发', desc: '代码托管与开源协作，世界的版本库。'},
    {name: 'Vite', url: 'https://vite.dev', category: '开发', desc: '下一代前端构建工具，秒级冷启动。'},
    {name: 'TypeScript', url: 'https://www.typescriptlang.org', category: '开发', desc: '带类型的 JavaScript，规模化的底气。'},
    {name: 'pnpm', url: 'https://pnpm.io', category: '开发', desc: '快速、省磁盘的包管理器。'},
    {name: 'Docker', url: 'https://www.docker.com', category: '开发', desc: '容器化交付，环境一致性的答案。'},
    // 设计
    {name: 'Figma', url: 'https://www.figma.com', category: '设计', desc: '界面设计与原型协作的一站式画布。'},
    {name: 'Google Fonts', url: 'https://fonts.google.com', category: '设计', desc: '开源字体库，本站字体也来自这里。'},
    {name: 'Excalidraw', url: 'https://excalidraw.com', category: '设计', desc: '手绘风白板，画架构图的手感利器。'},
    {name: 'Coolors', url: 'https://coolors.co', category: '设计', desc: '配色方案生成器，快速搭调色板。'},
    // 效率
    {name: 'Obsidian', url: 'https://obsidian.md', category: '效率', desc: '本地优先的双链笔记，知识沉淀的仓库。'},
    {name: 'Raycast', url: 'https://www.raycast.com', category: '效率', desc: 'macOS 启动器，一切皆可快捷键。'},
    {name: 'Notion', url: 'https://www.notion.so', category: '效率', desc: '一体化工作区，文档、数据库与看板。'},
    {name: 'Todoist', url: 'https://todoist.com', category: '效率', desc: '跨平台任务清单，GTD 的轻量落地。'},
    {name: '语雀', url: 'https://www.yuque.com', category: '效率', desc: '结构化文档与团队知识库。'}
];

export default tools;
