// ui/SectionTitle.tsx — 区块标题：编号标签 + 衬线大标题
import Eyebrow from './Eyebrow';
import type {FC, ReactNode} from 'react';

interface SectionTitleProps {
    index: number;
    label: string;
    title: string;
    extra?: ReactNode;
    className?: string;
}

const SectionTitle: FC<SectionTitleProps> = ({index, label, title, extra, className = ''}) => {
    return (
        <div className={`flex items-end justify-between gap-6 ${className}`}>
            <div>
                <Eyebrow>
                    {String(index).padStart(2, '0')} — {label}
                </Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                    {title}
                </h2>
            </div>
            {extra && <div className="hidden pb-2 sm:block">{extra}</div>}
        </div>
    );
};

export default SectionTitle;
