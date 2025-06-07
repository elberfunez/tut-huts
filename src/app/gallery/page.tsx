import Image from 'next/image';

export const metadata = {
    title: 'title'
};
interface GalleryImage {
    source: string;
    altText: string;
};

export const images : GalleryImage[] = [
    { source: '/images/TutHutsSign.jpg', altText: 'RV Park entrance' },
    { source: '/images/trailerex1.jpg', altText: 'Trailers parked with outdoor nature shown' },
    { source: '/images/laundryInside.jpg', altText: 'On site Laundry room open 24 hours' },
    { source: '/images/LaundrySign_WithBuilding.jpg', altText: 'Laundry building entrance with parking' },
]

export default function Gallery() {
    return (
    <section className="bg-white py-10 px-4 max-w-7xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-10">
        Views
      </h1>

      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
        {images.map((imgObj) => (
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