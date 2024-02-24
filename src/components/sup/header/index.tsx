"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Sidebar from "../sidebar";
import UserModal from "./modal/user";
import TargetModal from "./modal/target";
import CategoryModal from "./modal/category";
import TypeModal from "./modal/type";
import AreaModal from "./modal/area";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

export default function Header() {
    const windowWidth = useWindowWidth();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isUserModalOpen, setIsUserModalOpen] = useState(false);
    const [isTargetModalOpen, setIsTargetModalOpen] = useState(false);
    const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
    const [isTypeModalOpen, setIsTypeModalOpen] = useState(false);
    const [isAreaModalOpen, setIsAreaModalOpen] = useState(false);

    const handleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };
    const handleUserModal = () => { setIsUserModalOpen(!isUserModalOpen) };
    const handleTargetModal = () => { setIsTargetModalOpen(!isTargetModalOpen) };
    const handleCategoryModal = () => { setIsCategoryModalOpen(!isCategoryModalOpen) };
    const handleTypeModal = () => { setIsTypeModalOpen(!isTypeModalOpen) };
    const handleAreaModal = () => { setIsAreaModalOpen(!isAreaModalOpen) }

    const closeSidebar = (e: React.MouseEvent<HTMLDivElement>) => { setIsSidebarOpen(false) };
    const closeUserModal = (e: React.MouseEvent<HTMLDivElement>) => { setIsUserModalOpen(false) };
    const closeTargetModal = (e: React.MouseEvent<HTMLDivElement>) => { setIsTargetModalOpen(false) };
    const closeCategoryModal = (e: React.MouseEvent<HTMLDivElement>) => { setIsCategoryModalOpen(false) };
    const closeTypeModal = (e: React.MouseEvent<HTMLDivElement>) => { setIsTypeModalOpen(false) };
    const closeAreaModal = (e: React.MouseEvent<HTMLDivElement>) => { setIsAreaModalOpen(false) };

    return (
        <header>
            {windowWidth >= 1024 ? (
                <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-3 bg-white shadow-md">
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" width={150} height={50} layout="fixed" />
                        </Link>
                    </div>
                    <nav className="flex w-5/6 justify-evenly text-black">
                        <div className="hover:text-green-700 cursor-pointer" onClick={handleTargetModal}>
                            募集対象から探す
                        </div>
                        <div className="hover:text-green-700 cursor-pointer" onClick={handleCategoryModal}>
                            カテゴリーから探す
                        </div>
                        <div className="hover:text-green-700 cursor-pointer" onClick={handleTypeModal}>
                            支援先から探す
                        </div>
                        <div className="hover:text-green-700 cursor-pointer" onClick={handleAreaModal}>
                            エリアから探す
                        </div>
                    </nav>
                    <div onClick={handleUserModal} className="mx-1">
                        <Image src="/image-circle.png" alt="userIcon" width={42} height={42} layout="fixed" />
                    </div>
                </div>
            ) : (
                <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-2 bg-white shadow-md">
                    <div className="mx-2" onClick={handleSidebar}>
                        <Image src="/icon/menu.png" alt="menu" width={30} height={30} layout="fixed" />
                    </div>
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" width={126} height={42} layout="fixed" />
                        </Link>
                    </div>
                    <div className="mx-2" onClick={handleUserModal}>
                        <Image src="/image-circle.png" alt="userIcon" width={40} height={40} layout="fixed" />
                    </div>
                </div>
            )};

            {isSidebarOpen &&
                <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            };
            {isUserModalOpen &&
                <UserModal isOpen={isUserModalOpen} closeModal={closeUserModal} />
            };
            {isTargetModalOpen &&
                <TargetModal isOpen={isTargetModalOpen} closeModal={closeTargetModal} />
            };
            {isCategoryModalOpen &&
                <CategoryModal isOpen={isCategoryModalOpen} closeModal={closeCategoryModal} />
            };
            {isTypeModalOpen &&
                <TypeModal isOpen={isTypeModalOpen} closeModal={closeTypeModal} />
            };
            {isAreaModalOpen &&
                <AreaModal isOpen={isAreaModalOpen} closeModal={closeAreaModal} />
            }
        </header>
    );
};
