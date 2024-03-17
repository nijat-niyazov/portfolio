import { projects } from "@/contents/projects";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-5">
      {projects.map((project) => {
        return (
          <li key={project.img.toString().toLowerCase()} className="border-2 border-black/30 rounded-md relative group overflow-hidden">
            <Image
              src={project.img}
              alt={`${project.name}-img`}
              width={340}
              height={250}
              className="w-full h-[250px] hover:brightness-75 transition-all duration-200 object-contain"
            />
            <div className="bg-teal-800/60 w-full h-full absolute  top-full group-hover:top-0 transition-all duration-500 ease-in-out flex items-center justify-center">
              <Link href={`/${project.name.toLowerCase()}`} className="flex items-center justify-center gap-4 group my-auto">
                <p className="font-semibold text-xl">See Details </p>
                <EyeIcon className="w-10 h-10  text-white  group-hover:scale-125 group-hover:text-black  transition-all duration-200 ease-in-out" />
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
