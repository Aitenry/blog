// ui/Reveal.tsx — 滚动入场：克制的小幅上浮
import {motion} from 'framer-motion';
import type {FC, ReactNode} from 'react';

export const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

interface RevealProps {
    children: ReactNode;
    delay?: number;
    y?: number;
    className?: string;
}

const Reveal: FC<RevealProps> = ({children, delay = 0, y = 18, className = ''}) => {
    return (
        <motion.div
            initial={{opacity: 0, y}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-60px'}}
            transition={{duration: 0.6, delay, ease: EASE}}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default Reveal;
