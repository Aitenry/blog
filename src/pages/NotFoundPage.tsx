// pages/NotFoundPage.tsx — 404 路由页
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import NotFoundBox from '../components/ui/NotFoundBox';
import {usePageTitle} from '../hooks/usePageTitle';

const NotFoundPage: React.FC = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    usePageTitle('404');

    return (
        <NotFoundBox
            code="404 — PAGE NOT FOUND"
            title={t('notFound.title')}
            desc={t('notFound.desc')}
            backLabel={t('notFound.back')}
            onBack={() => navigate('/home')}
        />
    );
};

export default NotFoundPage;
