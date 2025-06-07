export const metadata = {
  title: 'Contact Tut Huts RV Park',
  description: 'Contact Tut Huts RV Park in Parrish, AL for reservations, questions, or general information.',
};

export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-2">
        📍 12465 Tutwiler Rd, Parrish, AL 35580
      </p>
      <p className="text-lg text-gray-700">
        📞 (123) 456-7890 <br />
        📧 info@tuthutsrv.com (Coming soon)
      </p>
    </main>
  );
}
