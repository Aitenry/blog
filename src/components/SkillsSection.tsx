// components/SkillsSection.tsx — 技术栈：行式索引 + 细线进度
import {motion} from 'framer-motion';
import {useTranslation} from 'react-i18next';
import {skills} from '../data/skills';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const SkillsSection: React.FC = () => {
    const {t} = useTranslation();

    return (
        <section id="skills" className="px-4 py-28 sm:px-6 sm:py-36 md:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionTitle index={2} label={t('skills.eyebrow')} title={t('skills.title')}/>

                <div className="mt-14 border-b border-line">
                    {skills.map((skill, index) => (
                        <Reveal key={skill.name} delay={index * 0.04}>
                            <div className="group grid grid-cols-12 items-center gap-x-4 gap-y-2 border-t border-line px-2 py-5 transition-colors duration-200 hover:bg-soft sm:py-6">
                                <span className="col-span-4 font-display text-lg font-medium transition-all duration-300 group-hover:italic group-hover:pl-1 sm:col-span-3 sm:text-xl">
                                    {skill.name}
                                </span>
                                <div className="col-span-5 h-[2px] overflow-hidden bg-[var(--line)] sm:col-span-7">
                                    <motion.div
                                        initial={{width: 0}}
                                        whileInView={{width: `${skill.level}%`}}
                                        viewport={{once: true}}
                                        transition={{duration: 1.1, delay: 0.15 + index * 0.06, ease: 'easeOut'}}
                                        className="h-full bg-[var(--accent)]"
                                    />
                                </div>
                                <span className="col-span-3 text-right font-mono text-sm text-mute sm:col-span-2">
                                    {String(skill.level).padStart(2, '0')}%
                                </span>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;
