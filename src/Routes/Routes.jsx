import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Bookings from "../pages/Bookings.jsx";
import Contact from "../pages/Contact.jsx";
import ErrorPage from "../pages/ErrorPage.jsx";
import Flights from "../pages/Flights.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

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
]);
