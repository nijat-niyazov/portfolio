'use client';
import useEmblaCarousel from 'embla-carousel-react';
import Image, { StaticImageData } from 'next/image';

import { cn } from '@/utils';
import { useDotButton } from './EmblaCarouselDotButton';

const ImagesCarousel = ({ images }: { images: StaticImageData[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  return (
    <section className=" lg:w-[700px] ">
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex -ml-4">
          {images.map((image, index) => (
            <div className="cursor-grab active:cursor-grabbing flex-[0_0_100%] pl-4" key={index}>
              <Image
                src={image.src}
                alt="project"
                width={700}
                height={400}
                blurDataURL={image.blurDataURL}
                className="object-cover  aspect-[4/3] "
              />
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-4 mx-auto gap-2">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={cn('w-5 h-5 bg-transparent rounded-full border-2 border-primary bg-content', {
              'bg-primary ': index === selectedIndex,
            })}
          />
        ))}
      </div>
    </section>
  );
};

export default ImagesCarousel;

// 'use client';
// import useEmblaCarousel from 'embla-carousel-react';
// import Image, { StaticImageData } from 'next/image';
// import { useState } from 'react';

// import { cn } from '@/utils';

// const SLIDE_COUNT = 5;
// const slides = Array.from(Array(SLIDE_COUNT).keys());

// const ImagesCarousel = ({ images }: { images: StaticImageData[] }) => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

//   const [selectedIndex, setSelectedIndex] = useState(0);

//   return (
//     <section className=" lg:w-[600px]">
//       <div className="overflow-hidden" ref={emblaRef}>
//         <div className="flex -ml-4">
//           {slides.map((index) => (
//             <div
//               className="cursor-grab active:cursor-grabbing
//             flex-[0_0_100%] pl-4
//             "
//               key={index}
//             >
//               <Image
//                 src={
//                   'https://images.squarespace-cdn.com/content/v1/6058f3b0dbb27b03bbd36be9/1616442358690-OQOD2XFTAP3I4PYM9QLR/Screen+Shot+2021-02-23+at+9.35.43+PM.png'
//                 }
//                 alt="project"
//                 width={600}
//                 height={400}
//                 className="object-cover rounded-lg"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center items-center mt-4 mx-auto gap-2">
//         {Array.from({ length: 5 }).map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setSelectedIndex(index)}
//             className={cn('w-5 h-5 bg-transparent rounded-full border-2 border-primary bg-content', {
//               'bg-primary ': index === selectedIndex,
//             })}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default ImagesCarousel;
