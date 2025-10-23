import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/bookings?email=${user.email}`)
        .then((res) => {
          setBookings(res.data);
        });
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold">My Bookings</h1>
      <p className="text-gray-500">View your booking history</p>
      <div className="mt-8 space-y-4">
        {bookings.map((booking) => (
          <div key={booking._id} className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">
                  Booking ID: {booking.bookingId}
                </p>
                <p className="text-xl font-bold">
                  {booking.flight.origin.city}
                </p>
                <p className="text-gray-500">{booking.flight.origin.code}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  Flight {booking.flight.flightNumber}
                </p>
                <p className="text-xl font-bold">
                  {booking.flight.destination.city}
                </p>
                <p className="text-gray-500">
                  {booking.flight.destination.code}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;
