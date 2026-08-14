// components/Footer.tsx — 编辑风格页脚：大号衬线致谢 + 链接索引
import {RiGiteeFill, RiGithubFill} from '@remixicon/react';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const sections = ['home', 'diaries', 'articles'] as const;

const Footer: React.FC = () => {
    const {t} = useTranslation();
    const year = new Date().getFullYear();

    return (
        <footer className="relative z-10 border-t border-line">
            {/* 致谢 */}
            <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:px-8">
                <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
                    <div>
                        <p className="eyebrow text-accent">/ {t('footer.eyebrow')}</p>
                        <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight sm:text-6xl">
                            {t('footer.closing')}
                        </h2>
                    </div>
                    <div className="flex flex-col gap-4 md:items-end">
                        <div className="flex gap-3">
                            <a
                                href="https://github.com/Aitenry"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]"
                            >
                                <RiGithubFill size={19}/>
                            </a>
                            <a
                                href="https://gitee.com/Aitenry"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Gitee"
                                className="flex h-11 w-11 items-center justify-center border border-line text-mute transition-all duration-200 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]"
                            >
                                <RiGiteeFill size={19}/>
                            </a>
                        </div>
                        <nav className="flex gap-6">
                            {sections.map((section) => (
                                <Link
                                    key={section}
                                    to={`/${section}`}
                                    className="eyebrow link-underline text-mute transition-colors hover:text-ink"
                                >
                                    {t(`navigation.${section}`)}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>

            {/* 版权条 */}
            <div className="border-t border-line">
                <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 sm:flex-row sm:px-6 md:px-8">
                    <p className="eyebrow text-mute">© {year} Aitenry · {t('footer.rights')}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
