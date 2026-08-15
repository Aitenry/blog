// ui/PhotoStrip.tsx — 编辑部胶片带：照片无缝横向滚动（复用站内 marquee 动画），
// 悬停暂停、点击打开灯箱。替换原先的 3D 旋转轮播（Carousel 风格过于花哨，类似
// React Bits 的 DriftWall，且拖拽释放后不吸附回位）。
import type {FC} from 'react';

export interface StripPhoto {
    src: string;
    alt: string;
    /** 题注（如 PET / 01） */
    caption: string;
    /** 副题注（如日期） */
    sub: string;
}

interface PhotoStripProps {
    items: StripPhoto[];
    /** 点击某张照片时回调（传真实 items 的索引） */
    onSelect?: (index: number) => void;
    /** 单张宽度 class（默认 w-64 sm:w-80） */
    cardClass?: string;
    /** 动画时长（秒），默认 42 */
    duration?: number;
}

const PhotoStrip: FC<PhotoStripProps> = ({items, onSelect, cardClass = 'w-64 sm:w-80', duration = 42}) => {
    if (items.length === 0) return null;

    // 渲染两份拷贝实现无缝循环（marquee 平移 -50% 后回到起点无跳变）
    const renderRow = (copy: 0 | 1) => (
        <div className="flex shrink-0" aria-hidden={copy === 1}>
            {items.map((photo, index) => (
                <button
                    key={`${copy}-${index}`}
                    onClick={() => onSelect?.(index)}
                    aria-label={photo.alt}
                    className={`group block shrink-0 cursor-pointer border-r border-line bg-[var(--paper)] text-left transition-colors duration-300 hover:bg-soft ${cardClass}`}
                >
                    <div className="aspect-[16/7] overflow-hidden border-b border-line">
                        <img
                            src={photo.src}
                            alt={photo.alt}
                            loading="lazy"
                            draggable={false}
                            className="h-full w-full object-cover select-none transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                    </div>
                    <div className="flex items-baseline justify-between gap-3 px-3 py-2.5 font-mono text-[10px] uppercase tracking-widest">
                        <span className="text-[var(--accent)]">{photo.caption}</span>
                        <span className="text-mute">{photo.sub}</span>
                    </div>
                </button>
            ))}
        </div>
    );

    return (
        <div className="marquee overflow-hidden border-y border-line">
            <div
                className="marquee-track"
                style={{animationDuration: `${duration}s`}}
            >
                {renderRow(0)}
                {renderRow(1)}
            </div>
        </div>
    );
};

export default PhotoStrip;
