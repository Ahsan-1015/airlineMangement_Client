import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout.jsx";
import Bookings from "../pages/Bookings.jsx";
import Contact from "../pages/Contact.jsx";
import Flights from "../pages/Flights.jsx";
import Home from "../pages/Home.jsx";

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
