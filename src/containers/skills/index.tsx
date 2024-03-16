import { Section, Title } from "@/components";
import { Stacks } from "@/sections/skills";

const Skills = () => {
  return (
    <Section id="skills" title="Skills" className="min-h-screen bg-gray-600">
      <Stacks className="mb-10" />

      <Title animated={false} title="Soft" className="text-2xl" />

      <Title animated={false} title="Language" className="text-2xl" />
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
