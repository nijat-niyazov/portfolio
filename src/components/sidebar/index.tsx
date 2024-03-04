import Image from "next/image";
import Link from "next/link";

const elements = [
  {
    url: "#",
    name: "Home",
  },
  {
    url: "#",
    name: "About",
  },
  {
    url: "#",
    name: "Resume",
  },
  {
    url: "#",
    name: "Works",
  },
  {
    url: "#",
    name: "Contact",
  },
];

const SideBar = () => {
  return (
    <aside className="min-h-screen bg-black text-white p-10 grid ">
      {/* content-between justify-between place-content-between */}
      <div>
        <header className="flex items-center gap-4 flex-col mb-5">
          <Image
            src="https://bootstrapmade.com/demo/templates/iPortfolio/assets/img/profile-img.jpg"
            alt="Logo"
            width={200}
            height={200}
            className="rounded-full border-8 border-primary"
          />
          <Link href={"#"}>
            <h1 className="font-bold text-2xl">Nijat Niyazov</h1>
          </Link>
        </header>

        <ul className="flex items-center gap-3  justify-center">
          <li className="p-3 py-1 bg-slate-800 hover:bg-primary transition-all duration-200 ease-in text-white rounded-full">F</li>
          <li className="p-3 py-1 bg-slate-800 hover:bg-primary transition-all duration-200 ease-in text-white rounded-full">F</li>
        </ul>
      </div>
      <ul className="grid gap-3">
        {elements.map(({ url, name }) => (
          <li key={name} className="opacity-60 hover:opacity-100">
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>

      <footer className="mt-auto bg-primary">
        <span>Copyright</span>
      </footer>
    </aside>
  );
};

export default SideBar;
