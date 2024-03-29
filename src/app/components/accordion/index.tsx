import { useState } from 'react';

// MEMO: 画面を構成するパーツとなるコンポーネントは、JavaScript の関数として定義することができます。
// コンポーネント関数は Props 引数という特別な引数を受け取ることができ、
// その Props 引数によってコンポーネントで表示する内容などを変更することができます。
// ここでは見出しとなる heading と、開閉するコンテンツを children の 2 つを Props として受け取るようにしています。
export const Accordion = ({ heading, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion" data-is-open={isOpen}>
      <div className="accordion__trigger" onClick={handleClick}>
        {heading}
      </div>
      <div className="accordion__content">{children}</div>
    </div>
  );
};
