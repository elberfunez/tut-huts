import Link from "next/link";
import Image from "next/image";
import * as config from "../../../config";


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
            className="w-24 h-auto object-contain translate-x-2"
          />
        </div>
        <div className="mb-6">
          <p className="text-lg font-medium mb-2">
            <a
              href={`tel:${config.PARK_PHONE_NUMBER}`}
              className="hover:underline underline-offset-4 transition"
            >
              {config.PARK_PHONE_NUMBER}
            </a>
          </p>
          <p className="text-sm">
            <a
              href="https://www.google.com/maps/dir//Tut+Huts+RV+Park,+Tutwiler+Road,+Parrish,+AL/@33.6670018,-87.2873456,13z/data=!4m9!4m8!1m0!1m5!1m1!1s0x88888daf527c4815:0xb9b16721e98e5a21!2m2!1d-87.2461461!2d33.6670086!3e0?entry=ttu&g_ep=EgoyMDI1MDYwNC4wIKXMDSoASAFQAw%3D%3D"
              className="hover:underline underline-offset-4 transition"
              target="_blank"
            >
              {config.PARK_ADDRESS}
            </a>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href={config.FACEBOOK_URL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/facebook-icon.png"
              alt="facebook logo"
              width={50}
              height={50}
              className="w-10 h-10"
            />
          </a>
          <a
            href={config.RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/campspot_img.jpg"
              alt="Campspot logo"
              width={1000}
              height={1000}
              className="w-19 h-10"
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
            href={config.RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            Book
          </a>
        </div>
        <p className="text-xs opacity-80">
          © {new Date().getFullYear()} Tut Huts RV Park. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
