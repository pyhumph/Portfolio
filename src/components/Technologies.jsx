import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiExpress,
  SiPython,
  SiMysql,
  SiSqlite,
  SiTailwindcss,
  SiFirebase,
  SiPocketbase,
  SiPrisma,
  SiFlutter,
  SiFlask,
  SiDjango,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const TECHNOLOGIES = [
  { name: "React", Icon: RiReactjsLine, color: "text-cyan-400", duration: 2.5 },
  { name: "Next.js", Icon: TbBrandNextjs, color: "", duration: 3 },
  { name: "Node.js", Icon: FaNodeJs, color: "text-green-500", duration: 6 },
  { name: "Express", Icon: SiExpress, color: "text-neutral-900", duration: 3.4 },
  { name: "Redis", Icon: DiRedis, color: "text-red-700", duration: 2 },
  { name: "Python", Icon: SiPython, color: "text-yellow-400", duration: 3.5 },
  { name: "Django", Icon: SiDjango, color: "text-green-700", duration: 4.4 },
  { name: "Flask", Icon: SiFlask, color: "text-neutral-900", duration: 3.6 },
  { name: "MySQL", Icon: SiMysql, color: "text-blue-600", duration: 2.8 },
  { name: "SQLite", Icon: SiSqlite, color: "text-sky-500", duration: 4.2 },
  { name: "Firebase", Icon: SiFirebase, color: "text-yellow-500", duration: 3.2 },
  { name: "PocketBase", Icon: SiPocketbase, color: "text-stone-700", duration: 3.8 },
  { name: "Prisma", Icon: SiPrisma, color: "text-teal-600", duration: 4.8 },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-400", duration: 4.5 },
  { name: "Flutter", Icon: SiFlutter, color: "text-sky-500", duration: 5 },
  { name: "Git", Icon: FaGitAlt, color: "text-orange-600", duration: 5.5 },
];

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

function Technologies() {
  return (
    <div id="tech-stack" className="scroll-mt-20 border-b border-neutral-900 pb-24">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Technologies
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        {TECHNOLOGIES.map(({ name, Icon, color, duration }) => (
          <motion.div
            key={name}
            variants={iconVariants(duration)}
            initial="initial"
            animate="animate"
            className="group relative rounded-2xl border-4 border-neutral-800 p-4"
          >
            <Icon className={`text-7xl ${color}`} />
            <span className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-neutral-800 px-2 py-1 text-xs font-medium text-purple-500 opacity-0 transition-opacity group-hover:opacity-100">
              {name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Technologies;
