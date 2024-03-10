import { Section, Title } from "@/components";

const resume = [
  {
    id: 1,
    jobTitle: "Intern Frontend Developer",
    date: ["June 2023", "August 2023"],
    location: "Dubai, United Arab Emirates ",
    projectName: "Qmeter",
    type: "Hybrid",
    contributions: [
      "I collaborated with the team on a pivotal project aimed at upgrading the CRM systems of companies for collecting and analyzing customer feedback. As part of this initiative, we replaced outdated stacks with modern technologies while simultaneously addressing bugs in the previous version",

      "Our technology stack included React.js for frontend development, CSS Modules for styling, and Redux Toolkit for state management. For user interface components, we utilized Ant Design, while data visualization was achieved through Highcharts.",

      "I can mention as one of my main and interesting task that implementing changes to a particular client's CRM system using environment files, ensuring seamless integration without disrupting the other clients system. This experience significantly boosted my confidence in handling real-world client requests and delivering tailored solutions efficiently",

      "Overall, my internship at Qmeter provided valuable insights into the intersection of technology and customer experience management, where innovation and client-centric solutions are paramount",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    date: ["December 2023", "December 2023"],
    location: "Baku, Azerbaijan",
    projectName: "Qmeter",
    type: "Freelance",
    contributions: [
      "I was Frontend developer of a one-page landing website for the ALAC app. Next.js, Tailwind CSS and Headless UI was core stack for page.",

      "Our focus was to create a sleek and responsive design to introduce users to the ALAC concept. Currently a team is focused on developing the mobile app.",

      "I'm ready to expand the website and build its full functionality if the need arises in the future (most likely).",
    ],
  },
  {
    id: 3,
    jobTitle: "Frontend & Nextjs Developer",
    date: ["August 2023"],
    location: " ,USA",
    projectName: "WISHX",
    type: "Remote",
    contributions: [
      "As a key member of the front-end development team for WishX, our project aimed to facilitate wish fulfillment through gifting.",

      "Leveraging Next.js 13 and TypeScript, we prioritized efficiency and error prevention. Tailwind CSS enabled rapid styling, while Zustand provided lightweight state management for seamless performance.",

      "To ensure a better user experience, I suggested the team to use infinite scrolling and data ingestion instead of the pagination of the previous version.",
      "Used Zustand for lightweight, scalable state management, which running both client and server side.",
    ],
  },
];

const Resume = () => {
  return (
    <Section title="Resume" className="min-h-screen bg-gray-800 text-white">
      <p className="mb-8 text-lg">
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
        quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
      </p>

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

        {/* <li className="px-4 pb-10   border-primary border-l-2 relative before:bg-gray-800 before:absolute before:top-0 before:right-full before:translate-x-1/2 before:mr-[1px] before:w-4 before:h-4 before:border-primary before:border-2 before:rounded-full">
          <h3 className="text-primary font-semibold text-xl leading-none uppercase mb-2">Junior Frontend Developer</h3>

          <div className="grid gap-2 place-items-start text-base">
            <span className="px-2 py-1 bg-gray-600">Augutst 2023 - Present</span>
            <span className="italic inline-block ">New York, USA</span>
          </div>

          <ul role="list" className="mt-2 font-light list-disc pl-5 space-y-3 marker:text-xl ">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
          </ul>
        </li>
        <li className="px-4 pb-10   border-primary border-l-2 relative before:bg-gray-800 before:absolute before:top-0 before:right-full before:translate-x-1/2 before:mr-[1px] before:w-4 before:h-4 before:border-primary before:border-2 before:rounded-full">
          <h3 className="text-primary font-semibold text-xl leading-none uppercase mb-2">Junior Frontend Developer</h3>

          <div className="grid gap-2 place-items-start text-base">
            <span className="px-2 py-1 bg-gray-600">Augutst 2023 - Present</span>
            <span className="italic inline-block ">New York, USA</span>
          </div>

          <ul role="list" className="mt-2 font-light list-disc pl-5 space-y-3 marker:text-xl ">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
          </ul>
        </li>

        <li className="px-4 pb-10   border-primary border-l-2 relative before:bg-gray-800 before:absolute before:top-0 before:right-full before:translate-x-1/2 before:mr-[1px] before:w-4 before:h-4 before:border-primary before:border-2 before:rounded-full">
          <h3 className="text-primary font-semibold text-xl leading-none uppercase mb-2">Junior Frontend Developer</h3>

          <div className="grid gap-2 place-items-start text-base">
            <span className="px-2 py-1 bg-gray-600">Augutst 2023 - Present</span>
            <span className="italic inline-block ">New York, USA</span>
          </div>

          <ul role="list" className="mt-2 font-light list-disc pl-5 space-y-3 marker:text-xl ">
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
            <li>Lead in the design, development, and implementation of the graphic, layout, and production communication materials</li>
          </ul>
        </li> */}
      </ul>
    </Section>
  );
};

export default Resume;
