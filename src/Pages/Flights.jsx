import { useEffect, useState } from "react";
import { PiAirplaneTakeoffLight } from "react-icons/pi";

const Flights = () => {
  const [flights, setFlights] = useState([]);
  const [filteredFlights, setFilteredFlights] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("priceLowToHigh");
  const [selectedClass, setSelectedClass] = useState("All Classes");

  useEffect(() => {
    fetch("/flights.json")
      .then((res) => res.json())
      .then((data) => {
        setFlights(data);
        setFilteredFlights(data);
      });
  }, []);

  const handleSearch = () => {
    let results = flights.filter((flight) =>
      flight.arrival_location.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (selectedClass !== "All Classes") {
      results = results.filter((flight) => flight.class === selectedClass);
    }

    const parseDuration = (duration) => {
      const [hours, minutes] = duration.match(/\d+/g).map(Number);
      return (hours || 0) * 60 + (minutes || 0);
    };

    const parseTime = (time) => {
      const [hour, minutePart] = time.split(":");
      const minute = parseInt(minutePart.slice(0, 2));
      const isPM = time.toLowerCase().includes("pm");
      let hour24 = parseInt(hour);

      if (isPM && hour24 !== 12) {
        hour24 += 12;
      } else if (!isPM && hour24 === 12) {
        hour24 = 0;
      }
      return hour24 * 100 + minute;
    };

    switch (sortOrder) {
      case "priceLowToHigh":
        results.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        results.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        results.sort((a, b) => b.rating - a.rating);
        break;
      case "duration":
        results.sort(
          (a, b) => parseDuration(a.duration) - parseDuration(b.duration)
        );
        break;
      case "departureTime":
        results.sort(
          (a, b) => parseTime(a.departure_time) - parseTime(b.departure_time)
        );
        break;
      default:
        break;
    }

    setFilteredFlights(results);
  };

  const getClassStyles = (flightClass) => {
    switch (flightClass) {
      case "Economy":
        return "bg-green-100 text-green-800";
      case "Business":
        return "bg-blue-100 text-blue-800";
      case "First Class":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-50 via-pink-100 to-fuchsia-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-500 via-pink-500 to-fuchsia-500 text-white text-center py-20 px-4">
        <h1 className="text-5xl font-bold">Find Your Perfect Flight</h1>
        <p className="mt-4 text-lg">
          Search from hundreds of destinations worldwide
        </p>
      </header>

      {/* Search and Filter Section */}
      <div className="container mx-auto p-4 -mt-16">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input
              type="text"
              placeholder="Search destination..."
              className="w-full p-3 border border-purple-300 rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <select
              className="w-full p-3 border border-purple-300 rounded-lg"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
              <option value="rating">Rating</option>
              <option value="duration">Duration</option>
              <option value="departureTime">Departure Time</option>
            </select>
            <select
              className="w-full p-3 border border-purple-300 rounded-lg"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
            >
              <option>All Classes</option>
              <option>Economy</option>
              <option>Business</option>
              <option>First Class</option>
            </select>
          </div>
          <button
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-3 px-8 rounded-lg"
            onClick={handleSearch}
          >
            Search Flights
          </button>
        </div>
      </div>

      {/* Available Flights */}
      <div className="container mx-auto p-4 ">
        <div className="mb-6 flex flex-col ">
          <h2 className="text-2xl font-bold mb-4">
            Available Flights
            <h3 className="text-gray-500 text-lg mt-2 border-b pb-2 border-purple-300 ">
              Showing {filteredFlights.length} flights
            </h3>
          </h2>
        </div>
        <div className="space-y-6 ">
          {filteredFlights.map((flight) => (
            <div
              key={flight.id}
              className="bg-white rounded-2xl shadow-lg p-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-center border-l-8 border-purple-500 hover:shadow-xl"
            >
              {/* Left Section */}
              <div className="md:col-span-4 flex items-center space-x-4">
                <div className="bg-purple-100 p-3 rounded-full">
                  <PiAirplaneTakeoffLight className="text-purple-800 w-6 h-6 font-semibold" />
                </div>
                <div>
                  <p className="font-bold text-lg text-gray-800">
                    {flight.airline}
                  </p>
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                    {flight.flight_number}
                  </span>
                  <p className="text-gray-600 mt-1">{flight.departure_time}</p>
                  <p className="text-sm text-gray-500">
                    {flight.departure_location}
                  </p>
                </div>
              </div>

              {/* Middle Section */}
              <div className="md:col-span-3 flex flex-col items-center">
                <div className="flex items-center w-full">
                  <div className="border-t border-dashed border-gray-300 flex-grow"></div>
                  <svg
                    className="w-6 h-6 text-purple-600 mx-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.414-1.414L11 10.586V6z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <div className="border-t border-dashed border-gray-300 flex-grow"></div>
                </div>
                <p className="text-purple-600 font-semibold mt-1">
                  {flight.duration}
                </p>
                <p className="text-sm text-green-500 bg-green-100 rounded-full px-3 py-1 mt-1">
                  {flight.stops}
                </p>
              </div>

              {/* Right Section */}
              <div className="md:col-span-3 text-center md:text-right border-r-2 pr-4 ">
                <div className="flex md:ml-[90px] lg:ml-[150px] xl:ml-[220px] 2xl:ml-[285px]  items-start justify-center md:justify-start space-x-1 text-yellow-500">
                  <h1>⭐</h1>
                  <h4>{flight.rating}</h4>
                </div>
                <p className="text-gray-600 mt-1">{flight.arrival_time}</p>
                <p className="text-sm text-gray-500">
                  {flight.arrival_location}
                </p>
              </div>

              {/* Price and Booking Section */}
              <div className="md:col-span-2 flex flex-col items-center md:items-end space-y-2">
                <span
                  className={`text-sm font-semibold px-3 py-1 rounded-full ${getClassStyles(
                    flight.class
                  )}`}
                >
                  {flight.class}
                </span>
                <p className="text-gray-600">
                  from{" "}
                  <span className="text-2xl font-bold text-gray-900">
                    ${flight.price}
                  </span>
                </p>
                <button className="w-full md:w-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Flights;
