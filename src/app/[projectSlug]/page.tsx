import { Section } from "@/components";
import { ProjectContainer } from "@/containers";
import { projectsWithDetails } from "@/contents/projects";

const ProjectPage = ({ params }: { params: { projectSlug: string } }) => {
  const data = projectsWithDetails[params.projectSlug as keyof typeof projectsWithDetails];

  return (
    <Section title={`Project ${data.title}`} className="min-h-screen bg-slate-800 text-white">
      <ProjectContainer data={data} />
    </Section>
  );
};

export default ProjectPage;
