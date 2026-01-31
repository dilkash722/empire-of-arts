import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Home, BookOpen, Trophy, User, Phone } from "lucide-react";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Courses", path: "/courses", icon: BookOpen },
  { name: "Results", path: "/results", icon: Trophy },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Phone },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="leading-tight">
            <div className="text-2xl md:text-3xl font-semibold tracking-tight">
              Empire Of Arts
            </div>
            <div className="text-xs md:text-sm tracking-widest text-blue-200">
              Coaching Institute, Purnia
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-12">
            {links.map((link) => {
              const Icon = link.icon;
              const active = pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative flex items-center gap-3 text-lg font-medium transition ${
                    active ? "text-white" : "text-blue-100 hover:text-white"
                  }`}
                >
                  <Icon size={20} className="text-white" />
                  {link.name}

                  <span
                    className={`absolute left-0 -bottom-2 h-[3px] w-full bg-white transition-all duration-300 ${
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Mobile Toggle */}
          <button onClick={() => setOpen(true)} className="md:hidden p-2">
            <Menu size={30} className="text-white" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/40">
          <div className="fixed right-0 top-0 h-full w-80 bg-gradient-to-b from-blue-700 to-blue-900 text-white px-8 py-10">
            <div className="flex justify-end mb-12">
              <button onClick={() => setOpen(false)}>
                <X size={30} className="text-white" />
              </button>
            </div>

            <div className="flex flex-col gap-10">
              {links.map((link) => {
                const Icon = link.icon;
                const active = pathname === link.path;

                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setOpen(false)}
                    className={`flex items-center gap-5 text-2xl font-semibold ${
                      active ? "text-white" : "text-blue-200"
                    }`}
                  >
                    <Icon size={26} className="text-white" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
