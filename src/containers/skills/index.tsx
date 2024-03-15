import { fm, git, int, js, next, react, rhf, rq, rtk, socket, supabase, tailwindcss, ts, zod, zustand } from "@/assets/images/tech";
import { Section } from "@/components";
import { MotionLi } from "@/components/motionGenerator";
import Image from "next/image";

const images = [fm, git, int, js, next, react, rhf, rq, rtk, socket, supabase, tailwindcss, ts, zod, zustand];

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="min-h-screen bg-gray-600">
      <ul className="flex flex-wrap items-center justify-between gap-y-2">
        {images.map((image, i) => {
          return (
            <MotionLi key={i}>
              <Image src={image.src} alt={i.toString()} width={100} height={100} className="object-cover w-32 h-28" />
            </MotionLi>
          );
        })}
      </ul>
    </Section>
  );
};

export default Skills;
