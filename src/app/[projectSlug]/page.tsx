import { ProjectContainer } from "@/containers";
import { projectsWithDetails } from "@/contents/projects";
import { notFound } from "next/navigation";

const ProjectPage = ({ params }: { params: { projectSlug: string } }) => {
  const data = projectsWithDetails[params.projectSlug as keyof typeof projectsWithDetails];

  if (!data) {
    notFound();
  }

  return <ProjectContainer data={data} />;
};

export default ProjectPage;
