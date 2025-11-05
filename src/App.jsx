import { Routes, Route, Navigate } from "react-router-dom";
import ProtectedRoute from "./components/component/ProtectedRoute";
import Navbar from "./components/component/Navbar.jsx";

import Home from "./components/Home/Home.jsx";
import Login from "./components/Authentication/Login.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Public */}
        <Route path="/login" element={<Login />} />

        {/* Protected */}
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              {" "}
              <Home />{" "}
            </ProtectedRoute>
          }
        />

        <Route path="/" element={<Navigate to="/board" replace />} />
      </Routes>
    </>
  );
}
