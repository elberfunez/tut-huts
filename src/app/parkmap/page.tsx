import Image from 'next/image';

export const metadata = {
  title: 'Tut Huts RV Park Gallery Images',
  description: 'Images of park, landscape, park amenities and features.',
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