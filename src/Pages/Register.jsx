import { useContext, useState } from "react";
import { FaEye, FaEyeSlash, FaRegUserCircle } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { PiImageSquareDuotone } from "react-icons/pi";
import { TbLockPassword } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider.jsx";

const Register = () => {
  const { createUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    try {
      await createUser(email, password);
      if (name || photo) {
        await updateUserProfile(name, photo);
      }
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInWithGoogle();
      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="w-11/12 max-w-5xl grid md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-base-100/5">
        {/* left side background */}
        <div className="bg-base-100 p-6 sm:p-8">
          <div className="max-w-md mx-auto">
            <div className="flex items-center justify-center mb-6">
              <img
                src="https://i.ibb.co/wFc4cyJY/Screenshot-2025-10-16-215447.png"
                className="w-12 h-12 bg-primary rounded-lg"
                alt="logo"
              />
            </div>

            <h2 className="text-2xl font-semibold text-center mb-4">
              Get Your Free Account Now
            </h2>

            {/* Google Sign-in */}
            <button
              onClick={handleGoogle}
              className="btn btn-outline w-full gap-2 border border-violet-500 text-lg font-semibold hover:bg-violet-100 hover:border-violet-200 "
            >
              <img
                src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
                alt="google"
                className="w-5 h-5"
              />
              Sign up with Google
            </button>

            <div className="divider my-6 text-xs">OR REGISTER WITH EMAIL</div>

            {/* Register Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username */}
              <label className="form-control">
                <span className="label-text">Username</span>
                <div className="relative">
                  <input
                    name="name"
                    type="text"
                    placeholder="Ahsan Habib"
                    className="input input-bordered w-full pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60 ">
                    <FaRegUserCircle />
                  </div>
                </div>
              </label>

              {/* Photo URL */}
              <label className="form-control">
                <span className="label-text">Photo URL</span>
                <div className="relative">
                  <input
                    name="photo"
                    type="url"
                    placeholder="https://example.com/photo.jpg"
                    className="input input-bordered w-full pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60">
                    <PiImageSquareDuotone />
                  </div>
                </div>
              </label>

              {/* Email */}
              <label className="form-control">
                <span className="label-text">Email Address</span>
                <div className="relative">
                  <input
                    name="email"
                    type="email"
                    placeholder="example@example.com"
                    required
                    className="input input-bordered w-full pl-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60">
                    <MdOutlineEmail />
                  </div>
                </div>
              </label>

              {/* Password */}
              <label className="form-control">
                <span className="label-text">Password</span>
                <div className="relative">
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="******"
                    required
                    className="input input-bordered w-full pl-10 pr-10"
                  />
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 text-base-content/60">
                    <TbLockPassword />
                  </div>
                  <button
                    type="button"
                    onClick={() => setShow(!show)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-base-content/60"
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </label>

              {/* Error */}
              {error && <p className="text-error text-sm">{error}</p>}

              <button className="btn w-full bg-gradient-to-r from-primary to-purple-500 text-white hover:bg-inherit border-0 mt-4">
                Sign Up
              </button>
            </form>

            <div className="divider my-8">OR SIGN IN</div>

            <p className="text-sm text-center -mt-4">
              Already have an account?{" "}
              <Link to="/login" className="link text-primary font-semibold">
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* right background Register Form */}

        <div className="hidden md:block bg-base-300/10 relative">
          <img
            src="https://i.ibb.co/20CydFLs/airplane-flight-travel-background-flying-600nw-2501954667.webp"
            alt="airline background"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-10 text-center text-blue-300 px-6">
            <h3 className="text-lg font-semibold">
              All-in-one Airline Control
            </h3>
            <p className="text-xs mt-2">
              Create an account to schedule flights, manage bookings, track
              passengers, and view real-time reports — built for speed,
              reliability, and security.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
