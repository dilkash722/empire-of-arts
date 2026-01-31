import { Button } from "@/components/ui/button";
import { Star, Trophy, MapPin, BookOpen, ThumbsUp, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-36 text-center">
          <p className="uppercase tracking-widest text-blue-200 text-sm">
            Trusted Arts Coaching in Purnia
          </p>

          <h1 className="mt-6 text-6xl md:text-7xl font-bold tracking-tight">
            Empire Of Arts
          </h1>

          <p className="mt-8 text-2xl text-blue-100 max-w-3xl mx-auto">
            Strong basics, simple teaching and exam focused preparation for Arts
            students.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Star size={16} /> 4.1 Google Rating
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <Trophy size={16} /> Excellent Results
            </div>
            <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <MapPin size={16} /> Rahman Chowk, Purnia
            </div>
          </div>

          <div className="mt-14 flex flex-col sm:flex-row justify-center gap-6">
            <Button className="h-14 px-10 text-lg font-semibold bg-white text-blue-800 hover:bg-slate-100 flex items-center gap-3">
              <BookOpen size={20} />
              Explore Courses
            </Button>

            <Button
              variant="outline"
              className="h-14 px-10 text-lg font-semibold border-white text-blue-800 hover:bg-white hover:text-blue-800 flex items-center gap-3"
            >
              <Phone size={20} />
              Contact Now
            </Button>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {[
            {
              icon: BookOpen,
              title: "Regular Classes",
              text: "Daily structured teaching with proper explanation",
            },
            {
              icon: ThumbsUp,
              title: "Simple Learning",
              text: "Easy method so students understand quickly",
            },
            {
              icon: Trophy,
              title: "Exam Focused",
              text: "Preparation based on board exam pattern",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={i} className="p-8 border rounded-xl shadow-sm">
                <Icon size={36} className="mx-auto text-blue-700" />
                <h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-slate-600">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* COURSES SNAPSHOT */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Courses We Offer
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Complete guidance for Arts students from basics to board exams.
          </p>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              "Arts (11th & 12th) Full Preparation",
              "Board Exam Special Batch",
              "Foundation & Concept Building Classes",
            ].map((c, i) => (
              <div
                key={i}
                className="p-10 border rounded-xl shadow-sm bg-white"
              >
                <h3 className="text-2xl font-semibold text-blue-800">{c}</h3>
                <p className="mt-4 text-slate-600">
                  Regular classes, notes, tests and revision plan included.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEACHING PATTERN */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Our Teaching Pattern
          </h2>

          <div className="mt-16 grid md:grid-cols-4 gap-10">
            {[
              "Daily Regular Classes",
              "Notes & Study Materials",
              "Weekly Test Series",
              "Revision & Doubt Clearing",
            ].map((item, i) => (
              <div key={i} className="p-8 border rounded-xl shadow-sm">
                <p className="text-lg font-semibold text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="bg-slate-50 py-28">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Results That Speak
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-10">
            {[
              "90%+ High Marks",
              "Regular Test Series",
              "Trusted by Parents",
            ].map((t, i) => (
              <div
                key={i}
                className="bg-white p-10 rounded-xl shadow border text-xl font-semibold text-blue-800"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-32 text-center">
        <h2 className="text-5xl font-bold">
          Start Your Preparation With Us Today
        </h2>
        <p className="mt-6 text-xl text-blue-100">
          Visit Rahman Chowk, Purnia or call us for admission enquiry.
        </p>

        <div className="mt-10">
          <Button className="h-14 px-12 text-lg bg-white text-blue-800 hover:bg-slate-100">
            Contact Now
          </Button>
        </div>
      </section>
    </div>
  );
}
