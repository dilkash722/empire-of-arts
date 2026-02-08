import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Cpu,
  Instagram,
  Linkedin,
  Youtube,
  Code2,
  Terminal,
  Layers,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const courses = [
    {
      name: "Web Designing",
      icon: <Layers size={14} />,
      path: "/web-designing",
    },
    {
      name: "Frontend Development",
      icon: <Code2 size={14} />,
      path: "/frontend-dev",
    },
    {
      name: "Full Stack Development",
      icon: <Terminal size={14} />,
      path: "/full-stack",
    },
    {
      name: "Data Analytics with Python",
      icon: <BarChart3 size={14} />,
      path: "/data-analytics",
    },
  ];

  return (
    <footer className="relative bg-[#030508] border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Dynamic Tech Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-500/5 blur-[100px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          {/* Section 1: The Brand & Vision */}
          <div className="lg:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                <Cpu className="text-white" size={24} />
              </div>
              <div>
                <h2 className="text-white font-black text-2xl tracking-tighter leading-none">
                  GALAXY <span className="text-blue-500">SOFTWARE</span>
                </h2>
                <p className="text-slate-500 text-[10px] font-bold tracking-[0.3em] uppercase mt-1">
                  Training & Development Hub
                </p>
              </div>
            </div>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Bihar's emerging powerhouse for software excellence. We don't just
              teach code; we build production-ready engineers and scalable
              software solutions.
            </p>

            <div className="flex gap-4">
              {[<Instagram />, <Linkedin />, <Youtube />].map((icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 text-slate-400 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Section 2: Specialized Training */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 opacity-50">
              Professional Training
            </h3>
            <ul className="space-y-4">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link
                    to={course.path}
                    className="group flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors"
                  >
                    <span className="p-1.5 rounded bg-white/5 border border-white/10 group-hover:border-blue-500/50">
                      {course.icon}
                    </span>
                    <span className="text-sm font-medium">{course.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Section 3: Development Center */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-[11px] uppercase tracking-[0.2em] mb-8 opacity-50">
              Development
            </h3>
            <ul className="space-y-4 text-sm font-medium text-slate-400">
              <li className="hover:text-white cursor-pointer transition-colors">
                Custom Software
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Mobile Apps
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                API Integration
              </li>
              <li className="hover:text-white cursor-pointer transition-colors">
                Cloud Solutions
              </li>
            </ul>
          </div>

          {/* Section 4: Contact & Support */}
          <div className="lg:col-span-3">
            <div className="bg-gradient-to-br from-white/5 to-transparent p-6 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="relative z-10">
                <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Now Enrolling
                </h4>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-slate-400">
                    <Phone size={14} className="text-blue-500" />
                    <span className="text-xs font-bold">+91 87098 89091</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400">
                    <MapPin size={14} className="text-blue-500" />
                    <span className="text-xs">Katihar, Bihar</span>
                  </div>
                </div>
                <button className="w-full py-3 bg-blue-600 hover:bg-white hover:text-black text-black font-black text-[10px] uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group">
                  Contact Us{" "}
                  <ArrowUpRight
                    size={14}
                    className="group-hover:rotate-45 transition-transform"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Final Footer Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
            © {currentYear} Galaxy Software Institute & Dev Lab
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-[10px] font-bold text-slate-600 hover:text-blue-500 uppercase tracking-widest transition-colors"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[10px] font-bold text-slate-600 hover:text-blue-500 uppercase tracking-widest transition-colors"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
