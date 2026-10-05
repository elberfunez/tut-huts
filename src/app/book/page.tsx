import BookingForm from '../components/BookingForm';

export const metadata = {
  title: 'Book Your Stay | Tut Huts RV Park',
  description:
    'Request a reservation at Tut Huts RV Park in Parrish, AL. Submit your info and we will confirm your stay by phone or email.',
  openGraph: {
    title: 'Book Your Stay | Tut Huts RV Park',
    description:
      'Request a reservation at Tut Huts RV Park in Parrish, AL. Submit your info and we will confirm your stay by phone or email.',
    url: 'https://tuthutsrvpark.com/book',
  },
  alternates: {
    canonical: 'https://tuthutsrvpark.com/book',
  },
};

export default function BookPage() {
  return <BookingForm />;
}
