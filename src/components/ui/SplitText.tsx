// ui/SplitText.tsx — React Bits SplitText 改编：标题逐字上浮显现（framer-motion 实现，无需 gsap）
import {motion} from 'framer-motion';
import type {FC} from 'react';
import {EASE} from './Reveal';

interface SplitTextProps {
    text: string;
    className?: string;
    /** 每个字之间的间隔（秒） */
    stagger?: number;
    /** 整体延迟（秒） */
    delay?: number;
}

const SplitText: FC<SplitTextProps> = ({text, className = '', stagger = 0.045, delay = 0}) => {
    const chars = text.split('');

    return (
        <span className={className} aria-label={text} role="text">
            {chars.map((char, index) => (
                <motion.span
                    key={`${char}-${index}`}
                    aria-hidden="true"
                    initial={{opacity: 0, y: 28}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true, margin: '-80px'}}
                    transition={{duration: 0.65, delay: delay + index * stagger, ease: EASE}}
                    className="inline-block whitespace-pre"
                >
                    {char}
                </motion.span>
            ))}
        </span>
    );
};

export default SplitText;
