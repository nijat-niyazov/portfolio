import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { stacks } from "@/contents/skills";
import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const Stacks = ({ ...props }: Props) => {
  return (
    <Carousel
      opts={{ align: "start", dragFree: true, loop: true }}
      className="w-full max-w-[350px] sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg cursor-grab active:cursor-grabbing"
      // bg-red-500
    >
      <CarouselContent>
        {stacks.map(({ techImg, techName }, i) => (
          // bg-purple-700
          <CarouselItem key={i} className=" w-32 md:w-36  p-1 mr-4 pt-3">
            {/* bg-red-300 */}
            <div className="flex  flex-col  w-28 md:w-32 justify-center items-center gap-2">
              <Image
                src={techImg}
                alt={techName}
                width={100}
                height={100}
                className="object-contain w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-black/50 bg-white p-1 drop-shadow-md-gray shrink"
              />
              <p className="font-light text-lg text-white text-center">{techName}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default Stacks;
