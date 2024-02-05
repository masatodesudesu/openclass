import { Dispatch, SetStateAction } from "react";
import Link from 'next/link';

export default function SignInForm(props: {
  showModal: Dispatch<SetStateAction<boolean>>;
}) {
  const { showModal } = props;
  return (
    <form action="/auth/login" method="post" className="space-y-4">
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
        />
      </div>
      <div>
        <Link href={`${location.origin}/resetPassword`} onClick={() => showModal(false)}>パスワードを忘れた場合</Link>
      </div>
      <div>
        <button>
          サインイン
        </button>
      </div>
    </form>
  );
}