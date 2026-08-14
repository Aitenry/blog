// pages/ArticlePage.tsx — 文章详情：编辑排版 + 目录 + 终端代码块 + 上下篇
import {motion} from 'framer-motion';
import {RiArrowLeftLine, RiArrowRightLine} from '@remixicon/react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {articles} from '../data/articles';
import {calculateWordCount, extractToc, readingTime} from '../utils/content';
import MarkdownContent from '../components/MarkdownContent';
import TocPanel from '../components/TocPanel';
import NotFoundBox from '../components/ui/NotFoundBox';
import {EASE} from '../components/ui/Reveal';
import {usePageTitle} from '../hooks/usePageTitle';

const ArticlePage: React.FC = () => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();

    const article = articles.find((a) => a.id === id);
    const toc = article ? extractToc(article.content) : [];
    const [activeId, setActiveId] = useState('');

    usePageTitle(article ? article.title : t('articleNotFound.title'));

    // 目录滚动高亮
    useEffect(() => {
        if (!article || toc.length === 0) return;
        const headings = toc
            .map((item) => document.getElementById(item.id))
            .filter((el): el is HTMLElement => el !== null);

        let frame = 0;
        const onScroll = () => {
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                let current = '';
                for (const heading of headings) {
                    if (heading.getBoundingClientRect().top <= 120) current = heading.id;
                }
                setActiveId(current || headings[0]?.id || '');
            });
        };

        onScroll();
        window.addEventListener('scroll', onScroll, {passive: true});
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) cancelAnimationFrame(frame);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [article]);

    if (!article) {
        return (
            <NotFoundBox
                code="404 — NOT FOUND"
                title={t('articleNotFound.title')}
                desc={t('articleNotFound.desc')}
                backLabel={t('articleNotFound.back')}
                onBack={() => navigate('/articles')}
            />
        );
    }

    const wordCount = calculateWordCount(article.content);
    const minutes = readingTime(article.content);
    const index = articles.findIndex((a) => a.id === article.id);
    const prevArticle = articles[index + 1];
    const nextArticle = articles[index - 1];

    return (
        <div className="relative">
            <div className="px-4 py-10 sm:px-6 md:px-8">
                <div className="mx-auto max-w-5xl">
                    <article className="mx-auto w-full max-w-3xl">
                        {/* 返回（按钮负边距：整体左移，抵消图标字形内边距，箭头与正文列边缘对齐） */}
                        <motion.button
                            initial={{opacity: 0, x: -8}}
                            animate={{opacity: 1, x: 0}}
                            onClick={() => navigate('/articles')}
                            className="link-underline -ml-0.5 inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mute transition-colors hover:text-ink"
                        >
                            <RiArrowLeftLine size={14}/>
                            {t('common.backToArticles')}
                        </motion.button>

                        {/* 头部 */}
                        <motion.div
                            initial={{opacity: 0, y: 16}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, ease: EASE}}
                            className="mt-10"
                        >
                            <p className="eyebrow text-mute">
                                {article.date} · {wordCount.toLocaleString()} {t('common.words')} ·{' '}
                                {minutes} {t('common.minRead')}
                            </p>
                            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                                {article.title}
                            </h1>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {article.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="border border-line px-2.5 py-1 font-mono text-[11px] text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-8 h-rule"/>
                        </motion.div>

                        {/* 正文 */}
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.6, delay: 0.08, ease: EASE}}
                            className="mt-2"
                        >
                            <MarkdownContent content={article.content}/>
                        </motion.div>

                        {/* 上下篇 */}
                        <nav className="mt-16 grid gap-4 sm:grid-cols-2">
                            {prevArticle ? (
                                <Link
                                    prefetch="intent"
                                    to={`/article/${prevArticle.id}`}
                                    className="group border border-line p-6 transition-colors duration-300 hover:border-[var(--accent)] hover:bg-soft"
                                >
                                    <span className="eyebrow flex items-center gap-1.5 text-mute">
                                        <RiArrowLeftLine size={13}/>
                                        {t('common.prev')}
                                    </span>
                                    <h4 className="mt-3 font-display text-lg font-medium transition-all duration-300 group-hover:italic">
                                        {prevArticle.title}
                                    </h4>
                                </Link>
                            ) : (
                                <div/>
                            )}
                            {nextArticle && (
                                <Link
                                    prefetch="intent"
                                    to={`/article/${nextArticle.id}`}
                                    className="group border border-line p-6 text-right transition-colors duration-300 hover:border-[var(--accent)] hover:bg-soft"
                                >
                                    <span className="eyebrow flex items-center justify-end gap-1.5 text-mute">
                                        {t('common.next')}
                                        <RiArrowRightLine size={13}/>
                                    </span>
                                    <h4 className="mt-3 font-display text-lg font-medium transition-all duration-300 group-hover:italic">
                                        {nextArticle.title}
                                    </h4>
                                </Link>
                            )}
                        </nav>
                    </article>

                    {/* 固定可折叠目录 */}
                    {toc.length > 0 && <TocPanel items={toc} activeId={activeId}/>}
                </div>
            </div>
        </div>
    );
};

export default ArticlePage;
