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
  Zap,
  ArrowRight,
} from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Our Courses", path: "/courses", icon: BookOpen },
  { name: "About", path: "/about", icon: Info },
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
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* BRAND */}
          <Link to="/" className="flex flex-col leading-none">
            <span className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              CodeCraft <span className="text-blue-500">Institute</span>
            </span>

            <span className="text-base text-slate-500 tracking-wide mt-1">
              Software Training & Development
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1.5 rounded-xl backdrop-blur-xl">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon size={16} />
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* ENROLL BUTTON + TOGGLE */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden md:flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-[11px] font-semibold tracking-wide rounded-xl hover:bg-white hover:text-black transition-all active:scale-95 shadow-lg"
            >
              <Zap size={14} fill="currentColor" />
              Enroll Now
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="lg:hidden p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
            >
              <Menu size={22} />
            </button>
          </div>
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
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-[#0a0c12] z-[150] px-8 pt-16 pb-10 flex flex-col"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 p-2.5 bg-white/5 border border-white/10 rounded-lg text-white"
              >
                <X size={22} />
              </button>

              <div className="mt-12 space-y-6">
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

              {/* SAME ENROLL BUTTON IN DRAWER */}
              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 text-white text-sm font-semibold tracking-wide rounded-xl hover:bg-white hover:text-black transition-all"
                >
                  <Zap size={14} />
                  Enroll Now <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
