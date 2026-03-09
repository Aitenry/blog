// app.ts
import React from "react";

export interface SectionProps {
    isDarkMode: boolean;
    activeSection?: string; // 可选，因为并非所有section都需要它
}

export interface NavProps {
    activeSection: string;
    isDarkMode: boolean;
    handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}