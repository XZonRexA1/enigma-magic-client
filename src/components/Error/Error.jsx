import { Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <Zoom>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold text-white mb-4">404 - Page Not Found</h1>
        <p className="text-gray-500 mb-4">
          The page you are looking for does not exist.
        </p>
        <Link to="/" className="text-blue-500 hover:underline">
          Go back home
        </Link>
      </div>
    </Zoom>
  );
};

export default Error;
