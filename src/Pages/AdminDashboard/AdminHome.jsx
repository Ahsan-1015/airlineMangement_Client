const AdminHome = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Admin Dashboard</h1>
      <p className="text-gray-500">Manage your airline operations</p>

      <div className="grid grid-cols-4 gap-8 mt-8">
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Flights</h2>
          <p className="text-3xl font-bold">156</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Total Users</h2>
          <p className="text-3xl font-bold">8,450</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">On-Time Rate</h2>
          <p className="text-3xl font-bold">94%</p>
        </div>
        <div className="p-4 bg-white rounded-lg shadow">
          <h2 className="text-lg font-semibold">Revenue</h2>
          <p className="text-3xl font-bold">$2.4M</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mt-8">
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Flight Management</h2>
            <button className="px-4 py-2 text-white bg-orange-500 rounded-lg">
              Add Flight
            </button>
          </div>
          <p className="text-gray-500">Manage all flights</p>
          {/* Add flight management table here */}
        </div>
        <div>
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">User Management</h2>
            <button className="px-4 py-2 text-white bg-green-500 rounded-lg">
              View All
            </button>
          </div>
          <p className="text-gray-500">Recent users</p>
          {/* Add user management table here */}
        </div>
      </div>

      <div className="p-8 mt-8 text-white bg-gradient-to-r from-red-500 to-orange-500 rounded-lg">
        <h2 className="text-2xl font-bold">System Analytics & Reports</h2>
        <p>
          Access comprehensive analytics, revenue reports, and operational
          insights
        </p>
        <div className="mt-4 space-x-4">
          <button className="px-4 py-2 bg-white text-red-500 rounded-lg">
            View Analytics
          </button>
          <button className="px-4 py-2 bg-white text-red-500 rounded-lg">
            Download Report
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
