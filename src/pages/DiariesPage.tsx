// pages/DiariesPage.tsx
import {useTranslation} from 'react-i18next';
import DiarySection from '../components/DiarySection';
import {usePageTitle} from '../hooks/usePageTitle';

const DiariesPage: React.FC = () => {
    const {t} = useTranslation();
    usePageTitle(t('diaries.title'));

    return (
        <div className="relative min-h-screen">
            <DiarySection/>
        </div>
    );
};

export default DiariesPage;
