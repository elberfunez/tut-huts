// src/app/amenities/page.tsx
import Image from 'next/image';

export const metadata = {
  title: 'Amenities | Tut Huts RV Park',
  description: 'Explore the full list of amenities offered at Tut Huts RV Park in Parrish, Alabama.',
};

const amenities = [
  'Full Hookup Sites (Water, Sewer, Electric)',
  '30/50 Amp Service',
  'Laundry Facilities',
  'Free Wi-Fi',
  'Pet Friendly',
  'Picnic Tables',
  'On-Site Management',
  'Easy Highway Access',
  'Quiet, Shaded Spots',
];

export default function Amenities() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero */}
      <section className="relative h-64 w-full">
        <Image
          src="/images/rv-amenities-hero.jpg" // Use a real image path
          alt="Tut Huts RV Park Amenities"
          layout="fill"
          objectFit="cover"
          className="brightness-75"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Amenities</h1>
        </div>
      </section>

      {/* Intro Text */}
      <section className="max-w-4xl mx-auto px-4 py-10 text-center">
        <p className="text-lg md:text-xl">
          At Tut Huts RV Park, we strive to provide a relaxing and convenient experience for all our guests. Here’s what you can expect when you stay with us:
        </p>
      </section>

      {/* Amenities List */}
      <section className="max-w-3xl mx-auto px-4 pb-16">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-lg">
          {amenities.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-green-600 text-xl mt-1">✔</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
