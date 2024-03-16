import { Section } from "@/components";
import workexperience from "@/content/workexperience";
import { ProfessionalExperience } from "@/sections/resume";
import { differenceInMonths, format } from "date-fns";

const Resume = () => {
  return (
    <Section id="resume" title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
        {/* <span className="block my-4">Started at: {differenceInMonths(new Date(2014, 12, 4), new Date(2014, 8, 3))}</span> */}
        <span className="block my-4">
          Started at: {(format(new Date(2014, 1, 11), "LLLL y"), differenceInMonths(new Date(), new Date(2023, 2, 11)))}months
        </span>
      </p>

      <ProfessionalExperience resume={workexperience} />
    </Section>
  );
};

export default Resume;
