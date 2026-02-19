import { Link } from "react-router-dom";
import { MapPin, Phone, Instagram, Linkedin, Youtube } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#02040a] border-t border-white/5 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-14">
          {/* BRAND */}
          <div className="lg:col-span-5 space-y-4">
            <div className="lg:col-span-5 space-y-4">
              <div className="flex flex-col items-start leading-tight select-none">
                <Link to="/" className="outline-none">
                  <h2 className="text-[20px] sm:text-[22px] font-semibold tracking-[-0.02em] text-white leading-none">
                    Nadilix
                    <span className="ml-2 text-blue-500">CodeCraft</span>
                  </h2>
                </Link>

                <p className="mt-1 text-[11px] text-slate-400 tracking-[0.14em] uppercase">
                  Build Skill
                  <span className="mx-2 text-slate-600">|</span>
                  Build Career
                </p>
              </div>
            </div>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md">
              Practical software training where students learn through live
              coding, clear concepts, and real project practice.
            </p>

            <div className="flex gap-4 pt-2">
              {[Instagram, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="text-slate-600 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* COURSES */}
          <div className="lg:col-span-3">
            <h3 className="text-sm  text-white mb-5 tracking-wide">Courses</h3>
            <ul className="space-y-3 text-sm">
              {[
                "Full Stack Development",
                "Frontend with React",
                "Data Analytics with Python",
                "UI UX with AI",
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/courses"
                    className="text-slate-500 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className="lg:col-span-4">
            <h3 className="text-sm  text-white mb-5 tracking-wide">Contact</h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3 text-slate-400">
                <Phone size={16} className="text-blue-500" />
                +91 7763937638
              </div>

              <div className="flex items-center gap-3 text-slate-400">
                <MapPin size={16} className="text-blue-500" />
                Katihar, Bihar
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM STRIP */}
        <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-slate-600">
            © {currentYear} Nadilix . All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-slate-600 hover:text-white">
              Privacy
            </a>
            <a href="#" className="text-slate-600 hover:text-white">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
