// App.tsx
import { useState, useEffect } from 'react';
import { useScroll, useSpring } from 'framer-motion';
import {HashRouter, Routes, Route, useLocation, useNavigate, Navigate} from 'react-router-dom';
import Navigation from './components/Navigation';
import ProgressBar from './components/ProgressBar';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import ArticlesPage from './pages/ArticlesPage';
import type { NavProps } from './types/app.ts';

const AppContent = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    let activeSection = '';
    if (location.pathname === '/home') {
        activeSection = 'home';
    } else if (location.pathname === '/articles') {
        activeSection = 'articles';
    }

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

        const handleChange = (e: MediaQueryListEvent) => {
            setIsDarkMode(e.matches);
        };

        const timer = setTimeout(() => {
            setIsDarkMode(mediaQuery.matches);
        }, 0);

        mediaQuery.addEventListener('change', handleChange);

        return () => {
            clearTimeout(timer);
            mediaQuery.removeEventListener('change', handleChange);
        };
    }, []);

    const scrollToNextSection = () => {
        const nextSection = document.getElementById('about');
        if (nextSection) {
            window.scrollTo({
                top: nextSection.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const handleNavClick: NavProps['handleNavClick'] = (e, sectionId) => {
        e.preventDefault();

        if (sectionId === 'home') {
            navigate('/home');
        } else if (sectionId === 'articles') {
            navigate('/articles');
        }
    };

    return (
        <div className={`font-sans relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
            <ProgressBar scaleX={scaleX} isDarkMode={isDarkMode} />
            <Navigation
                activeSection={activeSection}
                isDarkMode={isDarkMode}
                handleNavClick={handleNavClick}
            />
            <div className="relative z-10 pt-16">
                <Routes>
                    <Route path="/home" element={<HomePage isDarkMode={isDarkMode} scrollToNextSection={scrollToNextSection} />} />
                    <Route path="/articles" element={<ArticlesPage isDarkMode={isDarkMode} />} />
                    <Route path="/article/:id" element={<ArticlePage isDarkMode={isDarkMode} />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                </Routes>
            </div>
        </div>
    );
};

const App = () => {
    return (
        <HashRouter>
            <AppContent />
        </HashRouter>
    );
};

export default App;