export const metadata = {
  title: "Tut Huts RV Park – RV Camping in Walker County, Alabama",
  description:
    "Book your stay at Tut Huts RV Park in Parrish, AL. Enjoy peaceful camping, full hookups, and beautiful scenery in the heart of Walker County, Alabama.",
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-center mb-6">Tut Huts RV Park</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mb-4">
        Welcome to Tut Huts – your cozy RV destination located at{" "}
        <strong>12465 Tutwiler Rd, Parrish, AL 35580</strong>. Nestled in Walker
        County, Alabama, our park offers full hookups, quiet surroundings, and
        southern hospitality.
      </p>
      <p className="text-center text-blue-600 font-semibold mt-4">
        Reservations coming soon!
      </p>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3320.6101273160116!2d-87.2488376235454!3d33.667262573304576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88888c99902c87c5%3A0x6d15c597443531ff!2s12465%20Tutwiler%20Rd%2C%20Parrish%2C%20AL%2035580!5e0!3m2!1sen!2sus!4v1749329089559!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </main>
  );
}
