import { w1, w2, w3, w4, w5, w6, w7, wishxImage } from "@/assets/images/projects";

export const projects = [
  { img: wishxImage, name: "Wishx", url: "wishx" },
  { img: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg", name: "Wishx", url: "#" },
  { img: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg", name: "Wishx", url: "#" },
];

export const projectsWithDetails = {
  wishx: {
    title: "Wishx.me",
    details: {
      stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
      category: ["Typescript", "NextJS"],
      images: [w1, w2, w3, w4, w5, w6, w7],
      url: "https://wishx.me",
    },
    about: [
      "As a key member of the front-end development team for WishX, our project aimed to facilitate wish fulfillment through gifting. ",

      "Leveraging Next.js 13 and TypeScript, we prioritized efficiency and error prevention. Tailwind CSS enabled rapid styling, while Zustand provided lightweight state management for seamless performance. Used Zustand for lightweight, scalable state management, which has good performance",

      'To ensure a better user experience, I proposed to the team to use infinite scrolling and data retrieval instead of pagination which was used in previous version. We kept the first incoming data as "SSR" to avoid delaying the incoming data during infinite scrolling',
    ],
  },
  alac: {
    title: "Alac.az",
    details: {
      stacks: ["Next.js", "Tailwind CSS", "Headless UI"],
      category: ["Typescript", "NextJS"],
      images: [wishxImage],
      url: "https://wishx.me",
    },
    about: ["eeeee", "cccc", "dddd"],
  },
  filtering: {
    title: "Wishx.me",
    details: {
      stacks: ["Next.js 13", "Typescript", "Tailwind CSS", "Zustand", "Stripe", "Pusher JS", " Formik", "Material UI"],
      category: ["Typescript", "NextJS"],
      images: [wishxImage],
      url: "https://wishx.me",
    },
    about: ["eeeee", "cccc", "dddd"],
  },
};
