import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import ForgotPassword from "./pages/ForgotPassword.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import NewTicket from "./pages/NewTicket.jsx";
import MyTicket from "./pages/MyTicket.jsx";
import ProtectedRoute from "./utils/ProtectedRoute.jsx";
import Layout from "./components/Layout.jsx"; // ✅ Import Layout

function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />

      {/* Protected layout with nested routes */}
      <Route
        element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-ticket" element={<NewTicket />} />
        <Route path="/my-ticket" element={<MyTicket />} />
      </Route>

      {/* Redirect unknown or root path */}
      <Route path="/" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
