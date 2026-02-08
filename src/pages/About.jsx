import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Sparkles,
  Terminal,
  Code2,
  BrainCircuit,
  ArrowUpRight,
  Zap,
  Globe,
  Cpu,
  MousePointer2,
} from "lucide-react";

const courses = [
  {
    title: "Web Designing",
    subtitle: "UI/UX Architecture",
    desc: "Mastering Figma-to-Code workflows and modern CSS-in-JS patterns.",
    tags: ["Figma", "Tailwind", "Gen-UI"],
    icon: <Zap size={28} />,
    color: "text-cyan-500",
    border: "group-hover:border-cyan-500/40",
  },
  {
    title: "Frontend Dev",
    subtitle: "Next.js 15 Ecosystem",
    desc: "Building high-performance React apps with Server Components.",
    tags: ["React", "Next.js", "TS"],
    icon: <Code2 size={28} />,
    color: "text-blue-500",
    border: "group-hover:border-blue-500/40",
  },
  {
    title: "Full Stack Dev",
    subtitle: "MERN + Gen-AI",
    desc: "End-to-end engineering with AI agent integration and cloud scale.",
    tags: ["Node", "Mongo", "LLMs"],
    icon: <Terminal size={28} />,
    color: "text-indigo-500",
    border: "group-hover:border-indigo-500/40",
  },
  {
    title: "Data Analytics",
    subtitle: "Python Intelligence",
    desc: "Statistical modeling and automated intelligence using Python.",
    tags: ["Python", "Pandas", "AI"],
    icon: <BrainCircuit size={28} />,
    color: "text-emerald-500",
    border: "group-hover:border-emerald-500/40",
  },
];

export default function Courses() {
  return (
    <div className="bg-[#02040a] text-slate-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      {/* --- HERO SECTION: FLUID TYPOGRAPHY --- */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-28 px-4 overflow-hidden">
        {/* Animated Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
            <Sparkles size={14} /> New Batch Starting Soon
          </div>

          {/* Fluid Heading: Scales from 3xl to 8xl */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
            Future <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-500 to-blue-800">
              Software
            </span>
          </h1>

          <p className="mt-8 text-base md:text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Md Dilkhush presents a new era of{" "}
            <span className="text-white">Gen-AI Coding</span>. Standardizing
            tech education in Katihar with industrial-grade mentorship.
          </p>
        </div>
      </section>

      {/* --- BENTO GRID COURSES: FULLY RESPONSIVE --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div
              key={index}
              className={`group relative p-6 md:p-10 bg-[#05070a] border border-white/5 rounded-[2rem] md:rounded-[3rem] transition-all duration-500 hover:bg-white/[0.02] ${course.border} flex flex-col justify-between min-h-[350px] md:min-h-[450px]`}
            >
              {/* Subtle Corner Glow */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-blue-600/5 blur-3xl group-hover:bg-blue-600/20 transition-all" />

              <div>
                <div
                  className={`p-4 bg-white/5 rounded-2xl w-fit mb-8 ${course.color} border border-white/10 group-hover:scale-110 transition-transform`}
                >
                  {course.icon}
                </div>

                <h2 className="text-2xl md:text-3xl font-black tracking-tighter uppercase italic mb-2 text-white">
                  {course.title}
                </h2>
                <p
                  className={`text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-6 ${course.color}`}
                >
                  {course.subtitle}
                </p>
                <p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8">
                  {course.desc}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {course.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white group-hover:text-blue-500 transition-colors">
                  Explore Syllabus <ArrowUpRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- RESPONSIVE CTA SECTION --- */}
      <section className="px-4 pb-32">
        <div className="max-w-5xl mx-auto p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] bg-gradient-to-br from-blue-600 to-indigo-900 relative overflow-hidden group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com')] opacity-10" />

          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-8">
              Join the First <br className="hidden md:block" /> AI Batch
            </h2>
            <p className="text-blue-100 text-sm md:text-lg mb-12 max-w-xl font-medium">
              Limited seats. Direct mentorship by **Md Dilkhush**. Build your
              software engineering career with the latest tech stack.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <Button
                size="xl"
                className="h-16 md:h-20 px-8 md:px-12 bg-white text-black hover:bg-black hover:text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95"
              >
                Apply for Admission
              </Button>
              <a
                href="tel:+918709889091"
                className="h-16 md:h-20 flex items-center justify-center px-8 border border-white/20 hover:bg-white/10 text-white rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all"
              >
                Call Support
              </a>
            </div>
          </div>

          {/* Decorative Cursor Icon for Desktop */}
          <MousePointer2
            className="hidden lg:block absolute bottom-10 right-10 text-white/20 -rotate-12 animate-bounce"
            size={100}
          />
        </div>
      </section>

      {/* --- RESPONSIVE FOOTER BAR --- */}
      <footer className="border-t border-white/5 py-12 px-4 text-center">
        <p className="text-[10px] md:text-xs font-bold text-slate-600 uppercase tracking-[0.3em]">
          © {new Date().getFullYear()} Galaxy Software Institute.{" "}
          <br className="md:hidden" />
          Designed for the AI Generation.
        </p>
      </footer>
    </div>
  );
}
