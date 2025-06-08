'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { RESERVATION_URL } from '../../../config';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-teal-50 border-b border-teal-100 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/entire_logo_transparent.png"
              alt="Tut Huts Logo"
              width={100}
              height={100}
              priority
            />
          </Link>


          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-6">
            <NavLinks />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-gray-600 hover:text-teal-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <NavLinks mobile />
        </div>
      )}
    </nav>
  );
}

function NavLinks({ mobile = false }: { mobile?: boolean }) {
  const linkStyle = mobile
  ? 'block text-teal-800 hover:text-teal-600 hover:underline underline-offset-4 font-medium'
    : 'text-teal-800 hover:text-teal-600 hover:underline underline-offset-4 transition font-medium';


  return (
    <>
      <Link href="/" className={linkStyle}>
        Home
      </Link>
      <Link href="/rates" className={linkStyle}>
        Rates
      </Link>
      <Link href="/gallery" className={linkStyle}>
        Gallery
      </Link>
      
      <Link href="/about" className={linkStyle}>
        About
      </Link>
      <a
        href={RESERVATION_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={linkStyle}
      >
        Reservations
      </a>
      <Link href="/contact" className={linkStyle}>
        Contact
      </Link>
    </>
  );
}
