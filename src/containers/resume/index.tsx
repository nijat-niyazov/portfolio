import { Section } from "@/components";
import { professionalExperience, resumeInfo } from "@/contents/resume";
import { ProfessionalExperience } from "@/sections/resume";

const Resume = () => {
  return (
    <Section id="resume" title="Resume" className="min-h-screen bg-content text-white">
      <p className="mb-8 text-lg">{resumeInfo}</p>

      <ProfessionalExperience experience={professionalExperience} />
    </Section>
  );
};

export default Resume;
