import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { useParams, useNavigate } from 'react-router-dom';
import React, {type ReactElement, useState} from 'react';
import { articles as loadedArticles } from '../data/articles';
import SnowBackground from '../components/SnowBackground';

interface ArticlePageProps {
    isDarkMode: boolean;
}

const extractTextFromChildren = (children: React.ReactNode | string): string => {
    if (typeof children === 'string') {
        return children;
    }

    if (Array.isArray(children)) {
        return children.map(extractTextFromChildren).join('');
    }

    if (children && typeof children === 'object' && React.isValidElement(children)) {
        const element = children as ReactElement<{ children?: React.ReactNode }>;
        return extractTextFromChildren(element.props.children);
    }

    return '';
};
const ArticlePage: React.FC<ArticlePageProps> = ({ isDarkMode }) => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();

    const CopyButton = ({ text }: { text: string }) => {
        const [copied, setCopied] = useState(false);

        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(text);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        };

        return (
            <button
                onClick={handleCopy}
                className={`absolute top-3 right-3 p-2 rounded-lg transition-all ${
                    isDarkMode
                        ? 'bg-gray-700 hover:bg-gray-600 text-gray-300 hover:text-white'
                        : 'bg-gray-200 hover:bg-gray-300 text-gray-600 hover:text-gray-900'
                }`}
                title={copied ? 'Copied!' : 'Copy code'}
            >
                {copied ? (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                )}
            </button>
        );
    };

    const article = loadedArticles.find(a => a.id === id);

    const calculateWordCount = (content: string) => {
        const textOnly = content
            .replace(/[#*`[\]()_~]/g, '')
            .replace(/\n/g, ' ')
            .trim();
        const chineseChars = (textOnly.match(/[\u4e00-\u9fa5]/g) || []).length;
        const englishWords = textOnly.split(/\s+/).filter(word => word.length > 0).length;
        return chineseChars + englishWords;
    };

    const wordCount = article ? calculateWordCount(article.content) : 0;

    const markdownStyles = `
        .markdown-body h1 { font-size: 2em; font-weight: 700; margin: 1em 0 0.5em; }
        .markdown-body h2 { font-size: 1.5em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body h3 { font-size: 1.25em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body p { margin: 1em 0; line-height: 1.7; }
        .markdown-body ul, .markdown-body ol { margin: 1em 0; padding-left: 2em; }
        .markdown-body li { margin: 0.5em 0; }
        .markdown-body code { padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.9em; }
        .markdown-body pre { padding: 1em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
        .markdown-body pre code { padding: 0; background: transparent; }
        .markdown-body blockquote { border-left: 4px solid; padding-left: 1em; margin: 1em 0; font-style: italic; }
        .markdown-body table { width: 100%; border-collapse: collapse; margin: 1em 0; }
        .markdown-body th, .markdown-body td { padding: 0.75em; border: 1px solid; text-align: left; }
    `;

    if (!article) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <SnowBackground isDarkMode={isDarkMode} />
                <div className="relative z-10 text-center">
                    <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Article not found
                    </h1>
                    <button
                        onClick={() => navigate('/articles')}
                        className={`px-6 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        Back to Articles
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <SnowBackground isDarkMode={isDarkMode} />
            <style>{markdownStyles}</style>
            <div className="relative z-10 max-w-5xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={() => navigate('/articles')}
                        className={`mb-8 flex items-center gap-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back to Articles
                    </button>
                    <div className={`p-6 sm:p-8 rounded-xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="mb-6">
                            <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {article.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>Published on {article.date}</span>
                                </div>
                                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                    </svg>
                                    <span>{wordCount.toLocaleString()} words</span>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-xs px-3 py-1 rounded-full ${
                                            isDarkMode
                                                ? 'bg-gray-800 text-gray-300'
                                                : 'bg-gray-100 text-gray-600'
                                        }`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div
                            className={`markdown-body ${isDarkMode ? 'text-gray-100' : 'text-gray-700'}`}>
                            <style>{`
                                .markdown-body code { 
                                    background: ${isDarkMode ? '#374151' : '#f3f4f6'}; 
                                    color: ${isDarkMode ? '#e5e7eb' : '#374151'};
                                }
                                .markdown-body pre { 
                                    background: ${isDarkMode ? '#1f2937' : '#f8f8f8'}; 
                                }
                                .markdown-body pre code {
                                    background: transparent;
                                    color: ${isDarkMode ? '#f3f4f6' : '#1f2937'};
                                }
                                .markdown-body blockquote { border-color: ${isDarkMode ? '#4b5563' : '#d1d5db'}; }
                                .markdown-body th, .markdown-body td { border-color: ${isDarkMode ? '#4b5563' : '#d1d5db'}; }
                            `}</style>
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm]}
                                rehypePlugins={[rehypeHighlight]}
                                components={{
                                    pre: ({ children, ...props }) => {
                                        const codeText = extractTextFromChildren(children);
                                        return (
                                            <div className="relative">
                                                <pre {...props}>
                                                    {children}
                                                </pre>
                                                <CopyButton text={codeText} />
                                            </div>
                                        );
                                    },
                                    table: ({ children, ...props }) => (
                                        <div className="overflow-x-auto my-4">
                                            <table {...props} className="min-w-full">
                                                {children}
                                            </table>
                                        </div>
                                    )
                                }}
                            >
                                {article.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default ArticlePage;
