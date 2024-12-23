export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials",link:"#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Zentry",
    des: "Zentry unites every player from countless games and platforms, both digital and physical, into a unified Play Economy",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://awwward-tz.netlify.app/",
  },
  {
    id: 2,
    title: "XORA",
    des: "We designed XORA AI Video Editor to be an easy to use, quick to learn, and surprisingly powerful.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    link: "https://xora-tz.netlify.app/",
  },
  {
    id: 3,
    title: "AI Shirt customizer",
    des: "Create your unique and exclusive shirt with our brand-new 3D customization tool. Unleash your imagination and define your own style.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg"],
    link: "https://shirtcustomizer-tz.netlify.app/",
  },
  {
    id: 4,
    title: "Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://i-phone-clone-tz.netlify.app",
  },
];

export const testimonials = [
  {
    quote:
      "The team at Tiza Webcrafts did an exceptional job building our company's new website. They were highly responsive, understood our requirements perfectly, and delivered a visually stunning and user-friendly platform. Highly recommended for anyone looking for top-notch web development services.",
    name: 'Neha Sharma',
    title: "Director of AlphaStream Technologies",
    img: "review1.webp"
  },
  {
    quote:
    "Working with Tiza Webcrafts was a breeze. They guided us through the entire web development process, offering valuable insights and suggestions to optimize our online presence. The final product exceeded our expectations, and we've seen a significant increase in website traffic and leads since launch.",
    name: 'Raj Kumar',
    title: "Director of AlphaStream Technologies",
    img: "review2.webp"
  },
  {
    quote:
    "As a small business owner, I was looking for a reliable web development partner to help establish my online store. Tiza Webcrafts not only built a visually appealing and functional e-commerce website, but they also provided ongoing support and optimization recommendations. I'm thrilled with the results and highly recommend their services.",
    name: 'Priya Gupta',
    title: "Director of AlphaStream Technologies",
    img: "review3.avif"
  },
  {
    quote:
    "Tiza Webcrafts demonstrated exceptional technical expertise and project management skills during the development of our corporate website. They were proactive in identifying and addressing any issues, ensuring a seamless launch. I'm impressed by their dedication and would gladly work with them again.",
    name: 'Anish Mehta',
    title: "Director of AlphaStream Technologies",
    img: "review4.avif"
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Creating Stunning 3D and Animated Websites",
    desc: "Finally, I explored Three.jsand advanced animations. I mastered creating and integrating 3D models with React Three Fiber.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
