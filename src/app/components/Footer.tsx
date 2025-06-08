import Link from "next/link";
import Image from "next/image";
import { RESERVATION_URL } from "../../../config";

export default function Footer() {
  return (
    <footer className="bg-[#1A2A44] text-white text-center py-8 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.1)_0%,_rgba(255,255,255,0)_70%)]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-center mb-6">
          <Image
            src="/images/name_logo.png"
            alt="Tut Huts RV Park Logo"
            width={300}
            height={300}
            className="w-40 h-auto object-contain translate-x-4"
          />
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium mb-2">(202) 530-0408</p>
          <p className="text-sm">12465 Tutwiler Rd, Parrish, AL 35580</p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://www.facebook.com/tuthuts/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/facebook-icon.png"
              alt="facebook logo"
              width={30}
              height={30}
              className="w-7 h-7"
            />
          </a>
        </div>
        <div className="space-x-1 mb-6">
          <Link
            href="/contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>{""}|{" "}
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Book
          </a>
        </div>
        <p className="text-xs opacity-80">
          © 2025 Tut Huts RV Park. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
