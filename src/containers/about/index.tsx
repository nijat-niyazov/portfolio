import { LaptopIcon, MobileIcon } from "@/assets/icons";
import { Section } from "@/components";
import Emphasized from "@/components/emhpasized";
import { MotionImage, MotionP } from "@/components/motionGenerator";
import { aboutImage, whatILove } from "@/contents/about";
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
        {/* {whoIAm} */}
        Solution oriented <Emphasized>Frontend Developer</Emphasized>. I have very <Emphasized>good communication skills</Emphasized> and{" "}
        <Emphasized>strong command of English</Emphasized> language. I have successfully contributed to global projects and helped them
        achieve success. I love being in dynamic environments where innovation and continuous learning are crucial because my insatiable
        curiosity drives me to explore new areas of programming.
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

          <p className="italic text-justify mb-5">
            {/* {aboutExperience} */}I have experience building user interfaces and optimizing user experiences. With a solid foundation in{" "}
            <Emphasized>JavaScript and TypeScript</Emphasized> and a deep understanding of front-end frameworks like{" "}
            <Emphasized>React.js and Next.js</Emphasized>
          </p>

          <Info />

          <p>{whatILove}</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
