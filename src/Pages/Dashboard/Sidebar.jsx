import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Sidebar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="w-64 min-h-screen p-4 space-y-4 text-white bg-gradient-to-b from-purple-600 to-fuchsia-500">
      <h1 className="text-2xl font-bold">SkyWings</h1>
      <div className="flex items-center space-x-4">
        <img
          src={user?.photoURL || "https://i.ibb.co/6n21hW3/user.png"}
          alt="User"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <p className="font-semibold">{user?.displayName || "user"}</p>
          <p className="text-sm">Premium Member</p>
        </div>
      </div>
      <nav className="space-y-2">
        <Link
          to="/dashboard"
          className="flex items-center px-4 py-2 space-x-2 text-white bg-purple-700 rounded-lg"
        >
          <span>Dashboard</span>
        </Link>
        <Link
          to="/dashboard/my-flights"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-purple-700"
        >
          <span>My Flights</span>
        </Link>
        <Link
          to="/dashboard/my-bookings"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-purple-700"
        >
          <span>My Bookings</span>
        </Link>
        <Link
          to="/dashboard/profile"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-purple-700"
        >
          <span>Profile</span>
        </Link>
      </nav>
      <div className="absolute bottom-4">
        <button
          onClick={logOut}
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-purple-700"
        >
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
