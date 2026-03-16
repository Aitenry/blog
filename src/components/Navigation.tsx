import { motion } from 'framer-motion';
import {RiArrowUpWideLine, RiArrowDownWideLine, RiGiteeFill, RiGithubFill,
    RiSearchLine, RiHome2Line, RiArticleLine, RiBook2Line, RiCloseLine, RiSearch2Line} from "@remixicon/react";
import type { NavProps } from '../types/app';
import React, { useState, useEffect } from "react";
import { articles } from '../data/articles';
import { diaries } from '../data/diaries';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const sectionIcons: Record<string, React.ReactNode> = {
    home: <RiHome2Line size={18} />,
    diaries: <RiBook2Line size={18} />,
    articles: <RiArticleLine size={18} />
};

const Navigation: React.FC<NavProps> = ({ activeSection, isDarkMode, handleNavClick }) => {
    const { t } = useTranslation();
    const sections = ['home', 'diaries', 'articles'];
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const navItemRefs = React.useRef<Record<string, HTMLAnchorElement | null>>({});

    const filteredArticles = articles.filter(article => 
        article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const filteredDiaries = diaries.filter(diary => 
        diary.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        diary.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        diary.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
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

    useEffect(() => {
        const updateIndicator = () => {
            const activeNavItem = navItemRefs.current[activeSection];
            if (activeNavItem) {
                setIndicatorStyle({
                    left: activeNavItem.offsetLeft,
                    width: activeNavItem.offsetWidth
                });
            }
        };
        
        window.addEventListener('resize', updateIndicator);
        updateIndicator();
        
        return () => {
            window.removeEventListener('resize', updateIndicator);
        };
    }, [activeSection]);

    const searchResultItems = (
        <>
            {filteredDiaries.length > 0 && (
                <div>
                    <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                        {t('navigation.diaries')}
                    </h4>
                    {filteredDiaries.map((diary) => (
                        <Link
                            key={`diary-${diary.id}`}
                            to={`/diary/${diary.id}`}
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
                                {diary.title}
                            </h3>
                            <p className={`text-sm mb-3 line-clamp-2 ${
                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                            }`}>
                                {diary.excerpt}
                            </p>
                            <div className="flex flex-wrap gap-1.5">
                                {diary.tags.map((tag) => (
                                    <span
                                        key={`diary-tag-${tag}`}
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
                    ))}
                </div>
            )}
            {filteredArticles.length > 0 && (
                <div className="mb-4">
                    <h4 className={`text-sm font-semibold mb-3 uppercase tracking-wider ${
                        isDarkMode ? 'text-gray-500' : 'text-gray-400'
                    }`}>
                        {t('navigation.articles')}
                    </h4>
                    {filteredArticles.map((article) => (
                        <Link
                            key={`article-${article.id}`}
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
                                        key={`article-tag-${tag}`}
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
                    ))}
                </div>
            )}
        </>
    );

    const searchContent = (
        <div className="space-y-3">
            {searchResultItems}
        </div>
    );

    const noResults = (
        <div className={`text-center py-16 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
            <p className="text-base font-medium mb-1">{t('navigation.noArticlesFound')}</p>
            <p className="text-sm opacity-75">{t('navigation.tryADifferentSearchTerm')}</p>
        </div>
    );

    const emptyState = (
        <div className={`text-center py-16 ${
            isDarkMode ? 'text-gray-500' : 'text-gray-400'
        }`}>
            <p className="text-base font-medium">{t('navigation.startTypingToSearch')}</p>
        </div>
    );

    const renderSearchResults = () => {
        if (searchQuery && (filteredArticles.length > 0 || filteredDiaries.length > 0)) {
            return searchContent;
        } else if (searchQuery) {
            return noResults;
        } else {
            return emptyState;
        }
    };

    const searchOverlay = (
        <div className="fixed inset-0 z-50">
            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 8px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: ${isDarkMode ? '#1f2937' : '#f3f4f6'};
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: ${isDarkMode ? '#4b5563' : '#d1d5db'};
                    border-radius: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: ${isDarkMode ? '#6b7280' : '#9ca3af'};
                }
            `}</style>
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
                            {t('navigation.search')}
                        </h2>
                        <button
                            onClick={() => setIsSearchOpen(false)}
                            className={`p-2 rounded-full transition-all hover:scale-110 ${
                                isDarkMode 
                                    ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                                    : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                            }`}
                        >
                            <RiCloseLine size={20} />
                        </button>
                    </div>
                    
                    <div className="relative">
                        <RiSearch2Line className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 ${
                            isDarkMode ? 'text-gray-500' : 'text-gray-400'
                        }`} size={20} />
                        <input
                            type="text"
                            placeholder={t('navigation.typeToSearch')}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className={`w-full pl-12 pr-4 py-3.5 rounded-2xl border-0 text-base focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                                isDarkMode 
                                    ? 'bg-gray-800/50 text-white placeholder-gray-500 focus:ring-gray-700 focus:ring-offset-gray-90' 
                                    : 'bg-gray-100 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:ring-offset-white'
                            }`}
                            autoFocus
                        />
                    </div>
                    
                    <div style={{ padding: '0 7px 0 14px' }} className="mt-8 max-h-96 overflow-y-auto custom-scrollbar">
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

                    {/* 桌面端导航 */}
                    <div className="hidden md:flex gap-6 relative">
                        {sections.map((section) => (
                            <motion.a
                                key={section}
                                ref={(el) => {
                                    navItemRefs.current[section] = el;
                                }}
                                href={`#${section}`}
                                onClick={(e) => handleNavClick(e, section)}
                                className={`capitalize font-medium py-2 flex items-center gap-2 ${
                                    activeSection === section
                                        ? isDarkMode
                                            ? 'text-white font-semibold'
                                            : 'text-blue-600 font-semibold'
                                        : isDarkMode
                                            ? 'text-gray-400 hover:text-white'
                                            : 'text-gray-600 hover:text-blue-500'
                                }`}
                            >
                                {sectionIcons[section]}
                                {t(`navigation.${section}`)}
                            </motion.a>
                        ))}
                        <motion.div
                            className={`absolute bottom-0 h-0.5 ${
                                isDarkMode ? 'bg-white' : 'bg-blue-600'
                            }`}
                            animate={{
                                left: indicatorStyle.left,
                                width: indicatorStyle.width
                            }}
                            transition={{
                                type: 'spring',
                                stiffness: 500,
                                damping: 30
                            }}
                        />
                    </div>

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
                            <RiSearchLine size={23}/>
                        </motion.button>
                    </div>
                </div>
            </nav>

            {/* 移动端展开按钮 - 在 nav 下方 */}
            {!isMobileMenuOpen && (
                <div className="fixed top-12 left-0 right-0 z-30 flex justify-center md:hidden">
                    <button
                        className={`p-2 rounded-full transition-all hover:scale-110 ${
                            isDarkMode 
                                ? 'text-gray-400 hover:text-white' 
                                : 'text-gray-500 hover:text-gray-900'
                        }`}
                        onClick={() => setIsMobileMenuOpen(true)}
                    >
                        <RiArrowDownWideLine className="w-6 h-6" size={24} />
                    </button>
                </div>
            )}

            {/* 移动端导航菜单 */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className={`fixed top-15 left-0 right-0 z-30 md:hidden ${isDarkMode ? 'bg-black' : 'bg-white'} shadow-lg rounded-b-2xl py-4 px-6 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-100'}`}
                >
                    <div className="flex flex-col space-y-4">
                        {sections.map((section) => (
                            <motion.a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => {
                                    handleNavClick(e, section);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`capitalize font-medium py-2 flex items-center gap-2 ${
                                    activeSection === section
                                        ? isDarkMode
                                            ? 'text-white font-semibold'
                                            : 'text-blue-600 font-semibold'
                                        : isDarkMode
                                            ? 'text-gray-400 hover:text-white'
                                            : 'text-gray-600 hover:text-blue-500'
                                }`}
                            >
                                {sectionIcons[section]}
                                {t(`navigation.${section}`)}
                            </motion.a>
                        ))}
                        {/* 收起按钮 */}
                        <div className="flex justify-center pt-2">
                            <button
                                className={`p-2 rounded-full transition-all hover:scale-110 ${
                                    isDarkMode 
                                        ? 'hover:bg-gray-800 text-gray-400 hover:text-white' 
                                        : 'hover:bg-gray-100 text-gray-500 hover:text-gray-900'
                                }`}
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                <RiArrowUpWideLine className="w-6 h-6" size={24} />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}

            {isSearchOpen && searchOverlay}
        </>
    );
};

export default Navigation;
