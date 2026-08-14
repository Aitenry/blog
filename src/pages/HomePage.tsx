// pages/HomePage.tsx
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import Marquee from '../components/ui/Marquee';
import {useTranslation} from 'react-i18next';

interface HomePageProps {
    isDarkMode: boolean;
    scrollToNextSection: () => void;
}

const HomePage: React.FC<HomePageProps> = ({isDarkMode, scrollToNextSection}) => {
    const {t} = useTranslation();
    const marqueeItems = t('home.marquee', {returnObjects: true}) as string[];

    return (
        <>
            <HomeSection scrollToNextSection={scrollToNextSection}/>
            {/* 斜向跑马灯彩带 */}
            <div className="relative z-10 -mx-2 rotate-[-1.2deg] sm:mx-0">
                <Marquee items={marqueeItems}/>
            </div>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection isDarkMode={isDarkMode}/>
        </>
    );
};

export default HomePage;
