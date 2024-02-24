import SupHeader from "../../../components/sup/header"
import Image from "next/image"

const UserData = [
    { id: 1, accountType: "indiv" },
    { id: 2, accountType: "org" },
    { id: 3, accountType: "rec" },
    { id: 4, accountType: "indiv" }
]

const IndivData = [
    {
        id: 1,
        userId: 1,
        name: "支援 太郎",
        gender: "男性",
        birthday: new Date(2000, 0, 1),
        address: "XX都XX区XX",
        introduction: "ここに自己紹介が入ります。"
    },
    {
        id: 2,
        userId: 4,
        name: "支援 次郎",
        gender: "男性",
        birthday: new Date(2003, 5, 1),
        address: "XX都XX区YY",
        introduction: "ここに自己紹介が入ります。"
    }
]

const OrgData = [
    {
        id: 1,
        userId: 2,
        name: "支援 株式会社",
        orgType: "会社",
        address: "XX都XX区XX",
        introduction: "ここに紹介が入ります。"
    }
]

interface IndivDetailType {
    id: number;
    userId: number;
    name: string;
    gender: string;
    birthday: Date;
    address: string;
    introduction: string;
}

interface OrgDetailType {
    id: number;
    userId: number;
    name: string;
    orgType: string;
    address: string;
    introduction: string;
}

interface DetailType {
    id: number;
    accountType: "indiv" | "org";
    detail: IndivDetailType | OrgDetailType | undefined;
}

// このやり方は賢くない気がする　IndivかOrgかで上手く分岐してレンダリングしたい

export default function Profile() {
    const DetailData = UserData.find(user => user.id === 1) as DetailType;

    if (DetailData && DetailData.accountType === "indiv") {
        const IndivDetailData = IndivData.find(user => user.userId === DetailData.id);
        DetailData.detail = IndivDetailData;
    } else if (DetailData && DetailData.accountType === "org") {
        const OrgDetailData = OrgData.find(user => user.userId === DetailData.id);
        DetailData.detail = OrgDetailData;
    }

    return (
        <div>
            <SupHeader />
            <main className="my-16 lg:my-20 mx-10 md:mx-20 lg:mx-36">
            <div className="flex items-center mb-8">
                    <Image src={"/image-circle.png"} alt="image" height={80} width={80} layout="fixed" className="mr-6" />
                    <div>
                        <div className="font-bold text-xl pb-2">{DetailData.detail?.name}</div>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-lg mb-4">自己紹介</h1>
                    <p className="mb-10">{DetailData.detail?.introduction}</p>
                </div>
            </main>
        </div>
    )
}