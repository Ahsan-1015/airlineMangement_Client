import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const MyFlights = () => {
  const { user } = useContext(AuthContext);
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    if (user) {
      axios
        .get(`http://localhost:5000/flights?email=${user.email}`)
        .then((res) => {
          setFlights(res.data);
        });
    }
  }, [user]);

  return (
    <div>
      <h1 className="text-3xl font-bold">My Flights</h1>
      <p className="text-gray-500">View your flight history</p>
      <div className="mt-8 space-y-4">
        {flights.map((flight) => (
          <div key={flight._id} className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between">
              <div>
                <p className="text-lg font-semibold">{flight.airline}</p>
                <p className="text-xl font-bold">{flight.origin.city}</p>
                <p className="text-gray-500">{flight.origin.code}</p>
              </div>
              <div className="text-right">
                <p className="text-lg font-semibold">
                  Flight {flight.flightNumber}
                </p>
                <p className="text-xl font-bold">{flight.destination.city}</p>
                <p className="text-gray-500">{flight.destination.code}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFlights;
