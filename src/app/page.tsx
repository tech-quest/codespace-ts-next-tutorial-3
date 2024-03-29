'use client';

export default function HomePage() {
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
    </div>
  );
}
