import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Binary,
  Zap,
  ShieldCheck,
  Mail,
  Cpu,
} from "lucide-react";

export default function ContactPage() {
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="bg-[#02040a] text-white min-h-screen font-sans selection:bg-blue-600/30 overflow-x-hidden">
      {/* --- HERO SECTION: EXACT COURSE STYLE --- */}
      <section className="relative pt-32 pb-12 px-6 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[140px] rounded-full -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-bold tracking-[0.3em] uppercase mb-10">
          <Cpu size={14} className="animate-pulse" /> Establish_Link v2.0
        </div>

        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight uppercase leading-none mb-6">
          Connect <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-600 to-indigo-600">
            Galaxy Network
          </span>
        </h1>
        <p className="text-slate-500 font-semibold tracking-widest uppercase text-xs">
          Galaxy Software Institute // Software Training & Development
        </p>
      </section>

      {/* --- CONTENT GRID: BALANCED HEIGHT --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* LEFT: INFO CARDS (Flex-1 to match height) */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {[
            {
              label: "Terminal_Loc",
              value: "Katihar, Bihar",
              sub: "854105 // HQ_01",
              icon: <MapPin size={22} />,
            },
            {
              label: "Direct_Line",
              value: "+91 8709889091",
              sub: "MON-SAT // 10:00-18:00",
              icon: <Phone size={22} />,
            },
            {
              label: "Digital_Mail",
              value: "info@galaxy.com",
              sub: "24/7 // Instant Sync",
              icon: <Mail size={22} />,
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              whileHover={{ x: 10 }}
              className="flex-1 p-8 rounded-[2.5rem] border border-white/5 bg-white/[0.01] backdrop-blur-3xl hover:border-blue-500/30 transition-all group flex flex-col justify-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[10px] font-bold text-blue-600/60 tracking-[0.2em] uppercase mb-1">
                    // {card.label}
                  </p>
                  <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white leading-none mb-1">
                    {card.value}
                  </h3>
                  <p className="text-slate-500 text-[10px] font-semibold uppercase tracking-widest">
                    {card.sub}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* RIGHT: COMMAND FORM (Matches left height) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:col-span-7 bg-slate-950/40 border border-white/5 p-10 md:p-12 rounded-[3rem] backdrop-blur-3xl shadow-2xl relative flex flex-col justify-between"
        >
          <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-[10px] font-bold px-5 py-2 rounded-full text-white uppercase tracking-widest flex items-center gap-2">
            <ShieldCheck size={14} /> System_Active
          </div>

          <form
            className="space-y-12 h-full flex flex-col justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="space-y-2 border-l-2 border-blue-600 pl-5 mb-8">
              <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-500">
                Data_Registry
              </span>
              <h3 className="text-2xl md:text-4xl font-bold uppercase tracking-tight text-white">
                Transmission
              </h3>
            </div>

            <div className="space-y-10 mb-12">
              <div className="relative group/input">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block group-focus-within/input:text-blue-500 transition-colors">
                  :: Source_Identity
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-lg md:text-xl outline-none transition-all font-semibold uppercase tracking-tight text-white placeholder:text-slate-800"
                  placeholder="Full Name"
                />
              </div>

              <div className="relative group/input">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block group-focus-within/input:text-blue-500 transition-colors">
                  :: Comm_Link
                </label>
                <input
                  type="tel"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-lg md:text-xl outline-none transition-all font-semibold uppercase tracking-tight text-white placeholder:text-slate-800"
                  placeholder="+91 Mobile"
                />
              </div>

              <div className="relative group/input">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block group-focus-within/input:text-blue-500 transition-colors">
                  :: Message_Payload
                </label>
                <textarea
                  rows="1"
                  className="w-full bg-transparent border-b border-slate-800 focus:border-blue-600 py-2 text-lg md:text-xl outline-none transition-all font-semibold uppercase tracking-tight text-white placeholder:text-slate-800 resize-none"
                  placeholder="Details..."
                />
              </div>
            </div>

            <button className="w-full h-16 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-2xl transition-all shadow-lg group flex items-center justify-center tracking-[0.2em] uppercase">
              SEND DATA
              <Zap
                size={18}
                className="ml-3 fill-current group-hover:scale-110 transition-transform"
              />
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}
