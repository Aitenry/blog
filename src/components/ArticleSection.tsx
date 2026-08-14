// components/ArticleSection.tsx — 文章索引：标签筛选 + 日期 + 衬线标题 + 箭头
import {RiArrowRightLine} from '@remixicon/react';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import {useTranslation} from 'react-i18next';
import {articles} from '../data/articles';
import {readingTime} from '../utils/content';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const tagBtn = (active: boolean) =>
    `cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${
        active
            ? 'border-[var(--accent)] bg-accent text-[var(--accent-ink)]'
            : 'border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]'
    }`;

const ArticleSection: React.FC = () => {
    const {t} = useTranslation();
    const allTags = Array.from(new Set(articles.flatMap((a) => a.tags)));
    const [activeTag, setActiveTag] = useState<string | null>(null);
    const visibleArticles = activeTag ? articles.filter((a) => a.tags.includes(activeTag)) : articles;

    return (
        <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-8">
            <div className="mx-auto max-w-5xl">
                <SectionTitle
                    index={1}
                    label={t('articles.eyebrow')}
                    title={t('articles.title')}
                    extra={
                        <span className="font-mono text-sm text-mute">
                            {String(visibleArticles.length).padStart(2, '0')} / {String(articles.length).padStart(2, '0')}
                        </span>
                    }
                />

                {/* 标签筛选 */}
                <Reveal>
                    <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-5">
                        <button
                            onClick={() => setActiveTag(null)}
                            className={tagBtn(activeTag === null)}
                        >
                            {t('common.all')}
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setActiveTag(tag === activeTag ? null : tag)}
                                className={tagBtn(tag === activeTag)}
                            >
                                {tag}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="border-b border-line">
                    {visibleArticles.map((article, index) => (
                        <Reveal key={article.id} delay={index * 0.04}>
                            <Link
                                prefetch="intent"
                                to={`/article/${article.id}`}
                                className="group grid grid-cols-12 items-baseline gap-x-4 gap-y-1.5 border-t border-line px-2 py-6 transition-colors duration-200 hover:bg-soft sm:py-8"
                            >
                                <span className="col-span-12 font-mono text-xs text-mute sm:col-span-2">
                                    {article.date}
                                </span>
                                <div className="col-span-12 sm:col-span-8">
                                    <h3 className="font-display text-xl font-semibold tracking-tight transition-all duration-300 group-hover:italic group-hover:text-[var(--accent)] sm:text-2xl">
                                        {article.title}
                                    </h3>
                                    <p className="mt-1 line-clamp-1 text-sm text-mute">
                                        {article.excerpt}
                                    </p>
                                </div>
                                <div className="col-span-12 flex items-center justify-between sm:col-span-2 sm:justify-end">
                                    <span className="font-mono text-xs text-mute">
                                        {readingTime(article.content)} {t('common.minRead')}
                                    </span>
                                    <RiArrowRightLine
                                        size={17}
                                        className="text-mute transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--accent)]"
                                    />
                                </div>
                            </Link>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;
