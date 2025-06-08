import * as config from "../../../config";

export const metadata = {
  title: 'Contact Tut Huts RV Park',
  description: 'Contact Tut Huts RV Park in Parrish, AL for reservations, questions, or general information.',
};

export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-2">
        📍 {config.PARK_ADDRESS}
      </p>
      <p className="text-lg text-gray-700">
        📞 {config.PARK_PHONE_NUMBER} <br />
        📧 {config.PARK_EMAIL}
      </p>
    </main>
  );
}
