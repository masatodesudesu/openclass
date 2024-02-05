"use client";
import { supabase } from "../../../utils/supabase/supabaseClient";
import { useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function SignUpForm(props: {
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { showModal } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");

  const onSubmit = async (event: any) => {
    event.preventDefault();
    showModal(false);
    try {
      const { error: signUpError } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });
      if (signUpError) {
        throw signUpError;
      }
      alert("登録完了メールを確認してください");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">
          メールアドレス
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="name@company.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
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
      <div>
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
        <button type="submit">
          サインアップ
        </button>
      </div>
    </form>
  );
}