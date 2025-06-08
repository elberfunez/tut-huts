import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

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
        <Navbar />

        {/* Page Content */}
        <main className="max-w-5xl mx-auto mt-6 px-4">
          {children}
        </main>
        <Footer />
      </body>
      
    </html>
  );
}
