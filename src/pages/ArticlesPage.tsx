import ArticleSection from '../components/ArticleSection';
import SnowBackground from '../components/SnowBackground';
import React from 'react';

interface ArticlesPageProps {
    isDarkMode: boolean;
}

const ArticlesPage: React.FC<ArticlesPageProps> = ({ isDarkMode }) => {
    return (
        <div className={`min-h-screen ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
            <SnowBackground isDarkMode={isDarkMode} />
            <div className="relative z-10">
                <ArticleSection isDarkMode={isDarkMode} />
            </div>
        </div>
    );
};

export default ArticlesPage;
