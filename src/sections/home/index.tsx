const Home = () => {
  return (
    <section className="min-h-screen bg-black/50 relative">
      <header className="bg-primary md:hidden">
        <ul className="p-4 space-y-3">
          <li className="w-full h-3 bg-black" />
          <li className="w-full h-3 bg-black" />
          <li className="w-full h-3 bg-black" />
        </ul>
      </header>

      <div className="text-black absolute top-80 text-5xl left-56 ">
        <h1 className="text-5xl">Nijat Niyazov</h1>
        <span>I'm Front End Developer</span>
      </div>
    </section>
  );
};

export default Home;
