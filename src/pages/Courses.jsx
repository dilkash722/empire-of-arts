import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Sparkles,
  Terminal,
  Code2,
  BrainCircuit,
  ArrowRight,
  Layers,
  Zap,
  Globe,
  Cpu,
} from "lucide-react";

const courses = [
  {
    title: "Web Designing",
    subtitle: "UI/UX & Creative Layouts",
    desc: "Master the art of creating pixel-perfect user interfaces using modern design principles and AI-assisted prototyping.",
    tags: ["Figma", "Tailwind CSS", "Gen-UI"],
    icon: <Layers size={40} className="text-cyan-500" />,
    points: [
      "Modern UI/UX Design Systems",
      "Responsive & Adaptive Layouts",
      "Animation with Framer Motion",
    ],
    border: "group-hover:border-cyan-500/50",
    bgGlow: "bg-cyan-500/5",
  },
  {
    title: "Frontend Dev",
    subtitle: "Modern React Ecosystem",
    desc: "Build lightning-fast web applications using Next.js 15 and React. Focus on performance, SEO, and scalability.",
    tags: ["React.js", "Next.js 15", "TypeScript"],
    icon: <Code2 size={40} className="text-blue-500" />,
    points: [
      "Next.js App Router Mastery",
      "State Management (Zustand/Redux)",
      "API & Cloud Integration",
    ],
    border: "group-hover:border-blue-500/50",
    bgGlow: "bg-blue-500/5",
  },
  {
    title: "Full Stack Dev",
    subtitle: "MERN + AI Integration",
    desc: "Become a complete engineer. Build robust backends and integrate Generative AI agents into full-stack applications.",
    tags: ["Node.js", "MongoDB", "AI Agents"],
    icon: <Terminal size={40} className="text-indigo-500" />,
    points: [
      "Scalable Backend Architecture",
      "AI Model API Integration",
      "Real-time Web Sockets",
    ],
    border: "group-hover:border-indigo-500/50",
    bgGlow: "bg-indigo-500/5",
  },
  {
    title: "Data Analytics",
    subtitle: "Python & Intelligence",
    desc: "Turn data into decisions. Learn Python for Data Science and build predictive models using modern AI libraries.",
    tags: ["Python", "Pandas", "ML Models"],
    icon: <BrainCircuit size={40} className="text-emerald-500" />,
    points: [
      "Business Intelligence Data Viz",
      "Machine Learning Fundamentals",
      "Automated AI Workflows",
    ],
    border: "group-hover:border-emerald-500/50",
    bgGlow: "bg-emerald-500/5",
  },
];

export default function Courses() {
  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[150px] rounded-full -z-10" />

        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
            <Zap size={12} className="fill-current" /> Industry Leading
            Curriculum
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-[0.9]">
            Level Up Your <span className="text-blue-600">Tech Stack</span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Professional training designed for the{" "}
            <span className="text-white">AI-first era</span>. No fluff, just
            production-level coding and software engineering.
          </p>
        </div>
      </section>

      {/* --- COURSE GRID (No Images) --- */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative p-8 md:p-12 bg-[#05070a] border border-white/5 rounded-[2.5rem] transition-all duration-500 ${course.border} hover:bg-transparent overflow-hidden`}
            >
              {/* Hover Glow Effect */}
              <div
                className={`absolute inset-0 ${course.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Header: Icon & Title */}
                <div className="flex justify-between items-start mb-8">
                  <div className="p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-500">
                    {course.icon}
                  </div>
                  <div className="flex gap-2">
                    {course.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[9px] font-black tracking-widest uppercase px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h2 className="text-3xl md:text-4xl font-black tracking-tighter uppercase italic mb-2">
                  {course.title}
                </h2>
                <p className="text-blue-500 text-xs font-bold tracking-[0.2em] uppercase mb-6">
                  {course.subtitle}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-md">
                  {course.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 mb-10">
                  {course.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <CheckCircle2 size={16} className="text-blue-600" />
                      <span className="text-sm font-medium">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-6">
                  <Button className="bg-white text-black hover:bg-blue-600 hover:text-white h-12 px-8 rounded-xl font-black text-[10px] uppercase tracking-widest transition-all">
                    Enroll Now <ArrowRight size={14} className="ml-2" />
                  </Button>
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-white transition-colors">
                    View Syllabus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- QUICK STATS / TRUST --- */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Hands-on Projects",
              val: "15+",
              icon: <Code2 size={18} />,
            },
            {
              label: "AI Tools Training",
              val: "10+",
              icon: <Sparkles size={18} />,
            },
            { label: "Live Lab Access", val: "24/7", icon: <Cpu size={18} /> },
            {
              label: "Student Success",
              val: "100%",
              icon: <Globe size={18} />,
            },
          ].map((stat, i) => (
            <div
              key={i}
              className="p-6 bg-white/5 border border-white/5 rounded-3xl text-center"
            >
              <div className="flex justify-center text-blue-500 mb-3">
                {stat.icon}
              </div>
              <div className="text-2xl font-black text-white">{stat.val}</div>
              <div className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
