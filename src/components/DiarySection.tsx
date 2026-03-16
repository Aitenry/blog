import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { SectionProps } from '../types/app';
import React from 'react';
import { diaries as loadedDiaries } from '../data/diaries';
import { RiCalendarLine, RiCloudyLine, RiEmotionHappyLine, RiArrowRightLine } from '@remixicon/react';

const DiarySection: React.FC<SectionProps> = ({ isDarkMode }) => {
    return (
        <section className={`min-h-screen px-4 sm:px-6 lg:px-8 py-16 sm:py-24`}>
            <div className="max-w-4xl w-full mx-auto">
                <div className="relative">
                    <div className={`absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-0.5 ${
                        isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                    }`} />
                    
                    {loadedDiaries.map((diary, index) => (
                        <motion.div
                            key={diary.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className={`relative mb-12 sm:mb-16`}
                        >
                            <div className={`hidden sm:block absolute left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 ${
                                isDarkMode 
                                    ? 'bg-blue-500 border-gray-900' 
                                    : 'bg-blue-500 border-white'
                            }`} />
                            
                            <div className={`sm:hidden absolute left-4 top-6 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 ${
                                isDarkMode 
                                    ? 'bg-blue-500 border-gray-900' 
                                    : 'bg-blue-500 border-white'
                            }`} />
                            
                            <div className={`sm:w-1/2 ${index % 2 === 0 ? 'sm:pr-8' : 'sm:pl-8 sm:ml-auto'}`}>
                                <Link
                                    to={`/diary/${diary.id}`}
                                    className={`block ml-10 sm:ml-0 p-5 sm:p-6 rounded-2xl transition-all duration-300 group ${
                                        isDarkMode 
                                            ? 'bg-gray-900/50 hover:bg-gray-900' 
                                            : 'bg-white hover:bg-gray-50'
                                    }`}
                                >
                                    <div className="flex flex-wrap items-center gap-3 mb-3">
                                        <div className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                                            <RiCalendarLine size={16} />
                                            <span>{diary.date}</span>
                                        </div>
                                        
                                        {diary.weather && (
                                            <div className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${
                                                isDarkMode 
                                                    ? 'bg-gray-800 text-gray-300' 
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                <RiCloudyLine size={14} />
                                                <span>{diary.weather}</span>
                                            </div>
                                        )}
                                        
                                        {diary.mood && (
                                            <div className={`flex items-center gap-1.5 text-xs px-2 py-1 rounded-full ${
                                                isDarkMode 
                                                    ? 'bg-gray-800 text-gray-300' 
                                                    : 'bg-gray-100 text-gray-600'
                                            }`}>
                                                <RiEmotionHappyLine size={14} />
                                                <span>{diary.mood}</span>
                                            </div>
                                        )}
                                    </div>
                                    
                                    <h3 className={`text-lg sm:text-xl font-bold mb-2 ${
                                        isDarkMode ? 'text-white' : 'text-gray-900'
                                    }`}>
                                        {diary.title}
                                    </h3>
                                    
                                    <p className={`text-sm line-clamp-2 mb-3 ${
                                        isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                    }`}>
                                        {diary.excerpt}
                                    </p>
                                    
                                    <div className="flex flex-wrap gap-1.5 mb-3">
                                        {diary.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className={`text-xs px-2 py-0.5 rounded ${
                                                    isDarkMode 
                                                        ? 'bg-gray-800 text-gray-400' 
                                                        : 'bg-gray-100 text-gray-500'
                                                }`}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    <div className={`flex items-center gap-1.5 text-sm font-medium transition-colors group-hover:gap-2 ${
                                        isDarkMode ? 'text-blue-400' : 'text-blue-600'
                                    }`}>
                                        阅读日记
                                        <RiArrowRightLine size={16} className="transform transition-transform group-hover:translate-x-1" />
                                    </div>
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DiarySection;
