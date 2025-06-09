import './globals.css';
import { Inter } from 'next/font/google';
import Footer from './components/Footer';
import Navbar2 from './components/NavBar2';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tut Huts RV Park',
  description: 'RV park camping in Walker County, Alabama.',
  icons: {
    icon: '/img_logo.png',
  },
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
        <Navbar2 />

        {/* Page Content */}
        <main className="max-w-5xl mx-auto mt-6 px-4">
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
