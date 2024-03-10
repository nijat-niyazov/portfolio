import { Title } from "@/components";
import { Fragment } from "react";

type Job = {
  id: number;
  jobTitle: string;
  date: string[];
  location: string;
  projectName: string;
  type: string;
  contributions: string[];
};

type Props = {
  resume: Job[];
};

const ProfessionalExperience = ({ resume }: Props) => {
  return (
    <Fragment>
      <Title title="Professional Experience" className="mt-14 after:hidden text-2xl" />

      <ul className="grid md:grid-cols-2 items-start">
        {resume.reverse().map((job, i) => (
          <li
            key={job.id}
            style={{ paddingBottom: i !== resume.length - 1 ? "40px" : 0 }}
            className="px-4    border-primary border-l-2 relative before:bg-gray-800 before:absolute before:top-0 before:right-full before:translate-x-1/2 before:mr-[1px] before:w-4 before:h-4 before:border-primary before:border-2 before:rounded-full"
          >
            <h3 className="text-primary font-semibold text-xl leading-none uppercase mb-2">{job.jobTitle}</h3>

            <div className="grid gap-2 place-items-start text-base">
              <span className="px-2 py-1 bg-gray-600">{` ${job.date[0]} -  ${job.date[1] ?? "Present"} | 8 months`}</span>
              <span className="italic inline-block ">{job.location}</span>
            </div>

            <ul role="list" className="mt-2 font-light list-disc pl-5 space-y-3 marker:text-xl ">
              {job.contributions.map((contribution, i) => (
                <li key={i}>{contribution}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default ProfessionalExperience;
