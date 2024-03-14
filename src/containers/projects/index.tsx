import { Section } from "@/components";
import { Tabs } from "@/components/ui/tabs";
import projects from "@/constant/projects";
import Image from "next/image";
import Link from "next/link";

const Portfolio = () => {
  return (
    <Section id="portfolio" className="bg-slate-700 text-white min-h-screen" title="Portfolio">
      <p>Okay</p>
      <Tabs />

      <ul className="grid md:grid-cols-2 gap-5">
        {projects.map((project, i) => {
          return (
            <li key={i} className="border-2 border-black">
              <Link href={`/${project.name.toLowerCase()}`}>
                <Image
                  src={project.img}
                  alt={`${project.name}-img`}
                  width={340}
                  height={250}
                  className="w-full h-[250px] hover:brightness-75 transition-all duration-200 object-cover"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
};

export default Portfolio;
