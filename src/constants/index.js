import giccs from "../assets/projects/giccs-website-front-view.png";
import youthtech from "../assets/projects/youth-website-front-view.png";
import itskasim from "../assets/projects/itskasim-website-front-view.png";
import infinitytrails from "../assets/projects/infinitytrails-website-front-view.png";
import jriit from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I am a full stack developer based in Arusha, Tanzania. I build web applications for real clients, teach programming to students, and am always working on something new.`;

export const ABOUT_TEXT = `With hands-on experience building web applications from scratch for real clients, my work covers both frontend and backend — I have built systems using React, Node.js, MySQL, and Firebase, and I am comfortable working across the full stack.

Alongside my development work, I teach Python and Scratch programming to students at The School of St Jude, which has strengthened how I explain technical concepts clearly and patiently. I also handle digital marketing and IT consulting for small businesses in Arusha.`;

export const EXPERIENCES = [
  {
    year: "2025 – Present",
    role: "Full Stack Developer",
    company: "Safezone Tech",
    description: `Develop and maintain SchoolHub, an edtech platform for Tanzanian students featuring NECTA results lookup, digital textbooks, and an AI tutor. Contribute to core service delivery across the company's offerings: cloud infrastructure, custom software development, digital marketing, and ICT training. Build scalable web and mobile applications tailored to client specifications.`,
    technologies: ["React", "Node.js", "Supabase", "Docker"],
  },
  {
    year: "2025 – Present (Remote)",
    role: "IT Consultant & Digital Marketing",
    company: "Gundua Africa Adventures",
    description: `Manage SEO strategy across all tour and blog pages, driving organic search visibility. Produce and manage social media content across Instagram and Facebook, including copywriting and content calendars. Advise on hosting and infrastructure decisions.`,
    technologies: ["SEO", "Digital Marketing", "WordPress"],
  },
  {
    year: "2024 – Present",
    role: "Computer Literacy Club Instructor",
    company: "The School of St Jude",
    description: `Run a weekly Computer Literacy Club teaching Scratch visual programming to primary students and Python programming to secondary students. Deliver three sessions per week across different age groups and skill levels. Also instruct students in graphic design using Adobe applications.`,
    technologies: ["Python", "Scratch", "Adobe Creative Suite"],
  },
  {
    year: "2025",
    role: "IT Instructor",
    company: "JR Institute of Information Technology (JRIIT)",
    description: `Deliver practical IT training covering Microsoft Office, programming fundamentals, networking basics, and IT troubleshooting. Guide students through hands-on projects to build real-world skills.`,
    technologies: ["Microsoft Office", "Networking", "Programming", "IT Troubleshooting"],
  },
  {
    year: "2023",
    role: "Full Stack Developer",
    company: "3TS",
    description: `Worked on frontend development for web applications using React and Next.js. Built and styled user interfaces, integrated with Node.js APIs, and contributed to projects focused on responsive and functional web experiences.`,
    technologies: ["JavaScript", "React", "Next.js", "Node.js"],
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
  {
    title: "JR Institute of Information Technology (JRIIT)",
    image: jriit,
    link: "https://new.jriit.ac.tz/",
    description:
      "Website and content management system for JR Institute of Information Technology, a NACTVET-registered vocational institute in Arusha, Tanzania, training youth in IT skills since 1999. Built the public frontend along with a custom CMS dashboard for staff to manage pages, courses, and site content without touching code.",
    technologies: ["React", "Tailwind CSS", "PHP", "Next.js 15", "TypeScript", "Prisma", "SQLite"],
  },
];

export const CONTACT = {
  address: "Sanawari Arusha, Tanzania ",
  phoneNo: "+255 742 021 983 ",
  email: "humphrey.david.dev@gmail.com",
};
