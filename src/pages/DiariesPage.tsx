import DiarySection from '../components/DiarySection';
import SnowBackground from '../components/SnowBackground';
import React from 'react';

interface DiariesPageProps {
    isDarkMode: boolean;
}

const DiariesPage: React.FC<DiariesPageProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <SnowBackground isDarkMode={isDarkMode} />
            <div className="relative z-10">
                <DiarySection isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default DiariesPage;
