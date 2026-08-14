// App.tsx
import {lazy, Suspense, useCallback, useEffect, useState} from 'react';
import {useScroll, useSpring} from 'framer-motion';
import {BrowserRouter, Navigate, Outlet, Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import NoiseOverlay from './components/ui/NoiseOverlay';
import HomePage from './pages/HomePage';
import ArticlesPage from './pages/ArticlesPage';
import DiariesPage from './pages/DiariesPage';
import NotFoundPage from './pages/NotFoundPage';
import type {NavProps} from './types/app.ts';

// 懒加载 markdown 重页面，按需加载渲染管线
const ArticlePage = lazy(() => import('./pages/ArticlePage'));
const DiaryPage = lazy(() => import('./pages/DiaryPage'));

const PageFallback = () => (
    <div className="flex min-h-[60vh] items-center justify-center">
        <p className="eyebrow text-mute">
            LOADING
            <span className="blink ml-1 inline-block h-3 w-2 translate-y-0.5 bg-[var(--accent)]"/>
        </p>
    </div>
);

const getInitialTheme = (): boolean => {
    try {
        const stored = localStorage.getItem('blog-theme');
        if (stored === 'light') return false;
        if (stored === 'dark') return true;
    } catch {
        /* ignore */
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
};

const AppContent = () => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);
    const {t} = useTranslation();
    const location = useLocation();
    const navigate = useNavigate();
    const {scrollYProgress} = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    let activeSection = '';
    if (location.pathname === '/home') {
        activeSection = 'home';
    } else if (location.pathname === '/diaries' || location.pathname.startsWith('/diary/')) {
        activeSection = 'diaries';
    } else if (location.pathname === '/articles' || location.pathname.startsWith('/article/')) {
        activeSection = 'articles';
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    // 主题色同步到浏览器地址栏
    useEffect(() => {
        const meta = document.querySelector('meta[name="theme-color"]');
        meta?.setAttribute('content', isDarkMode ? '#14120E' : '#F3F0E9');
    }, [isDarkMode]);

    const toggleTheme = useCallback(() => {
        setIsDarkMode((prev) => {
            const next = !prev;
            try {
                localStorage.setItem('blog-theme', next ? 'dark' : 'light');
            } catch {
                /* ignore */
            }
            return next;
        });
    }, []);

    const scrollToNextSection = () => {
        document.getElementById('about')?.scrollIntoView({behavior: 'smooth'});
    };

    const handleNavClick: NavProps['handleNavClick'] = (e, sectionId) => {
        e.preventDefault();

        if (sectionId === 'home') {
            navigate('/home');
        } else if (sectionId === 'diaries') {
            navigate('/diaries');
        } else if (sectionId === 'articles') {
            navigate('/articles');
        }
    };

    return (
        <div
            data-theme={isDarkMode ? 'dark' : 'light'}
            className="font-sans relative min-h-screen overflow-x-clip bg-[var(--paper)] text-ink transition-colors duration-300"
        >
            <NoiseOverlay/>
            <Routes>
                {/* 根路径 → 首页 */}
                <Route path="/" element={<Navigate to="/home" replace/>}/>

                {/* 带应用外壳的页面：顶部栏 + 页脚 */}
                <Route
                    element={
                        <>
                            {/* 无障碍：跳转到主内容 */}
                            <a
                                href="#main"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const main = document.getElementById('main');
                                    main?.focus();
                                    main?.scrollIntoView();
                                }}
                                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[80] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-paper"
                            >
                                {t('navigation.skip')}
                            </a>
                            <ProgressBar scaleX={scaleX}/>
                            <Navigation
                                activeSection={activeSection}
                                isDarkMode={isDarkMode}
                                onToggleTheme={toggleTheme}
                                handleNavClick={handleNavClick}
                            />
                            <main id="main" tabIndex={-1} className="relative z-10 pt-16 focus:outline-none">
                                <Suspense fallback={<PageFallback/>}>
                                    <Outlet/>
                                </Suspense>
                            </main>
                            <Footer/>
                            <BackToTop/>
                        </>
                    }
                >
                    <Route path="/home"
                           element={<HomePage isDarkMode={isDarkMode} scrollToNextSection={scrollToNextSection}/>}/>
                    <Route path="/articles" element={<ArticlesPage/>}/>
                    <Route path="/article/:id" element={<ArticlePage/>}/>
                    <Route path="/diaries" element={<DiariesPage/>}/>
                    <Route path="/diary/:id" element={<DiaryPage/>}/>
                </Route>

                {/* 独立 404：无顶部栏、无页脚 */}
                <Route path="*" element={<NotFoundPage/>}/>
            </Routes>
        </div>
    );
};

const App = () => {
    return (
        <BrowserRouter>
            <AppContent/>
        </BrowserRouter>
    );
};

export default App;
