import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
