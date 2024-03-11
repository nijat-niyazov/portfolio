import { Section } from "@/components";
import { Tabs } from "@/components/ui/tabs";
import Image from "next/image";

const projects = [
  { img: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg", name: "Wishx", url: "#" },
  { img: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg", name: "Wishx", url: "#" },
  { img: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg", name: "Wishx", url: "#" },
];

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-slate-700 text-white min-h-screen" title="Portfolio">
      <p>Okay</p>
      <Tabs />

      <ul className="grid grid-cols-3 gap-5">
        {projects.map((project, i) => {
          return (
            <li key={i}>
              {
                <Image
                  src={project.img}
                  alt={`${project.name}-img`}
                  width={340}
                  height={250}
                  className="w-[340px] h-[250px] hover:brightness-75 transition-all duration-200"
                />
              }
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Portfolio;
