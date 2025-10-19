import { FaHome } from "react-icons/fa";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-red-100 via-orange-100 to-yellow-100 text-gray-800">
      <div className="text-center p-8 bg-white rounded-2xl shadow-2xl max-w-md w-full">
        <h1 className="text-9xl font-extrabold text-red-500">
          {error.status || "404"}
        </h1>
        <p className="text-3xl font-bold mt-4">Oops! Page Not Found</p>
        <p className="text-lg mt-4 mb-8 text-gray-600">
          {error.statusText || "The page you are looking for does not exist."}
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          <FaHome className="mr-2" />
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
