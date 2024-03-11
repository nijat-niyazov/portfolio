import { Me } from "@/sections/home";

const Home = () => {
  return (
    <section id="#home" className="min-h-screen bg-slate-500 relative ">
      <div className="bg-[url('https://img.freepik.com/premium-photo/attractive-guy-shirt-pink-background_185193-72728.jpg')] bg-no-repeat bg-center bg-cover min-h-screen brightness-50 bg-fixed w-full" />

      {/* <ToggleButton /> */}

      <div className=" absolute top-96 md:top-80 left-5 md:left-56 text-white not-italic">
        <h1 className="text-4xl md:text-5xl mb-5 font-bold ">Nijat Niyazov</h1>
        <Me />
      </div>
    </section>
  );
};

export default Home;
