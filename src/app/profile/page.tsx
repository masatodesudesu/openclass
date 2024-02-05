"use client"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useEffect } from "react";

/* ログイン後のマイページ */
const MyPage = () => {
    const supabase = createClientComponentClient();
    useEffect(() => {
        async function getData() {
            const { data } = await supabase.auth.getSession();
            console.log(data);
            // ...
        }
        getData();
    }, []);

    return (
        <div>
            <h1>
                ログインに成功しました
            </h1>
            <div>
                <form action="/auth/logout" method="post">
                    <button type="submit">
                        ログアウト
                    </button>
                </form>
            </div>
        </div>
    )
}


export default MyPage;