// pages/PhotosPage.tsx
import {useTranslation} from 'react-i18next';
import PhotoGallery from '../components/PhotoGallery';
import {usePageTitle} from '../hooks/usePageTitle';

const PhotosPage: React.FC = () => {
    const {t} = useTranslation();
    usePageTitle(t('photos.title'));

    return (
        <div className="relative min-h-screen">
            <PhotoGallery/>
        </div>
    );
};

export default PhotosPage;
