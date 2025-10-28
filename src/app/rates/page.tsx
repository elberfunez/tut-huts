import { RESERVATION_URL } from '../../../config';

export const metadata = {
  title: 'RV Park Rates & Pricing | Tut Huts RV Park',
  description:
    'Affordable RV camping rates at Tut Huts RV Park in Parrish, AL. Nightly, weekly, and monthly rates with full hookups included. Book your stay today!',
  openGraph: {
    title: 'RV Park Rates & Pricing | Tut Huts RV Park',
    description: 'Affordable RV camping rates at Tut Huts RV Park in Parrish, AL. Nightly, weekly, and monthly rates with full hookups included.',
    url: 'https://tuthutsrvpark.com/rates',
  },
  alternates: {
    canonical: 'https://tuthutsrvpark.com/rates',
  },
};

export default function RatesPage() {
  const rates = [
    {
      nightly: "$40",
      weekly: "$175",
      monthly: "$550",
      utilities: "INCLUDED!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2A44] to-[#2a5d6b] text-white mb-4">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
          Rates
        </h1>
        <p className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          Discover unbeatable value. <br /> Flexible Length Stays with 30 / 50A
          Service, sewage hookup, and city water.
        </p>

        {/* Desktop Table */}
        <div className="hidden sm:block bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl animate-slide-up">
          <table className="w-full table-fixed text-center text-base md:text-lg">
            <colgroup>
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
              <col className="w-1/4" />
            </colgroup>
            <thead>
              <tr className="border-b border-white/20">
                <th className="py-3 px-2 font-semibold">Nightly</th>
                <th className="py-3 px-2 font-semibold">Weekly</th>
                <th className="py-3 px-2 font-semibold">Monthly</th>
                <th className="py-3 px-2 font-semibold">Utilities</th>
              </tr>
            </thead>
            <tbody>
              {rates.map((rate, index) => (
                <tr
                  key={index}
                  className="border-b border-white/10 hover:bg-white/5 transition-colors"
                >
                  <td className="py-4 px-2 text-green-400">{rate.nightly}</td>
                  <td className="py-4 px-2 text-green-400">{rate.weekly}</td>
                  <td className="py-4 px-2 text-green-400">{rate.monthly}</td>
                  <td className="py-4 px-2 text-green-400">{rate.utilities}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-300 mt-6">
            Rates are all-inclusive and subject to availability. Additional fees
            may apply for extra services. Contact us for seasonal discounts!
          </p>
        </div>

        {/* Mobile Stacked Cards */}
        <div className="sm:hidden space-y-6 animate-slide-up">
          {rates.map((rate, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 shadow-2xl space-y-2"
            >
              <p>
                <span className="font-semibold">Nightly: </span>
                <span className="text-green-400">{rate.nightly}</span>
              </p>
              <p>
                <span className="font-semibold">Weekly: </span>
                <span className="text-green-400">{rate.weekly}</span>
              </p>
              <p>
                <span className="font-semibold">Monthly: </span>
                <span className="text-green-400">{rate.monthly}</span>
              </p>
              <p>
                <span className="font-semibold">Utilities: </span>
                <span className="text-green-400">{rate.utilities}</span>
              </p>
              <p className="text-sm text-gray-300 pt-2">
                Rates are all-inclusive and subject to availability.
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#31b0b4] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-[#2a9ba0] hover:scale-105 transition-all duration-300 transform active:bg-[#288e93] focus:outline-none focus:ring-2 focus:ring-[#31b0b4]"
          >
            Book Now
          </a>
        </div>
      </div>
    </div>
  );
}
