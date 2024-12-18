import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  
];

const experiences = [
  {
    title: "Mastering the Basics",
    icon: tesla,
    iconBg: "#fbc3bc",
    date: "Junior Web Developer -- 2022 - 2023",
    points: [
        "Mastered HTML: Structured and organized web content effectively.",
        "Expert in CSS: Styled and enhanced the appearance of web pages.",
        "Proficient in JavaScript: Added interactivity and dynamic features to applications.",
        "Backend Basics: Gained understanding of handling messages and contact forms.",
        "Seamless Data Delivery: Ensured efficient data handling between front-end and back-end.",
    ],
},
{
    title: "Advanced Front-End Development",
    icon: shopify,
    iconBg: "#b7e4c7",
    date: "Front-End Developer -- 2023 - 2024",
    points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Transitioned to React: Advanced front-end development skills.",
        "Reusable Components: Learned to build efficient, reusable components.",
        "State Management: Mastered efficient state management.",
        "React Router: Implemented smooth navigation.",
        "Enhanced UI Skills: Created dynamic and interactive user interfaces.",
    ],
},
{
    title: "Creating Stunning 3D and Animated Websites",
    icon: meta,
    iconBg: "#a2d2ff",
    date: "Pro Front-End Developer -- 2024 - Present",
    points: [
        "Explored Three.jsand Advanced Animations: Delved into the world of 3D graphics and animations.",
        " Mastered 3D Models with React Three Fiber: Created and integrated 3D models seamlessly with React.",
        "Enhanced Visual Appeal: Crafted visually captivating and user-friendly websites.",
        "Utilized GSAP: Implemented complex animations to make websites stand out.",
        "Achieved Stunning Visuals and Interactivity: Elevated the overall user experience with advanced animations and effects.",
    ],
},
];

const testimonials = [
  {
    testimonial:
      "The team at Tiza Webcrafts did an exceptional job building our company's new website. They were highly responsive, understood our requirements perfectly, and delivered a visually stunning and user-friendly platform. Highly recommended for anyone looking for top-notch web development services.",
    name: "Neha Sharma",
    designation: "Software Engineer",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Tazza - Fresh Vegetable E-commerce Website",
    description:
      "Tazza is a fresh and vibrant e-commerce website designed to offer users a seamless and engaging online shopping experience. The website features a clean and intuitive interface, enriched with interactive elements and animations, showcasing Tazzas wide range of fresh vegetables",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "js",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://tahalokhandwala790.github.io/Tazza/",
  },
  {
    name: "Pesto - Dynamic Restaurant Website",
    description:
      "'Pesto' is a dynamic restaurant website designed to provide users with an engaging online experience. The site features a vibrant interface enriched with animations and interactive elements, showcasing Pestos culinary delights and dining experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://tahalokhandwala790.github.io/pesto-webapp/",
  },
];

export { services, technologies, experiences, testimonials, projects };
