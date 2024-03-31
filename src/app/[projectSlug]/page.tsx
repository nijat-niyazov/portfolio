import { ProjectContainer } from "@/containers";
import { projectsWithDetails } from "@/contents/projects";

const ProjectPage = ({ params }: { params: { projectSlug: string } }) => {
  const data = projectsWithDetails[params.projectSlug as keyof typeof projectsWithDetails];

  return <ProjectContainer data={data} />;
};

export default ProjectPage;
