export default function Filter() {
    return (
        <div className="my-5 px-5 py-5 rounded-lg shadow-lg border border-stone-100 w-full">
            <form>
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-3">募集対象</h2>
                    <h3>個人</h3>
                    <div className="flex flex-col md:flex-row space-y-2">
                        <div className="flex items-center mt-2">
                            <input type="checkbox" name="target" value="1" className="mr-2 ml-1" />
                            <p className="mr-5">ボランティア</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="target" value="2" className="mr-2 ml-1" />
                            <p className="mr-5">アルバイト</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="target" value="3" className="mr-2 ml-1" />
                            <p className="mr-5">フリーランス</p>
                        </div>
                    </div>
                    <h3 className="mt-3">団体</h3>
                    <div className="flex flex-col md:flex-row space-y-2">
                        <div className="flex items-center mt-2">
                            <input type="checkbox" name="target" value="4" className="mr-2 ml-1" />
                            <p className="mr-5">会社</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="target" value="5" className="mr-2 ml-1" />
                            <p className="mr-5">非営利団体</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="target" value="6" className="mr-2 ml-1" />
                            <p className="mr-5">公的機関</p>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-1">カテゴリー</h2>
                    <div className="flex flex-col md:flex-row md:flex-wrap space-y-2">
                        <div className="flex items-center mt-2">
                            <input type="checkbox" name="category" value="1" className="mr-2 ml-1" />
                            <p className="mr-5">特別授業の支援</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="category" value="2" className="mr-2 ml-1" />
                            <p className="mr-5">教科授業の支援</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="category" value="3" className="mr-2 ml-1" />
                            <p className="mr-5">支援が必要な子どもへの支援</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="category" value="4" className="mr-2 ml-1" />
                            <p className="mr-5">部活動の支援</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="category" value="5" className="mr-2 ml-1" />
                            <p className="mr-5">校務・運営の支援</p>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" name="category" value="6" className="mr-2 ml-1" />
                            <p className="mr-5">資金・物資の支援</p>
                        </div>
                    </div>
                </div>
                <div className="mb-6">
                    <h2 className="text-lg font-bold mb-1">支援先</h2>
                    <div className="flex flex-col md:flex-row md:flex-wrap space-y-2">
                        <div  className="flex items-center mt-2">
                            <input type="checkbox" name="type" value="1" className="mr-2 ml-1" />
                            <p className="mr-5">幼稚園・保育園・こども園</p>
                        </div>
                        <div  className="flex items-center">
                            <input type="checkbox" name="type" value="2" className="mr-2 ml-1" />
                            <p className="mr-5">小学校</p>
                        </div>
                        <div  className="flex items-center">
                            <input type="checkbox" name="type" value="3" className="mr-2 ml-1" />
                            <p className="mr-5">中学校</p>
                        </div>
                        <div  className="flex items-center">
                            <input type="checkbox" name="type" value="4" className="mr-2 ml-1" />
                            <p className="mr-5">高等学校・高等専門学校</p>
                        </div>
                        <div  className="flex items-center">
                            <input type="checkbox" name="type" value="5" className="mr-2 ml-1" />
                            <p className="mr-5">特別支援学校</p>
                        </div>
                        <div  className="flex items-center">
                            <input type="checkbox" name="type" value="6" className="mr-2 ml-1" />
                            <p className="mr-5">フリースクール</p>
                        </div>
                    </div>
                </div>
                <div className="mb-2">
                    <h2 className="text-lg font-bold mb-3">エリア</h2>
                    <input type="text" name="area" placeholder="地名を入力" className="ml-1" />
                </div>
            </form>
        </div>
    )
}