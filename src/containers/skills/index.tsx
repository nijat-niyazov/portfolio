import { fm, git, int, js, next, react, redux, rhk, rquery, socket, supabase, tailwindcss, ts } from "@/assets/images/tech";
import { Section, Title } from "@/components";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Image from "next/image";

const images = [
  { techImg: fm, techName: "Framer Motion" },
  { techImg: git, techName: "Git & Github" },
  { techImg: int, techName: "Internalization" },
  { techImg: js, techName: "Javacsript" },
  { techImg: next, techName: "Next.js & App router" },
  { techImg: react, techName: "React.tsx" },

  { techImg: rhk, techName: "React Hook Form" },
  { techImg: rquery, techName: "React Query" },
  { techImg: redux, techName: "Redux Toolkit" },
  { techImg: socket, techName: "Socket.io" },
  { techImg: supabase, techName: "Supabase" },
  { techImg: tailwindcss, techName: "Tailwind CSS" },
  { techImg: ts, techName: "Typescript" },
];

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="min-h-screen bg-gray-600">
      <Title animated={false} title="Stacks" className="text-2xl" />

      <Carousel opts={{ align: "start", loop: true, dragFree: true }}>
        <CarouselContent className="hidden md:block">
          {images.map(({ techImg, techName }, i) => (
            <CarouselItem key={i} className="mr-3 flex-[0_0_128px] mt-2">
              <Image
                src={techImg}
                alt={techName}
                width={100}
                height={100}
                className="object-contain w-32 h-32 md:w-32 md:h-32 rounded-full border-2 border-black/50 bg-white p-1 drop-shadow-md-gray"
              />

              <p className="mt-2 mx-auto font-light text-lg text-center text-white">{techName}</p>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Title animated={false} title="Soft" className="text-2xl" />

      <Title animated={false} title="Language" className="text-2xl" />
      {/* <ul className="flex flex-wrap items-center justify-start gap-x-7 gap-y-2 ">
        {images.map((image, i) => (
          <MotionLi
            key={i}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: i * 0.05, duration: 0.3, type: "spring", stiffness: 50 } }}
            whileHover={{ scale: 1.2 }}
          >
            <Image
              src={image.src}
              alt={i.toString()}
              width={100}
              height={100}
              className="object-contain w-36 h-36 rounded-full border-2 border-black/30 bg-gray-300 p-1"
            />
          </MotionLi>
        ))}
      </ul> */}
    </Section>
  );
};

export default Skills;

{
  /* <ul className="flex flex-wrap items-center justify-start gap-x-7 gap-y-2 ">
        {images.map((image, i) => (
          <MotionLi
            key={i}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { delay: i * 0.05, duration: 0.3, type: "spring", stiffness: 50 } }}
            whileHover={{ scale: 1.2 }}
          >
            <Image
              src={image.src}
              alt={i.toString()}
              width={100}
              height={100}
              className="object-contain w-36 h-36 rounded-full border-2 border-black/30 bg-gray-300 p-1"
            />
          </MotionLi>
        ))}
      </ul> */
}
