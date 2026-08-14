// utils/content.ts — markdown 内容相关的纯工具函数
import {isValidElement, type ReactElement, type ReactNode} from 'react';

/** 递归提取 React 子树中的纯文本 */
export const extractTextFromChildren = (children: ReactNode | string): string => {
    if (typeof children === 'string') {
        return children;
    }

    if (Array.isArray(children)) {
        return children.map(extractTextFromChildren).join('');
    }

    if (children && typeof children === 'object' && isValidElement(children)) {
        const element = children as ReactElement<{children?: ReactNode}>;
        return extractTextFromChildren(element.props.children);
    }

    return '';
};

/** 计算正文词数（中文按字、英文按词） */
export const calculateWordCount = (content: string): number => {
    const textOnly = content
        .replace(/[#*`[\]()_~]/g, '')
        .replace(/\r?\n/g, ' ')
        .trim();
    const chineseChars = (textOnly.match(/[\u4e00-\u9fa5]/g) || []).length;
    const englishWords = textOnly.split(/\s+/).filter(word => word.length > 0).length;
    return chineseChars + englishWords;
};

/** 估算阅读时长（中文 400 字/分，英文 200 词/分） */
export const readingTime = (content: string): number => {
    const textOnly = content
        .replace(/[#*`[\]()_~]/g, '')
        .replace(/\r?\n/g, ' ')
        .trim();
    const chineseChars = (textOnly.match(/[\u4e00-\u9fa5]/g) || []).length;
    const englishWords = textOnly.split(/\s+/).filter(word => word.length > 0).length;
    const minutes = chineseChars / 400 + englishWords / 200;
    return Math.max(1, Math.round(minutes));
};

/** 生成稳定的锚点 id（保留中英文与数字） */
export const slugify = (text: string): string =>
    text
        .trim()
        .toLowerCase()
        .replace(/[^\w\u4e00-\u9fa5]+/g, '-')
        .replace(/^-+|-+$/g, '');

/** 标题文本 → 锚点 id（与 extractToc / MarkdownContent 保持一致） */
export const headingId = (text: string): string => slugify(text.replace(/[`*_]/g, '').trim());

export interface TocItem {
    level: number;
    title: string;
    id: string;
}

/** 从 markdown 提取 h2/h3 目录（注意 CRLF：必须用 /\r?\n/ 拆分，否则行尾 \r 会导致正则失配） */
export const extractToc = (content: string): TocItem[] => {
    const items: TocItem[] = [];
    for (const line of content.split(/\r?\n/)) {
        const match = line.match(/^(#{2,3})\s+(.+)$/);
        if (!match) continue;
        const title = extractTextFromChildren(match[2]).trim();
        if (!title) continue;
        items.push({level: match[1].length, title, id: headingId(title)});
    }
    return items;
};
