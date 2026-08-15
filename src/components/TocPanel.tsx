// components/TocPanel.tsx — 固定可折叠目录面板（全端统一浮动样式）
// 与桌面端一致：顶部对齐、内容自适应高度（超高内部滚动）、无遮罩，底部让出回到顶部按钮
import {AnimatePresence, motion, useMotionValueEvent, useScroll} from 'framer-motion';
import {RiCloseLine} from '@remixicon/react';
import {useEffect, useState, type FC} from 'react';
import {useTranslation} from 'react-i18next';
import TocList from './TocList';
import type {TocItem} from '../utils/content';

interface TocPanelProps {
    items: TocItem[];
    activeId: string;
}

const TocPanel: FC<TocPanelProps> = ({items, activeId}) => {
    const {t} = useTranslation();
    const [open, setOpen] = useState(false);
    // 面板是否仍在屏幕上（含退场动画期间，用于延迟标签按钮出现）
    const [panelVisible, setPanelVisible] = useState(false);
    // 回到顶部按钮是否可见（阈值与 BackToTop 一致）：可见时才收缩面板底部高度
    const [showBackToTop, setShowBackToTop] = useState(false);
    const {scrollY, scrollYProgress} = useScroll();
    const [pct, setPct] = useState(0);

    useMotionValueEvent(scrollYProgress, 'change', (v) => {
        setPct(Math.min(100, Math.max(0, Math.round(v * 100))));
    });

    useMotionValueEvent(scrollY, 'change', (v) => {
        setShowBackToTop(v > 480);
    });

    const openPanel = () => {
        setPanelVisible(true);
        setOpen(true);
    };

    // ESC 收起
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open]);

    return (
        <>
            {/* 右缘折叠标签（面板退场动画结束后才重新出现） */}
            {!panelVisible && (
                <button
                    onClick={openPanel}
                    aria-expanded={open}
                    aria-label={t('common.tableOfContents')}
                    title={t('common.tableOfContents')}
                    className="fixed right-0 top-1/2 z-40 -translate-y-1/2 cursor-pointer border border-r-0 border-line bg-[var(--paper)] px-1.5 py-5 text-[var(--accent)] transition-colors duration-200 hover:bg-soft"
                >
                    <span className="eyebrow" style={{writingMode: 'vertical-rl'}}>
                        {t('common.tableOfContents')}
                    </span>
                </button>
            )}

            {/* 浮动面板（全端一致） */}
            <AnimatePresence onExitComplete={() => setPanelVisible(false)}>
                {open && (
                    <motion.div
                        initial={{x: '100%'}}
                        animate={{x: 0}}
                        exit={{x: '100%'}}
                        transition={{type: 'spring', stiffness: 300, damping: 32}}
                        className={`fixed right-0 top-24 z-50 flex w-64 max-w-[85vw] flex-col border border-line bg-[var(--paper)] transition-[max-height] duration-300 ${
                            showBackToTop ? 'max-h-[calc(100vh-12rem)]' : 'max-h-[calc(100vh-8rem)]'
                        }`}
                    >
                        {/* 头部 */}
                        <div className="flex items-center justify-between border-b border-line px-5 py-4">
                            <p className="eyebrow text-accent">
                                {t('common.tableOfContents')}
                                <span className="ml-2 text-mute">
                                    / {String(items.length).padStart(2, '0')}
                                </span>
                            </p>
                            <button
                                onClick={() => setOpen(false)}
                                aria-label="close"
                                className="flex h-8 w-8 cursor-pointer items-center justify-center border border-line text-mute transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                            >
                                <RiCloseLine size={15}/>
                            </button>
                        </div>

                        {/* 列表（超高时内部滚动） */}
                        <div className="nice-scroll min-h-0 flex-1 overflow-y-auto px-5 py-4">
                            <TocList items={items} activeId={activeId}/>
                        </div>

                        {/* 阅读进度 */}
                        <div className="border-t border-line px-5 py-4">
                            <div className="flex items-baseline justify-between gap-3">
                                <span className="eyebrow text-mute">{t('common.reading')}</span>
                                <span className="font-mono text-sm tabular-nums text-accent">
                                    {String(pct).padStart(2, '0')}%
                                </span>
                            </div>
                            <div className="mt-2.5 h-[2px] bg-[var(--line)]">
                                <div
                                    className="h-full bg-[var(--accent)] transition-[width] duration-150"
                                    style={{width: `${pct}%`}}
                                />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default TocPanel;
