import React from 'react';
import Head from 'next/head';

const skills = [
  { category: 'Frontend', details: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { category: 'Backend', details: ['Node.js', 'Python（勉強中）', 'FastAPI', 'Prisma', 'Go（勉強中）'] },
  { category: 'Database', details: ['PostgreSQL', 'MySQL'] },
  { category: 'Other', details: ['AWS（勉強中）'] },
];

const Skills = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Skills - Yuka's Portfolio</title>
        <meta name="description" content="A breakdown of my professional skills." />
      </Head>
      <div className=" rounded-lg p-8 m-4 flex flex-row justify-between items-center w-full" style={{ maxWidth: '900px' }}>
        <div className="flex flex-col justify-center items-center w-full mt-8">
          <h2 className="text-3xl font-bold mb-4">Skills</h2>
          <div className="flex flex-col justify-center items-center w-full mt-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-8 m-4 w-full" style={{ maxWidth: '600px' }}>
                <h2 className="text-2xl font-bold mb-4">{skill.category}</h2>
                <ul className="list-disc pl-5 text-gray-700">
                  {skill.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
     </div>
  );
};

export default Skills;