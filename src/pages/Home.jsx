import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Terminal,
  Cpu,
  Workflow,
  Laptop,
  Layers,
  Code2,
  Database,
  BrainCircuit,
  ArrowRight,
  MonitorPlay,
  PenTool,
  GitBranch,
  Zap,
  Binary,
  Code,
  Shapes,
} from "lucide-react";

const HomePage = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-[#02040a] text-slate-300 min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden relative">
      {/* --- ADVANCED ANIMATED BACKGROUND --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Glow Effects */}
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />

        {/* Engineering Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* --- 1) HERO SECTION --- */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-7xl space-y-12"
        >
          {/* Upper Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-2xl text-blue-400 text-[11px] font-black tracking-[0.5em] uppercase shadow-[0_0_40px_rgba(59,130,246,0.2)] mx-auto"
          >
            <Binary size={16} className="animate-pulse" />
            Galaxy Software Institute
            <span className="text-slate-500 font-medium tracking-normal">
              // Katihar
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-7xl md:text-[150px] font-black tracking-[-0.05em] leading-[0.8] text-white uppercase"
          >
            GALAXY <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-900 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]">
              SOFTWARE
            </span>
          </motion.h1>

          {/* Sub-headline & Description */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-blue-500 font-black tracking-[0.3em] uppercase text-sm md:text-xl">
              Institute of Software Training & Development
            </p>
            <p className="max-w-3xl mx-auto text-slate-400 text-xl md:text-3xl font-light leading-snug tracking-tight">
              A practical workspace where students build
              <span className="text-white font-bold"> real-world systems </span>
              under the mentorship of
              <span className="text-blue-100/80 font-medium">
                {" "}
                industry veterans.
              </span>
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-8 pt-6"
          >
            <button className="h-20 px-14 bg-blue-600 hover:bg-blue-500 text-white font-black text-lg rounded-2xl transition-all shadow-[0_25px_50px_-12px_rgba(37,99,235,0.6)] group flex items-center justify-center tracking-tighter">
              SOFTWARE TRAINING
              <Zap
                size={22}
                className="ml-3 fill-current group-hover:scale-125 transition-transform"
              />
            </button>

            <button className="h-20 px-14 border-2 border-white/10 bg-white/5 text-white hover:bg-white hover:text-black rounded-2xl font-black text-lg transition-all duration-500 tracking-tighter uppercase">
              PROJECT DEVELOPMENT
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* --- 2) WHAT MAKES US DIFFERENT (BENTO STYLE) --- */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col items-center md:items-start mb-24 space-y-4">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            className="h-1.5 bg-blue-600 rounded-full"
          />
          <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-[-0.05em] leading-[0.9]">
            Beyond <br /> Coaching.
          </h2>
          <p className="text-blue-500 font-mono text-sm tracking-[0.3em] uppercase font-bold">
            // Professional Dev-Environment // Katihar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6">
          {/* Box 1: Live Coding (Large) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 md:row-span-1 bg-[#0a0c12] border border-white/5 p-10 rounded-[3.5rem] relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex flex-col md:flex-row items-center h-full gap-10 relative z-10">
              <div className="flex-1 space-y-6">
                <div className="p-5 bg-blue-600/10 w-fit rounded-[1.5rem] text-blue-500 shadow-inner">
                  <MonitorPlay size={36} strokeWidth={2.5} />
                </div>
                <h3 className="text-4xl font-black text-white uppercase tracking-tighter">
                  Live Coding
                </h3>
                <p className="text-slate-400 text-lg leading-snug font-medium max-w-md">
                  Software is built step by step in real time so beginners can
                  clearly see how development actually happens.
                </p>
              </div>
              <div className="hidden md:block text-blue-500/5 group-hover:text-blue-500/10 transition-all duration-700 group-hover:scale-110">
                <Code size={220} strokeWidth={3} />
              </div>
            </div>
          </motion.div>

          {/* Box 2: AI Assisted (Small) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 md:row-span-1 bg-[#0a0c12] border border-white/5 p-10 rounded-[3.5rem] flex flex-col justify-between group shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-5 bg-indigo-600/10 w-fit rounded-[1.5rem] text-indigo-400 group-hover:rotate-[15deg] transition-transform relative z-10 shadow-inner">
              <BrainCircuit size={32} />
            </div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                AI Assisted Learning
              </h3>
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-tighter leading-tight">
                Learn how to use LLMs and AI tools in daily coding workflow for
                faster and smarter development.
              </p>
            </div>
          </motion.div>

          {/* Box 3: BYO Laptop (Small) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-4 md:row-span-1 bg-[#0a0c12] border border-white/5 p-10 rounded-[3.5rem] flex flex-col justify-between group shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="p-5 bg-blue-500/10 w-fit rounded-[1.5rem] text-blue-400 group-hover:scale-110 transition-transform relative z-10 shadow-inner">
              <Laptop size={32} />
            </div>
            <div className="space-y-4 relative z-10">
              <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                BYO Laptop
              </h3>
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-tighter leading-tight">
                Students write, test, and ship code on their own system like a
                real developer workspace.
              </p>
            </div>
          </motion.div>

          {/* Box 4: Real Workflow (Large) */}
          <motion.div
            whileHover={{ y: -10 }}
            className="md:col-span-8 md:row-span-1 bg-blue-600 p-12 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between group relative overflow-hidden shadow-[0_30px_60px_-15px_rgba(37,99,235,0.4)]"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app')] opacity-20 pointer-events-none" />
            <div className="relative z-10 space-y-8 flex-1">
              <div className="p-5 bg-white/20 w-fit rounded-[1.5rem] shadow-xl backdrop-blur-md">
                <Workflow size={36} strokeWidth={2.5} />
              </div>
              <div className="space-y-4">
                <h3 className="text-5xl font-black uppercase leading-none tracking-tighter">
                  Real <br /> Workflow
                </h3>
                <p className="text-blue-100 max-w-sm text-lg font-medium leading-relaxed">
                  Students observe how a project moves from start to finish
                  during the live session.
                </p>
              </div>
            </div>
            <div className="hidden lg:block text-[140px] font-black opacity-10 absolute -right-6 tracking-tighter pointer-events-none group-hover:translate-x-10 transition-transform duration-700 select-none">
              GALAXY
            </div>
          </motion.div>
        </div>
      </section>
      {/* --- 4) HOW CLASSES RUN DAILY --- */}
      <section className="relative z-10 py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <span className="text-blue-500 font-mono tracking-[0.5em] text-xs uppercase animate-pulse">
              Execution Pipeline
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none">
              Daily <br /> Workflow
            </h2>
          </div>
          <p className="text-slate-500 max-w-xs font-mono text-xs leading-relaxed uppercase tracking-tighter border-l border-white/10 pl-4">
            // standard operating procedure for maximum skill retention.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {/* Hidden Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -z-10" />

          {[
            {
              id: "01",
              icon: <PenTool size={28} />,
              title: "Whiteboard",
              desc: "Basic concepts and logic are explained on the board with simple examples.",
              gradient: "from-blue-600/20",
            },
            {
              id: "02",
              icon: <MonitorPlay size={28} />,
              title: "Live Coding",
              desc: "The trainer writes code on the screen and explains it line by line.",
              gradient: "from-indigo-600/20",
            },
            {
              id: "03",
              icon: <Shapes size={28} />,
              title: "Practice",
              desc: "Students write and run the same code on their own laptops.",
              gradient: "from-blue-500/20",
            },
            {
              id: "04",
              icon: <GitBranch size={28} />,
              title: "Small Task",
              desc: "A small task is given to practice what was learned.",
              gradient: "from-cyan-600/20",
            },
          ].map((step, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <Card className="bg-[#0a0c12] border-white/5 rounded-[2.5rem] overflow-hidden h-full transition-all duration-500 group-hover:border-blue-500/40 shadow-2xl">
                <CardContent className="p-10 flex flex-col h-full relative z-10">
                  {/* Step Number Background */}
                  <div className="absolute top-4 right-6 text-8xl font-black text-white/[0.02] group-hover:text-blue-500/[0.05] transition-colors pointer-events-none">
                    {step.id}
                  </div>

                  <div
                    className={`mb-10 p-5 bg-slate-900 rounded-3xl w-fit text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-xl`}
                  >
                    {step.icon}
                  </div>

                  <div className="space-y-4 relative">
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-blue-600/50" />
                      <span className="text-blue-500 font-mono text-[10px] font-black uppercase tracking-[0.3em]">
                        Phase_{step.id}
                      </span>
                    </div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium group-hover:text-slate-300 transition-colors">
                      {step.desc}
                    </p>
                  </div>

                  {/* Bottom Glow */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${step.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </CardContent>

                {/* Subtle Glass Noise Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app')] opacity-[0.03] pointer-events-none" />
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- 5) CALL TO ACTION --- */}
      <section className="relative z-10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto bg-blue-600 rounded-[3rem] p-12 md:p-20 shadow-[0_40px_100px_-20px_rgba(37,99,235,0.4)]">
          <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-8">
            Start Your <br /> Tech Journey.
          </h2>
          <Button className="bg-white text-blue-600 hover:bg-black hover:text-white h-16 px-12 rounded-2xl font-black text-lg uppercase tracking-widest transition-all shadow-xl">
            ENROLL NOW <ArrowRight size={20} className="ml-3" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
