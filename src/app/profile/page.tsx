"use client"
import Image from 'next/image';
import React from 'react';
import Head from 'next/head';

const Profile = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Profile - Yuka's Portfolio</title>
        <meta name="description" content="A breakdown of my professional skills." />
      </Head>
      <div className=" rounded-lg p-8 m-4 flex flex-row justify-between items-center w-full" style={{ maxWidth: '900px' }}>
        <div className="text-center p-5">
          <h1 className="text-3xl font-bold mt-5">Yuka&apos;s Profile</h1>
          {/* プロフィール画像を表示 */}
          <div className="mx-auto w-32 h-32 relative overflow-hidden rounded-full border-2 border-gray-300">
            <Image src="/子.JPG" alt="Profile Image" layout="fill" objectFit="cover" />
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full" >
            <p className="text-gray-600 mt-3">出身&在住：東京都</p>
            <p className="text-gray-600 mt-3">出身校：東京農業大学</p>
            <p className="text-gray-600 mt-3">前職：都内信用金庫（2023年12月末退職）</p>
            <br />
            <p className="text-gray-600 mt-3">Ms.Engineerでプログラミングの基礎学習開始（2023年8月〜）</p>
            <p className="text-gray-600 mt-3">Ms.Engineerのブートキャンプ参加（2024年2月〜4月）</p>
            <br />
            <p className="text-gray-600 mt-3">現在：新しい言語など学習しながらエンジニアになるために就職活動中。</p>
            <br />
            <h2 className="text-xl text-gray-600 mt-5">Why Engineer?</h2>
            <p className="text-gray-600 mt-2">
              前職の信用金庫で多岐にわたる業界の企業と関わり、創造的な仕事への憧れが芽生えました。エンジニアは業界を問わず価値を生み出せる分野であり、継続的な学びを通じて専門性を高めていきたいと考えエンジニアを目指すことにしました。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
