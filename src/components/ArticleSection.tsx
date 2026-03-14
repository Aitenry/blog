import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { SectionProps } from '../types/app';
import React from 'react';
import { articles as loadedArticles } from '../data/articles';

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
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
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
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
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
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
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
