import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthProvider";

export const BookingContext = createContext(null);

const BookingProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setLoading(true);
      axios
        .get(`${import.meta.env.VITE_API_URL}/bookings/${user.uid}`)
        .then((res) => {
          setBookings(res.data);
          setLoading(false);
        });
    }
  }, [user]);

  const addBooking = async (newBooking) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/bookings`,
        newBooking
      );
      if (response.data.insertedId) {
        setBookings((prevBookings) => [
          ...prevBookings,
          { ...newBooking, _id: response.data.insertedId },
        ]);
      }
    } catch (error) {
      console.error("Failed to add booking", error);
    }
  };

  const cancelBooking = async (bookingId) => {
    try {
      const response = await axios.patch(
        `${import.meta.env.VITE_API_URL}/bookings/${bookingId}/cancel`
      );
      if (response.data.modifiedCount > 0) {
        setBookings((prevBookings) =>
          prevBookings.map((booking) =>
            booking._id === bookingId
              ? { ...booking, status: "Cancelled", category: "cancelled" }
              : booking
          )
        );
      }
    } catch (error) {
      console.error("Failed to cancel booking", error);
    }
  };

  const userBookings = bookings;

  const bookingInfo = {
    bookings: userBookings,
    loading,
    addBooking,
    cancelBooking,
  };

  return (
    <BookingContext.Provider value={bookingInfo}>
      {children}
    </BookingContext.Provider>
  );
};

export default BookingProvider;
