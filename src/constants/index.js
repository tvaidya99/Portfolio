import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Software Developer',
    icon: frontend,
  },
  {
    title: 'Project Manager',
    icon: backend,
  },
  { 
    title: 'Cyber Security',
    icon: ux,
  },
  {
    title: 'Asset Management',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  // {
  //   name: 'docker',
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: 'IT Controls Student WT6',
    company_name: 'Michelin North America',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Sep 2024 - Dec 2024',
  },
  {
    title: 'IT Controls Student WT5',
    company_name: 'Michelin North America',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Dec 2023 - Apr 2024',
  },
  {
    title: 'IT Controls Student WT4',
    company_name: 'Michelin North America',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2023 - Aug 2023',
  },
  {
    title: 'Robotics Engineering Student WT3',
    company_name: 'Wood PLC',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2022 - Dec 2022',
  },
  {
    title: 'Junior IT Engineer WT2',
    company_name: 'NL Hydro',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Jan 2022 - Apr 2022',
  },
  {
    title: 'Junior IT Support Engineer WT1',
    company_name: 'Memorial University',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jan 2021 - May 2021',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'TDLAS Sensor Driver',
    description: 'Created python based serial API for TDLAS Methane Sensor (Work Term 3).',
    tags: [
      {
        name: 'Python',
        color: 'blue-text-gradient',
      },
      {
        name: 'Pyserial',
        color: 'green-text-gradient',
      },
      {
        name: 'Git',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/tvaidya99',
    demo: 'https://github.com/tvaidya99',
  },
  {
    id: 'project-2',
    name: 'JobPrep Backend',
    description:
      'Logic to Handle fornt-end requests and parse & score resume.',
    tags: [
      {
        name: 'NodeJS',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'WebAPIs',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/tvaidya99/JobPrep-Backend',
    demo: 'https://github.com/tvaidya99/JobPrep-Backend',
  },
  {
    id: 'project-3',
    name: 'JobPrep Frontend',
    description: 'Contributed to the front-end of the JobPrep application for Jobseekers.',
    tags: [
      {
        name: 'Astro',
        color: 'blue-text-gradient',
      },
      {
        name: 'Javascript',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/tvaidya99',
    demo: 'https://github.com/tvaidya99',
  },
  {
    id: 'project-4',
    name: 'Personal Portfolio',
    description: `Personal portfolio website built with ReactJS, TailwindCSS, and Framer Motion.`,
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'TailwindCSS',
        color: 'green-text-gradient',
      },
      {
        name: 'HTML5',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/tvaidya99/Portfolio-Template-3.0',
    demo: 'https://github.com/tvaidya99/Portfolio-Template-3.0',
  },
];

export { services, technologies, experiences, projects };
