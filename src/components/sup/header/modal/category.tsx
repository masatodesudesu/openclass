import Link from "next/link";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const CategoryModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 w-full flex items-start justify-stretch" onClick={closeModal}>
            <div className="basis-5/12 flex-auto"></div>
            <div className="flex-none flex flex-col space-y-6 pl-8 pr-12 py-6 bg-white border border-stone-100 rounded-lg shadow-lg mt-16 lg:mt-20 mr-4" onClick={stopPropagation}>
                <Link href="/">
                    <div className="hover:text-green-700">特別授業の支援</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">教科授業の支援</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">支援が必要な子どもへの支援</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">部活動の支援</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">校務・運営の支援</div>
                </Link>
                <Link href="/">
                    <div className="hover:text-green-700">資金・物資の支援</div>
                </Link>
            </div>
            <div className="basis-6/12 flex-auto"></div>
        </div>
    )
}

export default CategoryModal;