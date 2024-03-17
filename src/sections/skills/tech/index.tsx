import { HTMLAttributes } from "react";

type Props = {} & HTMLAttributes<HTMLDivElement>;

const Stacks = ({ ...props }: Props) => {
  return null;
  // <Carousel opts={{ align: "start", loop: true, dragFree: true }}>
  //   <CarouselContent className="p-2 bg-lime-600 max-w-[350px] sm:max-w-sm md:max-w-screen-md    md:w-full ">
  //     {stacks.map(({ techImg, techName }, i) => (
  //       <CarouselItem key={i} className="mr-6 p-2 bg-red-400">
  //         <Image
  //           src={techImg}
  //           alt={techName}
  //           width={100}
  //           height={100}
  //           className="object-contain w-28 h-28 md:w-32 md:h-32 rounded-full border-2 border-black/50 bg-white p-1 drop-shadow-md-gray shrink"
  //         />

  //         <p className="mt-2 mx-auto font-light text-lg text-center text-white">{techName}</p>
  //       </CarouselItem>
  //     ))}
  //   </CarouselContent>
  // </Carousel>
};

export default Stacks;
