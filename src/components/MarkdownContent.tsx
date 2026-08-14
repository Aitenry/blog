// components/MarkdownContent.tsx — Markdown 渲染：终端风代码块 + 复制 + 锚点
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import rehypeRaw from 'rehype-raw';
import {RiCheckLine, RiFileCopyLine} from '@remixicon/react';
import {isValidElement, useState, type FC} from 'react';
import {useTranslation} from 'react-i18next';
import {extractTextFromChildren, headingId} from '../utils/content';

const CopyButton: FC<{text: string}> = ({text}) => {
    const {t} = useTranslation();
    const [copied, setCopied] = useState(false);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* ignore */
        }
    };

    return (
        <button
            onClick={handleCopy}
            title={copied ? t('common.copied') : t('common.copyCode')}
            aria-label={t('common.copyCode')}
            className="flex h-7 w-7 cursor-pointer items-center justify-center text-[var(--block-mute)] transition-colors duration-200 hover:text-[var(--block-ink)]"
        >
            {copied ? <RiCheckLine size={15} className="text-[var(--hl-string)]"/> : <RiFileCopyLine size={15}/>}
        </button>
    );
};

const MarkdownContent: FC<{content: string}> = ({content}) => {
    return (
        <div className="markdown-body">
            <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeRaw, rehypeHighlight]}
                components={{
                    h2: ({children}) => (
                        <h2 id={headingId(extractTextFromChildren(children))}>{children}</h2>
                    ),
                    h3: ({children}) => (
                        <h3 id={headingId(extractTextFromChildren(children))}>{children}</h3>
                    ),
                    pre: ({children, ...props}) => {
                        const codeEl = Array.isArray(children) ? children[0] : children;
                        const codeProps = isValidElement(codeEl)
                            ? (codeEl.props as {className?: unknown})
                            : null;
                        const langMatch =
                            typeof codeProps?.className === 'string'
                                ? codeProps.className.match(/language-([\w+-]+)/)
                                : null;
                        const lang = langMatch ? langMatch[1] : 'code';
                        const text = extractTextFromChildren(children);
                        return (
                            <div className="my-7 border border-line bg-[var(--block)] shadow-none">
                                {/* 终端标题栏 */}
                                <div className="flex items-center justify-between border-b border-[var(--line)] bg-[var(--paper-soft)] px-4 py-2">
                                    <span className="font-mono text-[11px] uppercase tracking-widest text-mute">
                                        <span className="text-accent">❯</span> {lang}
                                    </span>
                                    <CopyButton text={text}/>
                                </div>
                                <pre {...props} className="m-0! border-0! bg-transparent!">
                                    {children}
                                </pre>
                            </div>
                        );
                    },
                    table: ({children}) => (
                        <div className="my-5 overflow-x-auto">
                            <table className="min-w-full">{children}</table>
                        </div>
                    )
                }}
            >
                {content}
            </ReactMarkdown>
        </div>
    );
};

export default MarkdownContent;
