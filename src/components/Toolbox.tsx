// components/Toolbox.tsx — 工具箱：按类别分组的工具网格
import {RiArrowRightUpLine} from '@remixicon/react';
import {useTranslation} from 'react-i18next';
import {tools} from '../data/tools';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const Toolbox: React.FC = () => {
    const {t} = useTranslation();
    const categories = Array.from(new Set(tools.map((tool) => tool.category)));

    return (
        <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionTitle
                    index={6}
                    label={t('tools.eyebrow')}
                    title={t('tools.title')}
                    extra={
                        <span className="font-mono text-sm text-mute">
                            {String(tools.length).padStart(2, '0')} {t('tools.total')}
                        </span>
                    }
                />

                <div className="mt-10 space-y-14">
                    {categories.map((category, groupIndex) => (
                        <div key={category}>
                            <Reveal>
                                <div className="flex items-baseline justify-between border-b border-line pb-3">
                                    <h3 className="eyebrow text-accent">
                                        {String(groupIndex + 1).padStart(2, '0')} — {category}
                                    </h3>
                                    <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
                                        {String(tools.filter((tool) => tool.category === category).length).padStart(2, '0')} ITEMS
                                    </span>
                                </div>
                            </Reveal>

                            <div className="mt-6 grid gap-px border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                                {tools
                                    .filter((tool) => tool.category === category)
                                    .map((tool, index) => (
                                        <Reveal key={tool.name} delay={(index % 3) * 0.06} className="h-full">
                                            <a
                                                href={tool.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="group flex h-full flex-col bg-[var(--paper)] p-5 transition-colors duration-300 hover:bg-soft sm:p-6"
                                            >
                                                <div className="flex items-start justify-between gap-3">
                                                    <h4 className="font-display text-lg font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)]">
                                                        {tool.name}
                                                    </h4>
                                                    <RiArrowRightUpLine
                                                        size={17}
                                                        className="mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent)]"
                                                    />
                                                </div>
                                                <p className="mt-2 text-sm leading-relaxed text-mute">{tool.desc}</p>
                                                <div className="mt-auto flex items-center justify-between pt-5">
                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
                                                        {tool.url.replace(/^https?:\/\/(www\.)?/, '')}
                                                    </span>
                                                    <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                                                        {t('tools.visit')}
                                                    </span>
                                                </div>
                                            </a>
                                        </Reveal>
                                    ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Toolbox;
