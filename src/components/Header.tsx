"use client"
import React from 'react';
import Link from 'next/link';
// import Image from 'next/image';
import { HomeIcon, UserIcon, StarIcon, CogIcon } from '@heroicons/react/outline';
import XIcon from './XIcon';

const Header = () => {
 return (
    <header className="bg-white text-gray-800 shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Yuka's Portfolio</h1>
      <nav className="flex">
        <Link href="/" className="flex items-center mx-2 hover:text-blue-500">
            <HomeIcon className="h-5 w-5 mr-1" />
            Home
        </Link>
        <Link href="/profile" className="flex items-center mx-2 hover:text-blue-500">
            <UserIcon className="h-5 w-5 mr-1" />
            Profile
        </Link>
        <Link href="/achievements"className="flex items-center mx-2 hover:text-blue-500">
            <StarIcon className="h-5 w-5 mr-1" />
            Achievements
        </Link>
        <Link href="/skill" className="flex items-center mx-2 hover:text-blue-500">
            <CogIcon className="h-5 w-5 mr-1" />
            Skills
        </Link>
        <Link href="https://x.com/tomonewlife" className="flex items-center mx-2 hover:text-blue-500">
        <XIcon />
        </Link>
      </nav>
    </header>
 );
};

export default Header;
