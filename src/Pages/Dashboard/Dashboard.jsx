import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
