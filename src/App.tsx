// App.tsx
import { useState, useEffect } from 'react';
import {useScroll, useSpring} from 'framer-motion';
import Navigation from './components/Navigation';
import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import ProgressBar from './components/ProgressBar';
import SnowBackground from './components/SnowBackground'; // 新增雪花背景组件
import type {NavProps} from './types/app.ts';

const App = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isDarkMode, setIsDarkMode] = useState(false);
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // 监听系统主题变化
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

    const handleScroll = () => {
        const sections = ['home', 'about', 'skills', 'projects'];
        const scrollPosition = window.scrollY + window.innerHeight / 3;

        for (let i = 0; i < sections.length; i++) {
            const element = document.getElementById(sections[i]);
            if (element) {
                const elementTop = element.offsetTop;
                const elementBottom = elementTop + element.clientHeight;

                if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
                    setActiveSection(sections[i]);
                    return;
                }
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
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
        const targetElement = document.getElementById(sectionId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`font-sans relative min-h-screen ${isDarkMode ? 'bg-black text-white' : 'bg-white text-gray-800'}`}>
            {/* 雪花背景 */}
            <SnowBackground isDarkMode={isDarkMode} />

            {/* 所有UI元素放在同一个层级，确保正确的z-index顺序 */}
            <ProgressBar scaleX={scaleX} isDarkMode={isDarkMode} />
            <Navigation
                activeSection={activeSection}
                isDarkMode={isDarkMode}
                handleNavClick={handleNavClick}
            />

            {/* 内容区域 */}
            <div className="relative z-10">
                <HomeSection
                    isDarkMode={isDarkMode}
                    scrollToNextSection={scrollToNextSection}
                />

                <AboutSection isDarkMode={isDarkMode} />

                <SkillsSection isDarkMode={isDarkMode} />

                <ProjectsSection isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default App;