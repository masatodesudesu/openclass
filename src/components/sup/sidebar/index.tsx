import Image from "next/image";
import React, { useState } from "react";
import TargetSidebar from "./lower/target";
import CategorySidebar from "./lower/category";
import TypeSidebar from "./lower/type";
import AreaSidebar from "./lower/area";


interface ModalProps {
    isOpen: boolean;
    closeSidebar: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Sidebar: React.FC<ModalProps> = ({ isOpen, closeSidebar }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    const [isTargetSidebarOpen, setIsTargetSidebarOpen] = useState(false);
    const [isCategorySidebarOpen, setIsCategorySidebarOpen] = useState(false);
    const [isTypeSidebarOpen, setIsTypeSidebarOpen] = useState(false);
    const [isAreaSidebarOpen, setIsAreaSidebarOpen] = useState(false);

    const handleTargetSidebar = () => { setIsTargetSidebarOpen(!isTargetSidebarOpen) };
    const handleCategorySidebar = () => { setIsCategorySidebarOpen(!isCategorySidebarOpen) };
    const handleTypeSidebar = () => { setIsTypeSidebarOpen(!isTypeSidebarOpen) };
    const handleAreaSidebar = () => { setIsAreaSidebarOpen(!isAreaSidebarOpen) };

    const closeTargetSidebar = () => { setIsTargetSidebarOpen(false) };
    const closeCategorySidebar = () => { setIsCategorySidebarOpen(false) };
    const closeTypeSidebar = () => { setIsTypeSidebarOpen(false) };
    const closeAreaSidebar = () => { setIsAreaSidebarOpen(false) };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-start items-start" onClick={closeSidebar}>
            <div className="h-full w-3/5 p-8 md:px-12 bg-white border-r border-stone-100 shadow-lg space-y-6 md:space-y-8" onClick={stopPropagation}>
                <div className="flex justify-end" onClick={closeSidebar}>
                    <Image src="/icon/cancel.png" alt="cancel" width={30} height={30} layout="fixed" />
                </div>
                <div className="space-y-6 md:space-y-8">
                    <div className="flex items-center space-x-4" onClick={handleTargetSidebar}>
                        <Image src="/icon/user.png" alt="user" width={26} height={26} layout="fixed" />
                        <p className="md:text-lg font-semibold">募集対象から探す</p>
                    </div>
                    <div className="flex items-center space-x-4" onClick={handleCategorySidebar}>
                        <Image src="/icon/category.png" alt="user" width={26} height={26} layout="fixed" />
                        <p className="md:text-lg font-semibold">カテゴリーから探す</p>
                    </div>
                    <div className="flex items-center space-x-4" onClick={handleTypeSidebar}>
                        <Image src="/icon/type.png" alt="user" width={26} height={26} layout="fixed" />
                        <p className="md:text-lg font-semibold">支援先から探す</p>
                    </div>
                    <div className="flex items-center space-x-4" onClick={handleAreaSidebar}>
                        <Image src="/icon/access.png" alt="user" width={26} height={26} layout="fixed" />
                        <p className="md:text-lg font-semibold">エリアから探す</p>
                    </div>
                </div>
            </div>
            {isTargetSidebarOpen && (
                <TargetSidebar isOpen={isTargetSidebarOpen} closeSidebar={closeTargetSidebar} />
            )};
            {isCategorySidebarOpen && (
                <CategorySidebar isOpen={isCategorySidebarOpen} closeSidebar={closeCategorySidebar} />
            )};
            {isTypeSidebarOpen && (
                <TypeSidebar isOpen={isTypeSidebarOpen} closeSidebar={closeTypeSidebar} />
            )};
            {isAreaSidebarOpen && (
                <AreaSidebar isOpen={isAreaSidebarOpen} closeSidebar={closeAreaSidebar} />
            )};
        </div>
    )
}

export default Sidebar;