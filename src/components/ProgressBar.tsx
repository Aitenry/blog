// components/ProgressBar.tsx
import { motion, MotionValue } from 'framer-motion';
import React from "react";

interface ProgressBarProps {
    scaleX: MotionValue<number>; // 使用 MotionValue 类型
    isDarkMode: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ scaleX, isDarkMode }) => {
    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 h-0.5 z-50 ${isDarkMode ? 'bg-white' : 'bg-blue-600'}`}
            style={{ scaleX }}
        />
    );
};

export default ProgressBar;