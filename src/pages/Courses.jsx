import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Terminal,
  Code2,
  BrainCircuit,
  ArrowRight,
  Layers,
  Zap,
  Cpu,
} from "lucide-react";

const courses = [
  {
    title: "Web Designing With AI",
    subtitle: "Design Smart User Interfaces",
    desc: "Learn modern UI UX design with AI tools and create responsive layouts for real websites step by step.",
    stack: ["HTML5", "CSS3", "JavaScript", "AI Prompting"],
    points: [
      "AI assisted UI UX design",
      "Responsive layout design",
      "Design systems and typography",
    ],
    icon: <Layers size={40} className="text-cyan-500" />,
    border: "group-hover:border-cyan-500/50",
    bgGlow: "bg-cyan-500/5",
  },
  {
    title: "Frontend Development",
    subtitle: "Build Interactive Web UI",
    desc: "Learn how to create responsive and interactive user interfaces using React with simple real world projects.",
    stack: [
      "HTML5",
      "CSS3",
      "Tailwind",
      "JS",
      "React",
      "Vite",
      "Git",
      "AI Coding",
    ],
    points: [
      "React basics made easy",
      "Build responsive UI step by step",
      "Run your project live on local server",
    ],
    icon: <Code2 size={40} className="text-blue-500" />,
    border: "group-hover:border-blue-500/50",
    bgGlow: "bg-blue-500/5",
  },
  {
    title: "Full Stack Development",
    subtitle: "Build Complete Web Projects",
    desc: "Learn how frontend, backend, and database work together by building simple real world projects step by step.",
    stack: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Next.js",
      "Tailwind",
      "AI Coding",
    ],
    points: [
      "Frontend, backend, and database basics",
      "Simple APIs and data handling",
      "Cloud deployment step by step",
    ],
    icon: <Terminal size={40} className="text-indigo-500" />,
    border: "group-hover:border-indigo-500/50",
    bgGlow: "bg-indigo-500/5",
  },
  {
    title: "Data Analytics & Python",
    subtitle: "Learn Data Step by Step",
    desc: "Understand data basics, perform simple analysis with Python, and create clear charts using real datasets.",
    stack: [
      "Python Core",
      "Pandas",
      "NumPy",
      "MySQL",
      "Matplotlib",
      "Plotly",
      "AI Coding",
    ],
    points: [
      "Data basics and simple analysis",
      "Charts and visual reports",
      "Working with real datasets step by step",
    ],
    icon: <BrainCircuit size={40} className="text-emerald-500" />,
    border: "group-hover:border-emerald-500/50",
    bgGlow: "bg-emerald-500/5",
  },
];

export default function Courses() {
  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans pb-24 selection:bg-blue-600/30">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full -z-10" />

        <div className="max-w-4xl mx-auto">
          {/* Small Label */}
          <p className="text-blue-500 text-sm font-semibold tracking-widest">
            Industrial Training Programs
          </p>

          {/* Main Heading */}
          <h1 className="mt-6 text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-[1.1] tracking-tight">
            Our Learning Path
          </h1>

          {/* Description */}
          <p className="mt-8 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Structured programs designed to build strong fundamentals, practical
            skills, and real project experience required in the software
            industry.
          </p>
        </div>
      </section>

      {/* --- COURSE GRID --- */}
      <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`group relative p-8 md:p-12 bg-[#05070a] border border-white/5 rounded-[2.5rem] transition-all duration-500 ${course.border} hover:bg-black/40 overflow-hidden`}
          >
            <div
              className={`absolute inset-0 ${course.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
            />

            <div className="relative z-10">
              <div className="flex justify-between items-start mb-8">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:bg-blue-600/10 transition-all duration-500">
                  {course.icon}
                </div>

                <div className="text-right">
                  <div className="text-xs font-medium tracking-wide text-blue-500 mb-1">
                    Course Path
                  </div>
                  <div className="h-1 w-10 bg-blue-600 ml-auto rounded-full" />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-3 group-hover:text-blue-500 transition-colors">
                {course.title}
              </h2>

              <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-6 max-w-lg">
                {course.desc}
              </p>

              {/* POINTS LIST */}
              <ul className="space-y-3 mb-8 border-l border-white/10 pl-4">
                {course.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                  >
                    <CheckCircle2
                      size={14}
                      className="text-blue-500 shrink-0"
                    />
                    <span className="text-sm font-medium">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mb-10">
                <p className="text-xs font-medium tracking-wide text-slate-500 mb-4 flex items-center gap-2">
                  <Zap size={10} className="fill-current" /> Technical Stack
                </p>

                <div className="flex flex-wrap gap-2">
                  {course.stack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-medium px-3 py-1.5 bg-white/5 border border-white/5 rounded-lg text-slate-400 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex items-center gap-6 pt-6 border-t border-white/5 flex-wrap">
                <Button className="bg-white text-black hover:bg-blue-600 hover:text-white h-11 px-8 rounded-xl font-medium text-sm tracking-wide transition-all shadow-md">
                  Join Program <ArrowRight size={14} className="ml-2" />
                </Button>

                <button className="text-sm font-medium tracking-wide text-slate-600 hover:text-white transition-colors">
                  Syllabus
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
