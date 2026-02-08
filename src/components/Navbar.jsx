import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  Rocket,
  Info,
  Cpu,
  Sparkles,
  Terminal,
  ChevronRight,
  Zap,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "GenAI Courses", path: "/courses", icon: Sparkles },
  { name: "Success", path: "/results", icon: Rocket },
  { name: "About Hub", path: "/about", icon: Info },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "unset";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#02040a]/70 backdrop-blur-2xl border-b border-white/5 py-3"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 flex items-center justify-between">
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform duration-500">
              <Cpu className="text-white" size={20} />
              <div className="absolute inset-0 bg-white/20 rounded-xl animate-ping opacity-20" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-black tracking-tighter text-white leading-none">
                GALAXY{" "}
                <span className="text-blue-500 italic font-black">
                  SOFTWARE
                </span>
              </span>
              <span className="text-[8px] font-black tracking-[0.3em] text-slate-500 uppercase mt-1">
                Training & Development Hub
              </span>
            </div>
          </Link>

          {/* Desktop Nav - Capsule Design */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1.5 rounded-2xl backdrop-blur-xl">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "text-white bg-blue-600 shadow-lg shadow-blue-600/20"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} className={active ? "animate-pulse" : ""} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* CTA Button */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-black text-[10px] font-black uppercase tracking-[0.15em] rounded-xl hover:bg-blue-600 hover:text-white transition-all active:scale-95 shadow-xl shadow-white/5"
            >
              <Zap size={14} className="fill-current" />
              Enroll Now
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-3 text-white bg-white/5 border border-white/10 rounded-xl active:scale-90 transition-transform"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE FULLSCREEN MENU --- */}
      <div
        className={`fixed inset-0 z-[200] bg-[#02040a] transition-all duration-700 ease-in-out lg:hidden ${
          open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        {/* Background Decorative Glow */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />

        <div className="flex flex-col h-full px-6 py-8 relative z-10">
          {/* Menu Header */}
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Terminal size={18} className="text-white" />
              </div>
              <span className="font-black text-xl tracking-tighter text-white italic">
                GALAXY_LAB
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="p-4 bg-white/5 border border-white/10 rounded-full text-white active:rotate-90 transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Navigation Links - Large Bento Style */}
          <div className="flex flex-col gap-3">
            {links.map((link, idx) => {
              const Icon = link.icon;
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`group flex items-center justify-between p-6 rounded-[1.5rem] border transition-all duration-500 ${
                    active
                      ? "bg-blue-600 border-blue-400 text-white shadow-[0_0_30px_-10px_rgba(37,99,235,0.5)]"
                      : "bg-white/5 border-white/5 text-slate-400 hover:border-white/20"
                  }`}
                  style={{ transitionDelay: `${idx * 50}ms` }}
                >
                  <div className="flex items-center gap-5">
                    <div
                      className={`p-3 rounded-xl ${active ? "bg-white/20" : "bg-white/5"}`}
                    >
                      <Icon size={24} />
                    </div>
                    <span className="text-lg font-black uppercase tracking-widest italic">
                      {link.name}
                    </span>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`${active ? "translate-x-0" : "-translate-x-4 opacity-0"} transition-all duration-500`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Bottom Card - Promotion */}
          <div className="mt-auto">
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-[#0a0f1a] to-[#02040a] border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors" />
              <div className="relative z-10 text-center">
                <h4 className="text-xl font-black mb-3 italic tracking-tighter text-white uppercase">
                  Start Your <span className="text-blue-500">AI Era</span>
                </h4>
                <p className="text-slate-500 text-xs mb-8 font-bold uppercase tracking-widest">
                  Limited Batch Seats Left
                </p>
                <a
                  href="tel:+918709889091"
                  className="flex items-center justify-center gap-3 w-full py-5 bg-white text-black rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl shadow-white/5"
                >
                  Call Admission Office <ChevronRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
