"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../../../components/card';
import Header from '../../../components/header';

const SchoolData = [
    {
        schoolId: 1,
        schoolName: 'XX区立XX小学校',
        url: 'https://example.com',
        address: 'XX都XX区XX1-1',
        access: 'XX駅から徒歩X分',
        introduction: '紹介の内容がここに表示されます。',
        postId: [1, 3, 4],
        staff: [
            {
                recId: 1,
                recName: '教員 太郎',
                position: '副校長'
            },
            {
                recId: 3,
                recName: '教員 三郎',
                position: 'コーディネーター'
            }
        ],
    },
    {
        schoolId: 2,
        schoolName: 'XX区立YY中学校',
        url: 'https://example.com',
        address: 'XX都XX区YY1-1',
        access: 'YY駅から徒歩X分',
        introduction: '紹介の内容がここに表示されます。',
        postId: [2],
        staff: [
            {
                recId: 2,
                recName: '教員 次郎',
                position: '教諭',
            }
        ],
    }
]

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

interface OtherType {
    title: string;
    content: string;
}

interface PostDetailType {
    postId: number;
    recId: number;
    recName: string;
    schoolId: number;
    schoolName: string;
    category: string;
    title: string;
    target: string;
    type: string;
    access: string;
    description: string;
    condition: string;
    other: OtherType[];
}

export default function School() {
    const router = useParams();
    const id = router.id;

    const schoolDetail = SchoolData.find(school => String(school.schoolId) === id);

    if (!schoolDetail) {
        return <div>募集が見つかりません</div>;
    };

    const postDetails: PostDetailType[] = [];

    {
        schoolDetail.postId.forEach((data) => {
            const postDetail = PostData.find(post => post.postId === data)
            if (postDetail) {
                postDetails.push(postDetail)
            }
        })
    };

    return (
        <div>
            <Header />
            <main className="my-16 lg:my-20 mx-10 md:mx-20 lg:mx-36">
                <div>
                    <div className="flex items-center mb-8">
                        <Image src={"/image-square.png"} alt="image" height={80} width={80} layout="fixed" className="rounded-lg mr-10" />
                        <div>
                            <div className="font-bold text-xl pb-2">{schoolDetail.schoolName}</div>
                            <div className="text-sm">{schoolDetail.url}</div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-4">スタッフ</h1>
                        <div className="flex items-center mb-8 space-x-6">
                            {schoolDetail.staff.map((data) => (
                                <Link href={`/rec/${data.recId}`} key={data.recId}>
                                    <div className="flex flex-col items-center p-4 rounded-lg bg-[#F1F8E9]">
                                        <Image src={"/image-circle.png"} alt="image" height={60} width={60} layout="fixed" className="rounded-full pb-3" />
                                        <div className="text-base">{data.recName}</div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-4">紹介</h1>
                        <div className="mb-8">{schoolDetail.introduction}</div>
                    </div>
                    <div className="flex flex-col mb-10 space-y-6">
                        <div className="flex flex-col space-y-3">
                            <h2 className="font-bold text-stone-700 text-sm">所在地</h2>
                            <div>{schoolDetail.address}</div>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <h2 className="font-bold text-stone-700 text-sm">アクセス</h2>
                            <div >{schoolDetail.access}</div>
                        </div>
                    </div>
                    <div>
                        <h1 className="font-bold text-lg mb-5">募集中の支援</h1>
                        {postDetails.map((data) => (
                            <div key={data.postId} className="mb-5">
                                <Card {...data} />
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}