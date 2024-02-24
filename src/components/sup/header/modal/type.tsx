import Link from "next/link";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const TypeModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 w-full flex items-start justify-stretch" onClick={closeModal}>
            <div className="basis-9/12 flex-auto"></div>
            <div className="flex-none flex flex-col space-y-6 pl-8 pr-14 py-6 bg-white border border-stone-100 rounded-lg shadow-lg mt-16 lg:mt-20 mr-4" onClick={stopPropagation}>
                <Link href="/">
                    <div className="hover:text-green-700">幼稚園・保育園・こども園</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">小学校</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">中学校</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">高等学校・高等専門学校</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">特別支援学校</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">フリースクール</div>
                </Link>
            </div>
            <div className="basis-4/12 flex-auto"></div>
        </div>
    )
}

export default TypeModal;