import { useState } from "react";
import { useAuthStore } from "../store/useAuthStore";
import borderAnimatedContainer from "../components/borderAnimatedContainer";
import {
  MessageCircleIcon,
  MailIcon,
  LoaderIcon,
  LockIcon,
} from "lucide-react";
import { Link } from "react-router";

function LoginPage() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const { login, isLoggingIn } = useAuthStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(formData);
  };

  return (
    <div className="w-full h-auto flex items-center justify-center p-4 bg-[#f3eadf] text-[#2f2926]">
      <div
        className="relative w-full max-w-4xl md:h-[600px] h-[700px] rounded-2xl 
border border-[#B8AA98]/30 
shadow-[0_25px_70px_rgba(0,0,0,0.2)] 
bg-[#E6DCCB] 
before:absolute before:inset-0 before:rounded-2xl 
before:border before:border-white/20 before:pointer-events-none"
      >
        <borderAnimatedContainer>
          <div className="w-full flex flex-col md:flex-row bg-[#e6dccb]">
            {/* FORM CLOUMN - LEFT SIDE  */}
            <div className="md:w-1/2 p-8 flex items-center justify-center md:border-r border-[#b8aa98]/60 bg-[#e6dccb]">
              <div className="w-full max-w-md">
                {/* HEADING TEXT */}
                <div className="text-center mb-8">
                  <MessageCircleIcon className="w-12 h-12 mx-auto text-[#7a6d62] mb-4" />
                  <h2 className="text-2xl font-bold text-[#2f2926] mb-2">
                    Welcome Back
                  </h2>
                  <p className="text-[#7a6d62]">
                    Login to access to your account
                  </p>
                </div>

                {/* FORM */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* EMAIL INPUT */}
                  <div>
                    <label className="auth-input-label">Email</label>
                    <div className="relative">
                      <MailIcon className="auth-input-icon" />

                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="input"
                        placeholder="johndoe@gmail.com"
                      />
                    </div>
                  </div>

                  {/* PASSWORD INPUT */}
                  <div>
                    <label className="auth-input-label">Password</label>
                    <div className="relative">
                      <LockIcon className="auth-input-icon" />

                      <input
                        type="password"
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="input"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                  <button
                    className="auth-btn"
                    type="submit"
                    disabled={isLoggingIn}
                  >
                    {isLoggingIn ? (
                      <LoaderIcon className="w-full h-5 animate-spin text-center" />
                    ) : (
                      "Sign In"
                    )}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <Link to="/signup" className="auth-link">
                    Don't have an account? Sign Up
                  </Link>
                </div>
              </div>
            </div>

            {/* FORM ILLUSTRATION - RIGHT SIDE */}
            <div className="hidden md:w-1/2 md:flex items-center justify-center p-6 bg-[#e6dccb]">
              <div>
                <img
                  src="/login.png"
                  alt="People using mobile devices"
                  className="w-full max-w-[420px] scale-[1.3] object-contain mix-blend-multiply opacity-90"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-xl font-medium text-[#d65a38]">
                    Connect anytime, anywhere
                  </h3>

                  <div className="mt-4 flex justify-center gap-4">
                    <span className="auth-badge">Free</span>
                    <span className="auth-badge">Easy Setup</span>
                    <span className="auth-badge">Private</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </borderAnimatedContainer>
      </div>
    </div>
  );
}

export default LoginPage;
