"use client"
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 text-center p-4 shadow-md">
      <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
