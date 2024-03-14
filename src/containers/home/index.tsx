import { Me, MobileSidebar } from "@/sections/home";

const Home = () => {
  return (
    <section id="#home" className="min-h-screen bg-slate-500 relative ">
      {/* <div className="bg-[url('https://img.freepik.com/premium-photo/attractive-guy-shirt-pink-background_185193-72728.jpg')] bg-no-repeat bg-center bg-cover min-h-screen brightness-50 bg-fixed w-full z-0" /> */}

      <MobileSidebar />

      <div className=" absolute top-96 md:top-80 left-5 md:left-56 text-white not-italic">
        <h1 className="text-4xl md:text-5xl mb-5 font-bold ">Nijat Niyazov</h1>
        <Me />
      </div>
    </section>
  );
};

export default Home;

{
  /* <div className="w-3/4 mx-auto rounded-xl  absolute top-1/2 main bg-lime-300">
        <div className="bg-purple-800 rounded-lg w-full p-4  h-full group inner">
          <h1 className="text-4xl font-bold text-white">Hey</h1>

          <p className="text-black mt-10">This is an informative card that will tell you something that's... well, important!</p>
        </div>
      </div> */
}

{
  /*<div className="w-full bg-amber-400 py-10 maino">
        <div className="w-3/4 mx-auto rounded-xl bg-white">
          <div className="bg-purple-800 rounded-lg w-full p-4   h-full group inners">
            <h1 className="text-4xl font-bold text-white">Hey</h1>

            <p className="text-black mt-10">This is an informative card that will tell you something that's... well, important!</p>
          </div>
        </div>
      </div> */
}
