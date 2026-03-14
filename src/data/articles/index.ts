import ArticleGit from './article-git.md?raw';
import ArticlePython from './article-python.md?raw';

export interface Article {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    content: string;
    tags: string[];
}

export const articles: Article[] = [
    {
        id: '1',
        title: 'Git 分支命名规则',
        date: '2024-03-10',
        excerpt: '规范化的 Git 分支命名规范和最佳实践。',
        content: ArticleGit,
        tags: ['Git', 'Version Control', 'Best Practices']
    },
    {
        id: '2',
        title: 'Python 编程指南',
        date: '2024-03-15',
        excerpt: 'Python 基础语法和编程技巧指南。',
        content: ArticlePython,
        tags: ['Python', 'Programming', 'Beginner']
    }
];

export default articles;
