import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";


const PriveteRoutes = ({ children }) => {
  let location = useLocation();
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className="w-full mx-auto">
        <h1>Loading.....</h1>
      </div>
    );
  }

  if (user?.email || user?.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PriveteRoutes;
