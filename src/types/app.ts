// app.ts
import type React from "react";

export interface NavProps {
    activeSection: string;
    isDarkMode: boolean;
    onToggleTheme: () => void;
    handleNavClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
}
