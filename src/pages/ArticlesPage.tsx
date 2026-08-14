// pages/ArticlesPage.tsx
import {useTranslation} from 'react-i18next';
import ArticleSection from '../components/ArticleSection';
import {usePageTitle} from '../hooks/usePageTitle';

const ArticlesPage: React.FC = () => {
    const {t} = useTranslation();
    usePageTitle(t('articles.title'));

    return (
        <div className="relative min-h-screen">
            <ArticleSection/>
        </div>
    );
};

export default ArticlesPage;
