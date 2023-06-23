import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { TechProvider } from "../context/TechContext";
import { UserProvider } from "../context/UserContext";

export function RoutesMain() {
  return (
    <UserProvider>
      <TechProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </TechProvider>
    </UserProvider>
  );
}
