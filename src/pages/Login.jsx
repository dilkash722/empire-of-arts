import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  Shield,
  Mail,
  Lock,
  X,
  Eye,
  EyeOff,
  LogIn,
  CheckCircle,
  XCircle,
} from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminEmail = "admin@nadilix.com";
    const adminPassword = "Admin@123";

    if (!email || !password) {
      toast.error("Please fill all fields", {
        icon: <XCircle size={18} />,
      });
      return;
    }

    if (!email.includes("@")) {
      toast.error("Invalid email format", {
        icon: <XCircle size={18} />,
      });
      return;
    }

    if (email !== adminEmail || password !== adminPassword) {
      toast.error("Invalid email or password", {
        icon: <XCircle size={18} />,
      });
      return;
    }

    localStorage.setItem("adminAuth", "true");

    toast.success("Login successful", {
      icon: <CheckCircle size={18} />,
    });

    setTimeout(() => {
      navigate("/admin/dashboard");
    }, 700);
  };

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-300 overflow-hidden">
      {/* Hero Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-5%] w-[500px] h-[500px] bg-indigo-600/10 blur-[120px] rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      {/* Center Wrapper */}
      <div className="relative z-10 flex items-start justify-center pt-28 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35 }}
          className="w-full max-w-md bg-transparent border border-white/10 rounded-2xl p-8 backdrop-blur-xl hover:border-blue-500/50 transition"
        >
          <button
            onClick={() => navigate("/")}
            className="absolute top-5 right-5 p-2 rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition"
          >
            <X size={18} />
          </button>

          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 mb-3">
              <Shield size={22} className="text-white" />
            </div>

            <h1 className="text-xl font-semibold text-white">Admin Login</h1>

            <p className="text-sm text-slate-400 mt-1 text-center">
              Secure access to dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="text-sm text-slate-400 block mb-2">Email</label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 focus-within:border-blue-500 transition">
                <Mail size={18} className="text-slate-400 mr-2" />
                <input
                  type="email"
                  placeholder="Enter admin email"
                  className="w-full bg-transparent py-3 text-white outline-none"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-slate-400 block mb-2">
                Password
              </label>

              <div className="flex items-center bg-white/5 border border-white/10 rounded-lg px-3 focus-within:border-blue-500 transition">
                <Lock size={18} className="text-slate-400 mr-2" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="w-full bg-transparent py-3 text-white outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-slate-400 hover:text-white transition"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 transition text-white font-medium"
            >
              <LogIn size={18} />
              Login
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
