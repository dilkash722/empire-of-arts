import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy,
  Terminal,
  Code2,
  Rocket,
  ExternalLink,
  Star,
  Quote,
} from "lucide-react";

const placements = [
  {
    name: "Aman Kumar",
    role: "Frontend Developer",
    package: "LPA: 4.5",
    desc: "Built an AI-powered SaaS dashboard. His technical depth in Next.js 15 set him apart during interviews.",
    tags: ["Next.js", "Tailwind"],
    icon: <Code2 size={24} />,
    color: "text-blue-500",
    border: "group-hover:border-blue-500/40",
  },
  {
    name: "Ritika Singh",
    role: "Full Stack Engineer",
    package: "LPA: 6.2",
    desc: "Developed a real-time collaboration tool. Mastered MERN stack and system design at Galaxy.",
    tags: ["MERN", "Socket.io"],
    icon: <Terminal size={24} />,
    color: "text-emerald-500",
    border: "group-hover:border-emerald-500/40",
  },
  {
    name: "Sahil Raj",
    role: "Backend Specialist",
    package: "LPA: 5.0",
    desc: "Optimized complex database queries for a fintech app. Strong grip on Node.js and AWS.",
    tags: ["Node.js", "PostgreSQL"],
    icon: <Rocket size={24} />,
    color: "text-indigo-500",
    border: "group-hover:border-indigo-500/40",
  },
];

export default function Results() {
  return (
    <div className="bg-[#02040a] text-slate-200 min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-28 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[400px] bg-emerald-500/10 blur-[120px] rounded-full -z-10 animate-pulse" />

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-8 backdrop-blur-md">
            <Trophy size={14} /> Mission: 100% Placement
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.85] text-white">
            Hall of <br />{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-emerald-500 to-emerald-800">
              Fame
            </span>
          </h1>

          <p className="mt-8 text-base md:text-xl lg:text-2xl text-slate-500 max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Proof of our{" "}
            <span className="text-white font-bold tracking-tight text-glow">
              Curriculum Impact
            </span>
            . Galaxy students don't just learn; they get hired.
          </p>
        </div>
      </section>

      {/* --- RESULTS BENTO GRID --- */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {placements.map((student, index) => (
            <div
              key={index}
              className={`group relative p-8 bg-[#05070a] border border-white/5 rounded-[2.5rem] transition-all duration-500 hover:bg-white/[0.02] ${student.border} flex flex-col justify-between`}
            >
              {/* Top Quote Icon */}
              <div className="absolute top-6 right-8 text-white/5 group-hover:text-white/10 transition-colors">
                <Quote size={40} />
              </div>

              <div>
                <div
                  className={`p-3 bg-white/5 rounded-xl w-fit mb-6 ${student.color} border border-white/10 group-hover:rotate-12 transition-transform`}
                >
                  {student.icon}
                </div>

                <h2 className="text-2xl font-black tracking-tighter uppercase italic text-white mb-1">
                  {student.name}
                </h2>
                <p
                  className={`text-[10px] font-black tracking-widest uppercase mb-4 ${student.color}`}
                >
                  {student.role} • {student.package}
                </p>

                <p className="text-slate-400 text-sm leading-relaxed mb-8">
                  "{student.desc}"
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {student.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold px-3 py-1 bg-white/5 border border-white/10 rounded-full text-slate-500 group-hover:text-white transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={10}
                        className="fill-emerald-500 text-emerald-500"
                      />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-600">
                    Alumni
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="px-4 pb-32">
        <div className="max-w-5xl mx-auto p-12 md:p-24 rounded-[3rem] bg-gradient-to-br from-emerald-600 to-teal-900 relative overflow-hidden group text-center">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com')] opacity-10" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tighter uppercase italic leading-none mb-6">
              Be the Next <br /> Success Story
            </h2>
            <p className="text-emerald-100 text-sm md:text-lg mb-10 max-w-xl mx-auto font-medium">
              Aapki coding journey yahan se start hoti hai. Join the most
              advanced software training in Katihar.
            </p>
            <button className="h-16 md:h-20 px-10 bg-white text-emerald-900 hover:bg-black hover:text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all shadow-2xl active:scale-95">
              Start Your Journey
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
