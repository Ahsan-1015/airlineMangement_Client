import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Bookings from "../pages/Bookings.jsx";
import Contact from "../pages/Contact.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import DashboardHome from "../pages/Dashboard/DashboardHome.jsx";
import MyBookings from "../pages/Dashboard/MyBookings.jsx";
import MyFlights from "../pages/Dashboard/MyFlights.jsx";
import Profile from "../pages/Dashboard/Profile.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Flights from "../pages/Flights.jsx";
import Home from "../pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Register from "../Pages/Register.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/flights",
        element: <Flights />,
      },
      {
        path: "/bookings",
        element: <Bookings />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: "my-flights",
        element: <MyFlights />,
      },
      {
        path: "my-bookings",
        element: <MyBookings />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
]);
