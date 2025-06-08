import Image from "next/image";
import * as config from '../../../config';

export const metadata = {
  title: "About Tut Huts RV Park",
  description:
    "Learn more about Tut Huts RV Park in Parrish, Alabama – your peaceful camping destination.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#2c3e50] font-light tracking-wide">
      <div className="max-w-4xl mx-auto px-6 py-16 space-y-20">

        {/* Hero Image */}
        <section className="rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/TutHutsSign.jpg"
            alt="Tut Huts RV Park Scenic View"
            width={1200}
            height={480}
            className="w-full h-72 object-cover"
          />
        </section>

        {/* Intro with Decorative Text */}
        <section className="relative">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-center mb-6 text-[#34495e]">
            Discover the Charm of Tut Huts RV Park
          </h1>
          <p className="text-xl leading-relaxed text-justify bg-white/70 p-6 rounded-lg shadow-md border-l-4 border-[#31b0b4]">
            <span className="first-letter:text-5xl first-letter:font-bold first-letter:text-[#31b0b4] first-letter:mr-2 first-letter:float-left">
              W
            </span>
            elcome to <strong className="text-[#31b0b4]">Tut Huts RV Park</strong>—your cozy getaway in the heart of Alabama. Located at 12465 Tutwiler Rd, Parrish, AL, our park offers clean, quiet spaces, full hookups, and a genuine touch of Southern hospitality.
          </p>
        </section>

        {/* Adventure Section */}
        <section className="bg-[#ffffff] p-6 rounded-lg shadow-inner border border-[#e0dcd6]">
          <h2 className="text-2xl font-semibold text-[#31b0b4] mb-4">
            Adventure Awaits Nearby
          </h2>
          <p className="text-lg leading-relaxed text-[#3c3c3c]">
            Just minutes from <strong>G’s Landing</strong> on Lost Creek, you’ll enjoy quick access to some of Alabama’s best fishing, boating, and relaxing nature scenes. Plus, you’re only a short drive from the lively cities of Birmingham and Tuscaloosa—ideal for day trips.
          </p>
        </section>

        {/* Community Section */}
        <section className="p-6 rounded-lg bg-[#eaf7f8] border-l-8 border-[#31b0b4] shadow-sm">
          <blockquote className="italic text-xl text-[#2a5d6b] mb-4"> 
            “It’s not just a campground. It’s a peaceful retreat where visitors become family.”
          </blockquote>
          <p className="text-md text-[#444]">
            Our welcoming community, affordable rates, and peaceful setting make Tut Huts the perfect destination to relax and recharge.
          </p>
        </section>

        {/* Call to Action */}
        <div className="text-center">
          <a
            href={config.RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#31b0b4] text-white font-bold py-3 px-10 rounded-full shadow-md hover:bg-[#2a9ba0] hover:-translate-y-1 transition-transform duration-300"
          >
            Book Your Stay
          </a>
        </div>
      </div>
    </main>
  );
}
