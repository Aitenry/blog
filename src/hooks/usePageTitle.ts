// hooks/usePageTitle.ts — 按页面设置 document.title
import {useEffect} from 'react';
import {useTranslation} from 'react-i18next';

/** 设置页面标题；未传 title 时回落到站点默认标题 */
export const usePageTitle = (title?: string) => {
    const {t} = useTranslation();

    useEffect(() => {
        document.title = title ? `${title} — Aitenry` : t('siteTitle');
        return () => {
            document.title = t('siteTitle');
        };
    }, [title, t]);
};
