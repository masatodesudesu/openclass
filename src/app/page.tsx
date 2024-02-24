'use client'

import Header from "../components/header";
import SupHeader from "../components/sup/header"
import Card from "../components/card";
import Search from "../components/search";
import { useState } from "react"

const dummyData = [
    {
        postId: 1,
        category: 'カテゴリーA',
        title: 'タイトルがここに入ります',
        schoolName: 'XX区立XX小学校',
        target: '個人',
        type: '小学校',
        access: 'XX駅から徒歩X分',
        description: 'ここに募集者が記入した支援の内容が表示されます。ここに募集者が記入した内容が表示されます。ここに募集者が記入した支援の内容が表示されます。',
    },
    {
        postId: 2,
        category: 'カテゴリーA',
        title: 'タイトルがここに入ります',
        schoolName: 'XX区立YY中学校',
        target: '団体',
        type: '中学校',
        access: 'YY駅から徒歩X分',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
    },
    {
        postId: 3,
        category: 'カテゴリーB',
        title: 'タイトルがここに入ります',
        schoolName: 'XX区立XX小学校',
        target: '個人',
        type: '小学校',
        access: 'XX駅から徒歩X分',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
    },
    {
        postId: 4,
        category: 'カテゴリーB',
        title: 'タイトルがここに入ります',
        schoolName: 'XX区立XX小学校',
        target: '団体',
        type: '小学校',
        access: 'XX駅から徒歩X分',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
    }
];

export default function Home() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <div>
            { isLoggedIn ? <SupHeader /> : <Header /> }
            <main className="my-16 lg:my-20 mx-10 md:mx-20 lg:mx-36">
                <div className="mb-8">
                    <Search />
                </div>
                <h1 className="text-center text-xl lg:text-2xl font-bold mb-8">注目の支援</h1>
                <div>
                    {dummyData.map((data) => (
                        <div className="mb-6" key={data.postId} >
                            <Card {...data} />
                        </div>
                    ))}
                </div>
                <button onClick={toggleLogin} className="px-4 py-2 rounded bg-green-700 text-white">
                    {isLoggedIn ? 'ログアウト（仮）' : 'ログイン（仮）'}
                </button>
            </main>
        </div>
    )
}
