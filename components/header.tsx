import React from 'react';
import Image from 'next/image';
import logo from '../images/logo.jpg';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="flex items-center">
          <Image src={logo} alt="Logo" width={50} height={50} className="object-cover" />
          <span className="ml-3 text-xl font-bold">My Website</span>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#about" className="text-gray-700 hover:text-gray-900">About</a></li>
            <li><a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;