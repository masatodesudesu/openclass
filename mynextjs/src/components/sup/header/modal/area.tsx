import Link from "next/link";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const AreaModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 w-full flex items-start justify-stretch" onClick={closeModal}>
            <div className="basis-11/12 flex-auto"></div>
            <div className="flex-none flex flex-col space-y-6 pl-8 pr-14 py-6 bg-white border border-stone-100 rounded-lg shadow-lg mt-16 lg:mt-20 mr-4" onClick={stopPropagation}>
                <form className="flex flex-col items-start">
                    <label className="text-sm font-bold text-stone-700 pb-3">地名を入力</label>
                    <input placeholder="都道府県・市区町村" className="p-2 outline-none rounded-lg border border-green-700"></input>
                </form>
            </div>
            <div className="basis-1/12 flex-auto"></div>
        </div>
    )
}

export default AreaModal;