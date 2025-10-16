import { useContext, useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Login = () => {
  const { signIn, signInWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await signInWithGoogle();
      navigate(from, { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="w-11/12 max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-base-100/5">
        <div className="hidden md:block bg-base-300/10">
          <img
            src="https://i.ibb.co/20CydFLs/airplane-flight-travel-background-flying-600nw-2501954667.webp"
            alt="security"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-base-100 p-6 sm:p-8">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://i.ibb.co/wFc4cyJY/Screenshot-2025-10-16-215447.png"
                className="w-12 h-12 bg-primary rounded-lg "
              />
            </div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Welcome back!
            </h2>
            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full gap-2 border border-violet-500 text-lg font-semibold hover:bg-violet-100 hover:border-violet-200 "
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign in with Google
            </button>
            <div className="divider my-6">or</div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="form-control">
                <span className="label-text">Email Address</span>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    required
                    placeholder="your-email@example.com"
                    className="input input-bordered w-full pl-10"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  {!email && (
                    <div
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60"
                      aria-label="Email icon"
                    >
                      <MdOutlineEmail />
                    </div>
                  )}
                </div>
              </label>
              <label className="form-control">
                <span className="label-text">Password</span>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="input input-bordered w-full pl-10"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {!password && (
                    <div
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60"
                      aria-label="Password icon"
                    >
                      <TbLockPassword />
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12a5 5 0 110-10 5 5 0 010 10z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5"
                      >
                        <path d="M12 5c-7 0-10 7-10 7s3 7 10 7c2.1 0 3.9-.6 5.4-1.5l1.6 1.6 1.4-1.4-16-16-1.4 1.4 3.2 3.2C4.6 9.9 3.3 12 3.3 12s3 7 8.7 7c1.3 0 2.5-.2 3.5-.6l-1.7-1.7c-.6.2-1.2.3-1.8.3a5 5 0 01-5-5c0-.6.1-1.2.3-1.8l-1.5-1.5C6 8.3 8.7 7 12 7c.7 0 1.4.1 2 .2l1.8 1.8C15 8.4 13.6 8 12 8a4 4 0 00-4 4c0 1 .4 1.9 1 2.6l1.5 1.5A3.98 3.98 0 018 12a4 4 0 014-4c.6 0 1.2.1 1.7.3l1.5 1.5 1.4 1.4-1.3 1.3 1.2 1.2 2.1-2.1-1.3-1.3 1.2 1.2" />
                      </svg>
                    )}
                  </button>
                </div>
              </label>
              {error && <p className="text-error text-sm">{error}</p>}
              <button className="btn w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:bg-inherit  border-0">
                Sign In
              </button>
            </form>
            <div className="divider my-8">OR SIGN UP</div>
            <p className="text-sm text-center -mt-4">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="link text-primary font-semibold">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
