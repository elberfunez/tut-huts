import Image from "next/image";
import * as config from '../../config';

export const metadata = {
  title: "Tut Huts RV Park – RV Camping in Walker County, Alabama",
  description:
    "Book your stay at Tut Huts RV Park in Parrish, AL. Enjoy peaceful camping, full hookups, and beautiful scenery in the heart of Walker County, Alabama.",
};

interface Feature {
  icon: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  name: string;
}

export default function HomePage() {
  const parkFeatures: Feature[] = [
    { icon: "🚐", title: "Full Hookups", desc: "Water, sewer, and 50/30 AMP electric at every site." },
    { icon: "🌲", title: "Quiet & Scenic", desc: "Enjoy peaceful surroundings under Alabama skies." },
    { icon: "🐾", title: "Pet Friendly", desc: "Bring your furry friends—everyone is welcome!" },
  ];

  const testimonials: Testimonial[] = [
    {
      quote: "We’ve been staying here for 2 months and it’s excellent! The price is super reasonable, it’s very quiet, beautiful forest, and spacious spots for the camper. If you need an escape this is the perfect place!",
      name: "Brittany W.",
    },
    {
      quote: "I'm a travel nurse so I have stayed at a lot of rv parks...this one has set the bar high..literally 20min drive to everything you may need for your stay...I love ❤️ this RV park",
      name: "Rosalind C.",
    },
    {
      quote: "Very nice RV park. Quite and out of town",
      name: "Peggy W.",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-white">
        <Image
          src="/images/droneshot1.png"
          alt="RV Park Scenery"
          fill
          priority
          className="object-cover brightness-[0.6]"
        />
        <div className="z-10 text-center px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-md">
            Tut Huts RV Park
          </h1>
          <p className="mt-4 text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Peaceful RV camping in the heart of Walker County, Alabama.
          </p>
          <a
            href={config.RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6"
          >
            <button className="bg-[#31b0b4] text-white font-bold py-3 px-8 rounded-full shadow-xl hover:bg-[#2a9ba0] hover:scale-105 transition-all duration-300 transform">
              Book Now
            </button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10">Why Stay With Us?</h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {parkFeatures.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-white py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Find Us</h2>
        <div className="w-full max-w-4xl mx-auto aspect-video shadow-lg rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6101273160116!2d-87.2488376235454!3d33.667262573304576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88888c99902c87c5%3A0x6d15c597443531ff!2s12465%20Tutwiler%20Rd%2C%20Parrish%2C%20AL%2035580!5e0!3m2!1sen!2sus!4v1749329089559!5m2!1sen!2sus"
            className="w-full h-full"
            allowFullScreen
            loading="lazy"
            style={{ border: 0 }}
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-gradient-to-b from-white to-blue-50">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Are Saying</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-lg border hover:shadow-xl transition-shadow duration-300"
            >
              <p className="italic text-lg text-gray-700 mb-4">“{t.quote}”</p>
              <div className="text-sm font-semibold text-gray-800">{t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
