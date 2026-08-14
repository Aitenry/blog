import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import zh from './locales/zh';
import en from './locales/en';

const getBrowserLanguage = (): string => {
    const browserLang: string =
        navigator.language ||
        (navigator as unknown as {userLanguage?: string}).userLanguage ||
        'zh';
    if (browserLang.startsWith('zh')) {
        return 'zh';
    }
    return 'en';
};

i18n
    .use(initReactI18next)
    .init({
        resources: {
            zh: {translation: zh},
            en: {translation: en}
        },
        lng: getBrowserLanguage(),
        fallbackLng: 'zh',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
