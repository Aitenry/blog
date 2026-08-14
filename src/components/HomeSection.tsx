// components/HomeSection.tsx — Hero：编辑风格大标题 + 状态行 + CTA + 数据表
import {motion} from 'framer-motion';
import {RiArrowDownLine, RiArrowRightLine} from '@remixicon/react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import CountUp from './ui/CountUp';
import Reveal, {EASE} from './ui/Reveal';
import {articles} from '../data/articles';
import {diaries} from '../data/diaries';
import {projects} from '../data/projects';
import {skills} from '../data/skills';

const HomeSection: React.FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();

    const stats = [
        {value: articles.length, label: t('home.statsArticles')},
        {value: diaries.length, label: t('home.statsDiaries')},
        {value: projects.length, label: t('home.statsProjects')},
        {value: skills.length, label: t('home.statsSkills')}
    ];

    return (
        <section
            id="home"
            className="relative flex min-h-[calc(100svh-4rem)] flex-col justify-center px-4 py-10 sm:px-6 sm:py-12 md:px-8"
        >
            <div className="mx-auto w-full max-w-6xl">
                {/* 大标题 */}
                <h1 className="font-display text-[13vw] font-semibold leading-[1.02] tracking-tight sm:text-7xl lg:text-8xl">
                    <span className="block overflow-hidden pb-1">
                        <motion.span
                            initial={{y: '110%'}}
                            animate={{y: 0}}
                            transition={{duration: 0.8, ease: EASE}}
                            className="block"
                        >
                            {t('home.headline1')}
                        </motion.span>
                    </span>
                    <span className="block overflow-hidden pb-2">
                        <motion.span
                            initial={{y: '110%'}}
                            animate={{y: 0}}
                            transition={{duration: 0.8, delay: 0.12, ease: EASE}}
                            className="block italic"
                        >
                            {t('home.headline2')}
                            <span className="text-accent not-italic">。</span>
                        </motion.span>
                    </span>
                </h1>

                {/* 角色行 */}
                <Reveal delay={0.3}>
                    <p className="mt-6 font-mono text-sm text-mute sm:text-base">{t('home.roles')}</p>
                </Reveal>

                {/* 现在状态（flex 垂直居中：光标块与文字、链接同一中线） */}
                <Reveal delay={0.38}>
                    <p className="mt-3 flex items-center gap-2 font-mono text-sm sm:text-base">
                        <span className="blink inline-block h-3 w-2 shrink-0 bg-[var(--accent)]"/>
                        <span>{t('home.nowPrefix')}</span>
                        <a
                            href="https://github.com/Aitenry/RytenBench"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-underline text-accent transition-opacity duration-200 hover:opacity-70"
                        >
                            {t('home.nowTarget')}
                        </a>
                    </p>
                </Reveal>

                {/* CTA */}
                <Reveal delay={0.46}>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <button
                            onClick={() => navigate('/articles')}
                            className="group inline-flex cursor-pointer items-center justify-center gap-2 border border-[var(--ink)] bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]"
                        >
                            {t('home.ctaArticles')}
                            <RiArrowRightLine
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-x-1"
                            />
                        </button>
                        <button
                            onClick={() =>
                                document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})
                            }
                            className="group inline-flex cursor-pointer items-center justify-center gap-2 border border-line px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:border-[var(--ink)]"
                        >
                            {t('home.ctaProjects')}
                            <RiArrowDownLine
                                size={16}
                                className="transition-transform duration-300 group-hover:translate-y-0.5"
                            />
                        </button>
                    </div>
                </Reveal>

                {/* 数据表 */}
                <Reveal delay={0.55}>
                    <div className="mt-12 grid grid-cols-2 border-t border-line sm:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div
                                key={stat.label}
                                className={`px-4 py-6 ${index > 0 ? 'border-l border-line' : ''} ${
                                    index >= 2 ? 'border-t border-line sm:border-t-0' : ''
                                }`}
                            >
                                <CountUp value={stat.value} className="text-3xl font-medium sm:text-4xl"/>
                                <p className="eyebrow mt-2 text-mute">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
};

export default HomeSection;
