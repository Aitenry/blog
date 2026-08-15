// pages/ToolsPage.tsx
import {useTranslation} from 'react-i18next';
import Toolbox from '../components/Toolbox';
import {usePageTitle} from '../hooks/usePageTitle';

const ToolsPage: React.FC = () => {
    const {t} = useTranslation();
    usePageTitle(t('tools.title'));

    return (
        <div className="relative min-h-screen">
            <Toolbox/>
        </div>
    );
};

export default ToolsPage;
