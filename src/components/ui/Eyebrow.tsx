// ui/Eyebrow.tsx — 等宽编号标签：01 — 关于
import type {FC, ReactNode} from 'react';

interface EyebrowProps {
    children: ReactNode;
    className?: string;
}

const Eyebrow: FC<EyebrowProps> = ({children, className = ''}) => {
    return <span className={`eyebrow text-accent ${className}`}>{children}</span>;
};

export default Eyebrow;
