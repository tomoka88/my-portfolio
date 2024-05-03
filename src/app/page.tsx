"use client"
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

function Home() {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Yuka's Portfolio</title>
        <meta name="description" content="Welcome to my professional portfolio website." />
      </Head>
      <div className="flex flex-row justify-center items-center w-full mt-8">
        <div className="bg-white shadow-lg rounded-lg p-8 m-4 flex flex-row justify-between items-center w-full" style={{ maxWidth: '900px' }}>
          <div className="flex flex-col justify-center mr-4" style={{ flex: 1 }}>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <h3 className="text-gray-700">Yukaのポートフォリオページにようこそ！</h3>
            <p className="text-gray-700">
              長年勤めてきた信用金庫を退職し、2024年2月にMs.Engineerのプログラミングブートキャンプに参加し、同年4月卒業。
              現在、就職活動しながら一人前のエンジニアになるべく学習継続中。
              おてんばな６歳の娘が一人賑やかに暮らしています。
            </p>
            <Link href="/profile">
              <p className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Learn More</p>
            </Link>
          </div>
          <div className="flex-shrink-0" style={{ width: '400px', height: '400px' }}>
            <Image src="/桜.png" alt="Profile Image" width={400} height={400} className="rounded-b-l" priority style={{ objectFit: 'contain' }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;




// /* eslint-disable @next/next/no-img-element */
// "use client"
// import Link from 'next/link';
// import Head from 'next/head';
// import Image from 'next/image';

// function Home() {
//  return (
//     <div className="flex flex-col min-h-screen justify-center items-center">
//       <Head>
//         <title>Yuka's Portfolio</title>
//         <meta name="description" content="Welcome to my professional portfolio website." />
//       </Head>
//       <div className="flex flex-row justify-center items-center w-full mt-8">
//         <div className="bg-white shadow-lg rounded-lg p-8 m-4 w-1/2" style={{ maxWidth: '600px' }}>
//           <h2 className="text-2xl font-bold mb-4">About Me</h2>
//           <h3 className="text-gray-700">
//           Yukaのポートフォリオページにようこそ！
//           </h3>
//           <p className="text-gray-700">
//           <br />
//           　長年勤めてきた信用金庫を退職し、2024年2月にMs.Engineerのプログラミングブートキャンプに参加し、同年4月卒業。<br />
//           現在、就職活動しながら一人前のエンジニアになるべく学習継続中。<br />
//           おてんばな６歳の娘が一人賑やかに暮らしています。
//           </p>
//           <Link href="/profile">
//             <p className="mt-4 inline-block bg-blue-500 text-white p-2 rounded hover:bg-blue-600">Learn More</p>
//           </Link>
//         </div>
//         <div className="relative m-4 w-1/2" style={{ maxWidth: '400px', height: '400px' }}>
//           <Image src="/桜.png" alt="Profile Image" width={400} height={400} className="rounded-b-l" priority style={{ objectFit: 'contain' }} />
//         </div>
//       </div>
//     </div>
//  );
// }

// export default Home;



