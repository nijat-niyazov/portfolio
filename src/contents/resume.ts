export const resumeInfo =
  'Began my journey as an intern where I expanded my knowledge with advantages of advanced features of React and Next.js. This growth helped me expand my working in real-world-projects and boosted my problem solving skillls. I got a chance to become an integral core team member in global projects. Excited to further expand my skills, being team member of dynamic team and professional opportunities.';

export const professionalExperience = [
  {
    id: 3,
    job_title: 'Frontend & Nextjs Developer',
    date: { start: '2024, 3' },
    location: '',
    compnay_name: 'Fromfolio',
    type: 'Full Time',
    contributions: [
      'Utilized advanced Next.js 14 functions extensively, using its capabilities to ensure optimal performance and seamless user experience',
      'Led the transformation of previously disorganized and suboptimal code into a cohesive and streamlined architecture, for improved readability, maintainability, and scalability',
      'Implemented optimistic updates strategy to avoid flashes and user interactivity delays for enhancing user satisfaction and engagement',
      'Used Shadcn UI kit and Tailwind CSS for fast development in styling',
      'Collaborated closely with team members to prioritize refactoring tasks',
    ],
  },
  {
    id: 1,
    job_title: 'Frontend & Nextjs Developer',
    date: { start: '2023, 8', end: '2024,2' },
    location: 'Wilmington, USA',
    compnay_name: 'WISHX',
    type: 'Remote',
    contributions: [
      'As a key member of the front-end development team for WishX, our project aimed to facilitate wish fulfillment through gifting.',
      'Leveraging Next.js 13 and TypeScript, we prioritized efficiency and error prevention. Tailwind CSS enabled rapid styling, while Zustand provided lightweight state management for seamless performance.',
      "Conceptualized and developed the platform's features and functionalities to meet user needs effectively. Implemented secure payment gateways and ensured seamless integration with various payment methods.",
      "To ensure a better user experience, I proposed to the team to use infinite scrolling and data retrieval instead of pagination which was used in previous version. We kept the first incoming data as 'SSR' to avoid delaying the incoming data during infinite scrolling",
    ],
  },
  {
    id: 2,
    hidden: true,
    job_title: 'Frontend & Nextjs Developer',
    date: { start: '2023, 8' },
    location: 'Wilmington, USA',
    compnay_name: 'WISHX',
    type: 'Remote',
    contributions: [
      'As a key member of the front-end development team for WishX, our project aimed to facilitate wish fulfillment through gifting.',
      'Leveraging Next.js 13 and TypeScript, we prioritized efficiency and error prevention. Tailwind CSS enabled rapid styling, while Zustand provided lightweight state management for seamless performance.',
      "Conceptualized and developed the platform's features and functionalities to meet user needs effectively. Implemented secure payment gateways and ensured seamless integration with various payment methods.",
      "To ensure a better user experience, I proposed to the team to use infinite scrolling and data retrieval instead of pagination which was used in previous version. We kept the first incoming data as 'SSR' to avoid delaying the incoming data during infinite scrolling",
    ],
  },

  {
    id: 3,
    job_title: 'Intern Frontend & React Developer',
    date: { start: '2023, 6', end: '2023, 8' },
    location: 'Dubai, UAE',
    compnay_name: 'Qmeter',
    type: 'Full Time Remote',
    contributions: [
      'I collaborated with the team on a pivotal project aimed at upgrading the CRM systems of companies for collecting and analyzing customer feedback. As part of this initiative, we replaced outdated stacks with modern technologies while simultaneously addressing bugs in the previous version',
      'Our technology stack included React.js for frontend development, CSS Modules for styling, and Redux Toolkit for state management. For user interface components, we utilized Ant Design, while data visualization was achieved through Highcharts.',
      "I can mention as one of my main and interesting task that implementing changes to a particular client's CRM system using environment files, ensuring seamless integration without disrupting the other clients system. This experience significantly boosted my confidence in handling real-world client requests and delivering tailored solutions efficiently",
      'Overall, my internship at Qmeter provided valuable insights into the intersection of technology and customer experience management, where innovation and client-centric solutions are paramount',
    ],
  },
];

export type Experience = (typeof professionalExperience)[0];
