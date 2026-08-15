// ui/SectionTitle.tsx — 区块标题：编号标签 + 衬线大标题
import Eyebrow from './Eyebrow';
import SplitText from './SplitText';
import type {FC, ReactNode} from 'react';

interface SectionTitleProps {
    index: number;
    label: string;
    title: string;
    extra?: ReactNode;
    className?: string;
    /** 标题启用逐字上浮动画（React Bits SplitText） */
    animateTitle?: boolean;
}

const SectionTitle: FC<SectionTitleProps> = ({index, label, title, extra, className = '', animateTitle = false}) => {
    return (
        <div className={`flex items-end justify-between gap-6 ${className}`}>
            <div>
                <Eyebrow>
                    {String(index).padStart(2, '0')} — {label}
                </Eyebrow>
                <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-5xl">
                    {animateTitle ? <SplitText text={title}/> : title}
                </h2>
            </div>
            {extra && <div className="hidden pb-2 sm:block">{extra}</div>}
        </div>
    );
};

export default SectionTitle;
