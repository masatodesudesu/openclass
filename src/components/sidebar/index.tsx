import React from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
    return (
        <div className={styles.sidebar}>
            <ul className={styles.sidebarList}>
                <li className={styles.sidebarItem}>ホーム</li>
                <li className={styles.sidebarItem}>プロフィール</li>
                <li className={styles.sidebarItem}>設定</li>
                {/* 他のリストアイテムを追加 */}
            </ul>
        </div>
    );
};