import { useContext, useState } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaDownload,
  FaMapMarkerAlt,
  FaPlane,
  FaUser,
} from "react-icons/fa";
import { BookingContext } from "../Providers/BookingProvider";

const Bookings = () => {
  const { bookings, cancelBooking } = useContext(BookingContext);
  const [activeTab, setActiveTab] = useState("upcoming");

  const handleCancelBooking = (bookingId) => {
    cancelBooking(bookingId);
  };

  const filteredBookings = bookings.filter(
    (booking) => booking.category === activeTab
  );

  const getTabClass = (tabName) => {
    return activeTab === tabName
      ? "bg-cyan-400 text-white shadow-md"
      : "bg-white text-gray-600";
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-cyan-500 to-indigo-600 p-8 text-white text-center">
        <h1 className="text-4xl font-bold">My Bookings</h1>
        <p className="mt-2 text-lg">
          Manage all your flight reservations in one place
        </p>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-200 p-1 rounded-full">
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${getTabClass(
                "upcoming"
              )}`}
            >
              Upcoming (
              {bookings.filter((b) => b.category === "upcoming").length})
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${getTabClass(
                "past"
              )}`}
            >
              Past ({bookings.filter((b) => b.category === "past").length})
            </button>
            <button
              onClick={() => setActiveTab("cancelled")}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${getTabClass(
                "cancelled"
              )}`}
            >
              Cancelled (
              {bookings.filter((b) => b.category === "cancelled").length})
            </button>
          </div>
        </div>

        <div className="space-y-6">
          {filteredBookings.length > 0 ? (
            filteredBookings.map((booking) => (
              <div
                key={booking._id}
                className="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-start md:items-center justify-between transition-transform transform hover:scale-105"
              >
                <div className="w-full md:w-3/4">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-lg mr-4">
                      <FaPlane size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-lg text-gray-800">
                        {booking.flightNo}
                      </p>
                      <p className="text-sm text-gray-500">
                        Booking ID: {booking.bookingId}
                      </p>
                    </div>
                    <div className="ml-auto md:hidden">
                      <span
                        className={`${
                          booking.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        } text-xs font-semibold px-3 py-1 rounded-full`}
                      >
                        {booking.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-cyan-500" />
                      <span>{booking.from}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <div className="w-16 h-px bg-gradient-to-r from-cyan-400 to-transparent"></div>
                      <FaPlane className="mx-2" />
                      <div className="w-16 h-px bg-gradient-to-l from-indigo-400 to-transparent"></div>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <FaMapMarkerAlt className="mr-2 text-indigo-500" />
                      <span>{booking.to}</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <FaCalendarAlt className="mr-2 text-gray-400" />
                      <div>
                        <p className="font-semibold">Date</p>
                        <p>{booking.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaClock className="mr-2 text-gray-400" />
                      <div>
                        <p className="font-semibold">Time</p>
                        <p>{booking.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <FaUser className="mr-2 text-gray-400" />
                      <div>
                        <p className="font-semibold">Passenger</p>
                        <p>{booking.passenger}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div
                        className={`px-2 py-1 rounded-md text-white ${
                          booking.seat.includes("Business")
                            ? "bg-purple-500"
                            : "bg-green-500"
                        }`}
                      >
                        {booking.seat}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-1/4 mt-6 md:mt-0 md:ml-6 md:pl-6 md:border-l border-gray-200 flex flex-col items-center justify-center">
                  <div className="hidden md:block mb-4">
                    <span
                      className={`${
                        booking.status === "Confirmed"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      } text-xs font-semibold px-3 py-1 rounded-full`}
                    >
                      {booking.status}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-gray-800 mb-4">
                    ${booking.price}
                  </p>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded-lg mb-2 flex items-center justify-center hover:opacity-90 transition-opacity">
                    <FaDownload className="mr-2" /> Download Ticket
                  </button>
                  {booking.category === "upcoming" && (
                    <button
                      onClick={() => handleCancelBooking(booking._id)}
                      className="w-full bg-transparent border border-red-400 text-red-500 font-bold py-2 px-4 rounded-lg hover:bg-red-50 transition-colors"
                    >
                      Cancel Booking
                    </button>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              <p>No bookings found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Bookings;
