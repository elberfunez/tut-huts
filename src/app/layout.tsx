import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tut Huts RV Park',
  description: 'RV park camping in Walker County, Alabama.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Navbar */}
        <header className="bg-white border-b shadow-sm px-6 py-4">
          <nav className="max-w-5xl mx-auto flex gap-6 text-lg font-medium text-gray-700">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/reservations" className="hover:text-blue-600">Reservations</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </header>

        {/* Page Content */}
        <main className="max-w-5xl mx-auto mt-6 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}
