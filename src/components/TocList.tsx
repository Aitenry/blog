// components/TocList.tsx — 目录列表（侧边栏 / 抽屉共用：点击平滑定位）
import type {FC, MouseEvent} from 'react';
import type {TocItem} from '../utils/content';

interface TocListProps {
    items: TocItem[];
    activeId: string;
    onNavigate?: () => void;
    className?: string;
}

const TocList: FC<TocListProps> = ({items, activeId, onNavigate, className = ''}) => {
    const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        onNavigate?.();
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
    };

    return (
        <ul className={`border-l border-line ${className}`}>
            {items.map((item, index) => (
                <li key={item.id}>
                    <a
                        href={`#${item.id}`}
                        onClick={(e) => handleClick(e, item.id)}
                        className={`group flex items-baseline gap-3 border-l-2 py-1.5 pl-4 text-sm leading-snug transition-all duration-200 ${
                            item.level === 3 ? 'pl-8' : ''
                        } ${
                            activeId === item.id
                                ? '-ml-0.5 border-[var(--accent)] font-medium text-[var(--accent)]'
                                : 'border-transparent text-mute hover:text-ink'
                        }`}
                    >
                        <span className="font-mono text-[10px] opacity-60">
                            {String(index + 1).padStart(2, '0')}
                        </span>
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default TocList;
