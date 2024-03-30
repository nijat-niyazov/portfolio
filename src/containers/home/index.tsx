import { MotionDiv } from "@/components/motionGenerator";
import { Me } from "@/sections/home";

const Home = () => {
  return (
    <section id="#home" className="relative">
      <div className="w-full h-screen flex items-center justify-center bg-transparent ">
        <div className="fixed inset-0 brightness-50 w-full h-full bg-center bg-no-repeat second"></div>
      </div>

      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "just" }}
        className=" absolute top-96 md:top-80 left-5 md:left-56 text-white not-italic [text-shadow:_0_0_4px_rgb(255_255_255_/_80%)] "
      >
        <h1 className="text-4xl md:text-5xl mb-5 font-bold ">Nijat Niyazov</h1>
        <Me />
      </MotionDiv>
    </section>
  );
};

export default Home;
