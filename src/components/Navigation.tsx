import { motion } from 'framer-motion';
import {RiGiteeFill, RiGithubFill, RiSearchLine} from "@remixicon/react";
import type { NavProps } from '../types/app';
import React, { useState, useEffect } from "react";
import { articles } from '../data/articles';
import { Link } from 'react-router-dom';

const Navigation: React.FC<NavProps> = ({ activeSection, isDarkMode, handleNavClick }) => {
    const sections = ['home', 'articles'];
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    
    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    useEffect(() => {
        if (isSearchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isSearchOpen]);

    const searchResultItems = filteredArticles.map((article) => (
        <Link
            key={article.id}
            to={`/article/${article.id}`}
            onClick={() => {
                setIsSearchOpen(false);
                setSearchQuery('');
            }}
            className={`block p-4 rounded-2xl transition-all hover:-translate-y-0.5 ${
                isDarkMode ? 'hover:bg-gray-800/80' : 'hover:bg-gray-50'
            }`}
        >
            <h3 className={`font-semibold text-lg mb-2 ${
                isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
                {article.title}
            </h3>
            <p className={`text-sm mb-3 line-clamp-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
                {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-1.5">
                {article.tags.map((tag) => (
                    <span
                        key={tag}
                        className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                            isDarkMode 
                                ? 'bg-gray-800 text-gray-300 border border-gray-700' 
                                : 'bg-gray-100 text-gray-600'
                        }`}
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </Link>
    ));

    const searchContent = (
        <div className="space-y-3">
            {searchResultItems}
        </div>
    );

    const noResults = (
        <div className={`text-center py-16 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
            <p className="text-base font-medium mb-1">No articles found</p>
            <p className="text-sm opacity-75">Try a different search term</p>
        </div>
    );

    const emptyState = (
        <div className={`text-center py-16 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
            <p className="text-base font-medium">Start typing to search</p>
        </div>
    );

    const renderSearchResults = () => {
        if (searchQuery && filteredArticles.length > 0) {
            return searchContent;
        } else if (searchQuery) {
            return noResults;
        } else {
            return emptyState;
        }
    };

    const searchOverlay = (
        <div className="fixed inset-0 z-50">
            <div 
                className={`fixed inset-0 ${
                    isDarkMode ? 'bg-black/60' : 'bg-white/60'
                } backdrop-blur-md`}
                onClick={() => setIsSearchOpen(false)}
            />
            
            <div className="fixed inset-0 flex items-start justify-center pt-24 px-4 sm:px-6 lg:px-8">
                <div 
                    className={`w-full max-w-2xl rounded-2xl border shadow-2xl p-6 sm:p-8 ${
                        isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-white border-gray-200'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="flex items-center justify-between mb-8">
                        <h2 className={`text-xl font-semibold tracking-tight ${
                            isDarkMode ? 'text-white' : 'text-gray-900'
                        }`}>
                            Search
                        </h2>
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className={`p-2 rounded-full transition-all hover:scale-110 ${
                                isDarkMode 
                                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    
                    <div className="relative">
                        <svg className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Type to search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border-0 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isDarkMode 
                                    ? 'bg-gray-800/50 text-white placeholder-gray-500 focus:ring-gray-700 focus:ring-offset-gray-900' 
                                    : 'bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:ring-offset-white'
                            }`}
                            autoFocus
                        />
                    </div>
                    
                    <div className="mt-8 max-h-96 overflow-y-auto">
                        {renderSearchResults()}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <nav className={`fixed w-full ${
                isDarkMode ? 'bg-black/80' : 'bg-white/80'
            } backdrop-blur-sm z-40 py-4 px-6 md:px-12 ${
                isDarkMode ? 'border-b border-gray-800' : 'border-b border-gray-100'
            }`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`text-xl font-bold ${
                            isDarkMode ? 'text-white' : 'text-blue-700'
                        }`}
                    >
                        Aitenry
                    </motion.div>

                    {activeSection && (
                        <div className="hidden md:flex space-x-8">
                            {sections.map((section) => (
                                <motion.a
                                    key={section}
                                    href={`#${section}`}
                                    onClick={(e) => handleNavClick(e, section)}
                                    className={`capitalize font-medium relative py-2 ${
                                        activeSection === section
                                            ? isDarkMode
                                                ? 'text-white font-semibold'
                                                : 'text-blue-600 font-semibold'
                                            : isDarkMode
                                                ? 'text-gray-400 hover:text-white'
                                                : 'text-gray-600 hover:text-blue-500'
                                    }`}
                                >
                                    {section}
                                    {activeSection === section && (
                                        <motion.div
                                            className={`absolute bottom-0 left-0 right-0 h-0.5 ${
                                                isDarkMode ? 'bg-white' : 'bg-blue-600'
                                            }`}
                                            layoutId="nav-indicator"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                        />
                                    )}
                                </motion.a>
                            ))}
                        </div>
                    )}

                    <div className="flex items-center gap-1">
                        <motion.a
                            href="https://github.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                            } font-medium block`}
                        >
                            <RiGithubFill size={24}/>
                        </motion.a>

                        <motion.a
                            href="https://gitee.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${
                                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                            } font-medium block`}
                        >
                            <RiGiteeFill size={24}/>
                        </motion.a>

                        <motion.button
                            onClick={() => setIsSearchOpen(true)}
                            className={`${
                                isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'
                            } font-medium block`}
                        >
                            <RiSearchLine size={24}/>
                        </motion.button>
                    </div>
                </div>
            </nav>

            {isSearchOpen && searchOverlay}
        </>
    );
};

export default Navigation;
