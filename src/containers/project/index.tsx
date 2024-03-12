import { Details, GoToBack, ProjectInfo } from "@/sections/project";
import { StaticImageData } from "next/image";
import { Fragment } from "react";

export type DetailsProps = { img: StaticImageData; url: string; repo?: string; category: string[]; stacks: string[] };

type Props = { data: { title: string; details: DetailsProps; about: string[] } };

const ProjectContainer = ({ data: { about, details } }: Props) => {
  return (
    <Fragment>
      <GoToBack /> <br />
      <Details details={details} />
      <ProjectInfo about={about} />
    </Fragment>
  );
};

export default ProjectContainer;
