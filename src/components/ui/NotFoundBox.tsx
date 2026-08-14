// components/ui/NotFoundBox.tsx — 编辑部风格 404 卡片
import {RiArrowLeftLine} from '@remixicon/react';
import type {FC} from 'react';

interface NotFoundBoxProps {
    code: string;
    title: string;
    desc: string;
    backLabel: string;
    onBack: () => void;
}

const NotFoundBox: FC<NotFoundBoxProps> = ({code, title, desc, backLabel, onBack}) => {
    return (
        <div className="relative flex min-h-[70vh] items-center justify-center px-4">
            <div className="w-full max-w-md border border-line bg-[var(--paper)] p-10 shadow-[8px_8px_0_0_var(--ink)]">
                <p className="eyebrow text-accent">{code}</p>
                <h1 className="mt-4 font-display text-4xl font-semibold">{title}</h1>
                <p className="mt-3 text-sm text-mute">{desc}</p>
                <button
                    onClick={onBack}
                    className="mt-8 inline-flex cursor-pointer items-center gap-2 border border-[var(--ink)] bg-ink px-5 py-2.5 text-sm font-semibold text-paper transition-colors duration-300 hover:border-[var(--accent)] hover:bg-accent hover:text-[var(--accent-ink)]"
                >
                    <RiArrowLeftLine size={15}/>
                    {backLabel}
                </button>
            </div>
        </div>
    );
};

export default NotFoundBox;
