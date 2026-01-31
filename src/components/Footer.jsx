import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-100 border-t">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-14">
        {/* About */}
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Empire Of Arts
          </h2>
          <p className="mt-6 text-slate-600 leading-relaxed">
            Trusted arts coaching institute at Rahman Chowk, Purnia. We focus on
            simple teaching, regular classes and exam focused preparation for
            students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">
            Quick Links
          </h3>
          <div className="flex flex-col gap-3 text-slate-600">
            <Link to="/" className="hover:text-blue-700 transition">
              Home
            </Link>
            <Link to="/courses" className="hover:text-blue-700 transition">
              Courses
            </Link>
            <Link to="/results" className="hover:text-blue-700 transition">
              Results
            </Link>
            <Link to="/about" className="hover:text-blue-700 transition">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-700 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact</h3>

          <div className="space-y-4 text-slate-600">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-blue-700 mt-1" />
              <p>Rahman Chowk, Purnia, Bihar 854301</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone size={18} className="text-blue-700" />
              <p>087098 89091</p>
            </div>

            <div className="flex items-center gap-3">
              <Mail size={18} className="text-blue-700" />
              <p>empireofarts@email.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center py-6 text-sm text-slate-500">
        © {new Date().getFullYear()} Empire Of Arts. All rights reserved.
      </div>
    </footer>
  );
}
