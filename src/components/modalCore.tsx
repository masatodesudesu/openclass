"use client"

import { useState } from 'react';
import { ModalType } from './modal/modalType';
import SignUpForm from './modal/signupForm';
import SignInForm from './modal/signinForm';

interface Props {
  modalType: ModalType;
}

const ModalCore = ({ modalType }: Props) => {
  const [showModal, setShowModal] = useState(false);
  let title = "";
  let headerButton = "";
  let formElement = <p>フォームを読み込めませんでした。</p>;
  switch (modalType) {
    case ModalType.SignIn:
      title = "ログインフォーム";
      headerButton = "ログイン";
      formElement = <SignInForm showModal={setShowModal}></SignInForm>;
      break;

    case ModalType.SignUp:
      title = "ユーザ登録フォーム";
      headerButton = "新規登録";
      formElement = <SignUpForm showModal={setShowModal}></SignUpForm>;
      break;
  }
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
      >
        {headerButton}
      </button>
      {showModal ? (
        <>
          <div>
            <h3>
              {title}
            </h3>
            <button
              type="button"
              data-modal-hide="authentication-modal"
              onClick={() => setShowModal(false)}
            > 
              <svg
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span>モーダルを閉じる</span>
            </button>
          </div>
          <div>{formElement}</div>
        </>
      ) : null}
    </>
  );
};

export default ModalCore;