import { Section } from "@/components";
import workexperience from "@/constant/workexperience";
import { ProfessionalExperience } from "@/sections/resume";

const Resume = () => {
  return (
    <Section id="resume" title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

      <ProfessionalExperience resume={workexperience} />
    </Section>
  );
};

export default Resume;
