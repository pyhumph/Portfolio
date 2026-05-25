import giccs from "../assets/projects/giccs-website-front-view.png";
import youthtech from "../assets/projects/youth-website-front-view.png";
import itskasim from "../assets/projects/itskasim-website-front-view.png";
import infinitytrails from "../assets/projects/infinitytrails-website-front-view.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a strong foundation in building dynamic, responsive web applications end-to-end. I work across the stack with JavaScript, React, and Next.js on the front end, and Node.js, Python, and SQL/NoSQL databases on the back end. My goal is to leverage my expertise to create innovative, user-centric solutions that enhance user experiences and contribute to business growth.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full Stack Developer",
    company: "3TS",
    description: `
      Designed and developed user interfaces for web applications using Next.js and React, focusing on creating seamless and engaging user experiences. Collaborated closely with backend developers to ensure efficient integration of frontend components with Node.js APIs. Implemented responsive designs across different devices and optimized frontend performance, reducing load times by 20%.
      
      Spearheaded the migration of legacy systems to modern web technologies, improving maintainability and scalability. Played a key role in project planning and execution, contributing to the successful delivery of several high-impact projects on time and within budget. Mentored junior developers, fostering a collaborative and knowledge-sharing environment.
    `,
    technologies: ["HTML", "CSS", "JavaScript", "Next.js", "MySQL", "PHP", "Node.js", "React"],
  },
];


export const PROJECTS = [
  {
    title: "GICCS Official Website",
    image: giccs,
    link: "https://giccs.or.tz/",
    description:
      "Official website for Global Integrated Charitable Community Services (GICCS), a registered Tanzanian NGO running sustainable programs across education, healthcare, environmental conservation, and economic empowerment.",
    technologies: ["React", "Vite", "Tailwind CSS"],
  },
  {
    title: "Youth Tech",
    image: youthtech,
    link: "https://youthtechtz.or.tz/",
    description:
      "Official website for Youth Tech, a Tanzanian NGO bridging the digital divide by equipping youth — especially children and women — with skills in software development, cybersecurity, web design, AI, and programming.",
    technologies: ["React", "Vite", "Tailwind CSS", "Lucide React"],
  },
  {
    title: "Its Kasim Production",
    image: itskasim,
    link: "https://itskasimproduction.com/",
    description:
      "Portfolio and creative services website for Its Kasim Production, covering photography, videography, graphics design, web design, PA system rental, and event decoration. Includes an image gallery, multiple contact forms, and an admin dashboard for content management.",
    technologies: ["React", "React Router", "Firebase", "EmailJS", "Tailwind CSS", "Framer Motion"],
  },
  {
    title: "Infinity Trails",
    image: infinitytrails,
    link: "https://infinitytrailsafrica.com/",
    description:
      "Comprehensive tour and safari website for Infinity Trails, with 8 fully-functional pages covering safaris, day trips, destinations, gallery, and blog. Mobile-first responsive design with rich dynamic content, smooth animations, and a modular component architecture.",
    technologies: ["React", "Vite", "Tailwind CSS", "React Router", "Framer Motion", "Lucide React", "Keen Slider"],
  },
];

export const CONTACT = {
  address: "Sanawari Arusha, Tanzania ",
  phoneNo: "+255 612 958 641 ",
  email: "humphrey.davi.dev@gmail.com",
};
