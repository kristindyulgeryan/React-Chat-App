import { useState } from "react";
import { useAuthStore } from "../store/useAutheStore.js";
import { Link } from "react-router-dom";
import {
  Eye,
  EyeOff,
  Loader2,
  Lock,
  Mail,
  MessageSquare,
  User,
} from "lucide-react";
import AuthImagePattern from "../components/AuthImagePattern.jsx";
import toast from "react-hot-toast";

console.log(User);
const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormdata] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const { signup, isSigningUp } = useAuthStore();

  const validateForm = () => {
    if (!formData.fullName.trim()) return toast.error("Full name is required");
    if (!formData.email.trim()) return toast.error("Email is required");
    if (!/\S+@\S+\.\S+/.test(formData.email))
      return toast.error("Invalid Email format");
    if (!formData.password) return toast.error("Password is required");
    if (formData.password.length < 6)
      return toast.error("Password must be at least 6 characters");

    return true;
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const success = validateForm();

    if (success === true) signup(formData);
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* left side */}
      <div className="flex flex-col items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* LOGO */}
          <div className="mb-8 text-center">
            <div className="group flex flex-col items-center gap-2">
              <div className="bg-primary/10 group-hover:bg-primary/20 flex size-12 items-center justify-center rounded-xl transition-colors">
                <MessageSquare className="text-primary size-6" />
              </div>
              <h1 className="mt-2 text-2xl font-bold">Create Account</h1>
              <p className="text-base-content/60">
                Get started with your free account
              </p>
            </div>
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-control">
              <label htmlFor="fullName" className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <User className="text-base-content/40 size-5" />
                </div>
                <input
                  type="text"
                  name="fullName"
                  className="w-full rounded-md border py-2 pl-10 focus:shadow-[0_0_0_1px_black,0_0_0_3px_black] focus:outline-none focus:ring-0"
                  placeholder="John Doe"
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormdata({ ...formData, fullName: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="text-base-content/40 size-5" />
                </div>
                <input
                  type="email"
                  className="w-full rounded-md border py-2 pl-10 focus:shadow-[0_0_0_1px_black,0_0_0_3px_black] focus:outline-none focus:ring-0"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormdata({ ...formData, email: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="text-base-content/40 size-5" />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  className="w-full rounded-md border py-2 pl-10 focus:shadow-[0_0_0_1px_black,0_0_0_3px_black] focus:outline-none focus:ring-0"
                  placeholder=".........."
                  value={formData.password}
                  onChange={(e) =>
                    setFormdata({ ...formData, password: e.target.value })
                  }
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="text-base-content/40 size-5" />
                  ) : (
                    <Eye className="text-base-content/40 size-5" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={isSigningUp}
            >
              {isSigningUp ? (
                <>
                  <Loader2 className="size-5 animate-spin" />
                  Loading...
                </>
              ) : (
                "Create Account"
              )}
            </button>
          </form>
          <div className="text-center">
            <p className="text-base-content/60">
              Already have an account?{" "}
              <Link to="/login" className="link link-primary">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* right side */}
      <AuthImagePattern
        title="Join our community"
        subtitle="Connect with friends, share moments, and stay in touch with your loved ones."
      />
    </div>
  );
};

export default SignUpPage;
