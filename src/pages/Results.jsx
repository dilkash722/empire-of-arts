import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BarChart3, ShieldCheck } from "lucide-react";

const results = [
  {
    name: "Aman Kumar",
    detail:
      "He scored very good marks in the Arts board exam with help from Empire Of Arts.",
  },
  {
    name: "Ritika Singh",
    detail:
      "She improved her studies and got a top position in her class with regular guidance.",
  },
  {
    name: "Sahil Raj",
    detail:
      "He built a strong base here which helped him in board exam preparation.",
  },
];

export default function Results() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-28 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Our Results
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          Students of Empire Of Arts consistently perform well in exams with
          proper guidance and support.
        </p>
      </section>

      {/* Highlights */}
      <section className="-mt-16 max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Trophy, title: "90%+", text: "Students scored high marks" },
            {
              icon: BarChart3,
              title: "Regular",
              text: "Consistent academic performance",
            },
            {
              icon: ShieldCheck,
              title: "Trusted",
              text: "By students and parents",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white rounded-xl p-8 text-center shadow-lg border"
              >
                <div className="flex justify-center">
                  <div className="bg-blue-800 text-white p-3 rounded-md">
                    <Icon size={22} />
                  </div>
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-slate-600 text-sm">{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Student Results */}
      <section className="max-w-7xl mx-auto px-6 py-28">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-6">
          Student Achievements
        </h2>

        <p className="text-center text-slate-600 max-w-2xl mx-auto mt-4 mb-16">
          Our students show consistent improvement every year through regular
          practice and guidance.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {results.map((r, i) => (
            <Card key={i} className="border shadow-sm">
              <CardContent className="p-8">
                <p className="text-xs text-blue-700 font-medium mb-1">
                  Arts Student
                </p>
                <h2 className="text-xl font-semibold text-slate-900 mb-3">
                  {r.name}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {r.detail}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-800 text-white py-20 text-center px-6">
        <h2 className="text-3xl font-semibold">
          Want Your Child to Achieve Similar Results?
        </h2>
        <p className="mt-4 text-blue-100">
          Join Empire Of Arts today and start better preparation.
        </p>
      </section>
    </div>
  );
}
