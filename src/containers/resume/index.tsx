import { Section } from "@/components";
import { professionalExperience, resumeInfo } from "@/contents/resume";
import { ProfessionalExperience } from "@/sections/resume";

const Resume = () => {
  return (
    <Section id="resume" title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">{resumeInfo}</p>

      <ProfessionalExperience resume={professionalExperience} />
    </Section>
  );
};

export default Resume;
