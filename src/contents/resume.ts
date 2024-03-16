export const resumeInfo =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";

export const professionalExperience = [
  {
    id: 1,
    jobTitle: "Frontend & Nextjs Developer",
    date: ["2023, 8"],
    location: "Wilmington, USA",
    projectName: "WISHX",
    type: "Remote",
    contributions: [
      "As a key member of the front-end development team for WishX, our project aimed to facilitate wish fulfillment through gifting.",
      "Leveraging Next.js 13 and TypeScript, we prioritized efficiency and error prevention. Tailwind CSS enabled rapid styling, while Zustand provided lightweight state management for seamless performance.",
      "To ensure a better user experience, I suggested the team to use infinite scrolling and data ingestion instead of the pagination of the previous version.",
      "Used Zustand for lightweight, scalable state management, which running both client and server side.",
    ],
  },
  {
    id: 2,
    jobTitle: "Frontend Developer",
    date: ["2023, 11", "2023, 12"],
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
    jobTitle: "Intern Frontend Developer",
    date: ["2023, 6", "2023, 8"],
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
];

export type Experience = (typeof professionalExperience)[0];