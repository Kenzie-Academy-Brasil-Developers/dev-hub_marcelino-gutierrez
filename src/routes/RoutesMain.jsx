import { useState, createContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { SignUp } from "../pages/SignUp";
import { Dashboard } from "../pages/Dashboard";

export const UserContext = createContext();

export function RoutesMain() {
  const [userInfo, setUserInfo] = useState(null);
  const [isAddModalOpen, setAddModal] = useState(false);
  const [isEditModalOpen, setEditModal] = useState(false);
  const [selectedTechId, setSelectedTechId] = useState(null);
  const [technologyStatus, setTechnologyStatus] = useState();
  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        isAddModalOpen,
        setAddModal,
        isEditModalOpen,
        setEditModal,
        selectedTechId,
        setSelectedTechId,
        technologyStatus,
        setTechnologyStatus,
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </UserContext.Provider>
  );
}
