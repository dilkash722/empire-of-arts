import React from "react";
import { motion } from "framer-motion";
import {
  Target,
  Eye,
  Terminal,
  Code2,
  BookOpen,
  UserCheck,
  ClipboardCheck,
  Cpu,
} from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-[#02040a] text-slate-300 min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* Background Tech Elements */}
      <div
        className="fixed inset-0 z-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#3b82f6 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />
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
            Beyond{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">
              Coding
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 text-slate-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            We train students to think like real developers through live
            practice, clear concepts, and hands-on project work that reflects
            real industry workflows.
          </p>
        </div>
      </section>
      {/* --- FOUNDER SECTION --- */}
      <section className="py-16 px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE: PHOTO CARD */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="aspect-[4/5] bg-slate-900 border border-slate-800 rounded-[2.5rem] relative overflow-hidden shadow-2xl group">
              {/* Image with Enhanced Colors */}
              <img
                src="https://media.licdn.com/dms/image/v2/D4D03AQEldctReMxvhQ/profile-displayphoto-crop_800_800/B4DZncvjCtHsAI-/0/1760345076623?e=1772064000&v=beta&t=Qu90zoPPcrG-bCc21LSoJebeYGLLvutCDmsXa3IKShY"
                alt="Md Dilkash"
                className="absolute inset-0 w-full h-full object-cover brightness-[0.85] contrast-[1.1] group-hover:brightness-100 group-hover:scale-105 transition-all duration-700 ease-out"
                onError={(e) => {
                  e.target.src = "https://images.pexels.com";
                }}
              />

              {/* Premium Blue & Dark Overlay - Isse photo background se match ho jayegi */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-blue-900/10 to-transparent mix-blend-multiply opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-transparent opacity-90" />

              {/* Name & Title Container */}
              <div className="absolute bottom-10 left-10 space-y-1 z-10">
                <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight">
                  Md Dilkhush
                </h2>
                <p className="text-blue-500 font-semibold tracking-widest text-xs uppercase">
                  Founder & Lead Architect
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE: TEXT DETAILS */}
          <div className="space-y-10 text-left">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white mb-6 border-l-4 border-blue-600 pl-6 uppercase">
                Mentorship & Vision
              </h3>
              <p className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-3xl">
                "I founded{" "}
                <span className="text-white">CodeMint Institute</span> to bridge
                the gap between local talent and global standards. As an MCA
                professional, my goal is to provide a structured, industrial
                approach to software engineering."
              </p>
            </motion.div>

            {/* STATS GRID */}
            <div className="grid grid-cols-2 gap-8 pt-4 border-t border-white/5">
              <div className="space-y-1">
                <div className="text-blue-500 text-2xl md:text-3xl font-bold tracking-tight">
                  MCA, BCA
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                  Academic Foundation
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-500 text-2xl md:text-3xl font-bold tracking-tight">
                  Experience
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                  Real World Projects
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-500 text-2xl md:text-3xl font-bold tracking-tight">
                  Expert
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                  Full Stack AI Systems
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-500 text-2xl md:text-3xl font-bold tracking-tight">
                  Industrial
                </div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
                  Workflow Training
                </div>
              </div>
            </div>

            <p className="text-slate-600 font-mono text-[10px] uppercase tracking-widest">
              // Verified Lead Architect_
            </p>
          </div>
        </div>
      </section>
      {/* --- VISION & MISSION BENTO --- */}
      <section className="py-16 px-6 bg-slate-950/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 md:p-16 bg-slate-900/30 border border-slate-800 rounded-[3rem] relative overflow-hidden group"
          >
            <Target
              className="absolute top-8 right-8 text-blue-500/10"
              size={80}
            />
            <div className="relative z-10 space-y-4">
              <div className="text-blue-500 font-bold tracking-widest text-xs uppercase">
                // Execution
              </div>
              <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our Mission
              </h4>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                To make software engineering accessible to everyone. We train
                students with
                <span className="text-white"> modern tech stacks </span>
                and real projects to make them industry ready.
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 md:p-16 bg-slate-900/30 border border-slate-800 rounded-[3rem] relative overflow-hidden group"
          >
            <Eye
              className="absolute top-8 right-8 text-blue-500/10"
              size={80}
            />
            <div className="relative z-10 space-y-4">
              <div className="text-blue-500 font-bold tracking-widest text-xs uppercase">
                // Future
              </div>
              <h4 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                Our Vision
              </h4>
              <p className="text-slate-400 text-base md:text-lg font-medium leading-relaxed">
                Helping students become
                <span className="text-white"> independent developers </span>
                by building real client projects with practical skills and
                confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- PILLARS --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 tracking-tight text-white">
          CodeMint Pillars
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              icon: <BookOpen />,
              title: "Easy Learning",
              sub: "Step by step guidance",
            },
            {
              icon: <UserCheck />,

              title: "Personal Mentorship",
              sub: "Direct doubt support",
            },
            {
              icon: <ClipboardCheck />,
              title: "Daily Practice",
              sub: "Regular hands on tasks",
            },
            {
              icon: <Code2 />,
              title: "Clean Coding",
              sub: "Good habits from start",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-slate-900/40 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-blue-500/30 transition-all group"
            >
              <div className="text-blue-500 flex justify-center group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div>
                <h5 className="text-lg font-bold text-white tracking-tight">
                  {item.title}
                </h5>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-widest mt-1">
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
