import { Section } from "@/components";
import { Details, GoBack, ProjectBgImage, ProjectInfo } from "@/sections/project";
import { StaticImageData } from "next/image";

export type DetailsProps = { images: StaticImageData[]; url: string; repo?: string; category: string[]; stacks: string[] };

type Props = { data: { title: string; details: DetailsProps; about: string[]; bg: string } };

const ProjectContainer = ({ data: { about, details, title, bg } }: Props) => {
  return (
    <Section title={`Project - ${title}`} className="min-h-screen  text-white border-none bg-transparent mt-10 md:m-0">
      <ProjectBgImage bg={bg} />
      <GoBack />

      <Details details={details} />
      <ProjectInfo about={about} />
    </Section>
  );
};

export default ProjectContainer;
