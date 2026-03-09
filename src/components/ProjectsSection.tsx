// ProjectsSection.tsx
import { motion, type Variants } from 'framer-motion';
import type {SectionProps} from '../types/app.ts';
import React from "react";

interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github: string;
}

const ProjectsSection: React.FC<SectionProps> = ({ isDarkMode }) => {
    const projects: Project[] = [
        {
            id: 1,
            title: "IIMS-By-AI",
            description: "AI-Powered Intelligent Information Management Platform",
            tech: ["Java", "Vue", "SpringBoot", "TypeScript", "AI"],
            image: isDarkMode
                ? "/iims-dark.svg"
                : "/iims-light.svg",
            github: "https://github.com/Aitenry/IIMS-By-AI" // 修复了链接中的多余空格
        },
        {
            id: 2,
            title: "RytenBench",
            description: "Lightweight Personal AI Workbench",
            tech: ["Electron", "React", "TypeScript", "AI"],
            image: isDarkMode
                ? "/ryten-dark.svg"
                : "/ryten-light.svg",
            github: "https://github.com/Aitenry/RytenBench" // 修复了链接中的多余空格
        }
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
            id="projects"
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`
            }>
            <div className="max-w-5xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Open Source Project
                    </h2>
                    <div className={`w-12 sm:w-16 h-0.5 mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} rounded-full`} />
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8"
                >
                    {projects.map((project) => (
                        <motion.a
                            key={project.id}
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className={`block ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} rounded-xl overflow-hidden border transition-all duration-300 h-full shadow-sm hover:shadow-md`}
                        >
                            <div className="h-32 sm:h-40 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>
                            <div className="p-4 sm:p-5 flex flex-col">
                                <h3 className={`font-bold text-lg mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {project.title}
                                </h3>
                                <p className={`text-sm mb-3 h-12 sm:h-10 overflow-hidden line-clamp-2 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-1 sm:gap-1.5 mt-auto">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className={`px-2 py-0.5 rounded text-xs font-medium whitespace-nowrap ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-blue-700'}`}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProjectsSection;