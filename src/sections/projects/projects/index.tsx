import { projects } from "@/contents/projects";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-5">
      {projects.map((project) => {
        return (
          <li
            key={project.img.toString().toLowerCase()}
            className="border-2 border-primary/30 rounded-md relative group overflow-hidden  group "
          >
            <Image
              src={project.img}
              alt={`${project.name}-img`}
              width={340}
              height={250}
              className="w-full h-64   object-cover group-hover:brightness-75 transition-all duration-300 ease-in-out"
            />

            <div className="bg-secondary w-full h-0 absolute  bottom-0 group-hover:h-20   flex items-center justify-center group-hover:brightness-100 transition-all duration-300 ease-in-out">
              <Link href={`/${project.name.toLowerCase()}`} className="flex items-center justify-center gap-4 group my-auto">
                <p className="font-semibold text-xl">See Details </p>
                <EyeIcon className="w-10 h-10  text-white " />
              </Link>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Projects;
