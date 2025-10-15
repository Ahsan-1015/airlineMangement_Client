import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-primary font-semibold bg-primary/10"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/flights"
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-primary font-semibold bg-primary/10"
              : ""
          }
        >
          Flights
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/bookings"
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-primary font-semibold bg-primary/10"
              : ""
          }
        >
          Bookings
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-primary border-b-2 border-primary font-semibold bg-primary/10"
              : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="sticky top-0 z-50 bg-base-100/80 backdrop-blur supports-[backdrop-filter]:bg-base-100/70">
      <div className="navbar shadow-sm w-11/12 mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              aria-label="Open menu"
              className="btn btn-ghost lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm text-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl normal-case">
            SkyWings
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal text-lg font-semibold px-1">
            {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            to="/bookings"
            className="btn text-white border-0 px-8 bg-gradient-to-r from-primary to-purple-500"
          >
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
