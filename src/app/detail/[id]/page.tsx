"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../../../components/header';
import { useWindowWidth } from '@/hooks/useWindowWidth';
import React, { useState } from 'react';
import ApplyModal from "./apply"

const PostData = [
    {
        postId: 1,

        recId: 1,
        recName: '教員 太郎',

        schoolId: 1,
        schoolName: 'XX区立XX小学校',

        category: 'カテゴリーA',
        title: 'タイトルがここに表示されます',
        target: '個人',
        type: '小学校',
        access: 'XXXX駅から徒歩X分',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
        condition: '募集者が応募条件に記入した内容がここに表示されます。',
        other: [
            {
                title: 'その他1',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
            {
                title: 'その他2',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
        ],
    },
    {
        postId: 2,

        recId: 2,
        recName: '教員 次郎',

        schoolId: 2,
        schoolName: 'XX区立YY中学校',

        category: 'カテゴリーA',
        title: 'タイトルがここに表示されます',
        target: '団体',
        type: '中学校',
        access: 'アクセス',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
        condition: '募集者が応募条件に記入した内容がここに表示されます。',
        other: [
            {
                title: 'その他1',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
        ],
    },
    {
        postId: 3,

        recId: 1,
        recName: '教員 太郎',

        schoolId: 1,
        schoolName: 'XX区立XX小学校',

        category: 'カテゴリーB',
        title: 'タイトルがここに表示されます',
        target: '個人',
        type: '小学校',
        access: 'アクセス',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
        condition: '募集者が応募条件に記入した内容がここに表示されます。',
        other: [
            {
                title: 'その他1',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
        ],
    },
    {
        postId: 4,

        recId: 3,
        recName: '教員 三郎',

        schoolId: 1,
        schoolName: 'XX区立XX小学校',

        category: 'カテゴリーB',
        title: 'タイトルがここに表示されます',
        target: '団体',
        type: '小学校',
        access: 'アクセス',
        description: 'ここに募集者が記入した支援の内容が表示されます。',
        condition: '募集者が応募条件に記入した内容がここに表示されます。',
        other: [
            {
                title: 'その他1',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
            {
                title: 'その他2',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
            {
                title: 'その他3',
                content: '募集者が「その他」に記入した内容がここに表示されます。',
            },
        ],
    },
]

const RecData = [
    { recId: 1, recName: '教員 太郎', schoolId: 1, schoolName: 'XX区立XX小学校', position: '副校長' },
    { recId: 2, recName: '教員 次郎', schoolId: 2, schoolName: 'XX区立YY中学校', position: '教諭' },
    { recId: 3, recName: '教員 三郎', schoolId: 3, schoolName: 'XX区立XX小学校', position: 'コーディネーター' },
]

const SchoolData = [
    { schoolId: 1, schoolName: 'XX区立XX小学校', url: 'https://example.com', address: 'XX都XX区XX1-1' },
    { schoolId: 2, schoolName: 'XX区立YY中学校', url: 'https://example.com', address: 'XX都XX区YY1-1' }
]

export default function Details() {
    const windowWidth = useWindowWidth();

    const router = useParams();
    const id = router.id;

    const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
    const handleApplyModal = () => { setIsApplyModalOpen(!isApplyModalOpen) };
    const closeApplyModal = (e: React.MouseEvent<HTMLDivElement>) => ( setIsApplyModalOpen(false) )

    const postDetail = PostData.find(post => String(post.postId) === id);

    if (!postDetail) {
        return <div>募集が見つかりません</div>;
    }

    const recDetail = RecData.find(rec => postDetail.recId === rec.recId);
    const schoolDetail = SchoolData.find(school => postDetail.schoolId === school.schoolId);

    if (!recDetail || !schoolDetail) {
        return <div>エラーが起きました</div>
    }

    return (
        <div>
            <Header />
            {windowWidth >= 1024 ? (
                <main className="my-20 mx-36">
                    <div>
                        <div className="border border-green-700 rounded text-green-700 text-sm inline-block mb-3">
                            <p className="px-1.5">{postDetail.category}</p>
                        </div>
                        <div className="text-xl font-bold mb-1.5">
                            <p>{postDetail.title}</p>
                        </div>
                        <div className="text-lg mb-4">
                            <p>{postDetail.schoolName}</p>
                        </div>
                    </div>
                    <div className="flex space-x-24">
                        <div className="flex flex-col items-center">
                            <div className="mb-8">
                                <div className="mb-8">
                                    <Image src={"/image.png"} alt="image" width={700} height={500} layout="fixed" className="rounded-lg" />
                                </div>
                                <div>
                                    <p className="border-l-8 border-green-600 pl-2 text-lg font-bold mb-5">支援の内容</p>
                                    <p className="mb-10">{postDetail.description}</p>
                                </div>
                                <div>
                                    <p className="border-l-8 border-green-600 pl-2 text-lg font-bold mb-5">応募条件</p>
                                    <p className="mb-10">{postDetail.condition}</p>
                                </div>
                                <div>
                                    {postDetail.other.map((data) => (
                                        <div key={data.title}>
                                            <p className="border-l-8 border-green-600 pl-2 text-lg font-bold mb-5">{data.title}</p>
                                            <p className="mb-10">{data.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <button
                                className="font-medium rounded-lg px-4 py-2 cursor-pointer transition-bg duration-300 bg-green-700 text-white no-underline hover:bg-green-600 mb-10"
                                onClick={handleApplyModal}
                            >
                                応募・問い合わせ
                            </button>
                        </div>
                        <div>
                            <div className="mb-10 text-nowrap">
                                <div className="flex items-center mb-4">
                                    <Image src={"/icon/user.png"} alt='target' height={24} width={24} layout="fixed" />
                                    <div className="ml-3 mr-8 font-bold">募集対象</div>
                                    <div>{postDetail.target}</div>
                                </div>
                                <div className="flex items-center mb-4">
                                    <Image src={"/icon/type.png"} alt='type' height={24} width={24} layout="fixed" />
                                    <div className="ml-3 mr-12 font-bold">支援先</div>
                                    <div>{postDetail.type}</div>
                                </div>
                                <div className="flex items-center">
                                    <Image src={"/icon/access.png"} alt='access' height={24} width={24} layout="fixed" />
                                    <div className="ml-3 mr-8 font-bold">アクセス</div>
                                    <div>{postDetail.access}</div>
                                </div>
                            </div>
                            <div className="flex flex-col w-full justify-center items-center">
                                <button
                                    className="font-medium rounded-lg px-4 py-2 cursor-pointer transition-bg duration-300 bg-green-700 text-white no-underline hover:bg-green-600 mb-12"
                                    onClick={handleApplyModal}
                                >
                                    応募・問い合わせ
                                </button>
                                <div className="flex flex-col items-center">
                                    <h1 className="text-lg font-bold mb-4">支援の募集者</h1>
                                    <Link href={`/rec/${recDetail.recId}`}>
                                        <div className="bg-[#F1F8E9] p-5 rounded-lg mb-10 w-72">
                                            <Image src={"/image-circle.png"} alt="image" height={100} width={100} layout="fixed" className="rounded-full mx-auto mb-4" />
                                            <div className="text-center font-bold text-lg mb-1.5">{recDetail.recName}</div>
                                            <div className="text-center">{recDetail.schoolName}・{recDetail.position}</div>
                                        </div>
                                    </Link>
                                    <h1 className="text-lg font-bold mb-4">教育機関</h1>
                                    <Link href={`/school/${schoolDetail.schoolId}`}>
                                        <div className="bg-[#F1F8E9] p-5 rounded-lg w-72">
                                            <Image src={"/image-square.png"} alt="image" height={90} width={90} layout="fixed" className="rounded-lg mx-auto mb-4" />
                                            <div className="text-center font-bold text-lg mb-1.5">{schoolDetail.schoolName}</div>
                                            <div className="text-center">{schoolDetail.url}</div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            ) : (
                <main className="my-16 mx-10 md:mx-20">
                    <div className="flex flex-col items-center">
                        <div>
                            <div className="border border-green-700 rounded text-green-700 text-sm inline-block mb-2">
                                <p className="px-1.5">{postDetail.category}</p>
                            </div>
                            <div className="text-lg font-bold mb-1.5">
                                <p>{postDetail.title}</p>
                            </div>
                            <div className="mb-4">
                                <p>{postDetail.schoolName}</p>
                            </div>
                            <div className="mb-8">
                                <Image src={"/image.png"} alt="image" width={700} height={500} layout="fixed" className="rounded-lg" />
                            </div>
                            <div className="mb-8 text-nowrap text-sm space-y-3">
                                <div className="flex items-center">
                                    <Image src={"/icon/user.png"} alt='target' height={20} width={20} layout="fixed" />
                                    <div className="ml-3 mr-8 font-bold">募集対象</div>
                                    <div>{postDetail.target}</div>
                                </div>
                                <div className="flex items-center">
                                    <Image src={"/icon/type.png"} alt='type' height={20} width={20} layout="fixed" />
                                    <div className="ml-3 mr-11 font-bold">支援先</div>
                                    <div>{postDetail.type}</div>
                                </div>
                                <div className="flex items-center">
                                    <Image src={"/icon/access.png"} alt='access' height={20} width={20} layout="fixed" />
                                    <div className="ml-3 mr-8 font-bold">アクセス</div>
                                    <div>{postDetail.access}</div>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div>
                                    <p className="border-l-8 border-green-600 pl-2 font-bold mb-4">支援の内容</p>
                                    <p className="mb-10 text-sm">{postDetail.description}</p>
                                </div>
                                <div>
                                    <p className="border-l-8 border-green-600 pl-2 font-bold mb-4">応募条件</p>
                                    <p className="mb-10 text-sm">{postDetail.condition}</p>
                                </div>
                                <div>
                                    {postDetail.other.map((data) => (
                                        <div key={data.title}>
                                            <p className="border-l-8 border-green-600 pl-2 font-bold mb-4">{data.title}</p>
                                            <p className="mb-10 text-sm">{data.content}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h1 className="font-bold mb-3">支援の募集者</h1>
                                <Link href={`/rec/${recDetail.recId}`}>
                                    <div className="bg-[#F1F8E9] px-4 py-3 rounded-xl mb-6 w-full flex items-center">
                                        <Image src={"/image-circle.png"} alt="image" height={50} width={50} layout="fixed" className="rounded-full" />
                                        <div className="flex flex-col ml-4 space-y-0.5">
                                            <div className="font-bold">{recDetail.recName}</div>
                                            <div className="text-sm">{recDetail.schoolName}・{recDetail.position}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <h1 className="font-bold mb-3">教育機関</h1>
                                <Link href={`/school/${schoolDetail.schoolId}`}>
                                    <div className="bg-[#F1F8E9] px-4 py-3 rounded-xl mb-8 w-full flex items-center">
                                        <Image src={"/image-square.png"} alt="image" height={50} width={50} layout="fixed" className="rounded-lg" />
                                        <div className="flex flex-col ml-4 space-y-0.5">
                                            <div className="font-bold">{schoolDetail.schoolName}</div>
                                            <div className="text-sm">{schoolDetail.url}</div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <button 
                            className="font-medium rounded-lg px-4 py-2 cursor-pointer transition-bg duration-300 bg-green-700 text-white no-underline hover:bg-green-600 mb-10"
                            onClick={handleApplyModal}
                        >
                            応募・問い合わせ
                        </button>
                    </div>
                </main>
            )}

            {isApplyModalOpen && 
                <ApplyModal isOpen={isApplyModalOpen} closeModal={closeApplyModal} />
            }
        </div>
    )
}
