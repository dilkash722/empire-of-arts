import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "Arts (11th & 12th)",
    subtitle: "Complete Arts Stream Preparation",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    tags: ["For Arts Students", "Regular Classes", "Test Series"],
    points: [
      "Daily structured classes with clear explanation",
      "Printed notes and study material",
      "Board exam focused teaching method",
      "Regular doubt solving sessions",
    ],
  },
  {
    title: "Board Exam Preparation",
    subtitle: "Score High in Board Exams",
    img: "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    tags: ["Board Focus", "Revision Plan", "Previous Questions"],
    points: [
      "Weekly and monthly test series",
      "Revision strategy before exams",
      "Previous year question practice",
      "Performance tracking for every student",
    ],
  },
  {
    title: "Foundation Classes",
    subtitle: "Strong Basics for Better Performance",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    tags: ["Concept Clarity", "Personal Attention", "Basics Strong"],
    points: [
      "Simple teaching for better understanding",
      "Concept clarity from basic level",
      "Personal attention to each student",
      "Improvement focused environment",
    ],
  },
];

export default function Courses() {
  return (
    <div className="bg-blue-800 text-white">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Our Courses
        </h1>
        <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
          Professional coaching courses designed to improve understanding,
          confidence and exam performance.
        </p>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-32 space-y-14">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300"
          >
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="h-64 md:h-full">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <h2 className="text-3xl font-bold text-blue-800">
                    {course.title}
                  </h2>
                  <p className="text-slate-500 mt-2">{course.subtitle}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-3 mt-5">
                    {course.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Points */}
                  <ul className="mt-6 space-y-3 text-sm text-slate-700">
                    {course.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-2 h-2 mt-2 bg-blue-700 rounded-full" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 text-xs text-slate-500">
                    Trusted by students for simple explanation and exam focused
                    preparation.
                  </p>
                </div>

                <Button className="mt-8 bg-blue-700 hover:bg-blue-800 text-white h-12">
                  Enquire Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
