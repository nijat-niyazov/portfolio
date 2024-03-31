import { Title } from "@/components";
import { MotionLi } from "@/components/motionGenerator";
import { Experience } from "@/contents/resume";
import { Fragment } from "react";
import WorkingDate from "./Date";

const ProfessionalExperience = ({ experience }: { experience: Experience[] }) => {
  return (
    <Fragment>
      <Title title="Professional Experience" className="mt-14 after:hidden text-2xl" />

      <ul className="grid md:grid-cols-2 items-start">
        {experience.map((job, i) => {
          

          return (
            <MotionLi
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: i * 0.1 }}
              key={job.id}
              style={{ paddingBottom: i !== experience.length - 1 ? "40px" : 0 }}
              className="px-4    border-primary border-l-2 relative before:bg-content before:absolute before:top-0 before:right-full before:translate-x-1/2 before:mr-[1px] before:w-4 before:h-4 before:border-primary before:border-2 before:rounded-full"
            >
              <div className="flex items-center justify-between pr-2">
                <h2 className="text-primary font-semibold text-2xl leading-none mb-2">{job.compnay_name}</h2>
                <span className="text-primary font-medium text-lg  rounded-md">{job.type}</span>
              </div>

              <h3 className=" font-semibold bg-primary p-2 rounded-md text-secondary text-xl leading-none uppercase mb-2 inline-block">
                {job.job_title}
              </h3>

              <div className="grid gap-2 place-items-start text-base">
                <WorkingDate date={job.date} />
                <span className="italic inline-block ">{job.location}</span>
              </div>

              <ul role="list" className="mt-2 pl-5 font-light list-disc  space-y-3 marker:text-xl ">
                {job.contributions.map((contribution: string, i: number) => (
                  <MotionLi
                    initial={{ y: 100, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    key={i}
                  >
                    {contribution}
                  </MotionLi>
                ))}
              </ul>
            </MotionLi>
          );
        })}
      </ul>
    </Fragment>
  );
};

export default ProfessionalExperience;
