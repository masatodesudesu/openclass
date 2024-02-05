import Header from "../components/header"
import Card from "../components/card"
import Search from "../components/search"
import styles from "./home.module.css"
import Link from "next/link"

const dummyData = [
  {
    id: 1,
    category: 'カテゴリーA',
    title: 'タイトル1',
    name: '学校1',
    target: '個人',
    type: '小学校',
    access: 'アクセス',
    description: 'ここに募集者が記入した支援の内容が表示されます。',
  },
  {
    id: 2,
    category: 'カテゴリーA',
    title: 'タイトル2',
    name: '学校2',
    target: '団体',
    type: '中学校',
    access: 'アクセス',
    description: 'ここに募集者が記入した支援の内容が表示されます。',
  },
  {
    id: 3,
    category: 'カテゴリーB',
    title: 'タイトル3',
    name: '学校3',
    target: '個人',
    type: '小学校',
    access: 'アクセス',
    description: 'ここに募集者が記入した支援の内容が表示されます。',
  },
  {
    id: 4,
    category: 'カテゴリーB',
    title: 'タイトル4',
    name: '学校4',
    target: '団体',
    type: '高等学校・高等専門学校',
    access: 'アクセス',
    description: 'ここに募集者が記入した支援の内容が表示されます。',
  }
];

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Search />
        <h1>注目の支援</h1>
        <div className={styles.cards}>
          {dummyData.map((data) => (
            <div className={styles.card} key={data.id} >
              <Link href={`/details/${data.id}`}>
                 <Card {...data} />
              </Link>
             </div>
          ))}
        </div>
      </main>
    </>
  )
}
