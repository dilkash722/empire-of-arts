import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-blue-800 text-white py-32 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          About Empire Of Arts
        </h1>
        <p className="mt-8 text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
          A trusted arts coaching institute in Purnia where students get simple
          teaching, proper guidance and a disciplined learning environment for
          better exam performance.
        </p>
      </section>

      {/* Intro Block */}
      <section className="max-w-5xl mx-auto px-6 py-24 text-center">
        <h2 className="text-4xl font-bold text-slate-900">
          Building Strong Academic Foundation
        </h2>
        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
          At Empire Of Arts, we believe that strong basics and regular practice
          are the keys to student success. Our focus is not only on completing
          the syllabus but making sure every student understands the subject
          clearly.
        </p>
      </section>

      {/* Learning + Vision */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-5">
              Our Learning Environment
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              We maintain a calm and disciplined classroom where students can
              focus on studies. Regular classes, simple explanations and test
              practice help students improve step by step.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-semibold text-slate-900 mb-5">
              Our Vision
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our vision is to help every student perform better in exams and
              gain confidence in their studies with proper support and guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Teacher Section */}
      <section className="max-w-5xl mx-auto px-6 py-28 text-center">
        <h2 className="text-4xl font-bold text-slate-900 mb-8">
          Experienced and Simple Teaching
        </h2>
        <p className="text-lg text-slate-600 leading-relaxed">
          Students are taught by an experienced teacher who explains topics in a
          very simple and clear way. This makes learning easy and helps students
          prepare well for exams without confusion.
        </p>
      </section>

      {/* Trust Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-16">
          Why Students Trust Empire Of Arts
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Simple Teaching Method",
              desc: "Topics are explained in an easy way so every student can understand clearly.",
            },
            {
              title: "Regular Tests and Practice",
              desc: "Frequent tests help students track progress and improve performance.",
            },
            {
              title: "Personal Attention",
              desc: "Every student gets attention to improve their weak areas.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="border shadow-md hover:shadow-xl transition"
            >
              <CardContent className="p-10 text-center">
                <h3 className="text-2xl font-semibold text-blue-700">
                  {item.title}
                </h3>
                <p className="mt-4 text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
