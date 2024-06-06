import { eCommerce, fullStack, scrapper, wishxImage } from '@/assets/images/projects';

import { w1, w2, w3, w4, w5, w6, w7 } from '@/assets/images/projects/wishx';

import {
  add_proj,
  cover_fromfolio,
  dashboard,
  followers,
  messages,
  my,
  nots,
  project,
  review_mentor,
} from '@/assets/images/projects/fromfolio';
import { f, five, four, tr } from '@/assets/images/projects/inner-app';

export const projects = [
  { img: four, name: 'Inner System (Government Project)', url: 'nra-app' },
  { img: cover_fromfolio, name: 'Fromfolio', url: 'fromfolio' },
  { img: wishxImage, name: 'Wishx.me', url: 'wishx' },
  { img: eCommerce, name: 'Full Stack E-commerce ', url: 'e-commerce' },
  { img: scrapper, name: 'Scrapper Table generates Excel file', url: 'scrapper' },

  { img: eCommerce, name: 'FromFolio', url: 'fromfolio ', hidden: true },
];

export const projectsWithDetails = {
  fromfolio: {
    title: 'Fromfolio - platform for designers to showcase their work',
    bg: 'fromfolio',
    details: {
      stacks: [
        'Next 14',
        'Typescript',
        'React Query',
        'Tailwind CSS',
        'React Hook Form',
        'Zod',
        'Shadcn UI',
        'Date-fns',
        'Stripe',
        'Web Sockets',
      ],
      category: ['Typescript', 'NExtJS'],

      images: [add_proj, dashboard, followers, messages, project, my, review_mentor, nots],
      url: 'http://fromfolio.com',
    },
    about: [
      ' Utilized advanced Next.js 14 functions extensively, using its capabilities to ensure optimal performance and seamless user experience',

      'Implemented JWT for secure and stateless authentication in the project',

      'Used React Query to manage client-side data fetching efficiently, especially in scenarios involving infinite queries',

      'Applied optimistic updates strategy to avoid flashes and user interactivity delays for enhancing user satisfaction and engagement with advantages of server actions',

      'Led the transformation of previously disorganized and suboptimal code into a cohesive and streamlined architecture, for improved readability, maintainability, and scalability',

      'Used Shadcn UI kit and Tailwind CSS for fast development in styling',
    ],
  },
  'nra-app': {
    title: 'Management System - platform let coworkers to manage their flow',
    bg: 'four',
    details: {
      stacks: [
        'Next 14',
        'Typescript',
        'React Query',
        'React Hook Form',
        'Zod',
        'Tailwind CSS',
        'Shadcn UI',
        'Date-fns',
      ],
      category: ['Typescript', 'NExtJS'],

      images: [f, five, four, tr],
    },
    about: [
      'Used Next.js 14 functions for optimal performance, seamless user experience and fast development which includes server-side rendering, static site generation, and serverless functions',

      'Implemented JWT for secure and stateless authentication in the project',

      'Used React Query to manage client-side data fetching efficiently, especially in scenarios involving infinite queries',

      'Applied toast for user feedback and error handling, to enhance user satisfaction and engagement with advantages of server actions',

      'Used Shadcn UI kit and Tailwind CSS for fast development in styling',
    ],
  },
  wishx: {
    title: 'Wishx.me',
    bg: 'wishx',
    details: {
      stacks: [
        'Next.js 13',
        'Typescript',
        'Tailwind CSS',
        'Zustand',
        'Stripe',
        'Pusher JS',
        ' Formik',
        'Material UI',
      ],
      category: ['Typescript', 'NextJS'],

      images: [w1, w2, w3, w4, w5, w6, w7],
      url: 'https://wishx.me',
    },
    about: [
      'WISHX.me is a platform designed to facilitate collective congratulations, primarily focusing on fulfilling wishes for birthdays and holidays in a unique and meaningful way.',

      'Users can create personalized wishes on the platform and share them with friends and followers, who can then contribute symbolic gifts ranging from $5 to $500 with a heartfelt message. The platform aims to channel the energy of greetings towards fulfilling wishes and bringing dreams to life.',

      'Users can register through standard registration or OAuth methods to access our platform. Once registered, they can create their wishes, linking their bank account for seamless gift transactions. WISHX.me provides a hassle-free experience, enabling users to send birthday wishes using various payment options such as credit cards, links, Apple Pay, and Cash App.',
    ],
  },

  'e-commerce': {
    title: 'Simple Full Stack E-commerce with filterization',
    bg: 'full-stack',
    details: {
      stacks: ['Next.js 14', 'Typescript', 'Tailwind CSS', 'i18next', 'Next-Themes'],
      category: ['Typescript', 'NextJS'],

      images: [fullStack],
      url: 'https://advanced-filter-next14.vercel.app/en',
      repo: 'https://github.com/nijat-niyazov/avdanced-filterization-next',
    },
    about: [
      "This project is not focused on UI. It's about the functionality of the e-commerce website. The website has a filterization feature that allows users to filter products based on their preferences. The website is built with Next.js",

      'Also this project has internalization with i18next which allows users to switch between languages. Different Local Times and currencies',

      'The website has also a dark and system mode feature which is built with Next-Themes and global variables of different css files',
    ],
  },
  scrapper: {
    title: 'Table Scrapper with full advanced filterization',
    bg: 'scrapper',
    details: {
      stacks: ['React JS', 'Typescript', 'React Query', 'Tailwind CSS', 'Shadcn UI', 'Date-fns'],
      category: ['Typescript', 'ReactJS'],

      images: [scrapper],
      url: 'http://213.199.34.248:3500/',
      repo: 'https://github.com/nijat-niyazov/parser-app',
    },
    about: [
      'In this project user can add links for generation and get notification with toasts about success or error states',

      'Used React query entire project for fetching data and caching data. Also used Tailwind CSS for styling and Shadcn UI for modals and toasts',

      'You can add, delete, edit and check for stocks in the table. You can filter data by date and by name with ascending and descending order. Also you have options for searching query like containing or eqaul etc. Filterization is generic based on limit and offset. ',
      'Also you can export data to excel file.',
    ],
  },
};
