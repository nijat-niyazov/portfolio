import { wis } from "@/assets/images";
import { Section } from "@/components";
import { ProjectContainer } from "@/containers";

const projects = {
  wishx: {
    title: "Wishx.me",
    details: {
      stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
      category: ["Typescript", "NextJS"],
      img: wis,
      url: "https://wishx.me",
    },
    about: ["eeeee", "cccc", "dddd"],
  },
};

const ProjectPage = ({ params }: { params: { projectSlug: string } }) => {
  const data = projects[params.projectSlug as keyof typeof projects];

  return (
    <Section title={`Project ${data.title}`} className="min-h-screen bg-slate-800 text-white">
      <ProjectContainer data={data} />
    </Section>
  );
};

export default ProjectPage;
