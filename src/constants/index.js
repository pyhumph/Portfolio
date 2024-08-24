import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate front-end developer with a strong foundation in crafting dynamic and responsive web applications. I have honed my skills in front-end technologies like JavaScript, React, and Next.js, as well as back-end experience with Node.js and Python. My goal is to leverage my expertise to create innovative, user-centric solutions that enhance user experiences and contribute to business growth.`;

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
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "Sanawari Arusha, Tanzania ",
  phoneNo: "+255 612 958 641 ",
  email: "humphrey.davi.dev@gmail.com",
};
