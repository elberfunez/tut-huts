"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { RESERVATION_URL } from "../../../config";

interface NavSubItem {
  title: string;
  href: string;
}

interface NavItem {
  title: string;
  href?: string;
  subItems?: NavSubItem[];
}

const navItems: NavItem[] = [
  {
    title: "Info",
    subItems: [
      { title: "About", href: "/about" },
      { title: "Amenities", href: "/amenities" },
      { title: "Policies", href: "/policies" },
      { title: "Park Map", href: "/parkmap" },
    ],
  },
  { title: "Rates", href: "/rates" },
  { title: "Gallery", href: "/gallery" },
  { title: "Contact", href: "/contact" },
  { title: "Explore", href: "/explore" },
];

export default function Navbar2() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMobileMenuOpen(false);
        setMobileDropdownOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isActive = (href?: string) => href && pathname === href;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setMobileDropdownOpen(false);
  };

  const baseLinkClasses =
    "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const activeClass = "bg-gray-200 font-semibold";

  return (
    <nav
      className="bg-white shadow-md z-50 sticky top-0"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-20 h-20 sm:w-20 sm:h-20 lg:w-22 lg:h-22">
              <Image
                src="/images/entire_logo_transparent.png"
                alt="Tut Huts RV Park Logo"
                fill
                className="object-contain"
                loading="lazy"
              />
            </div>
          </Link>

          {/* Desktop menu */}
          <div className="hidden sm:flex space-x-4">
            {navItems.map((item) =>
              item.subItems ? (
                <div key={item.title} className="relative group">
                  <button
                    className={`${baseLinkClasses} text-gray-900 hover:bg-gray-200 flex items-center`}
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {item.title}
                    <svg
                      className="ml-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  <div className="absolute left-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <div className="grid grid-cols-1 gap-2 p-4 w-48">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="text-gray-600 hover:text-indigo-600"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href!}
                  className={`${baseLinkClasses} ${
                    isActive(item.href)
                      ? activeClass
                      : "text-gray-900 hover:bg-gray-200"
                  }`}
                >
                  {item.title}
                </Link>
              )
            )}
            <a
              href={RESERVATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700"
              title="Reserve a stay at Tut Huts RV Park"
            >
              Book Now
            </a>
          </div>

          {/* Mobile toggle button */}
          <div className="sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    mobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pb-4 space-y-1">
          {navItems.map((item) =>
            item.subItems ? (
              <div key={item.title}>
                <button
                  onClick={() => setMobileDropdownOpen(!mobileDropdownOpen)}
                  className="w-full text-left flex justify-between items-center text-gray-900 hover:bg-gray-200 px-3 py-2 rounded-md text-base font-medium"
                  aria-haspopup="true"
                  aria-expanded={mobileDropdownOpen}
                >
                  {item.title}
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                {mobileDropdownOpen && (
                  <div className="ml-4 space-y-1">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.href}
                        href={sub.href}
                        onClick={handleLinkClick}
                        className="block text-gray-600 hover:text-indigo-600"
                      >
                        {sub.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={handleLinkClick}
                className={`${baseLinkClasses} block text-gray-900 hover:bg-gray-200 ${
                  isActive(item.href) ? activeClass : ""
                }`}
              >
                {item.title}
              </Link>
            )
          )}
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-700"
            onClick={handleLinkClick}
          >
            Reserve
          </a>
        </div>
      )}
    </nav>
  );
}
