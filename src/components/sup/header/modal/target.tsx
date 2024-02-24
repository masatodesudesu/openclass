import Link from "next/link";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TargetModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 w-full flex items-start justify-stretch" onClick={closeModal}>
            <div className="basis-3/12 flex-auto"></div>
            <div className="flex-none flex flex-col pl-8 pr-14 py-6 bg-white border border-stone-100 rounded-lg shadow-lg mt-16 lg:mt-20 mr-4" onClick={stopPropagation}>
                <h2 className="text-sm font-bold text-stone-400 pb-4">個人</h2>
                <Link href="/">
                    <div className="hover:text-green-700 pb-5">ボランティア</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700 pb-5">アルバイト</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700 pb-7">フリーランス</div>
                </Link>
                <h2 className="text-sm font-bold text-stone-400 pb-4">団体</h2>
                <Link href="/">
                    <div className="hover:text-green-700 pb-5">会社</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700 pb-5">非営利団体</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">公的機関</div>
                </Link>
            </div>
            <div className="basis-10/12 flex-auto"></div>
        </div>
    )
}

export default TargetModal;