import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout.jsx";
import Bookings from "../Pages/Bookings.jsx";
import Contact from "../Pages/Contact.jsx";
import Flights from "../Pages/Flights.jsx";
import Home from "../Pages/Home.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
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
    ],
  },
]);
