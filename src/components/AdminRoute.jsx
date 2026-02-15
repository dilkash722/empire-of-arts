import { Navigate } from "react-router-dom";

export default function AdminRoute({ children }) {
  const isAuth = localStorage.getItem("adminAuth");

  if (!isAuth) {
    return <Navigate to="/admin" />;
  }

  return children;
}
