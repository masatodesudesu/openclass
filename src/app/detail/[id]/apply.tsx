import Image from "next/image";
import React from "react";

interface ModalProps {
    isOpen: boolean;
    closeModal: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ApplyModal: React.FC<ModalProps> = ({ isOpen, closeModal }) => {
    const stopPropagation = (e: React.MouseEvent<HTMLFormElement>) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 w-full h-full flex items-center justify-center" onClick={closeModal}>
            <form className="flex flex-col w-5/6 md:w-2/3 lg:w-7/12 h-2/3 items-center pt-6 px-4 md:px-6 lg:px-8 bg-white border border-stone-100 rounded-xl shadow-lg" onClick={stopPropagation}>
                <div className="mb-6 flex w-full justify-between items-center">
                    <div className="w-6 h-6"></div>
                    <label className="pt-1 text-xl font-bold">応募・問い合わせ</label>
                    <Image src="/icon/cancel.png" alt="cancel" height={24} width={24} layout="fixed" onClick={closeModal} />
                </div>
                <textarea
                    placeholder="応募の理由、または問い合わせ内容を詳しく入力して下さい。"
                    className="outline-none w-full h-2/3 border-2 border-green-700 rounded-xl p-3 mb-7 text-base"
                />
                <button className="text-white bg-green-700 hover:bg-green-600 rounded-lg text-lg px-4 py-2">送信する</button>
            </form>
        </div>
    )
}

export default ApplyModal;