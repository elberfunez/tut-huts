import { RESERVATION_URL } from '../../../config';
export default function RatesPage() {
  const rates = [
    { nightly: "$40", weekly: "$175", monthly: "$550", utilities: "INCLUDED!" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1A2A44] to-[#2a5d6b] text-white mb-4">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 animate-fade-in">
          Rates
        </h1>
        <p className="text-center text-lg md:text-xl mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          Discover unbeatable value. <br /> Flexible Length Stays with 30 / 50A Service, sewage hookup, and city water. 
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 shadow-2xl animate-slide-up">
          <div className="overflow-x-auto">
            <table className="w-full text-center">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="py-3 px-4 text-2xl font-semibold">Nightly</th>
                  <th className="py-3 px-4 text-2xl font-semibold">Weekly</th>
                  <th className="py-3 px-4 text-2xl font-semibold">Monthly</th>
                  <th className="py-3 px-4 text-2xl font-semibold">Utilities</th>
                </tr>
              </thead>
              <tbody>
                {rates.map((rate, index) => (
                  <tr
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5 transition-colors duration-200"
                  >
                    <td className="py-6 px-4 text-2xl text-green-400">{rate.nightly}</td>
                    <td className="py-6 px-4 text-2xl text-green-400">{rate.weekly}</td>
                    <td className="py-6 px-4 text-2xl text-green-400">{rate.monthly}</td>
                    <td className="py-6 px-4 text-2xl text-green-400">{rate.utilities}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-300 mt-6">
            Rates are all-inclusive and subject to availability. Additional fees may apply for extra services. Contact us for seasonal discounts!
          </p>
        </div>

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