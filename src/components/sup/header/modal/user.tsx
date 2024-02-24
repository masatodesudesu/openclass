import Link from "next/link";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UserModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end items-start" onClick={closeModal}>
            <div className="px-8 py-3 bg-white border border-stone-100 rounded-lg shadow-lg mt-20 lg:mt-24 mr-4" onClick={stopPropagation}>
                <Link href="/sup/profile">
                    <div className="py-3 hover:text-green-700">プロフィール</div>
                </Link>
                <Link href="/sup/review">
                    <div className="py-3 hover:text-green-700">レビュー</div>
                </Link>
                <Link href="/sup/setting">
                    <div className="py-3 hover:text-green-700">設定</div>
                </Link>
                <Link href="/help">
                    <div className="py-3 hover:text-green-700">ヘルプ・問い合わせ</div>
                </Link>
                <div className="py-3 text-red-600 cursor-pointer hover:text-red-300">ログアウト</div>
            </div>
        </div>
    )
}

export default UserModal;