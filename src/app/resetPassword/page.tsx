"use client"
import { useState } from 'react';
import { AuthError } from '@supabase/supabase-js';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


/**
 * パスワードリセット前のメール送信用画面
 */
const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [error, setError] = useState<AuthError | null>(null);
	 
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const supabase = createClientComponentClient()
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${location.origin}/resetPassword/inputPassword`,
      });
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
             <p>メールを送信しました</p>
        </div>
    )
  }
  
  return (
    <div>
     <p>アカウントに結びついているメールアドレスを入力してください</p>
     <form onSubmit={onSubmit}>
        <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="メールアドレス" />
        <button type="submit">送信</button>
      </form>
    </div>
  );
}

export default ResetPassword