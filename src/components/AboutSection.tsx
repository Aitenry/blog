// AboutSection.tsx
import { motion } from 'framer-motion';
import type {SectionProps} from '../types/app.ts';
import React from "react";

const AboutSection: React.FC<SectionProps> = ({ isDarkMode }) => {
    return (
        <section
            id="about"
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24 flex items-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`
            }>
            <div className="max-w-4xl w-full mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        About Me
                    </h2>
                    <div className={`w-12 sm:w-16 h-0.5 mx-auto ${isDarkMode ? 'bg-gray-700' : 'bg-blue-200'} rounded-full`} />
                </motion.div>

                <div className="space-y-6 sm:space-y-8 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 lg:p-8 rounded-xl border`}
                    >
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>
                            My Profile
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base`}>
                            I am a developer specializing in the integration of AI and Web technologies, dedicated to building intelligent systems and AI-powered applications. I actively contribute to open-source projects within the open-source community, driven by the belief that technology can create a better future.
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
                            I am passionate about exploring technical frontiers, with a particular focus on applying AI within the information management domain. I prioritize code quality and user experience, constantly striving for simple yet efficient solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className={`${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} p-4 sm:p-6 lg:p-8 rounded-xl border`}
                    >
                        <h3 className={`text-xl sm:text-2xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'} mb-3 sm:mb-4`}>
                            Interests & Philosophy
                        </h3>
                        <ul className={`space-y-2 sm:space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>Open Source Contribution: Actively maintaining multiple open-source projects related to AI and Web technologies.</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>Technical Exploration: Continuously learning the latest trends in AI and Web development.</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>Design Thinking: Focusing on user experience and interface details, pursuing the balance between functionality and aesthetics.</span>
                            </li>
                        </ul>

                        <div className={`${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-100'} mt-4 sm:mt-6 pt-3 sm:pt-4`}>
                            <blockquote className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-sm sm:text-base`}>
                                "Life is measured by thought and action not by time."
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;