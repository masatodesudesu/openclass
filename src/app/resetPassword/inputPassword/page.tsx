"use client"
import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

/* パスワードリセット用画面 */
const InputPasswordForReset = () => {
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
	 
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient()
      const { error } = await supabase.auth.updateUser({ password: password });
      if (error) {
        setError(error);
	    throw error;
      } 
      setIsSend(true);
    } catch (error) {
      console.log(error);
    }
  };
  
  if (error) {
    return (
        <div>
             <p>エラーが発生しました</p>
        </div>
    )
  }
  
  if (isSend) {
    return (
        <div>
             <p>パスワードを更新しました</p>
        </div>
    )
  }
  
  return (
    <div>
      <p>新しいパスワードを入力してください</p>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="password">
            パスワード
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className='pt-5'>
          <label htmlFor="passwordConf">
            パスワード（確認）
          </label>
          <input
            type="password"
            name="passwordConf"
            id="passwordConf"
            placeholder="••••••••"
            required
            value={passwordConf}
            onChange={(e) => setPasswordConf(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
    </div>
  );
}

export default InputPasswordForReset