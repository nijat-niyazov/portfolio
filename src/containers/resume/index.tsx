import { Section } from "@/components";
import { professionalExperience, resumeInfo } from "@/contents/resume";
import { ProfessionalExperience } from "@/sections/resume";

import { differenceInMonths, format } from "date-fns";

const Resume = () => {
  return (
    <Section id="resume" title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">
        {resumeInfo}
        {/* <span className="block my-4">Started at: {differenceInMonths(new Date(2014, 12, 4), new Date(2014, 8, 3))}</span> */}
        <span className="block my-4">
          Started at: {(format(new Date(2014, 1, 11), "LLLL y"), differenceInMonths(new Date(), new Date(2023, 2, 11)))}months
        </span>
      </p>

      <ProfessionalExperience experience={professionalExperience} />
    </Section>
  );
};

export default Resume;
