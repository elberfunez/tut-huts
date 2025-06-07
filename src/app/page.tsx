export const metadata = {
  title: 'Tut Huts RV Park – RV Camping in Walker County, Alabama',
  description:
    'Book your stay at Tut Huts RV Park in Parrish, AL. Enjoy peaceful camping, full hookups, and beautiful scenery in the heart of Walker County, Alabama.',
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-5xl font-bold text-center mb-6">Tut Huts RV Park</h1>
      <p className="text-lg text-center text-gray-700 max-w-2xl mb-4">
        Welcome to Tut Huts – your cozy RV destination located at <strong>12465 Tutwiler Rd, Parrish, AL 35580</strong>.
        Nestled in Walker County, Alabama, our park offers full hookups, quiet surroundings, and southern hospitality.
      </p>
      <p className="text-center text-blue-600 font-semibold mt-4">
        Reservations coming soon!
      </p>
    </main>
  );
}
