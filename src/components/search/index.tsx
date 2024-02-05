"use client"

import React, { useState } from 'react';
import styles from './search.module.css';

export default function Search() {
  const [showModal, setShowModal] = useState(false);

  const handleSearch = (e: any) => {
    e.preventDefault();
    // You can add the logic to perform the search here
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.searchContainer}>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="キーワードを入力"
        />
        <button type="button" className={styles.filterButton} onClick={openModal}>
          絞り込み
        </button>
        {showModal && (
          <div className={styles.modal}>
            {/* Modal content goes here */}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </form>
    </div>
  );
};