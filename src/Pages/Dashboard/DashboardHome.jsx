import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <h1 className="text-3xl font-bold">My Dashboard</h1>
      <p className="text-gray-500">
        Welcome back, {user?.displayName || "user"}!
      </p>

      <div className="grid grid-cols-4 gap-8 mt-8">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Flights</h2>
          <p className="text-3xl font-bold">24</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Loyalty Points</h2>
          <p className="text-3xl font-bold">3,450</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Upcoming</h2>
          <p className="text-3xl font-bold">2</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">This Year</h2>
          <p className="text-3xl font-bold">8</p>
        </div>
      </div>

      <div className="mt-8">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold">Upcoming Flights</h2>
          <Link
            to="/flights"
            className="px-4 py-2 text-white bg-purple-600 rounded-lg"
          >
            Book New Flight
          </Link>
        </div>
        <p className="text-gray-500">Your confirmed bookings</p>

        <div className="mt-4 space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-green-500">Confirmed</p>
                <p className="text-lg font-semibold">Booking ID: BK-2451</p>
                <p className="text-xl font-bold">New York</p>
                <p className="text-gray-500">JFK</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Flight</p>
                <p className="text-lg font-semibold">SW-101</p>
                <p className="text-xl font-bold">London</p>
                <p className="text-gray-500">LHR</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">2025-10-25 10:30 AM</p>
              <a href="#" className="text-purple-600">
                View Details →
              </a>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-green-500">Confirmed</p>
                <p className="text-lg font-semibold">Booking ID: BK-2458</p>
                <p className="text-xl font-bold">Los Angeles</p>
                <p className="text-gray-500">LAX</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Flight</p>
                <p className="text-lg font-semibold">SW-205</p>
                <p className="text-xl font-bold">Tokyo</p>
                <p className="text-gray-500">NRT</p>
              </div>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-500">2025-11-02 2:45 PM</p>
              <a href="#" className="text-purple-600">
                View Details →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
