import Image from "next/image";

export const metadata = {
  title: "Explore Parrish, AL – Attractions Near Tut Huts RV Park",
  description:
    "Discover exciting local attractions near Tut Huts RV Park in Parrish, Alabama. Enjoy off-roading, kayaking, nature trails, boat launches, shopping, and great food—just minutes away!",
};

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-6 md:p-12 lg:p-20 font-sans text-gray-900">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-8 md:p-12">
        <h1 className="text-4xl font-bold mb-8 text-green-800 border-b-4 border-green-300 pb-3">
          Explore the Area
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          Whether you’re here for work, nature, or adventure, Tut Huts RV Park places you near some of the most scenic and exciting spots in central Alabama. From forest trails and creeks to restaurants and local markets, there’s something for everyone to enjoy.
        </p>

        {/* Nature & Outdoor Adventures */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Nature & Outdoor Adventures</h2>

          <div className="space-y-10">
            <div>
              <Image src="/images/bankhead-forest.jpg" alt="Bankhead National Forest" width={800} height={400} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Bankhead National Forest</h3>
              <p className="text-gray-700 leading-relaxed">
                Just a short drive away, thrill-seekers can off-road through winding forest trails, hike scenic paths, or relax under ancient trees in the William Bankhead National Forest. It’s a must-visit for nature lovers and explorers.
              </p>
            </div>

            <div>
              <Image src="/images/lost-creek-launch.jpg" alt="G's Boat Launch" width={800} height={400} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">G’s Boat Launch on Lost Creek</h3>
              <p className="text-gray-700 leading-relaxed">
                Located just 4 minutes away, G’s Boat Launch gives you access to beautiful Lost Creek. Kayak, paddleboard, or fish in serene waters surrounded by Alabama’s natural beauty.
              </p>
            </div>
          </div>
        </section>

        {/* Local Life & Small Town Charm */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-6">Local Life & Small-Town Charm</h2>

          <div className="space-y-10">
            <div>
              <Image src="/images/jasper-downtown.jpg" alt="Shops and Restaurants in Jasper" width={800} height={400} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Jasper, AL</h3>
              <p className="text-gray-700 leading-relaxed">
                Just 20 minutes from the park, Jasper offers shopping, restaurants, and southern hospitality. Whether you’re looking for a casual meal or a cozy café, there’s plenty to explore.
              </p>
            </div>

            <div>
              <Image src="/images/parrish-market.jpg" alt="Parrish Local Market" width={800} height={400} className="rounded-xl mb-4" />
              <h3 className="text-2xl font-semibold text-green-600 mb-2">Parrish Local Markets</h3>
              <p className="text-gray-700 leading-relaxed">
                Just minutes away, Parrish has neighborhood markets and small-town charm. Pick up local goods or enjoy friendly conversations with locals—everything you need is close by.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
