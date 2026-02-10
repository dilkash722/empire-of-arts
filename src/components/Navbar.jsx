import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  ChevronRight,
  Zap,
  Globe,
  ArrowRight,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Our Courses", path: "/courses", icon: BookOpen },
  { name: "About Galaxy Software", path: "/about", icon: Info },
  { name: "Contact Us", path: "/contact", icon: Globe }, // Added contact link for consistency
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

  // Prevent scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  // Framer motion variants for the drawer
  const drawerVariants = {
    hidden: { x: "100%" },
    visible: {
      x: "0%",
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
    exit: {
      x: "100%",
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
    },
  };

  // Framer motion variants for the background overlay
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, transition: { duration: 0.3 } },
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* --- BRANDING --- */}
          <Link to="/" className="group relative flex flex-col">
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white leading-none uppercase group-hover:text-blue-500 transition-colors">
              GALAXY{" "}
              <span className="text-blue-600 group-hover:text-white transition-colors">
                SOFTWARE
              </span>
            </span>
            <span className="text-[9px] font-semibold tracking-widest text-slate-500 uppercase mt-1">
              Training & Development
            </span>
          </Link>

          {/* --- DESKTOP NAV (CAPSULE) --- */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1.5 rounded-2xl backdrop-blur-2xl shadow-2xl">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative flex items-center gap-2 px-5 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                    active
                      ? "text-white bg-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={14} strokeWidth={2.5} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* --- CTA BUTTON & Mobile Toggle Button --- */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest rounded-xl hover:bg-white hover:text-black transition-all active:scale-95 shadow-lg shadow-blue-900/20"
            >
              <Zap size={14} fill="currentColor" />
              Enroll Now
            </Link>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-3 text-white bg-white/5 border border-white/10 rounded-xl active:scale-90 transition-all z-[160] relative"
              aria-label="Toggle Menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* --- MOBILE MENU (DRAWER) --- */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 bg-black/70 z-[140] lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* The Sliding Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0c12] z-[150] flex flex-col lg:hidden shadow-2xl"
            >
              {/* Background Texture inside drawer */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

              {/* Drawer Content */}
              <div className="relative h-full flex flex-col px-8 pt-20 pb-10 overflow-y-auto">
                <span className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-10 border-l-2 border-blue-600 pl-4">
                  Main Directory
                </span>

                <nav className="flex flex-col gap-4">
                  {links.map((link, i) => {
                    const Icon = link.icon;
                    const active = pathname === link.path;
                    return (
                      <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: i * 0.08, ease: "easeOut" }}
                        key={link.path}
                      >
                        <Link
                          to={link.path}
                          onClick={() => setOpen(false)}
                          className={`flex items-center justify-between p-5 rounded-[1.5rem] border transition-all duration-500 group ${
                            active
                              ? "bg-blue-600 border-blue-400 text-white shadow-2xl shadow-blue-900/40"
                              : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <Icon size={20} strokeWidth={2.5} />
                            <span className="text-sm font-bold uppercase tracking-widest leading-none">
                              {link.name}
                            </span>
                          </div>
                          <ChevronRight
                            size={18}
                            className={`transition-transform ${active ? "opacity-100 translate-x-1" : "opacity-40 group-hover:translate-x-1"}`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-auto space-y-4 pt-10">
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 text-white rounded-xl font-bold text-sm uppercase tracking-widest shadow-xl hover:bg-white hover:text-black transition-all duration-500"
                  >
                    Enroll Now <ArrowRight size={16} />
                  </Link>
                  <div className="flex justify-center items-center gap-4 text-slate-600 font-mono text-[9px] uppercase tracking-[0.4em]">
                    <Globe size={12} /> Katihar, Bihar // v3.0
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
