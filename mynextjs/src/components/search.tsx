"use client"

import React, { useState } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Filter from './filter'

export default function Search() {
    const router = useRouter();
    const [keyword, setKeyword] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setIsModalOpen(!isModalOpen);
    }

    const handleSearch = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        router.push('/result');
    };

    return (
        <div className="flex w-full flex-col items-center">
            <div className="flex justify-between items-center rounded-full border-2 border-stone-100 shadow-md p-2 w-full md:w-4/5 xl:w-2/3">
                <div className="pl-3 flex-grow">
                    <input type='text'
                        placeholder='キーワードを入力'
                        id='keyword'
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="outline-none text-sm md:text-base"
                    />
                </div>
                <div className="flex items-center gap-4 md:gap-5 text-sm md:text-base">    
                    <button onClick={handleModal}>
                        { !isModalOpen ? "▼ 絞り込み" : "▲ 絞り込み" }
                    </button>
                    <button onClick={handleSearch}>
                        <div className="h-8 w-8 md:h-9 md:w-9">
                            <Image src="/icon/search-green.png" alt="search" width={36} height={36} />
                        </div>
                    </button>
                </div>
            </div>
            {isModalOpen &&
                <Filter />
            }
        </div>
    );
};