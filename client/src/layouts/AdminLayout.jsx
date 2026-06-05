import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/useAuth";

function AdminLayout() {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (user.role !== "admin") {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
}

export default AdminLayout;
