// pages/DiaryPage.tsx — 日记详情：编辑排版 + 天气心情 + 上下篇
import {motion} from 'framer-motion';
import {RiArrowLeftLine, RiArrowRightLine} from '@remixicon/react';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {diaries} from '../data/diaries';
import {calculateWordCount, extractToc, readingTime} from '../utils/content';
import MarkdownContent from '../components/MarkdownContent';
import TocPanel from '../components/TocPanel';
import NotFoundBox from '../components/ui/NotFoundBox';
import {EASE} from '../components/ui/Reveal';
import {usePageTitle} from '../hooks/usePageTitle';

const DiaryPage: React.FC = () => {
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const navigate = useNavigate();

    const diary = diaries.find((d) => d.id === id);
    const toc = diary ? extractToc(diary.content) : [];
    const [activeId, setActiveId] = useState('');

    usePageTitle(diary ? diary.title : t('diaryNotFound.title'));

    // 目录滚动高亮
    useEffect(() => {
        if (!diary || toc.length === 0) return;
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
    }, [diary]);

    if (!diary) {
        return (
            <NotFoundBox
                code="404 — NOT FOUND"
                title={t('diaryNotFound.title')}
                desc={t('diaryNotFound.desc')}
                backLabel={t('diaryNotFound.back')}
                onBack={() => navigate('/diaries')}
            />
        );
    }

    const wordCount = calculateWordCount(diary.content);
    const minutes = readingTime(diary.content);
    const index = diaries.findIndex((d) => d.id === diary.id);
    const prevDiary = diaries[index + 1];
    const nextDiary = diaries[index - 1];

    return (
        <div className="relative">
            <div className="px-4 py-10 sm:px-6 md:px-8">
                <div className="mx-auto max-w-5xl">
                    <article className="mx-auto w-full max-w-3xl">
                        {/* 返回（按钮负边距：整体左移，抵消图标字形内边距，箭头与正文列边缘对齐） */}
                        <motion.button
                            initial={{opacity: 0, x: -8}}
                            animate={{opacity: 1, x: 0}}
                            onClick={() => navigate('/diaries')}
                            className="link-underline -ml-0.5 inline-flex cursor-pointer items-center gap-1.5 font-mono text-xs uppercase tracking-widest text-mute transition-colors hover:text-ink"
                        >
                            <RiArrowLeftLine size={14}/>
                            {t('common.backToDiaries')}
                        </motion.button>

                        {/* 头部 */}
                        <motion.div
                            initial={{opacity: 0, y: 16}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.5, ease: EASE}}
                            className="mt-10"
                        >
                            <p className="eyebrow text-mute">
                                {diary.date}
                                {diary.weather ? ` · ${diary.weather}` : ''}
                                {diary.mood ? ` · ${diary.mood}` : ''} · {wordCount.toLocaleString()}{' '}
                                {t('common.words')} · {minutes} {t('common.minRead')}
                            </p>
                            <h1 className="mt-5 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                                {diary.title}
                            </h1>
                            <div className="mt-6 flex flex-wrap gap-2">
                                {diary.tags.map((tag) => (
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
                            <MarkdownContent content={diary.content}/>
                        </motion.div>

                        {/* 上下篇 */}
                        <nav className="mt-16 grid gap-4 sm:grid-cols-2">
                            {prevDiary ? (
                                <Link
                                    prefetch="intent"
                                    to={`/diary/${prevDiary.id}`}
                                    className="group border border-line p-6 transition-colors duration-300 hover:border-[var(--accent)] hover:bg-soft"
                                >
                                    <span className="eyebrow flex items-center gap-1.5 text-mute">
                                        <RiArrowLeftLine size={13}/>
                                        {t('common.prev')}
                                    </span>
                                    <h4 className="mt-3 font-display text-lg font-medium transition-all duration-300 group-hover:italic">
                                        {prevDiary.title}
                                    </h4>
                                </Link>
                            ) : (
                                <div/>
                            )}
                            {nextDiary && (
                                <Link
                                    prefetch="intent"
                                    to={`/diary/${nextDiary.id}`}
                                    className="group border border-line p-6 text-right transition-colors duration-300 hover:border-[var(--accent)] hover:bg-soft"
                                >
                                    <span className="eyebrow flex items-center justify-end gap-1.5 text-mute">
                                        {t('common.next')}
                                        <RiArrowRightLine size={13}/>
                                    </span>
                                    <h4 className="mt-3 font-display text-lg font-medium transition-all duration-300 group-hover:italic">
                                        {nextDiary.title}
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

export default DiaryPage;
