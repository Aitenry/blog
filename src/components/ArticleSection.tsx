import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { SectionProps } from '../types/app';
import React from 'react';
import { articles as loadedArticles } from '../data/articles';
import { RiCalendarLine, RiArrowRightLine } from '@remixicon/react';

const ArticleSection: React.FC<SectionProps> = ({ isDarkMode }) => {
    return (
        <section
            className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24`}
        >
            <div className="max-w-5xl w-full mx-auto">
                <div className="grid gap-6">
                    {loadedArticles.map((article, index) => (
                        <motion.div
                            key={article.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -4 }}
                        >
                            <Link
                                to={`/article/${article.id}`}
                                className={`block p-6 sm:p-8 rounded-xl border cursor-pointer transition-all ${
                                    isDarkMode 
                                        ? 'bg-gray-900 border-gray-800 hover:border-gray-700' 
                                        : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                            >
                                <div className={`flex items-center gap-2 text-sm mb-2 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                    <RiCalendarLine size={16} />
                                    <span>{article.date}</span>
                                </div>
                                <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                                    {article.title}
                                </h3>
                                <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                    {article.excerpt}
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {article.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className={`text-xs px-3 py-1 rounded-full ${
                                                isDarkMode 
                                                    ? 'bg-gray-800 text-gray-300' 
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <div className={`mt-4 flex items-center gap-2 text-sm ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                                    Read more
                                    <RiArrowRightLine size={16} />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ArticleSection;
