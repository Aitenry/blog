// pages/HomePage.tsx
import HomeSection from '../components/HomeSection';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import Marquee from '../components/ui/Marquee';
import {useTranslation} from 'react-i18next';

interface HomePageProps {
    isDarkMode: boolean;
}

const HomePage: React.FC<HomePageProps> = ({isDarkMode}) => {
    const {t} = useTranslation();
    const marqueeItems = t('home.marquee', {returnObjects: true}) as string[];

    return (
        <>
            <HomeSection/>
            {/* 斜向跑马灯彩带（负上边距上移，嵌入 Hero 底部） */}
            <div className="relative z-10 -mx-2 -mt-8 rotate-[-1.2deg] sm:mx-0 sm:-mt-10">
                <Marquee items={marqueeItems}/>
            </div>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection isDarkMode={isDarkMode}/>
        </>
    );
};

export default HomePage;
