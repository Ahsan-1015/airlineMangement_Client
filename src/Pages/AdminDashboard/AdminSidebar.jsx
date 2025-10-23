import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen p-4 space-y-4 text-white bg-gradient-to-b from-orange-500 to-red-500">
      <h1 className="text-2xl font-bold">SkyWings Admin</h1>
      <nav className="space-y-2">
        <Link
          to="/admin/dashboard"
          className="flex items-center px-4 py-2 space-x-2 text-white bg-orange-600 rounded-lg"
        >
          <span>Dashboard</span>
        </Link>
        <Link
          to="/admin/manage-flights"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-orange-600"
        >
          <span>Manage Flights</span>
        </Link>
        <Link
          to="/admin/user-management"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-orange-600"
        >
          <span>User Management</span>
        </Link>
        <Link
          to="/admin/reports"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-orange-600"
        >
          <span>Reports</span>
        </Link>
        <Link
          to="/admin/settings"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-orange-600"
        >
          <span>Settings</span>
        </Link>
      </nav>
      <div className="absolute bottom-4">
        <Link
          to="/"
          className="flex items-center px-4 py-2 space-x-2 rounded-lg hover:bg-orange-600"
        >
          <span>Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default AdminSidebar;
