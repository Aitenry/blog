// components/Navigation.tsx — 编辑风格导航：等宽链接 + 方框图标 + 全屏移动端菜单
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from 'framer-motion';
import {
    RiArrowRightUpLine,
    RiCloseLine,
    RiGiteeFill,
    RiGithubFill,
    RiMenu4Line,
    RiMoonLine,
    RiSearch2Line,
    RiSearchLine,
    RiSunLine
} from '@remixicon/react';
import {useEffect, useRef, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import type {NavProps} from '../types/app';
import {articles} from '../data/articles';
import {diaries} from '../data/diaries';

const sections = ['home', 'diaries', 'articles', 'photos', 'reading', 'tools'] as const;

const Navigation: React.FC<NavProps> = ({activeSection, isDarkMode, onToggleTheme, handleNavClick}) => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [scrolled, setScrolled] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const activeRowRef = useRef<HTMLAnchorElement | null>(null);
    const {scrollY} = useScroll();

    useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 24));

    // 搜索/菜单打开时锁定滚动
    useEffect(() => {
        document.body.style.overflow = isSearchOpen || isMobileOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isSearchOpen, isMobileOpen]);

    // ⌘K / Ctrl+K 唤起搜索
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                setIsSearchOpen((v) => !v);
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    useEffect(() => {
        if (isSearchOpen) {
            const id = setTimeout(() => inputRef.current?.focus(), 60);
            return () => clearTimeout(id);
        }
    }, [isSearchOpen]);

    const query = searchQuery.trim().toLowerCase();
    const filteredArticles = query
        ? articles.filter(
              (a) =>
                  a.title.toLowerCase().includes(query) ||
                  a.excerpt.toLowerCase().includes(query) ||
                  a.tags.some((tag) => tag.toLowerCase().includes(query))
          )
        : [];
    const filteredDiaries = query
        ? diaries.filter(
              (d) =>
                  d.title.toLowerCase().includes(query) ||
                  d.excerpt.toLowerCase().includes(query) ||
                  d.tags.some((tag) => tag.toLowerCase().includes(query))
          )
        : [];

    // 扁平化的搜索结果（用于键盘导航）
    const results = [
        ...filteredDiaries.map((d) => ({
            to: `/diary/${d.id}`,
            title: d.title,
            excerpt: d.excerpt
        })),
        ...filteredArticles.map((a) => ({
            to: `/article/${a.id}`,
            title: a.title,
            excerpt: a.excerpt
        }))
    ];
    const resultsRef = useRef(results);
    const activeRef = useRef(activeIndex);
    useEffect(() => {
        resultsRef.current = results;
    });
    useEffect(() => {
        activeRef.current = activeIndex;
    });

    // 搜索键盘导航：ESC 关闭 / ↑↓ 选择 / ⏎ 打开
    useEffect(() => {
        if (!isSearchOpen) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setIsSearchOpen(false);
                return;
            }
            const items = resultsRef.current;
            if (items.length === 0) return;
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setActiveIndex((i) => Math.min(i + 1, items.length - 1));
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setActiveIndex((i) => Math.max(i - 1, 0));
            } else if (e.key === 'Enter') {
                e.preventDefault();
                const target = items[activeRef.current];
                if (target) {
                    setIsSearchOpen(false);
                    setSearchQuery('');
                    navigate(target.to);
                }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [isSearchOpen, navigate]);

    // 查询变化时重置选中项（在 onChange 中处理）

    // 选中项滚入可视区域
    useEffect(() => {
        activeRowRef.current?.scrollIntoView({block: 'nearest'});
    }, [activeIndex]);

    const iconBtn =
        'flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)] cursor-pointer';

    const renderSearchResults = () => {
        if (!query) {
            return (
                <div className="py-14 text-center eyebrow text-mute">
                    {t('navigation.startTypingToSearch')}
                </div>
            );
        }
        if (filteredDiaries.length === 0 && filteredArticles.length === 0) {
            return (
                <div className="py-14 text-center">
                    <p className="text-sm font-medium">{t('navigation.noArticlesFound')}</p>
                    <p className="mt-1 eyebrow text-mute">{t('navigation.tryADifferentSearchTerm')}</p>
                </div>
            );
        }
        return (
            <div className="space-y-6">
                {filteredDiaries.length > 0 && (
                    <div>
                        <h4 className="eyebrow mb-1 px-1 text-mute">{t('navigation.diaries')}</h4>
                        <div className="h-rule"/>
                        {filteredDiaries.map((diary, diaryIndex) => {
                            const active = diaryIndex === activeIndex;
                            return (
                                <Link
                                    key={`d-${diary.id}`}
                                    prefetch="intent"
                                    to={`/diary/${diary.id}`}
                                    ref={active ? (el) => {
                                        activeRowRef.current = el;
                                    } : undefined}
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    }}
                                    className={`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${
                                        active ? 'bg-soft' : ''
                                    }`}
                                >
                                    <div className="min-w-0">
                                        <p className={`truncate font-display text-base font-medium ${
                                            active ? 'text-[var(--accent)]' : ''
                                        }`}>
                                            {diary.title}
                                        </p>
                                        <p className="mt-0.5 line-clamp-1 text-xs text-mute">{diary.excerpt}</p>
                                    </div>
                                    <RiArrowRightUpLine
                                        size={16}
                                        className="mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                )}
                {filteredArticles.length > 0 && (
                    <div>
                        <h4 className="eyebrow mb-1 px-1 text-mute">{t('navigation.articles')}</h4>
                        <div className="h-rule"/>
                        {filteredArticles.map((article, articleIndex) => {
                            const active = filteredDiaries.length + articleIndex === activeIndex;
                            return (
                                <Link
                                    key={`a-${article.id}`}
                                    prefetch="intent"
                                    to={`/article/${article.id}`}
                                    ref={active ? (el) => {
                                        activeRowRef.current = el;
                                    } : undefined}
                                    onClick={() => {
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                    }}
                                    className={`group flex items-start justify-between gap-3 border-b border-line px-1 py-3 transition-colors ${
                                        active ? 'bg-soft' : ''
                                    }`}
                                >
                                    <div className="min-w-0">
                                        <p className={`truncate font-display text-base font-medium ${
                                            active ? 'text-[var(--accent)]' : ''
                                        }`}>
                                            {article.title}
                                        </p>
                                        <p className="mt-0.5 line-clamp-1 text-xs text-mute">{article.excerpt}</p>
                                    </div>
                                    <RiArrowRightUpLine
                                        size={16}
                                        className="mt-1 shrink-0 text-mute transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            <header
                className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
                    scrolled ? 'border-b border-line bg-[var(--paper)]/90 backdrop-blur-md' : 'border-b border-transparent'
                }`}
            >
                <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 md:px-8">
                    {/* Logo */}
                    <Link
                        to="/home"
                        onClick={(e) => handleNavClick(e, 'home')}
                        className="font-display text-xl font-semibold tracking-tight transition-colors duration-200 hover:text-[var(--accent)]"
                    >
                        Aitenry<span className="text-accent">.</span>
                    </Link>

                    {/* 桌面导航 */}
                    <div className="hidden items-center gap-5 md:flex lg:gap-7">
                        {sections.map((section, index) => {
                            const active = activeSection === section;
                            return (
                                <Link
                                    key={section}
                                    to={`/${section}`}
                                    onClick={(e) => handleNavClick(e, section)}
                                    className={`eyebrow link-underline transition-colors duration-200 ${
                                        active ? 'text-accent' : 'text-mute hover:text-ink'
                                    }`}
                                >
                                    <span className="mr-1 opacity-60">0{index + 1}</span>
                                    {t(`navigation.${section}`)}
                                </Link>
                            );
                        })}
                    </div>

                    {/* 右侧操作区 */}
                    <div className="flex items-center gap-2">
                        <button onClick={() => setIsSearchOpen(true)} aria-label={t('navigation.search')}
                                className={iconBtn}>
                            <RiSearchLine size={16}/>
                        </button>
                        <button onClick={onToggleTheme}
                                aria-label={t('navigation.toggleTheme')}
                                className={`${iconBtn} hidden sm:flex`}>
                            {isDarkMode ? <RiSunLine size={16}/> : <RiMoonLine size={16}/>}
                        </button>
                        <a
                            href="https://github.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className={`${iconBtn} hidden lg:flex`}
                        >
                            <RiGithubFill size={16}/>
                        </a>
                        <a
                            href="https://gitee.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Gitee"
                            className={`${iconBtn} hidden lg:flex`}
                        >
                            <RiGiteeFill size={16}/>
                        </a>
                        <button
                            onClick={() => setIsMobileOpen((v) => !v)}
                            aria-label="menu"
                            className={`${iconBtn} md:hidden`}
                        >
                            {isMobileOpen ? <RiCloseLine size={17}/> : <RiMenu4Line size={17}/>}
                        </button>
                    </div>
                </nav>
            </header>

            {/* 移动端全屏菜单 */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        initial={{opacity: 0, y: -12}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -12}}
                        transition={{duration: 0.25, ease: 'easeOut'}}
                        className="fixed inset-0 z-50 bg-[var(--paper)] md:hidden"
                    >
                        {/* 关闭按钮（与导航栏汉堡按钮同位，菜单盖住导航后仍可关闭） */}
                        <button
                            onClick={() => setIsMobileOpen(false)}
                            aria-label="close menu"
                            className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                        >
                            <RiCloseLine size={17}/>
                        </button>
                        <div className="flex h-full flex-col overflow-y-auto px-6 pb-10 pt-24">
                            {sections.map((section, index) => (
                                <motion.div
                                    key={section}
                                    initial={{opacity: 0, y: 14}}
                                    animate={{opacity: 1, y: 0}}
                                    transition={{delay: 0.06 * index, duration: 0.35}}
                                    className="border-b border-line"
                                >
                                    <Link
                                        to={`/${section}`}
                                        onClick={(e) => {
                                            handleNavClick(e, section);
                                            setIsMobileOpen(false);
                                        }}
                                        className="flex items-baseline gap-4 py-5"
                                    >
                                        <span className="eyebrow text-accent">0{index + 1}</span>
                                        <span className="font-display text-4xl font-semibold">
                                            {t(`navigation.${section}`)}
                                        </span>
                                    </Link>
                                </motion.div>
                            ))}
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{delay: 0.25}}
                                className="mt-auto flex items-center justify-between"
                            >
                                <div className="flex gap-3">
                                    <a href="https://github.com/Aitenry" target="_blank" rel="noopener noreferrer"
                                       aria-label="GitHub"
                                       className="flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                                        <RiGithubFill size={19}/>
                                    </a>
                                    <a href="https://gitee.com/Aitenry" target="_blank" rel="noopener noreferrer"
                                       aria-label="Gitee"
                                       className="flex h-11 w-11 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]">
                                        <RiGiteeFill size={19}/>
                                    </a>
                                </div>
                                <button
                                    onClick={onToggleTheme}
                                    className="eyebrow flex h-11 items-center gap-2 border border-line px-4 text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    {isDarkMode ? <RiSunLine size={16}/> : <RiMoonLine size={16}/>}
                                    {t('navigation.toggleTheme')}
                                </button>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* 搜索弹层 */}
            <AnimatePresence>
                {isSearchOpen && (
                    <motion.div
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.18}}
                        className="fixed inset-0 z-50 bg-[var(--paper)]/70 backdrop-blur-sm"
                        onClick={() => setIsSearchOpen(false)}
                    >
                        <motion.div
                            initial={{opacity: 0, y: -14}}
                            animate={{opacity: 1, y: 0}}
                            exit={{opacity: 0, y: -14}}
                            transition={{duration: 0.25, ease: 'easeOut'}}
                            className="mx-auto mt-24 w-[calc(100%-2rem)] max-w-2xl border border-line bg-[var(--paper)] p-6 shadow-[8px_8px_0_0_var(--ink)] sm:p-8"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="flex items-center justify-between">
                                <span className="eyebrow text-accent">{t('navigation.search')}</span>
                                <button
                                    onClick={() => setIsSearchOpen(false)}
                                    aria-label="close"
                                    className="flex h-8 w-8 items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    <RiCloseLine size={16}/>
                                </button>
                            </div>
                            <div className="mt-5 flex items-center gap-3 border-b-2 border-[var(--ink)] pb-3">
                                <RiSearch2Line size={18} className="text-mute"/>
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => {
                                        setSearchQuery(e.target.value);
                                        setActiveIndex(0);
                                    }}
                                    placeholder={t('navigation.typeToSearch')}
                                    className="h-9 flex-1 bg-transparent font-mono text-base text-ink placeholder:text-mute focus:outline-none"
                                />
                                <kbd className="hidden border border-line px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-widest text-mute sm:block">
                                    esc
                                </kbd>
                            </div>
                            <div className="nice-scroll mt-4 max-h-[52vh] overflow-y-auto">
                                {renderSearchResults()}
                            </div>
                            <p className="eyebrow mt-4 border-t border-line pt-3 text-mute">
                                {t('navigation.kbdHint')}
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navigation;
