import { projects } from "@/contents/projects";
import { EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <ul className="grid md:grid-cols-2 gap-5">
      {projects.map(({ url, img, name, hidden }) => {
        return !hidden ? (
          <li key={url.toLowerCase()} className="rounded-md group overflow-hidden  group bg-secondary">
            <Image
              src={img}
              alt={`${name}-img`}
              width={340}
              height={250}
              className="w-full h-64   object-cover group-hover:brightness-75 transition-all duration-300 ease-in-out"
            />

            <div className="h-9 mt-4 overflow-hidden relative">
              <div
                className="bg-primary text-secondary w-full h-9 absolute  bottom-0  group-hover:h-20 
              group-hover:brightness-100 transition-all duration-300 ease-in-out "
              >
                <p className="font-semibold text-2xl  text-center min-h-9">{name} </p>

                <Link href={`/${url}`} className="flex items-center justify-center gap-2 group my-auto h-12">
                  <p className="font-semibold text-xl">See Details </p>
                  <EyeIcon className="w-8 h-8  text-secondary " />
                </Link>
              </div>
            </div>
          </li>
        ) : null;
      })}
    </ul>
  );
};

export default Projects;
