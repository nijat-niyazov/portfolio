import { Title } from "@/components";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { stacks } from "@/contents/skills";
import Image from "next/image";
import { HTMLAttributes } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const Stacks = ({ ...props }: Props) => {
  return (
    <div {...props}>
      <Title animated={false} title="Stacks" className="text-2xl" />

      <Carousel opts={{ align: "start", loop: true, dragFree: true }}>
        <CarouselContent>
          {stacks.map(({ techImg, techName }, i) => (
            <CarouselItem key={i} className="mr-3 flex-[0_0_128px] mt-2">
              <Image
                src={techImg}
                alt={techName}
                width={100}
                height={100}
                className="object-contain w-32 h-32 rounded-full border-2 border-black/50 bg-white p-1 drop-shadow-md-gray"
              />

              <p className="mt-2 mx-auto font-light text-lg text-center text-white">{techName}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Stacks;
