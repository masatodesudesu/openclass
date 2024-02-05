import Image from 'next/image';
import Link from 'next/link';
import styles from './header.module.css';
import ModalCore from '../modalCore';
import { ModalType } from '../modal/modalType';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
            <Image 
              src="/header-logo.png" 
              alt="OpenClass" 
              width={150}
              height={50} 
            />
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/intro/individual">個人の方へ</Link>
        <Link href="/intro/organization">団体の方へ</Link>
        <Link href="/intro/recruiter">教育機関の方へ</Link>
        <Link href="/help">ヘルプ・問い合わせ</Link>
      </nav>
      <div className={styles.auth}>
        <div>
          <ModalCore modalType={ModalType.SignIn}></ModalCore>
        </div>
        <div>
          <ModalCore modalType={ModalType.SignUp}></ModalCore>
        </div>
      </div>
    </header>
  );
};
