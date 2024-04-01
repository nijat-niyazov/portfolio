import { w1, w2, w3, w4, w5, w6, w7, wishxImage } from "@/assets/images/projects";

export const projects = [
  { img: wishxImage, name: "Wishx.me", url: "wishx" },
  // { img: wishxImage, name: "Wishx.me", url: "wishx" },
  // { img: wishxImage, name: "Wishx.me", url: "wishx" },
  // { img: wishxImage, name: "Wishx.me", url: "wishx" },
];

export const projectsWithDetails = {
  wishx: {
    title: "Wishx.me",
    bg: "wishx",
    details: {
      stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
      category: ["Typescript", "NextJS"],

      images: [w1, w2, w3, w4, w5, w6, w7],
      url: "https://wishx.me",
    },
    about: [
      "WISHX.me is a platform designed to facilitate collective congratulations, primarily focusing on fulfilling wishes for birthdays and holidays in a unique and meaningful way.",

      "Users can create personalized wishes on the platform and share them with friends and followers, who can then contribute symbolic gifts ranging from $5 to $500 with a heartfelt message. The platform aims to channel the energy of greetings towards fulfilling wishes and bringing dreams to life.",

      "Users can register through standard registration or OAuth methods to access our platform. Once registered, they can create their wishes, linking their bank account for seamless gift transactions. WISHX.me provides a hassle-free experience, enabling users to send birthday wishes using various payment options such as credit cards, links, Apple Pay, and Cash App.",
    ],
  },

  qmeter: {
    title: "Qmeter.me",
    bg: "qmeter",
    details: {
      stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
      category: ["Typescript", "NextJS"],

      images: [w1, w2, w3, w4, w5, w6, w7],
      url: "https://qmeter.me",
    },
    about: [
      "QMETER.me is a platform designed to facilitate collective congratulations, primarily focusing on fulfilling wishes for birthdays and holidays in a unique and meaningful way.",

      "Users can create personalized wishes on the platform and share them with friends and followers, who can then contribute symbolic gifts ranging from $5 to $500 with a heartfelt message. The platform aims to channel the energy of greetings towards fulfilling wishes and bringing dreams to life.",

      "Users can register through standard registration or OAuth methods to access our platform. Once registered, they can create their wishes, linking their bank account for seamless gift transactions. QMETER.me provides a hassle-free experience, enabling users to send birthday wishes using various payment options such as credit cards, links, Apple Pay, and Cash App.",
    ],
  },

  // filtering: {
  //   title: "Wishx.me",
  //   bg: "wish",
  //   details: {
  //     stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
  //     category: ["Typescript", "NextJS"],
  //     images: [wishxImage],
  //     url: "https://wishx.me",
  //   },
  //   about: ["eeeee", "cccc", "dddd"],
  // },
};
