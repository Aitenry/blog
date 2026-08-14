// components/AboutSection.tsx — 关于我：左右分栏 + 元信息表 + 引言
import {useTranslation} from 'react-i18next';
import Eyebrow from './ui/Eyebrow';
import Reveal from './ui/Reveal';

const AboutSection: React.FC = () => {
    const {t} = useTranslation();
    const meta = t('about.meta', {returnObjects: true}) as string[];
    const tags = t('about.tags', {returnObjects: true}) as string[];

    return (
        <section id="about" className="h-rule px-4 py-28 sm:px-6 sm:py-36 md:px-8">
            <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-12">
                {/* 左栏：标签 + 元信息表 */}
                <div className="lg:col-span-4">
                    <Reveal>
                        <Eyebrow>01 — {t('about.eyebrow')}</Eyebrow>
                    </Reveal>
                    <Reveal delay={0.05}>
                        <h2 className="mt-5 font-display text-4xl font-semibold tracking-tight sm:text-5xl">
                            {t('about.title')}
                        </h2>
                    </Reveal>
                    <Reveal delay={0.12}>
                        <dl className="mt-12 border-t border-line">
                            {meta.map((row, index) => {
                                const [key, value] = row.split(' · ');
                                return (
                                    <div
                                        key={index}
                                        className="flex items-baseline justify-between gap-4 border-b border-line py-3.5"
                                    >
                                        <dt className="eyebrow text-mute">{key}</dt>
                                        <dd className="font-mono text-sm">{value}</dd>
                                    </div>
                                );
                            })}
                        </dl>
                    </Reveal>
                </div>

                {/* 右栏：正文 + 引言 */}
                <div className="lg:col-span-7 lg:col-start-6">
                    <Reveal delay={0.1}>
                        <p className="text-lg leading-relaxed sm:text-xl">{t('about.desc1')}</p>
                    </Reveal>
                    <Reveal delay={0.16}>
                        <p className="mt-6 leading-relaxed text-mute">{t('about.desc2')}</p>
                    </Reveal>
                    <Reveal delay={0.22}>
                        <blockquote className="mt-14 border-l-2 border-[var(--accent)] pl-6">
                            <p className="font-display text-2xl italic leading-snug sm:text-3xl">
                                “{t('about.quote')}”
                            </p>
                        </blockquote>
                    </Reveal>
                    <Reveal delay={0.28}>
                        <div className="mt-10 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="border border-line px-3 py-1.5 font-mono text-xs text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
