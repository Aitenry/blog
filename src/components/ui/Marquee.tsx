// ui/Marquee.tsx — 斜向跑马灯彩带
import type {FC} from 'react';

interface MarqueeProps {
    items: string[];
    className?: string;
}

const Marquee: FC<MarqueeProps> = ({items, className = ''}) => {
    const track = (
        <div className="marquee-track items-center">
            {[...items, ...items].map((item, index) => (
                <span key={index} className="mx-6 inline-flex items-center gap-6 whitespace-nowrap">
                    {item}
                    <span aria-hidden className="text-[0.6em]">✦</span>
                </span>
            ))}
        </div>
    );

    return (
        <div
            aria-hidden
            className={`marquee overflow-hidden border-y border-[var(--accent)] bg-accent py-3 text-[var(--accent-ink)] ${className}`}
        >
            <div className="eyebrow font-semibold">{track}</div>
        </div>
    );
};

export default Marquee;
