import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../../pages/authentication/Login";
import Register from "../../pages/authentication/Register";

const AuthenticationRoutes = () => {
  return (
    <Routes>
      {/* Login route */}
      <Route path="/login" element={<Login />} />

      {/* Register route */}
      <Route path="/register" element={<Register />} />

      {/* Redirect to login as default */}
      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* 404 route */}
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
};

export default AuthenticationRoutes;
