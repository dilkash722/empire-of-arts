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
            <div className="lg:col-span-5 space-y-5">
              <div className="group flex flex-col items-start leading-tight select-none">
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
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Courses
            </h3>
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
            <h3 className="text-sm font-semibold text-white mb-5 tracking-wide">
              Contact
            </h3>

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
