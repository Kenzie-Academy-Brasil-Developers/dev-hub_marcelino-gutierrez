import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";
import { TechProvider } from "../context/TechContext";
import { UserProvider } from "../context/UserContext";
import { ProtectedRoutes } from "./protectedRoutes";
import { PublicRoutes } from "./publicRoutes";

export function RoutesMain() {
  return (
    <TechProvider>
      <Routes>
        <Route element={<PublicRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </TechProvider>
  );
}
