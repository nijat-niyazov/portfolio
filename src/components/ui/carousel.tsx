"use client";

import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import * as React from "react";

import { cn } from "@/utils";
import { HTMLAttributes, createContext, forwardRef } from "react";

/* --------------------------------- Plugins -------------------------------- */
import Autoplay from "embla-carousel-autoplay";
// import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

/* ---------------------------------- Types --------------------------------- */
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  // scrollPrev: () => void;
  // scrollNext: () => void;
  // canScrollPrev: boolean;
  // canScrollNext: boolean;
} & CarouselProps;
/* ---------------------------------- Types --------------------------------- */

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement> & CarouselProps>(
  ({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel({ ...opts, axis: orientation === "horizontal" ? "x" : "y" }, [
      Autoplay({
        delay: 0,
        stopOnInteraction: false,
        stopOnHover: true,
      }),
      // WheelGesturesPlugin(),
    ]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        }}
      >
        <div ref={ref} className={cn("relative", className)} role="region" aria-roledescription="carousel" {...props}>
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);

Carousel.displayName = "Carousel";

const CarouselContent = forwardRef<HTMLUListElement, HTMLAttributes<HTMLUListElement>>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <ul ref={ref} className={cn("flex", className)} {...props} />
      {/* orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", */}
    </div>
  );
});

CarouselContent.displayName = "CarouselContent";

const CarouselItem = forwardRef<HTMLLIElement, HTMLAttributes<HTMLLIElement>>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return <li ref={ref} role="group" aria-roledescription="slide" className={className} {...props} />;
});
CarouselItem.displayName = "CarouselItem";

export { Carousel, CarouselContent, CarouselItem, type CarouselApi };

// const CarouselPrevious = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
//   ({ className, variant = "outline", size = "icon", ...props }, ref) => {
//     const { orientation, scrollPrev, canScrollPrev } = useCarousel();

//     return (
//       <Button
//         ref={ref}
//         variant={variant}
//         size={size}
//         className={cn(
//           "absolute  h-8 w-8 rounded-full",
//           orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
//           className
//         )}
//         disabled={!canScrollPrev}
//         onClick={scrollPrev}
//         {...props}
//       >
//         <ArrowLeft className="h-4 w-4" />
//         <span className="sr-only">Previous slide</span>
//       </Button>
//     );
//   }
// );
// CarouselPrevious.displayName = "CarouselPrevious";

// const CarouselNext = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
//   ({ className, variant = "outline", size = "icon", ...props }, ref) => {
//     const { orientation, scrollNext, canScrollNext } = useCarousel();

//     return (
//       <Button
//         ref={ref}
//         variant={variant}
//         size={size}
//         className={cn(
//           "absolute h-8 w-8 rounded-full",
//           orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
//           className
//         )}
//         disabled={!canScrollNext}
//         onClick={scrollNext}
//         {...props}
//       >
//         <ArrowRight className="h-4 w-4" />
//         <span className="sr-only">Next slide</span>
//       </Button>
//     );
//   }
// );
// CarouselNext.displayName = "CarouselNext";
