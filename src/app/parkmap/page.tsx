import Image from 'next/image';

export const metadata = {
  title: 'Park Map | Tut Huts RV Park',
  description: 'View the interactive map of Tut Huts RV Park in Parrish, AL. Find available sites and amenities locations.',
  openGraph: {
    title: 'Park Map | Tut Huts RV Park',
    description: 'View the interactive map of Tut Huts RV Park in Parrish, AL.',
    url: 'https://tuthutsrvpark.com/parkmap',
  },
  alternates: {
    canonical: 'https://tuthutsrvpark.com/parkmap',
  },
};

export default function ParkMap() {
    return (
        <div className="parkmap mb-4">
            <h2 className="text-3xl font-bold text-center mb-10">Park Map</h2>
            <div className="relative w-full aspect-[4/3]">
                <Image
                  src="/images/parkmap_withlabels.jpg"
                  alt="park map for Tut huts"
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
            </div>
        </div>
        
    );
}