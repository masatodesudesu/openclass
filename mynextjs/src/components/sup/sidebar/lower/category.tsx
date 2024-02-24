import React from "react";

interface SidebarProps {
    isOpen: boolean;
    closeSidebar: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const CategorySidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="h-full w-3/5 p-8 md:px-12 bg-white border-r border-stone-100 shadow-lg space-y-6 md:space-y-8">
            <div></div>
        </div>
    )
};

export default CategorySidebar;