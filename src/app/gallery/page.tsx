import Image from 'next/image';

export const metadata = {
  title: 'Tut Huts RV Park Gallery Images',
  description: 'Images of park, landscape, park amenities and features.',
};

interface GalleryImage {
    source: string;
    altText: string;
};

const galleryImages : GalleryImage[] = [
    { source: '/images/TutHutsSign.jpg', altText: 'RV Park entrance' },
    { source: '/images/laundryInside.jpg', altText: 'On site Laundry room open 24 hours' },
    { source: '/images/drone3.png', altText: 'Aereal view of the Park' },
    { source: '/images/drone4.png', altText: 'Aereal view of the Park overview' },
    { source: '/images/LaundrySign_WithBuilding.jpg', altText: 'Laundry building entrance with parking' },
    { source: '/images/Laundry1.jpg', altText: 'Washing Machines / Drying Machines' },
    { source: '/images/LaundrySign_WithBuilding2.jpg', altText: 'On site Laundry room entrance' },
    { source: '/images/sitelot1.jpg', altText: 'Tut huts rv park shown at sunset' },
    { source: '/images/sitelot2.jpg', altText: 'Rv trailers backed in parked' },
    { source: '/images/sitelot3.jpg', altText: 'RV parked with grill' },
    { source: '/images/sitelot4.jpg', altText: 'Backed in parked with rv trailer attached to truck' },
    { source: '/images/sitelot5.jpg', altText: 'Empty lot available shown for rent' },
    { source: '/images/sitelot6.jpg', altText: 'Empty lot with shade available shown for rent' },
    { source: '/images/sitelot7.jpg', altText: 'Concrete paved lot with RV parked' },
    { source: '/images/sitelot8.jpg', altText: 'Lot shown close to forest and nature' },
    { source: '/images/sitelot9.jpg', altText: 'Beautiful grass landscape' },
    { source: '/images/sitelot10.jpg', altText: 'Parrish Alabama Beautiful trees and landscape around park' },
    { source: '/images/asphalt_lot.jpg', altText: 'Asphalt lot available for rent' },
]

export default function Gallery() {
    return (
    <section className="bg-white py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
        Views
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {galleryImages.map((imgObj) => (
          <div
            key={imgObj.source}
            className="overflow-hidden rounded-xl shadow-md border border-gray-200 break-inside-avoid"
          >
            <div className="relative w-full h-auto aspect-auto">
              <Image
                src={imgObj.source}
                alt={imgObj.altText}
                width={800}
                height={600}
                sizes="(max-width: 768px) 100vw, 33vw"
                className="w-full h-auto object-cover"
                style={{ display: 'block', width: '100%', height: 'auto' }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};