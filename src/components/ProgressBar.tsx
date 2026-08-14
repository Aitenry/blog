// components/ProgressBar.tsx — 细线滚动进度条
import {motion, type MotionValue} from 'framer-motion';

interface ProgressBarProps {
    scaleX: MotionValue<number>;
}

const ProgressBar: React.FC<ProgressBarProps> = ({scaleX}) => {
    return (
        <motion.div
            className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-[var(--accent)]"
            style={{scaleX}}
            aria-hidden
        />
    );
};

export default ProgressBar;
