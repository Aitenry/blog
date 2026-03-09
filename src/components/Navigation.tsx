// Navigation.tsx
import { motion } from 'framer-motion';
import {
    RiGiteeFill,
    RiGithubFill,
    RiVerifiedBadgeFill
} from "@remixicon/react";
import type {NavProps} from '../types/app.ts';
import React from "react"; // 定义新的 NavProps 类型

const Navigation: React.FC<NavProps> = ({
                                            activeSection,
                                            isDarkMode,
                                            handleNavClick // 接收处理导航点击的函数
                                        }) => {
    const sections = ['home', 'about', 'skills', 'projects'];

    return (
        <>
            {/* Navigation */}
            <nav className={`fixed w-full ${isDarkMode ? 'bg-black/80' : 'bg-white/80'} backdrop-blur-sm z-40 py-4 px-6 md:px-12 ${isDarkMode ? 'border-b border-gray-800' : 'border-b border-gray-100'}`}>
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <motion.div
                        initial={{opacity: 0, x: -20}}
                        animate={{opacity: 1, x: 0}}
                        transition={{duration: 0.5}}
                        className={`text-xl font-bold ${isDarkMode ? 'text-white' : 'text-blue-700'}`}
                    >
                        Aitenry
                    </motion.div>

                    <div className="hidden md:flex space-x-8">
                        {sections.map((section) => (
                            <motion.a
                                key={section}
                                href={`#${section}`}
                                onClick={(e) => handleNavClick(e, section)} // 调用传入的函数
                                className={`capitalize font-medium relative py-2 ${
                                    activeSection === section
                                        ? isDarkMode
                                            ? 'text-white font-semibold'
                                            : 'text-blue-600 font-semibold'
                                        : isDarkMode
                                            ? 'text-gray-400 hover:text-white'
                                            : 'text-gray-600 hover:text-blue-500'
                                }`}
                            >
                                {section}
                                {activeSection === section && (
                                    <motion.div
                                        className={`absolute bottom-0 left-0 right-0 h-0.5 ${isDarkMode ? 'bg-white' : 'bg-blue-600'}`}
                                        layoutId="nav-indicator"
                                        initial={{opacity: 0}}
                                        animate={{opacity: 1}}
                                    />
                                )}
                            </motion.a>
                        ))}
                    </div>

                    <div className="flex items-center gap-1">

                        <motion.a
                            href="https://www.aitenry.cn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} font-medium block`}
                        >
                            <RiVerifiedBadgeFill size={24}/>
                        </motion.a>

                        <motion.a
                            href="https://github.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} font-medium block`}
                        >
                            <RiGithubFill size={24}/>
                        </motion.a>

                        <motion.a
                            href="https://gitee.com/Aitenry"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${isDarkMode ? 'hover:text-gray-300' : 'hover:text-gray-600'} font-medium block`}
                        >
                            <RiGiteeFill size={24}/>
                        </motion.a>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default Navigation;