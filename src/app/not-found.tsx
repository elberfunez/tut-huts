import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Tut Huts RV Park',
  description: 'The page you are looking for could not be found. Please return to our homepage.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1A2A44] to-[#2a5d6b] text-white px-4">
      <div className="text-center max-w-2xl">
        <h1 className="text-7xl md:text-9xl font-bold mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track!
        </p>

        <nav className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
          <Link
            href="/"
            className="inline-block bg-[#31b0b4] text-white font-bold py-3 px-8 rounded-full hover:bg-[#2a9ba0] transition-all duration-300 transform hover:scale-105"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-transparent border-2 border-[#31b0b4] text-[#31b0b4] font-bold py-3 px-8 rounded-full hover:bg-[#31b0b4] hover:text-white transition-all duration-300"
          >
            Contact Us
          </Link>
        </nav>

        <div className="mt-12 pt-8 border-t border-white/20">
          <p className="text-gray-400 mb-4">Quick Links:</p>
          <ul className="flex flex-wrap justify-center gap-4 text-sm">
            <li>
              <Link href="/amenities" className="hover:text-[#31b0b4] transition">
                Amenities
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-[#31b0b4] transition">
                Gallery
              </Link>
            </li>
            <li>
              <Link href="/rates" className="hover:text-[#31b0b4] transition">
                Rates
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-[#31b0b4] transition">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
