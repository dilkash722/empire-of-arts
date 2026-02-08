import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Code,
  ArrowRight,
  Laptop,
  Layout,
  BarChart3,
  Binary,
  Sparkles,
  User,
  ChevronRight,
  Terminal,
  Cpu,
  Zap,
} from "lucide-react";

// Professional Animation Presets
const fader = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
};

export default function GalaxySoftwareInstitute() {
  const courses = [
    {
      title: "Full Stack MERN",
      tag: "DIPLOMA",
      icon: <Binary className="text-indigo-400" />,
      desc: "MongoDB, Express, React, Node.js architecture.",
    },
    {
      title: "UI/UX Design",
      tag: "AI TOOLS",
      icon: <Layout className="text-cyan-400" />,
      desc: "Modern design systems with Figma & AI Prototyping.",
    },
    {
      title: "Frontend Dev",
      tag: "NEXT.JS 15",
      icon: <Code className="text-blue-400" />,
      desc: "SEO optimized apps with React & Tailwind CSS.",
    },
    {
      title: "Data Science",
      tag: "PYTHON",
      icon: <BarChart3 className="text-emerald-400" />,
      desc: "Business Intelligence using Python & Pandas.",
    },
  ];

  return (
    <div className="bg-[#02040a] text-slate-300 font-sans overflow-x-hidden">
      {/* --- HERO SECTION: FULL SCREEN IMPACT --- */}
      <section className="relative min-h-[100dvh] flex flex-col items-center justify-center px-6 pt-20">
        {/* Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[60vh] bg-blue-600/10 blur-[150px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="max-w-7xl mx-auto text-center z-10"
        >
          {/* Badge */}
          <div className="mb-8">
            <span className="px-4 py-2 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-400 text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase backdrop-blur-md shadow-2xl">
              <Sparkles
                size={14}
                className="inline-block mr-2 mb-1 animate-pulse"
              />
              Next-Gen Software Lab • Katihar
            </span>
          </div>

          {/* Typography: Mega Titles */}
          <h1 className="mb-10">
            <span className="block text-6xl md:text-[10rem] lg:text-[13rem] font-black leading-[0.8] tracking-[-0.05em] text-white">
              GALAXY
            </span>
            <span className="relative inline-block text-6xl md:text-[10rem] lg:text-[13rem] font-black leading-[0.8] tracking-[-0.05em] text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-500 to-slate-800 italic py-2">
              SOFTWARE
            </span>
            <span className="block text-2xl md:text-6xl lg:text-8xl font-extralight tracking-[0.4em] text-slate-700 uppercase mt-4">
              Institute
            </span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-lg md:text-2xl lg:text-3xl text-slate-400 font-light leading-relaxed mb-16 px-4">
            Standardizing tech education. We don't just teach code;{" "}
            <br className="hidden md:block" />
            <span className="text-white font-bold italic underline decoration-blue-600 underline-offset-8">
              WE ARCHITECT FUTURES.
            </span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Button
              size="lg"
              className="w-full sm:w-auto h-20 px-12 md:px-16 bg-blue-600 hover:bg-white hover:text-black text-white rounded-2xl font-black text-xl md:text-2xl transition-all shadow-[0_20px_50px_rgba(37,99,235,0.3)] group"
            >
              JOIN THE REVOLUTION{" "}
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </Button>

            <div className="flex items-center gap-5 p-5 border border-white/10 bg-white/5 rounded-2xl backdrop-blur-xl">
              <Laptop className="text-blue-500 animate-bounce" size={28} />
              <div className="text-left">
                <p className="text-[10px] text-slate-500 font-black uppercase tracking-widest leading-none mb-1">
                  Mandatory
                </p>
                <p className="text-base font-bold text-white uppercase tracking-tighter leading-none">
                  Bring Your Laptop
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="py-20 bg-white/[0.02] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {[
            { label: "Hands-on Practice", val: "100%" },
            { label: "Personal Mentor", val: "1:1" },
            { label: "Lab Access", val: "24/7" },
            { label: "Job Ready", val: "Global" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fader}
              initial="initial"
              whileInView="whileInView"
            >
              <h4 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                {stat.val}
              </h4>
              <p className="text-blue-500 text-[10px] font-black uppercase tracking-[0.3em] mt-2">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- COURSES SECTION --- */}
      <section className="py-32 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center lg:text-left">
            <h2 className="text-5xl md:text-[6rem] font-black text-white tracking-tighter italic leading-none uppercase">
              Expert <span className="text-blue-600">Tracks</span>
            </h2>
            <div className="h-2 w-32 bg-blue-600 mt-6 mx-auto lg:mx-0" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                variants={fader}
                initial="initial"
                whileInView="whileInView"
                className="group p-10 bg-[#0a0c14] border border-white/5 rounded-[3rem] hover:border-blue-500/40 transition-all duration-500"
              >
                <div className="mb-10 p-5 bg-white/5 w-fit rounded-2xl group-hover:bg-blue-600 transition-colors">
                  {course.icon}
                </div>
                <p className="text-blue-500 text-[10px] font-black tracking-widest uppercase mb-3">
                  {course.tag}
                </p>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                  {course.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {course.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOUNDER SECTION --- */}
      <section className="py-32 px-6 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="relative group justify-self-center lg:justify-self-start order-2 lg:order-1">
            <div className="absolute -inset-10 bg-blue-600/10 rounded-full blur-[100px]" />
            <div className="relative w-80 md:w-96 h-[500px] bg-slate-900 rounded-[4rem] border border-white/10 overflow-hidden">
              <div className="h-full w-full flex items-center justify-center bg-[#05070a]">
                <User size={200} className="text-slate-800 opacity-30" />
              </div>
              <div className="absolute bottom-0 w-full p-12 backdrop-blur-xl bg-black/60">
                <h3 className="text-4xl font-black text-white tracking-tighter uppercase italic leading-none">
                  Md Dilkash
                </h3>
                <p className="text-blue-400 text-xs font-bold tracking-[0.3em] uppercase mt-4">
                  Chief Architect
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12 text-center lg:text-left order-1 lg:order-2">
            <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-[0.85] italic">
              "ZERO SLIDES. <br />
              <span className="text-blue-600 uppercase">Just Code."</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-3xl font-light leading-relaxed max-w-2xl">
              "My goal is simple: To turn Katihar into a tech powerhouse. We
              focus on the{" "}
              <span className="text-white font-bold underline decoration-blue-600 underline-offset-8">
                Production Standards
              </span>{" "}
              that top companies actually use."
            </p>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-40 px-6 text-center">
        <motion.div
          variants={fader}
          initial="initial"
          whileInView="whileInView"
          className="max-w-4xl mx-auto"
        >
          <div className="bg-blue-600/10 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-10 border border-blue-500/20 shadow-2xl">
            <Terminal className="text-blue-500" size={32} />
          </div>
          <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-12">
            WRITE YOUR <br />
            <span className="text-blue-600 uppercase">Own Future.</span>
          </h2>
          <Button
            size="lg"
            className="h-20 px-16 bg-white text-black hover:bg-blue-600 hover:text-white rounded-full font-black text-xl tracking-widest transition-all"
          >
            ENROLL NOW
          </Button>
        </motion.div>
      </section>
    </div>
  );
}
