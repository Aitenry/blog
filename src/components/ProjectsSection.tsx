// components/ProjectsSection.tsx — 开源项目：细线网格块
import {RiGithubFill} from '@remixicon/react';
import {useTranslation} from 'react-i18next';
import {projects} from '../data/projects';
import ArrowLink from './ui/ArrowLink';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

interface ProjectsSectionProps {
    isDarkMode: boolean;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({isDarkMode}) => {
    const {t} = useTranslation();

    return (
        <section id="projects" className="h-rule bg-soft px-4 py-28 sm:px-6 sm:py-36 md:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionTitle index={3} label={t('projects.eyebrow')} title={t('projects.title')}/>

                <div className="mt-14 grid gap-px border border-line bg-[var(--line)] md:grid-cols-2">
                    {projects.map((project, index) => (
                        <Reveal key={project.id} delay={index * 0.08} className="h-full">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex h-full flex-col bg-[var(--paper)] p-6 transition-colors duration-300 hover:bg-soft sm:p-8"
                            >
                                {/* 封面 */}
                                <div className="aspect-[16/8] overflow-hidden border border-line">
                                    <img
                                        src={isDarkMode ? project.imageDark : project.imageLight}
                                        alt={project.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                                    />
                                </div>

                                {/* 标题行 */}
                                <div className="mt-6 flex items-baseline justify-between gap-4">
                                    <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 group-hover:text-[var(--accent)] sm:text-3xl">
                                        {project.title}
                                    </h3>
                                    <div className="flex shrink-0 items-center gap-2">
                                        <span
                                            className={`border px-2 py-0.5 font-mono text-[10px] uppercase tracking-widest ${
                                                project.status === 'active'
                                                    ? 'border-[var(--accent)] text-[var(--accent)]'
                                                    : 'border-line text-mute'
                                            }`}
                                        >
                                            {project.status === 'active'
                                                ? t('projects.statusActive')
                                                : t('projects.statusAcquired')}
                                        </span>
                                        <span className="font-mono text-xs text-mute">
                                            NO.{String(project.id).padStart(2, '0')}
                                        </span>
                                    </div>
                                </div>

                                <p className="mt-3 leading-relaxed text-mute">
                                    {t(project.descriptionKey)}
                                </p>

                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="border border-line px-2.5 py-1 font-mono text-[11px] text-mute"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="mt-auto flex items-center justify-between pt-8">
                                    <ArrowLink href={project.github} external>
                                        {t('projects.viewProject')}
                                    </ArrowLink>
                                    <RiGithubFill
                                        size={19}
                                        className="text-mute transition-colors duration-300 group-hover:text-[var(--accent)]"
                                    />
                                </div>
                            </a>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsSection;
