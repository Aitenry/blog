// components/PhotoGallery.tsx — 相册：精选胶片带 + 统计行 + 类别筛选 + TiltedCard 照片网格 + 灯箱
// 动画组件均改编自 React Bits（TiltedCard / SplitText / CountUp），精选区为编辑部风格照片胶片带
// 灯箱通过 createPortal 挂到 document.body：<main> 的 relative z-10 会形成层叠上下文，
// 把灯箱的 z-[70] 锁在固定顶栏（z-40）之下，导致关闭按钮被顶栏盖住无法点击。
import {AnimatePresence, motion} from 'framer-motion';
import {RiArrowLeftSLine, RiArrowRightSLine, RiCloseLine} from '@remixicon/react';
import {useCallback, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {useTranslation} from 'react-i18next';
import {photos, type PhotoCategory} from '../data/photos';
import CountUp from './ui/CountUp';
import PhotoStrip from './ui/PhotoStrip';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import TiltedCard from './ui/TiltedCard';

type Filter = PhotoCategory | 'all';

const tagBtn = (active: boolean) =>
    `cursor-pointer border px-2.5 py-1 font-mono text-[11px] transition-colors duration-200 ${
        active
            ? 'border-[var(--accent)] bg-accent text-[var(--accent-ink)]'
            : 'border-line text-mute hover:border-[var(--accent)] hover:text-[var(--accent)]'
    }`;

const PhotoGallery: React.FC = () => {
    const {t} = useTranslation();
    const [filter, setFilter] = useState<Filter>('all');
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const visiblePhotos = filter === 'all' ? photos : photos.filter((p) => p.category === filter);

    const categoryLabel = (category: PhotoCategory) => t(`photos.${category}`);

    const closeLightbox = useCallback(() => setLightboxIndex(null), []);

    const step = useCallback(
        (delta: number) => {
            setLightboxIndex((prev) => {
                if (prev === null) return prev;
                return (prev + delta + visiblePhotos.length) % visiblePhotos.length;
            });
        },
        [visiblePhotos.length]
    );

    // 灯箱打开时锁定滚动 + 键盘导航
    useEffect(() => {
        if (lightboxIndex === null) return;
        document.body.style.overflow = 'hidden';
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            else if (e.key === 'ArrowLeft') step(-1);
            else if (e.key === 'ArrowRight') step(1);
        };
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [lightboxIndex, closeLightbox, step]);

    const current = lightboxIndex !== null ? visiblePhotos[lightboxIndex] : null;

    const stripItems = photos.map((photo) => ({
        src: photo.src,
        alt: `${categoryLabel(photo.category)}照片 ${String(photo.no).padStart(2, '0')}`,
        caption: `${categoryLabel(photo.category)} / ${String(photo.no).padStart(2, '0')}`,
        sub: photo.date
    }));

    const seriesCount = new Set(photos.map((p) => p.category)).size;

    return (
        <section className="relative px-4 py-16 sm:px-6 sm:py-24 md:px-8">
            <div className="mx-auto max-w-6xl">
                <SectionTitle
                    index={4}
                    label={t('photos.eyebrow')}
                    title={t('photos.title')}
                    animateTitle
                    extra={
                        <span className="font-mono text-sm text-mute">
                            {String(visiblePhotos.length).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
                        </span>
                    }
                />

                {/* 精选胶片带（编辑部风格，无缝滚动） */}
                <Reveal>
                    <div className="mt-10">
                        <div className="flex items-baseline justify-between border-b border-line pb-3">
                            <h3 className="eyebrow text-accent">// {t('photos.featured')}</h3>
                            <span className="font-mono text-[10px] uppercase tracking-widest text-mute">
                                {t('photos.autoplayHint')}
                            </span>
                        </div>
                        <PhotoStrip
                            items={stripItems}
                            onSelect={(index) => setLightboxIndex(index)}
                        />
                    </div>
                </Reveal>

                {/* 统计行 */}
                <Reveal>
                    <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 border-b border-line py-5 font-mono text-xs text-mute">
                        <span>
                            <CountUp value={photos.length} className="text-lg text-[var(--accent)]"/>
                            <span className="ml-1.5 uppercase tracking-widest">{t('photos.statPhotos')}</span>
                        </span>
                        <span>
                            <CountUp value={seriesCount} className="text-lg text-[var(--accent)]"/>
                            <span className="ml-1.5 uppercase tracking-widest">{t('photos.statSeries')}</span>
                        </span>
                        <span className="uppercase tracking-widest">
                            {t('photos.statShotOn')} {photos[0]?.date ?? ''}
                        </span>
                    </div>
                </Reveal>

                {/* 类别筛选 */}
                <Reveal>
                    <div className="mt-8 flex flex-wrap gap-2 border-b border-line pb-5">
                        <button onClick={() => setFilter('all')} className={tagBtn(filter === 'all')}>
                            {t('common.all')}
                        </button>
                        {(['travel', 'pet'] as const).map((category) => (
                            <button
                                key={category}
                                onClick={() => setFilter(category)}
                                className={tagBtn(filter === category)}
                            >
                                {t(`photos.${category}`)}
                            </button>
                        ))}
                    </div>
                </Reveal>

                {/* TiltedCard 照片网格（React Bits TiltedCard） */}
                <div className="mt-8 grid grid-cols-1 gap-px border border-line bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">
                    {visiblePhotos.map((photo, index) => (
                        <Reveal key={photo.no} delay={(index % 3) * 0.06}>
                            <div className="group bg-[var(--paper)] transition-colors duration-300 hover:bg-soft">
                                <TiltedCard
                                    imageSrc={photo.src}
                                    altText={`${categoryLabel(photo.category)}照片 ${String(photo.no).padStart(2, '0')}`}
                                    className="aspect-[16/7] cursor-pointer overflow-hidden border-b border-line"
                                    onClick={() => setLightboxIndex(index)}
                                    overlay={
                                        <span className="border border-[var(--accent)] bg-[var(--paper)]/90 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-[var(--accent)]">
                                            {t('photos.viewHint')} ↗
                                        </span>
                                    }
                                />
                                <div className="flex items-baseline justify-between gap-3 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest">
                                    <span className="text-mute transition-colors duration-300 group-hover:text-[var(--accent)]">
                                        {categoryLabel(photo.category)} / {String(photo.no).padStart(2, '0')}
                                    </span>
                                    <span className="text-mute">{photo.date}</span>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* 灯箱（portal 到 body，脱离 main 的层叠上下文） */}
            {createPortal(
                <AnimatePresence>
                    {current && lightboxIndex !== null && (
                        <motion.div
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            exit={{opacity: 0}}
                            transition={{duration: 0.2}}
                            className="fixed inset-0 z-[70] flex flex-col bg-[var(--paper)]/95 backdrop-blur-sm"
                            onClick={closeLightbox}
                            role="dialog"
                            aria-modal="true"
                            aria-label={t('photos.lightbox')}
                        >
                            {/* 顶部：计数 + 关闭 */}
                            <div className="flex items-center justify-between border-b border-line px-4 py-3 sm:px-6">
                                <span className="eyebrow text-accent">
                                    {String(lightboxIndex + 1).padStart(2, '0')} / {String(visiblePhotos.length).padStart(2, '0')}
                                </span>
                                <button
                                    onClick={closeLightbox}
                                    aria-label={t('photos.close')}
                                    className="flex h-9 w-9 items-center justify-center border border-line text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                                >
                                    <RiCloseLine size={17}/>
                                </button>
                            </div>

                            {/* 图片区 */}
                            <div className="relative flex min-h-0 flex-1 items-center justify-center px-4 sm:px-20">
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(-1);
                                    }}
                                    aria-label={t('photos.prev')}
                                    className="absolute left-2 z-10 flex h-10 w-10 items-center justify-center border border-line bg-[var(--paper)] text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:left-5"
                                >
                                    <RiArrowLeftSLine size={22}/>
                                </button>
                                <img
                                    src={current.src}
                                    alt={`${categoryLabel(current.category)}照片 ${String(current.no).padStart(2, '0')}`}
                                    className="max-h-[70vh] max-w-full border border-line bg-[var(--paper-soft)] object-contain"
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        step(1);
                                    }}
                                    aria-label={t('photos.next')}
                                    className="absolute right-2 z-10 flex h-10 w-10 items-center justify-center border border-line bg-[var(--paper)] text-mute transition-colors duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] sm:right-5"
                                >
                                    <RiArrowRightSLine size={22}/>
                                </button>
                            </div>

                            {/* 底部：题注 */}
                            <div className="border-t border-line px-4 py-3 sm:px-6">
                                <p className="font-mono text-[11px] uppercase tracking-widest text-mute">
                                    {categoryLabel(current.category)} / {String(current.no).padStart(2, '0')}
                                    <span className="mx-2 text-[var(--line)]">/</span>
                                    {current.date}
                                    <span className="mx-2 text-[var(--line)]">/</span>
                                    {t('photos.kbdHint')}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

export default PhotoGallery;
