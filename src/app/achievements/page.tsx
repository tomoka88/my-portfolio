"use client"
import React from 'react';
import Head from 'next/head';

const achievements = [
  { year: '2024年4月26日', description: 'Ms.Engineer卒業制作「Bu.Ra.Ri-さんぽっと-」' },
];

const Achievements = () => {
  return (
    <div className="flex flex-col justify-center items-center" style={{ minHeight: '100vh' }}> {/* minHeightを100vhに設定し、画面の高さ全体を使用 */}
      <Head>
        <title>Achievements - Yuka's Portfolio</title>
      </Head>
      <h1 className="text-3xl font-bold mt-5 mb-4">Achievements</h1> {/* ヘッダー部分 */}
      <div className="bg-white shadow-lg rounded-lg p-8 m-4 flex flex-col justify-center items-center" style={{ maxWidth: '900px', width: '100%' }}> {/* flex-colで縦方向の配置を整える */}
        {/* <h1 className="text-3xl font-bold mt-5 mb-4">Achievements</h1> ヘッダー部分 */}
        {achievements.map((item, index) => (
          <div key={index} className="mb-3 w-full text-center"> {/* 各成果を中央揃えで表示 */}
            <h3 className="text-lg font-semibold">{item.year}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

// "use client"
// import React from 'react';
// import Head from 'next/head';

// const achievements = [
//   { year: '2024年4月26日', description: 'Ms.Engineer卒業制作「Bu.Ra.Ri-さんぽっと-」' },
// ];

// const Achievements = () => {
//   return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//       <Head>
//         <title>Achievements - Yuka's Portfolio</title>
//       </Head>
//     <div />
//     <div className=" rounded-lg p-8 m-4 flex flex-row justify-between items-center w-full" style={{ maxWidth: '900px' }}>
//         <div className="text-center p-5">
//           <h1 className="text-3xl font-bold mt-5">Achievements</h1>
//           <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-full" >
//           {achievements.map((item, index) => (
//         <div key={index} className="mb-3">
//           <h3 className="text-lg font-semibold">{item.year}</h3>
//           <p>{item.description}</p>
//         </div>
//           ))}
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Achievements;