import { MotionDiv } from "@/components/motionGenerator";
import { Me } from "@/sections/home";

const Home = () => {
  return (
    <section id="#home" className="h-screen bg-slate-500 relative">
      <div className="arxa-fon bg-no-repeat bg-center min-h-screen bg-cover brightness-50  w-full -z-1 bg-fixed inset-0 " />

      <MotionDiv
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "just" }}
        className=" absolute top-96 md:top-80 left-5 md:left-56 text-white not-italic"
      >
        <h1 className="text-4xl md:text-5xl mb-5 font-bold ">Nijat Niyazov</h1>
        <Me />
      </MotionDiv>
    </section>
  );
};

export default Home;
