import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Image, { StaticImageData } from "next/image";

const ImagesCarousel = ({ images }: { images: StaticImageData[] }) => {
  return (
    <Carousel className="max-w-sm" opts={{ loop: true }}>
      <CarouselContent>
        {images.map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1 bg-red-500">
              <Card>
                <CardContent className="flex min-w-[370px] items-center justify-center p-6">
                  <Image src={images[index]} alt="project" width={400} height={400} className="grow w-full md:h-[300px] object-cover " />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ImagesCarousel;
