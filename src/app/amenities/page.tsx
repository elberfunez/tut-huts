import Image from 'next/image';
import {
  WashingMachine,
  Wifi,
  Dog,
  Plug,
  Utensils,
  Car,
  TreePalm,
  Check,
  Flame,
  ShowerHead,
  ArrowRightCircle,
  ArrowLeftCircle,
  Cloud,
  Accessibility,
  Snowflake,
} from 'lucide-react';

export const metadata = {
  title: 'Amenities | Tut Huts RV Park',
  description: 'Explore the full list of amenities offered at Tut Huts RV Park in Parrish, Alabama.',
};

const amenities = [
  { icon: WashingMachine, label: 'Laundry Facilities' },
  { icon: Wifi, label: 'Free Wi-Fi' },
  { icon: Dog, label: 'Pet Friendly' },
  { icon: Utensils, label: 'Picnic Tables' },
  { icon: Car, label: 'Easy Highway Access' },
  { icon: TreePalm, label: 'Quiet, Shaded Spots' },
  { icon: Plug, label: '30/50 Amp Service' },
  { icon: Check, label: 'Full Hookup Sites (Water, Sewer, Electric)' },
  { icon: Flame, label: 'Fire Ring' },
  { icon: ShowerHead, label: '24/7 Bathhouse Access' },
  { icon: Snowflake, label: 'Ice Machines' },
  { icon: ArrowRightCircle, label: 'Pull-through Sites' },
  { icon: ArrowLeftCircle, label: 'Back-in Sites' },
  { icon: Cloud, label: 'Shaded Sites' },
  { icon: Accessibility, label: 'Accessible Sites' },
];

export default function Amenities() {
  return (
    <main className="min-h-screen bg-white text-gray-800">
      {/* Hero Section */}
      <section role="banner" className="relative h-64 w-full">
        <Image
          src="/images/sitelot1.jpg"
          alt="Tut Huts RV Park Amenities"
          fill
          className="object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">Our Amenities</h1>
        </div>
      </section>

      {/* Intro Text */}
      <section role="region" aria-labelledby="intro-text" className="max-w-4xl mx-auto px-4 py-10 text-center">
        <h2 id="intro-text" className="sr-only">Overview</h2>
        <p className="text-lg md:text-xl">
          At Tut Huts RV Park, we strive to provide a relaxing and convenient experience for all our guests.
          Here’s what you can expect when you stay with us:
        </p>
      </section>

      {/* Amenities Grid */}
      <section role="region" aria-labelledby="amenities-heading" className="max-w-6xl mx-auto px-4 pb-16">
        <h2 id="amenities-heading" className="text-2xl font-semibold mb-8 text-center">Amenities We Offer</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none">
          {amenities.map(({ icon: Icon, label }, index) => (
            <li
              key={index}
              className="flex flex-col items-center justify-center text-center bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <Icon className="text-green-600 w-12 h-12 mb-4" />
              <span className="text-lg font-medium">{label}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
