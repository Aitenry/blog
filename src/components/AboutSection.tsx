// AboutSection.tsx
import { motion } from 'framer-motion';
import type {SectionProps} from '../types/app.ts';
import React from "react";
import { useTranslation } from 'react-i18next';

const AboutSection: React.FC<SectionProps> = ({ isDarkMode }) => {
    const { t } = useTranslation();
    
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
                        {t('about.title')}
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
                            {t('about.profile')}
                        </h3>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base`}>
                            {t('about.profileDesc1')}
                        </p>
                        <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed text-sm sm:text-base`}>
                            {t('about.profileDesc2')}
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
                            {t('about.interests')}
                        </h3>
                        <ul className={`space-y-2 sm:space-y-3 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-sm sm:text-base`}>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>{t('about.interest1')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>{t('about.interest2')}</span>
                            </li>
                            <li className="flex items-start">
                                <span className={`${isDarkMode ? 'text-white' : 'text-blue-500'} mr-2 flex-shrink-0`}>•</span>
                                <span>{t('about.interest3')}</span>
                            </li>
                        </ul>

                        <div className={`${isDarkMode ? 'border-t border-gray-700' : 'border-t border-gray-100'} mt-4 sm:mt-6 pt-3 sm:pt-4`}>
                            <blockquote className={`italic ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-center text-sm sm:text-base`}>
                                "{t('about.quote')}"
                            </blockquote>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;