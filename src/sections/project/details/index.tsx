import { Lock } from "@/assets/icons";
import { DetailsProps } from "@/containers/project";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";

const Details = ({ details: { stacks, category, img, url, repo } }: { details: DetailsProps }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start mb-14">
      <Image src={img} alt="project" width={400} height={400} className="grow w-full md:h-[350px] object-cover`" />

      <div className="md:w-3/5">
        <h3 className="font-semibold text-xl pb-3 block border-b-2 border-gray-400">Details</h3>

        <ul role="list" className="grid gap-2 mt-4 opacity-80">
          <li className="flex items-center gap-2">
            <span className="font-semibold">Category:</span>
            <span>{category.join(", ")}</span>
          </li>
          <li className="flex items-center gap-2">
            <span className="font-semibold">Project URL:</span>
            <Link href={url} target="_blank" className="flex items-start gap-2 text-primary">
              {url} <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </li>
          <li className="flex items-center gap-2  ">
            <span className="font-semibold">Github code:</span>
            {!repo ? (
              <Fragment>
                Private repo <Lock />
              </Fragment>
            ) : (
              <Link href={repo} className="flex items-start gap-2 text-primary overflow-hidden">
                <span className="truncate max-w-[235px]">{repo}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            )}
          </li>

          <li>
            <p className="font-semibold mb-1">Used Stacks:</p>
            <ul className="flex flex-wrap text-black font-semibold gap-3">
              {stacks.map((stack, index) => (
                <li key={index} className="rounded-full px-3 py-1 text-xs bg-primary hover:scale-110 transition-all duration-200">
                  {stack}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Details;
