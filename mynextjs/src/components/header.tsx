"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import Sidebar from "./sidebar"

export default function Header() {
    const windowWidth = useWindowWidth();

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleSidebar = () => { setIsSidebarOpen(!isSidebarOpen) };
    const closeSidebar = (e: React.MouseEvent<HTMLDivElement>) => { setIsSidebarOpen(false) };

    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    return (
        <header>    
            { windowWidth >= 1024 ? (
                <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-3 bg-white shadow-md">
                    <div>
                        <Link href="/">
                            <Image src="/logo.png" alt="logo" width={150} height={50} layout="fixed" />
                        </Link>
                    </div>
                    <nav className="flex w-5/6 justify-evenly text-black">
                        <Link href="/intro/individual">
                            <div className="hover:text-green-700">個人の方へ</div>
                        </Link>
                        <Link href="/intro/organization">
                            <div className="hover:text-green-700">団体の方へ</div>
                        </Link>
                        <Link href="/intro/recruiter">
                            <div className="hover:text-green-700">教育機関の方へ</div>
                        </Link>
                        <Link href="/help">
                            <div className="hover:text-green-700">ヘルプ・問い合わせ</div>
                        </Link>
                    </nav>
                    <div className="flex gap-5">
                        <Link href="/login">
                            <div className="text-nowrap rounded-lg px-4 py-2 cursor-pointer transition-bg duration-300 border border-green-700 text-green-700 hover:bg-gray-300">
                                ログイン
                            </div>
                        </Link>
                        <Link href="/signup">
                            <div className="text-nowrap rounded-lg px-4 py-2 cursor-pointer transition-bg duration-300 bg-green-700 text-white hover:bg-green-600">
                                新規登録
                            </div>
                        </Link>
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
                    <div className="mx-2">
                        <Link href="/login">
                            <Image src="/icon/login.png" alt="login" width={30} height={30} layout="fixed" />
                        </Link>
                    </div>
                </div>
            )};
            { isSidebarOpen &&
                <Sidebar isOpen={isSidebarOpen} closeSidebar={closeSidebar} />
            }
        </header>
    )
}
