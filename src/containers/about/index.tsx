import { LaptopIcon, MobileIcon } from "@/assets/icons";
import { Section } from "@/components";
import { MotionImage, MotionP } from "@/components/motionGenerator";
import { aboutExperience, aboutImage, whatILove, whoIAm } from "@/contents/about";
import { DownloadCv, Info } from "@/sections/about";

const About = () => {
  return (
    <Section id="about" title="About" className="text-white md:min-h-screen ">
      <MotionP
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ margin: "150px 0px 0px 0px", once: true }}
        className="mb-8 text-lg text-justify"
      >
        {whoIAm}
      </MotionP>

      <div className="flex flex-col md:flex-row items-start gap-5 ">
        <MotionImage
          initial={{ x: "-50%", opacity: 0 }}
          whileInView={{ x: "0", opacity: 1 }}
          viewport={{ margin: "300px 0px 0px 0px", once: true }}
          transition={{ duration: 0.8, type: "just" }}
          src={aboutImage}
          alt="me"
          className="w-full object-cover h-[350px] rounded-lg"
        />

        <div className="">
          <div className="flex flex-col md:flex-row items-start md:justify-between gap-3 md:items-center mb-5">
            <p className="font-bold text-3xl text-primary text-balance flex-wrap md:flex items-center">
              <span className="flex items-center ">
                Web <LaptopIcon className="ml-1" />
              </span>
              <span className="hidden md:inline-block md:mx-3">&</span>
              <span className="flex items-center ">
                Frontend Developer <MobileIcon className="ml-1" />
              </span>
            </p>

            <DownloadCv className="text-base rounded-md" />
          </div>

          <p className="italic text-justify mb-5">{aboutExperience}</p>

          <Info />

          <p>{whatILove}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
