import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import SnowBackground from '../components/SnowBackground';
import React from "react";

interface HomePageProps {
    isDarkMode: boolean;
    scrollToNextSection: () => void;
}

const HomePage: React.FC<HomePageProps> = ({ isDarkMode, scrollToNextSection }) => {
    return (
        <>
            <SnowBackground isDarkMode={isDarkMode} />
            <div className="relative z-10">
                <HomeSection
                    isDarkMode={isDarkMode}
                    scrollToNextSection={scrollToNextSection}
                />
                <AboutSection isDarkMode={isDarkMode} />
                <SkillsSection isDarkMode={isDarkMode} />
                <ProjectsSection isDarkMode={isDarkMode} />
            </div>
        </>
    );
};

export default HomePage;
