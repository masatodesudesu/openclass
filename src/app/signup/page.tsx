"use client"

import Image from 'next/image';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link'

const usersData = [
    {
        id: 1,
        email: "a@gmail.com",
        password: "a",
        accountType: "indiv",
        accountId: 1,
    },
    {
        id: 2,
        email: "b@gmail.com",
        password: "b",
        accountType: "org",
        accountId: 1,
    },
    {
        id: 3,
        email: "c@gmail.com",
        password: "c",
        accountType: "rec",
        accountId: 1,
    },
    {
        id: 4,
        email: "d@gmail.com",
        password: "d",
        accountType: "indiv",
        accountId: 2,
    }
]

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(usersData)

        // 新規登録の実装
    };

    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="flex flex-col items-center w-screen h-screen bg-stone-100">
            {showModal && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
                    <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white pt-8 pb-6 rounded-lg shadow-lg w-1/3">
                        <div className="text-center">
                            <p className="mb-6">既にアカウントが存在しています</p>
                            <button className="bg-green-700 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-500" onClick={handleCloseModal}>閉じる</button>
                        </div>
                    </div>
                </div>
            )}
            
            <div className="mt-24 mb-20">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={150} height={50} layout="fixed" />
                </Link>
            </div>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center">
                    <div className="flex border-2 border-green-700 p-1 mb-8 rounded-full font-bold text-lg">
                        <Image src="/icon/google.png" alt="google" width={30} height={30} layout="fixed" className="rounded-full" />
                        <div className="px-14">Googleで新規登録</div>
                    </div>
                    <div className="mb-8">または</div>
                    <div className="flex items-center mb-8 border-b-2 border-green-700 pb-1">
                        <Image src="/icon/email.png" alt="email" width={26} height={26} layout="fixed" className="mr-2" />
                        <input type='email'
                            placeholder='メールアドレス'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="outline-none bg-stone-100 w-64"
                        />
                    </div>
                    <div className="flex items-center mb-12 border-b-2 border-green-700 pb-1">
                        <Image src="/icon/password.png" alt="password" width={26} height={26} layout="fixed" className="mr-2" />
                        <input type='password'
                            placeholder='パスワード'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="outline-none bg-stone-100 w-64"
                        />
                    </div>
                    <input type='submit'
                        value='新規登録'
                        className="bg-green-700 px-28 py-2 text-white font-bold rounded-full mb-10"
                    />
                    <Link href="/login">
                        <div className="text-xs text-green-700 border-b border-green-700">アカウントをお持ちの方はこちら</div>
                    </Link>
                </form>
            </div>
        </div>
    )
}