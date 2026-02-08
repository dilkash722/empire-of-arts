import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const items = [
    {
      icon: MapPin,
      label: "Tech Hub Location",
      value: "Rahman Chowk, Purnia, Bihar 854301",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Admission Hotline",
      value: "+91 87098 89091",
      link: "tel:08709889091",
      color: "text-emerald-500",
    },
    {
      icon: MessageCircle,
      label: "Direct Developer Chat",
      value: "WhatsApp Us",
      link: "https://wa.me/918709889091",
      color: "text-green-500",
    },
    {
      icon: Mail,
      label: "Official Query",
      value: "hello@galaxyinstitute.com",
      link: "mailto:hello@galaxyinstitute.com",
      color: "text-purple-500",
    },
  ];

  return (
    <div className="bg-[#02040a] text-slate-200 min-h-screen font-sans">
      {/* --- HERO SECTION --- */}
      <section className="relative pt-24 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase mb-8">
          <Sparkles size={14} /> Connectivity Node
        </div>

        <h1 className="text-5xl md:text-8xl font-black tracking-tighter uppercase italic leading-none text-white">
          Join the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-500 to-blue-800">
            Network
          </span>
        </h1>
      </section>

      {/* --- CONTACT BENTO CARDS --- */}
      <section className="-mt-12 max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, i) => {
            const Icon = item.icon;
            const Wrapper = item.link ? "a" : "div";

            return (
              <Wrapper
                key={i}
                href={item.link}
                className="group p-8 bg-[#05070a] border border-white/5 rounded-[2rem] hover:bg-white/[0.02] hover:border-white/20 transition-all duration-300"
              >
                <div
                  className={`p-3 bg-white/5 rounded-xl w-fit mb-6 ${item.color} border border-white/10 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} />
                </div>
                <p className="text-[10px] font-black tracking-widest text-slate-500 uppercase mb-2">
                  {item.label}
                </p>
                <p className="text-white font-bold text-sm md:text-base break-words">
                  {item.value}
                </p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      {/* --- ENQUIRY FORM: TERMINAL STYLE --- */}
      <section className="max-w-4xl mx-auto px-4 py-24 md:py-32">
        <div className="relative p-8 md:p-16 bg-[#05070a] border border-white/5 rounded-[3rem] overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-5 text-white italic font-black text-6xl select-none">
            GET_IN_TOUCH
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase italic mb-12">
            Initialize <span className="text-blue-500">Admission</span>
          </h2>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            {[
              {
                label: "Full Name",
                placeholder: "e.g. Aman Kumar",
                type: "text",
              },
              {
                label: "WhatsApp No",
                placeholder: "+91 00000 00000",
                type: "tel",
              },
              {
                label: "Interest",
                placeholder: "Web Dev / Data Analytics",
                type: "text",
              },
              { label: "City", placeholder: "Purnia / Katihar", type: "text" },
            ].map((input, idx) => (
              <div key={idx} className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                  {input.label}
                </label>
                <input
                  type={input.type}
                  placeholder={input.placeholder}
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all"
                />
              </div>
            ))}

            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-2">
                Background (Briefly mention any coding experience)
              </label>
              <textarea
                rows="4"
                placeholder="I want to learn Next.js..."
                className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 text-white placeholder:text-slate-700 outline-none focus:border-blue-500/50 focus:bg-white/[0.08] transition-all resize-none"
              />
            </div>

            <Button className="md:col-span-2 h-16 md:h-20 bg-blue-600 hover:bg-white hover:text-black text-white rounded-2xl font-black text-xs md:text-sm uppercase tracking-[0.2em] transition-all flex gap-3 group">
              Submit Application{" "}
              <Send
                size={16}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
              />
            </Button>
          </form>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 border-t border-white/5 text-center px-4">
        <p className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em]">
          Galaxy Software Institute • Optimized for the Digital Frontier
        </p>
      </footer>
    </div>
  );
}
