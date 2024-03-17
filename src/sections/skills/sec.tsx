"use client";
import useEmblaCarousel from "embla-carousel-react";
import "./sec.css";

const Sec = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    // dragFree: true,
    loop: true,
  });

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Array.from({ length: 16 }).map((_, index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">{index + 1}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Sec;
