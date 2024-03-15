import { LaptopIcon, MobileIcon } from "@/assets/icons";
import { MotionDiv, Section } from "@/components";
import { aboutExperience, aboutImage, whatILove, whoIAm } from "@/contents/about";
import { DownloadCv, Info } from "@/sections/about";
import Image from "next/image";

const About = () => {
  return (
    <Section title="About" className="min-h-screen bg-slate-700 text-white selection:bg-primary selection:text-black">
      <p className="mb-8 text-lg text-justify">{whoIAm}</p>

      <div className="flex flex-col md:flex-row items-start gap-5 ">
        <MotionDiv
          initial={{ x: "-120%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          className="min-w-[340px] h-[340px]"
          transition={{ duration: 1, ease: "linear", type: "spring" }}
        >
          <Image src={aboutImage} alt="me" className="w-full h-full object-cover" />
        </MotionDiv>

        <div className="">
          <p className="font-bold text-3xl text-primary mb-5 text-balance flex-wrap md:flex items-center">
            <span className="flex items-center ">
              Web <LaptopIcon className="ml-1" />
            </span>
            <span className="hidden md:inline-block md:mx-3">&</span>
            <span className="flex items-center ">
              Mobile Developer <MobileIcon className="ml-1" />
            </span>
            <DownloadCv className="ml-auto text-base" />
          </p>

          <p className="italic text-justify mb-5">{aboutExperience}</p>

          <Info />

          <p>{whatILove}</p>
        </div>
      </div>

      {/* <Title title="Facts" className="mt-14" /> */}
    </Section>
  );
};

export default About;
