// pages/ReadingPage.tsx
import {useTranslation} from 'react-i18next';
import ReadingList from '../components/ReadingList';
import {usePageTitle} from '../hooks/usePageTitle';

const ReadingPage: React.FC = () => {
    const {t} = useTranslation();
    usePageTitle(t('reading.title'));

    return (
        <div className="relative min-h-screen">
            <ReadingList/>
        </div>
    );
};

export default ReadingPage;
