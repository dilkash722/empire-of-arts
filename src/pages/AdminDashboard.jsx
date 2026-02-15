import { useState } from "react";
import { Users, BookOpen, Mail, Phone, Calendar } from "lucide-react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("enquiry");

  const enquiries = [
    {
      id: 1,
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      phone: "9876543210",
      date: "12 Feb 2026",
    },
    {
      id: 2,
      name: "Aman Khan",
      email: "aman@gmail.com",
      phone: "9123456780",
      date: "14 Feb 2026",
    },
  ];

  const enrollments = [
    {
      id: 1,
      name: "Priya Verma",
      email: "priya@gmail.com",
      phone: "9988776655",
      course: "Full Stack Development",
      date: "10 Feb 2026",
    },
    {
      id: 2,
      name: "Sahil Ali",
      email: "sahil@gmail.com",
      phone: "9012345678",
      course: "Data Analytics with Python",
      date: "11 Feb 2026",
    },
  ];

  const data = activeTab === "enquiry" ? enquiries : enrollments;

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-300 overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-14 pb-16">
        {/* Header */}
        <div className="mb-14">
          <h1 className="text-4xl md:text-5xl text-white tracking-tight">
            Admin Dashboard
          </h1>
          <p className="text-slate-400 mt-3 text-base">
            Manage enquiries and course enrollments
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab("enquiry")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition ${
              activeTab === "enquiry"
                ? "bg-blue-600 shadow-lg"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <Users size={18} />
            Enquiry Students
          </button>

          <button
            onClick={() => setActiveTab("enrollment")}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl transition ${
              activeTab === "enrollment"
                ? "bg-blue-600 shadow-lg"
                : "bg-white/5 hover:bg-white/10"
            }`}
          >
            <BookOpen size={18} />
            Course Enrollments
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-transparent border border-white/10 rounded-2xl p-7 transition-all duration-300 hover:border-blue-500 hover:bg-white/[0.03] hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
            >
              <h2 className="text-xl text-white font-medium mb-6">
                {item.name}
              </h2>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-blue-400" />
                  <span>{item.email}</span>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-blue-400" />
                  <span>{item.phone}</span>
                </div>

                {activeTab === "enrollment" && (
                  <div className="flex items-center gap-3">
                    <BookOpen size={16} className="text-blue-400" />
                    <span>{item.course}</span>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <Calendar size={16} className="text-blue-400" />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
