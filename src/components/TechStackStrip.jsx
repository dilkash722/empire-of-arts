import {
  SiPython,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiGit,
  SiGithub,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiHtml5,
} from "react-icons/si";

const row1 = [
  { Icon: SiPython, color: "#3776AB" },
  { Icon: SiMysql, color: "#4479A1" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiPostgresql, color: "#336791" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiNodedotjs, color: "#339933" },
];

const row2 = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiNextdotjs, color: "#FFFFFF" },
  { Icon: SiGit, color: "#F05032" },
  { Icon: SiGithub, color: "#FFFFFF" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiTailwindcss, color: "#06B6D4" },
  { Icon: SiExpress, color: "#FFFFFF" },
];

function Row({ icons, reverse }) {
  const items = [...icons, ...icons, ...icons]; // 3 times

  return (
    <div className="overflow-hidden">
      <div
        className={`flex gap-16 w-max items-center ${
          reverse ? "animate-scroll-reverse" : "animate-scroll"
        }`}
      >
        {items.map(({ Icon, color }, i) => (
          <Icon key={i} size={44} style={{ color }} />
        ))}
      </div>
    </div>
  );
}

export default function TechStackStrip() {
  return (
    <div className="py-10 space-y-8">
      <Row icons={row1} />
      <Row icons={row2} reverse />
    </div>
  );
}
