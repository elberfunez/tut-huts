import Image from 'next/image';

export const metadata = {
    title: 'title'
};

export default function Gallery() {
    return(
        <>
        <Image
                      src="/images/entire_logo_transparent.png"
                      alt="Tut Huts Logo"
                      width={100}
                      height={100}
                      priority
        />
        </>
    );
};