import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Instagram,
  Linkedin,
  Youtube,
  Send,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] border-t border-white/5 pt-20 pb-10 font-sans relative overflow-hidden">
      {/* Background Micro-Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Section 1: Minimal Brand */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3 group cursor-pointer">
              {/* Chip Icon removed, keeping only the Text Brand */}
              <h2 className="text-white font-black text-xl tracking-tighter uppercase">
                GALAXY{" "}
                <span className="text-blue-600 text-opacity-80">SOFTWARE</span>
              </h2>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium opacity-80">
              Transforming Katihar into a software engineering hub. Architecting
              production-ready careers through real-world builds.
            </p>

            <div className="flex gap-4">
              {[Instagram, Linkedin, Youtube].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="text-slate-600 hover:text-blue-500 transition-colors duration-300"
                >
                  <Icon size={18} strokeWidth={2.5} />
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Clean Links */}
          <div className="lg:col-span-3 lg:pl-10">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] mb-6 block">
              // Academy
            </span>
            <ul className="space-y-3">
              {[
                "Full Stack",
                "Frontend",
                "Data Analytics",
                "UI/UX with AI",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="#"
                    className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-all hover:translate-x-1 inline-block"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Dev Lab */}
          <div className="lg:col-span-2">
            <span className="text-[10px] font-black text-slate-700 uppercase tracking-[0.4em] mb-6 block">
              // Studio
            </span>
            <ul className="space-y-3">
              {["SaaS Build", "Mobile Apps", "Cloud Ops"].map((item) => (
                <li
                  key={item}
                  className="text-slate-500 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Section 4: Compact Action */}
          <div className="lg:col-span-3">
            <div className="p-6 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-slate-300">
                  <Phone size={14} className="text-blue-600" />
                  <span className="text-xs font-black tracking-tight">
                    +91 7763937638
                  </span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <MapPin size={14} className="text-blue-600" />
                  <span className="text-xs font-black uppercase tracking-tighter">
                    Katihar, Bihar
                  </span>
                </div>
              </div>

              <button className="w-full h-12 bg-blue-600 text-white font-black text-[10px] uppercase tracking-[0.2em] rounded-xl hover:bg-white hover:text-black transition-all duration-500 flex items-center justify-center gap-2 shadow-lg shadow-blue-900/20">
                Contact Now <Send size={12} />
              </button>
            </div>
          </div>
        </div>

        {/* Minimal Legal Strip */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[9px] font-bold text-slate-700 uppercase tracking-[0.3em]">
            © {currentYear} Galaxy Software // Bihar's Premier Dev Lab
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[9px] font-bold text-slate-800 hover:text-blue-500 uppercase tracking-[0.3em] transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
