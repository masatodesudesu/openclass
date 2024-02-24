"use client"

import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import Card from '../../../components/card';
import Header from '../../../components/header';

const RecData = [
    {
        recId: 1,
        recName: '教員 太郎',
        schoolId: 1,
        schoolName: 'XX区立XX小学校',
        position: '副校長',
        introduction: '自己紹介の内容がここに表示されます。',
        postId: [1, 3],
        review: [
            {
                supId: 1,
                supName: 'レビュー 太郎',
                rate: 4.0,
                date: 'X日前',
                content: 'レビューの内容がここに表示されます。',
            },
            {
                supId: 2,
                supName: 'レビュー 次郎',
                rate: 5.0,
                date: 'X日前',
                content: 'レビューの内容がここに表示されます。',
            },
        ],
    },
    {
        recId: 2,
        recName: '教員 次郎',
        schoolId: 2,
        schoolName: 'XX区立YY中学校',
        position: '教諭',
        introduction: '自己紹介の内容がここに表示されます。',
        postId: [2],
        review: [
            {
                supId: 3,
                supName: 'レビュー 三郎',
                rate: 4.0,
                date: 'X日前',
                content: 'レビューの内容がここに表示されます。',
            },
        ],
    },
    {
        recId: 3,
        recName: '教員 三郎',
        schoolId: 1,
        schoolName: 'XX区立XX小学校',
        position: 'コーディネーター',
        introduction: '自己紹介の内容がここに表示されます。',
        postId: [4],
        review: [
            {
                supId: 4,
                supName: 'レビュー 四郎',
                rate: 4.0,
                date: 'X日前',
                content: 'レビューの内容がここに表示されます。',
            },
            {
                supId: 5,
                supName: 'レビュー 五郎',
                rate: 5.0,
                date: 'X日前',
                content: 'レビューの内容がここに表示されます。',
            },
        ],
    },
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

export default function Rec() {
    const router = useParams();
    const id = router.id;

    const recDetail = RecData.find(rec => String(rec.recId) === id);

    if (!recDetail) {
        return <div>募集が見つかりません</div>;
    };

    const postDetails: PostDetailType[] = [];

    {
        recDetail.postId.forEach((data) => {
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
                <div className="flex items-center mb-8">
                    <Image src={"/image-circle.png"} alt="image" height={80} width={80} layout="fixed" className="mr-6" />
                    <div>
                        <div className="font-bold text-xl pb-2">{recDetail.recName}</div>
                        <div className="text-base">
                            <Link href={`/school/${recDetail.schoolId}`}>{recDetail.schoolName}</ Link>・{recDetail.position}
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">自己紹介</h1>
                    <p className="mb-10">{recDetail.introduction}</p>
                </div>
                <div className="mb-10">
                    <h1 className="font-bold text-lg mb-5">募集中の支援</h1>
                    {postDetails.map((data) => (
                        <div key={data.postId} className="mb-6">
                            <Card {...data} />
                        </div>
                    ))}
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">評価・レビュー</h1>
                    <h2 className="font-bold text-sm text-stone-700 mb-2">総合評価</h2>
                    <div className="mb-6">どうにかして計算する</div>
                    <h2 className="font-bold text-sm text-stone-700 mb-4">何件のレビュー</h2>
                    {recDetail.review.map((data) => (
                        <div key={data.supId} className="mb-8">
                            <div className="flex items-center mb-4">
                                <Image src={"/image-square.png"} alt="image" height={60} width={60} layout='fixed' className="rounded-full mr-4" />
                                <div className="flex flex-grow items-end justify-between">
                                    <div>
                                        <div className="text-lg font-bold">{data.supName}</div>
                                        <div>{data.rate}</div>
                                    </div>
                                    <div className="text-end">{data.date}</div>
                                </div>
                            </div>
                            <div>{data.content}</div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}