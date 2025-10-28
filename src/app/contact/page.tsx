import ContactForm from "../components/ContactForm";

export const metadata = {
  title: 'Contact Tut Huts RV Park',
  description: 'Contact Tut Huts RV Park in Parrish, AL for reservations, questions, or general information.',
  openGraph: {
    title: 'Contact Tut Huts RV Park',
    description: 'Contact Tut Huts RV Park in Parrish, AL for reservations, questions, or general information.',
    url: 'https://tuthutsrvpark.com/contact',
  },
  alternates: {
    canonical: 'https://tuthutsrvpark.com/contact',
  },
};

export default function ContactPage() {
  return (
    <main className="p-6 max-w-3xl mx-auto">
      <ContactForm />
    </main>
  );
}
