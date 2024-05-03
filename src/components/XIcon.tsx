import Image from 'next/image';
import { FC } from 'react';

const XIcon: FC = () => {
  return (
    <div>
      <Image
        src="/xアイコン.jpeg"
        alt="X Icon"
        width={50}  // 画像の幅を指定
        height={50} // 画像の高さを指定
        // layout="responsive" // 必要に応じてレイアウトを設定
      />
    </div>
  );
}

export default XIcon ;
