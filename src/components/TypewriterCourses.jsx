import { useEffect, useState } from "react";

export default function TypewriterCourses() {
  const courses = [
    "Web Designing With AI",
    "Frontend Development",
    "Full Stack Development",
    "Data Analytics With Python",
  ];

  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");

  useEffect(() => {
    let i = 0;
    const current = courses[index];

    const typing = setInterval(() => {
      setDisplay(current.slice(0, i + 1));
      i++;
      if (i === current.length) clearInterval(typing);
    }, 50);

    const next = setTimeout(() => {
      setDisplay("");
      setIndex((prev) => (prev + 1) % courses.length);
    }, 2000);

    return () => {
      clearInterval(typing);
      clearTimeout(next);
    };
  }, [index]);

  return (
    <p className="text-blue-400 text-lg md:text-2xl font-semibold h-8">
      {display} |
    </p>
  );
}
