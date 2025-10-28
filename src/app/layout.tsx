import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import Footer from './components/Footer';
import Navbar2 from './components/NavBar2';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tut Huts RV Park | Full Hookup RV Camping in Parrish, AL',
  description: 'Premium RV park in Parrish, Alabama with full hookups, pet-friendly sites, and scenic camping. Book your peaceful escape today!',
  keywords: 'RV park Parrish AL, Walker County camping, full hookup RV sites, RV camping Alabama',
  icons: {
    icon: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Tut Huts RV Park | Full Hookup RV Camping in Parrish, AL',
    description: 'Premium RV park in Parrish, Alabama with full hookups, pet-friendly sites, and scenic camping.',
    url: 'https://tuthutsrvpark.com',
    siteName: 'Tut Huts RV Park',
    type: 'website',
    images: [
      {
        url: '/images/droneshot1.webp',
        width: 1200,
        height: 630,
        alt: 'Tut Huts RV Park Aerial View',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tut Huts RV Park | Full Hookup RV Camping in Parrish, AL',
    description: 'Premium RV park in Parrish, Alabama with full hookups, pet-friendly sites, and scenic camping.',
    images: ['/images/droneshot1.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://tuthutsrvpark.com',
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=5.0',
  themeColor: '#31b0b4',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics 4 */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script
              id="google-analytics"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
                `,
              }}
            />
          </>
        )}
      </head>
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
