'use client';

import { useState } from 'react';

import { Accordion } from './components/accordion';

export default function HomePage() {
  // MEMO: useState 関数を使用してすると状態の値が格納された state 変数と、その状態を更新するための関数が返される
  const [isOpenAccordion1, setIsOpenAccordion1] = useState(false);
  const [isOpenAccordion2, setIsOpenAccordion2] = useState(false);

  const handleClickAccordion1 = () => {
    setIsOpenAccordion1(!isOpenAccordion1);
    // MEMO: ↑ は以下のコードと同じ意味
    // if (isOpenAccordion1) {
    //   setIsOpenAccordion1(false)
    // } else {
    //   setIsOpenAccordion1(true)
    // }
  };
  const handleClickAccordion2 = () => {
    setIsOpenAccordion2(!isOpenAccordion2);
  };

  return (
    <div className="container">
      <h1 className="heading-1">開閉するアコーディオンを作成してみよう</h1>
      <p className="description">
        今回は Web サイトの FAQ コーナーなどでよく使用される開閉式のテキスト (アコーディオン) を実装してみましょう。
        <br />
        アコーディオンが開いているのか閉じているのかは、ユーザーが要素をクリックしたタイミングで都度切り替わります。
        <br />
        このようにユーザーの操作などで都度変化する値を Next.js では状態と呼び、 useState
        という関数を使用することで定義することができます。
      </p>

      <section className="section">
        <h2 className="heading-2">アコーディオンを作成して state を体験しよう</h2>
        <div className="accordions">
          <div className="accordion" data-is-open={isOpenAccordion1}>
            <div className="accordion__trigger" onClick={handleClickAccordion1}>
              アコーディオン1
            </div>
            <div className="accordion__content">アコーディオン1が開いているときのみ表示される</div>
          </div>
          <div className="accordion" data-is-open={isOpenAccordion2}>
            <div className="accordion__trigger" onClick={handleClickAccordion2}>
              アコーディオン2
            </div>
            <div className="accordion__content">アコーディオン2が開いているときのみ表示される</div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-2">アコーディオンをコンポーネントとして別ファイルで定義しよう！</h2>
        <p className="description">サンプルコード 1 のコードだと、以下のようなデメリットがあります。</p>
        <ul>
          <li>アコーディオンの html コードを何回も記述する必要がある</li>
          <li>state 変数とクリック時に実行する関数を都度定義する必要があり、コードが肥大化する</li>
        </ul>
        <p className="description">
          Next.js (React) では、上記のようなデメリットを解消するための機能としてコンポーネント機能というものがあります。
          <br />
          これは同じような機能や見た目を持つ要素をパーツとして定義し、必要な箇所で呼び出して再利用ができる機能となります。
        </p>
        <div className="accordions">
          {/* MEMO: Accordion コンポーネントを使用してアコーディオン要素を出力してみましょう */}
          {/* それぞれの開閉状態 (state) やクリック時の関数は、コンポーネント内で定義されているため、新たに用意する必要はありません */}
          <Accordion heading="アコーディオン3">アコーディオン3が開いているときのみ表示される</Accordion>
          <Accordion heading="アコーディオン4">アコーディオン4が開いているときのみ表示される</Accordion>
        </div>
      </section>
    </div>
  );
}
