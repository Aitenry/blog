// SkillsSection.tsx
import { motion, type Variants } from 'framer-motion';
import type {SectionProps} from '../types/app.ts';
import React from "react";

interface Skill {
    name: string;
    level: number;
}

const SkillsSection: React.FC<SectionProps> = ({ isDarkMode }) => {
    const skills: Skill[] = [
        { name: "Java", level: 90 },
        { name: "Vue", level: 79 },
        { name: "JavaScript", level: 79 },
        { name: "TypeScript", level: 73 },
        { name: "React", level: 72 },
        { name: "Electron", level: 70 }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100
            }
        }
    };

    return (
        <section
            id="skills"
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center`}>
            <div className="max-w-4xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Tech Stack
                    </h2>
                    <div className={`w-12 sm:w-16 h-0.5 mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} rounded-full`} />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6"
                >
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            variants={itemVariants}
                            className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-5 rounded-lg border shadow-sm`}
                        >
                            <div className="flex justify-between items-center mb-2">
                                <span className={`font-medium text-sm sm:text-base ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                    {skill.name}
                                </span>
                                <span className={`${isDarkMode ? 'text-gray-300' : 'text-blue-600'} text-xs sm:text-sm font-medium`}>
                                    {skill.level}%
                                </span>
                            </div>
                            <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2 overflow-hidden`}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${skill.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: index * 0.1 }}
                                    className={`h-full ${isDarkMode ? 'bg-blue-400' : 'bg-blue-500'} rounded-full transition-all duration-1000 ease-out`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;