import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import { useParams, useNavigate } from 'react-router-dom';
import React, {type ReactElement, useState} from 'react';
import { diaries as loadedDiaries } from '../data/diaries';
import SnowBackground from '../components/SnowBackground';
import { RiCheckLine, RiFileCopyLine, RiArrowLeftLine, RiCalendarLine, RiCloudyLine, RiEmotionHappyLine, RiBookOpenLine } from '@remixicon/react';
import { useTranslation } from 'react-i18next';

interface DiaryPageProps {
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

const DiaryPage: React.FC<DiaryPageProps> = ({ isDarkMode }) => {
    const { t } = useTranslation();
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
                title={copied ? t('common.copied') : t('common.copyCode')}
            >
                {copied ? (
                    <RiCheckLine size={16} />
                ) : (
                    <RiFileCopyLine size={16} />
                )}
            </button>
        );
    };

    const diary = loadedDiaries.find(d => d.id === id);

    const calculateWordCount = (content: string) => {
        const textOnly = content
            .replace(/[#*`[\]()_~]/g, '')
            .replace(/\n/g, ' ')
            .trim();
        const chineseChars = (textOnly.match(/[\u4e00-\u9fa5]/g) || []).length;
        const englishWords = textOnly.split(/\s+/).filter(word => word.length > 0).length;
        return chineseChars + englishWords;
    };

    const wordCount = diary ? calculateWordCount(diary.content) : 0;

    const markdownStyles = `
        .markdown-body h1 { font-size: 2em; font-weight: 700; margin: 1em 0 0.5em; }
        .markdown-body h2 { font-size: 1.5em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body h3 { font-size: 1.25em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body h4 { font-size: 1.125em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body h5 { font-size: 1em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body h6 { font-size: 0.875em; font-weight: 600; margin: 1em 0 0.5em; }
        .markdown-body p { margin: 1em 0; line-height: 1.7; }
        .markdown-body ul { margin: 1em 0; padding-left: 1.75em; list-style-type: disc; }
        .markdown-body ol { margin: 1em 0; padding-left: 1.75em; list-style-type: decimal; }
        .markdown-body li { margin: 0.375em 0; line-height: 1.7; }
        .markdown-body ul ul, .markdown-body ul ol,
        .markdown-body ol ul, .markdown-body ol ol { margin: 0.5em 0; padding-left: 1.5em; }
        .markdown-body ul ul { list-style-type: circle; }
        .markdown-body ul ul ul { list-style-type: square; }
        .markdown-body ol ol { list-style-type: lower-alpha; }
        .markdown-body ol ol ol { list-style-type: lower-roman; }
        .markdown-body code { padding: 0.2em 0.4em; border-radius: 4px; font-size: 0.9em; }
        .markdown-body pre { padding: 1em; border-radius: 8px; overflow-x: auto; margin: 1em 0; }
        .markdown-body pre code { padding: 0; background: transparent; }
        .markdown-body blockquote { border-left: 4px solid; padding-left: 1em; margin: 1em 0; font-style: italic; }
        .markdown-body table { width: 100%; border-collapse: collapse; margin: 1em 0; }
        .markdown-body th, .markdown-body td { padding: 0.75em; border: 1px solid; text-align: left; }
    `;

    if (!diary) {
        return (
            <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
                <SnowBackground isDarkMode={isDarkMode} />
                <div className="relative z-10 text-center">
                    <h1 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        {t('diaryNotFound.title')}
                    </h1>
                    <button
                        onClick={() => navigate('/diaries')}
                        className={`px-6 py-2 rounded-lg ${isDarkMode ? 'bg-gray-800 text-white hover:bg-gray-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                    >
                        {t('common.backToDiaries')}
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
                        onClick={() => navigate('/diaries')}
                        className={`mb-8 flex items-center gap-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-900'} transition-colors`}
                    >
                        <RiArrowLeftLine size={20} />
                        {t('common.backToDiaries')}
                    </button>
                    <div className={`p-6 sm:p-8 rounded-xl border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
                        <div className="mb-6">
                            <h1 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                {diary.title}
                            </h1>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <RiCalendarLine size={16} />
                                    <span>{t('common.publishedOn')} {diary.date}</span>
                                </div>
                                {diary.weather && (
                                    <div className={`flex items-center gap-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        <RiCloudyLine size={16} />
                                        <span>{diary.weather}</span>
                                    </div>
                                )}
                                {diary.mood && (
                                    <div className={`flex items-center gap-1.5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                        <RiEmotionHappyLine size={16} />
                                        <span>{diary.mood}</span>
                                    </div>
                                )}
                                <div className={`flex items-center gap-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                                    <RiBookOpenLine size={16} />
                                    <span>{wordCount.toLocaleString()} {t('common.words')}</span>
                                </div>
                            </div>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {diary.tags.map((tag) => (
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
                                rehypePlugins={[rehypeRaw, rehypeHighlight]}
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
                                {diary.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default DiaryPage;
