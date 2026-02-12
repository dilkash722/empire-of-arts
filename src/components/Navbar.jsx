import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  Info,
  BookOpen,
  Globe,
  ChevronRight,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Our Courses", path: "/courses", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Globe },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "unset";
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#02040a]/80 backdrop-blur-xl border-b border-white/5 py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-10 flex items-center justify-between">
          {/* BRAND */}
          <Link
            to="/"
            className="group flex flex-col items-start select-none outline-none"
          >
            <div className="relative flex items-end">
              <h1 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-white leading-none">
                Nadil
                <span className="text-blue-600 font-black">ix</span>
              </h1>

              <span className="mb-1 ml-1.5 h-2 w-2 rounded-full bg-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
            </div>

            <div className="mt-2 flex items-center gap-3">
              <div className="h-[1px] w-6 bg-slate-700 group-hover:w-9 group-hover:bg-blue-600 transition-all duration-300"></div>

              <p className="text-[10px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.25em] leading-none group-hover:text-slate-300 transition-colors duration-300">
                Build Skills
                <span className="mx-1 text-slate-600">/</span>
                Build Software
              </p>
            </div>
          </Link>
          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-2">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    active ? "text-white" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <Icon size={16} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* TOGGLE */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
          >
            <Menu size={22} />
          </button>
        </div>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-[140]"
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.45 }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0c12] z-[150] px-8 pt-20 pb-10 flex flex-col"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                <X size={22} />
              </button>

              {/* Drawer Branding */}
              <div className="group flex flex-col items-start mb-12 select-none">
                <div className="relative flex items-end">
                  <h2 className="text-3xl md:text-[38px] font-extrabold tracking-tight text-white leading-none">
                    Nadil
                    <span className="text-blue-600 font-black">ix</span>
                  </h2>

                  <span className="mb-1 ml-1.5 h-2 w-2 rounded-full bg-blue-600 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></span>
                </div>

                <div className="mt-2 flex items-center gap-3">
                  <div className="h-[1px] w-6 bg-slate-700 group-hover:w-9 group-hover:bg-blue-600 transition-all duration-300"></div>

                  <p className="text-[10px] md:text-[11px] font-semibold text-slate-400 uppercase tracking-[0.25em] leading-none group-hover:text-slate-300 transition-colors duration-300">
                    Build Skills
                    <span className="mx-1 text-slate-600">/</span>
                    Build Software
                  </p>
                </div>
              </div>

              {/* Links */}
              <div className="space-y-4">
                {links.map((link, i) => {
                  const Icon = link.icon;
                  const active = pathname === link.path;

                  return (
                    <motion.div
                      key={link.path}
                      initial={{ x: 40, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={`flex items-center justify-between p-4 rounded-xl transition ${
                          active
                            ? "bg-blue-600 text-white"
                            : "text-slate-400 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <Icon size={18} />
                          <span className="text-base font-medium">
                            {link.name}
                          </span>
                        </div>
                        <ChevronRight size={18} />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
