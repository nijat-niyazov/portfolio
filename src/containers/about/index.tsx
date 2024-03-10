import { LaptopIcon, MobileIcon } from "@/assets/icons";
import { mine } from "@/assets/images";
import { MotionDiv, Section } from "@/components";
import { DownloadCv, Info } from "@/sections/about";
import Image from "next/image";

const About = () => {
  return (
    <Section title="About" className="min-h-screen bg-slate-700 text-white selection:bg-primary selection:text-black">
      <p className="mb-8 text-lg text-justify">
        I am a solution oriented Frontend Developer. Experienced in web-development and now working on startup as frontend developer. I have
        successfully contributed to global projects and helped them achieve success. I love being in dynamic environments where innovation
        and continuous learning are crucial because my insatiable curiosity drives me to explore new areas of programming.
      </p>

      <div className="flex flex-col md:flex-row items-start gap-5 mb-14">
        <MotionDiv
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          className="min-w-[340px] h-[340px]"
          transition={{ duration: 1, ease: "linear", type: "spring" }}
        >
          <Image src={mine} alt="me" className="w-full h-full object-cover" />
        </MotionDiv>

        <div className="">
          <h2 className="font-bold text-3xl text-primary mb-5 flex items-center text-balance flex-wrap">
            Web <LaptopIcon className="ml-1 mr-2" /> <span className="hidden md:inline-block">&</span> Mobile Developer
            <MobileIcon className="ml-1" /> <DownloadCv className="ml-auto text-base" />
          </h2>

          <p className="italic text-justify mb-5">
            I have experience building user interfaces and optimizing user experiences. With a solid foundation in JavaScript and TypeScript
            and a deep understanding of front-end frameworks like React.js and Next.js
          </p>

          <Info />

          <p>
            Using new technologies and being open to new methodologies amazes me and motivates me to adapt quickly. I am motivated by the
            opportunity that software provides to positively impact the life of an individual, and the world as a whole. Learning and growth
            is my life philosophy.
          </p>
        </div>
      </div>

      {/* <Title title="Facts" className="mt-14" /> */}
    </Section>
  );
};

export default About;
