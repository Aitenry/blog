// HomeSection.tsx
import { motion } from 'framer-motion';
import type {SectionProps} from '../types/app.ts';
import React from "react";

interface HomeSectionProps extends SectionProps {
    scrollToNextSection: () => void;
}

const HomeSection: React.FC<HomeSectionProps> = ({
                                                     isDarkMode,
                                                     scrollToNextSection
                                                 }) => {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-col items-center justify-center pt-16 sm:pt-20 md:pt-24 px-4 sm:px-6 lg:px-8 relative"
        >
            <div className="max-w-4xl w-full mx-auto text-center flex-grow flex flex-col justify-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 ${
                        isDarkMode ? 'text-white' : 'text-gray-900'
                    } leading-tight`}
                >
                    Full-stack Developer
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className={`text-lg sm:text-xl md:text-2xl ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                    } max-w-2xl lg:max-w-3xl mx-auto mb-8`}
                >
                    Building intelligent information systems and AI-powered tools
                </motion.p>

                {/* 可选：添加副标题或描述，移动端隐藏 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="hidden md:block"
                >
                    <p className={`text-base ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        Creating innovative solutions at the intersection of AI and web technologies
                    </p>
                </motion.div>
            </div>

            {/* Scroll Indicator - Responsive positioning */}
            <motion.div
                onClick={scrollToNextSection}
                className="cursor-pointer absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-20"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                whileTap={{ scale: 0.95 }}
                whileHover={{ y: 5 }}
            >
                <motion.svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-5 sm:w-6 h-8 sm:h-10 ${
                        isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}
                    animate={{
                        y: [0, 5, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        repeatDelay: 0.5,
                    }}
                >
                    <path
                        d="M5 9L12 16L19 9"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </motion.svg>
            </motion.div>
        </section>
    );
};

export default HomeSection;