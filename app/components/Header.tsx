"use client"

import { useState } from 'react';
import { IoIosCall } from "react-icons/io";
import { AiOutlineSearch, AiOutlineDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../assets/Logo.png';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-black py-4">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <Link href="/">
          <Image src={Logo} alt="Logo" width={210} height={50} />
        </Link>
        
        {/* Hamburger menu button (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <AiOutlineClose size={25} className="text-white" /> : <AiOutlineMenu size={25} className="text-white" />}
          </button>
        </div>

        {/* Desktop menu */}
        <ul className={`hidden md:flex space-x-20`}>
          <li>
            <Link href="/" className="flex items-center hover:text-blue-500">
              Who we are
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center hover:text-blue-500">
              What we do
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center hover:text-blue-500">
              Insights
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li>
            <Link href="/" className="flex items-center hover:text-blue-500">
              Careers
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
        </ul>

        {/* Desktop right section */}
        <div className="hidden md:flex items-center">
          <AiOutlineSearch size={25} className="mx-4 mt-2 text-white" />
          <button className="flex bg-gray-600 text-white px-4 py-2 rounded items-center">
            <IoIosCall size={22} className="mx-2" /> Contact Us
          </button>
        </div>

        {/* Mobile menu */}
        <ul className={`md:hidden fixed top-0 left-0 h-full w-full bg-black p-8 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform`}>
          <li className="mb-4">
            <Link href="/" className="flex items-center hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>
              Who we are
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/" className="flex items-center hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>
              What we do
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/" className="flex items-center hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>
              Insights
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li className="mb-4">
            <Link href="/" className="flex items-center hover:text-blue-500" onClick={() => setIsMobileMenuOpen(false)}>
              Careers
              <AiOutlineDown className="ml-2" />
            </Link>
          </li>
          <li className="flex items-center mb-4">
            <AiOutlineSearch size={25} className="text-white mr-4" />
            <button className="flex bg-gray-600 text-white px-4 py-2 rounded items-center">
              <IoIosCall size={22} className="mx-2" /> Contact Us
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
