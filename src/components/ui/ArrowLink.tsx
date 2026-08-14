// ui/ArrowLink.tsx — 下划线链接 + 箭头
import {RiArrowRightLine} from '@remixicon/react';
import type {FC, ReactNode} from 'react';

interface ArrowLinkProps {
    children: ReactNode;
    href: string;
    className?: string;
    external?: boolean;
}

const ArrowLink: FC<ArrowLinkProps> = ({children, href, className = '', external = false}) => {
    return (
        <a
            href={href}
            {...(external ? {target: '_blank', rel: 'noopener noreferrer'} : {})}
            className={`group link-underline inline-flex items-center gap-1.5 text-sm font-medium ${className}`}
        >
            {children}
            <RiArrowRightLine
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
            />
        </a>
    );
};

export default ArrowLink;
