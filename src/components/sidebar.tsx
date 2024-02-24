import Image from "next/image";
import React from "react";
import Link from "next/link"

interface SidebarProps {
    isOpen: boolean;
    closeSidebar: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, closeSidebar }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-start items-start" onClick={closeSidebar}>
            <div className="h-full w-3/5 p-8 md:px-12 bg-white border-r border-stone-100 shadow-lg space-y-6 md:space-y-8" onClick={stopPropagation}>
                <div className="flex justify-end" onClick={closeSidebar}>
                    <Image src="/icon/cancel.png" alt="cancel" width={30} height={30} layout="fixed" />
                </div>
                <div className="flex flex-col space-y-16 md:space-y-20">
                    <div className="space-y-6 md:space-y-8">
                        <Link href="/intro/individual" className="flex items-center space-x-4">
                            <Image src="/icon/user.png" alt="user" width={26} height={26} layout="fixed" />
                            <p className="md:text-lg font-semibold">個人の方へ</p>
                        </Link>
                        <Link href="/intro/organization" className="flex items-center space-x-4">
                            <Image src="/icon/users.png" alt="user" width={26} height={26} layout="fixed" />
                            <p className="md:text-lg font-semibold">団体の方へ</p>
                        </Link>
                        <Link href="/intro/recruiter" className="flex items-center space-x-4">
                            <Image src="/icon/school.png" alt="user" width={26} height={26} layout="fixed" />
                            <p className="md:text-lg font-semibold">教育機関の方へ</p>
                        </Link>
                        <Link href="/help" className="flex items-center space-x-4">
                            <Image src="/icon/help.png" alt="user" width={26} height={26} layout="fixed" />
                            <p className="md:text-lg font-semibold">ヘルプ・問い合わせ</p>
                        </Link>
                    </div>
                    <div className="flex flex-col items-center space-y-4">
                        <Link href="/signup" className="rounded-lg px-6 md:px-8 py-2 cursor-pointer transition-bg duration-300 border border-green-700 text-green-700 hover:bg-gray-300">
                            新規登録
                        </Link>
                        <Link href="/login" className="rounded-lg px-6 md:px-8 py-2 cursor-pointer transition-bg duration-300 bg-green-700 text-white hover:bg-green-600">
                            ログイン
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;