import { createContext, useState } from "react";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [isAddModalOpen, setAddModal] = useState(false);
  const [isEditModalOpen, setEditModal] = useState(false);
  const [selectedTechId, setSelectedTechId] = useState(null);
  const [technologyStatus, setTechnologyStatus] = useState(undefined);

  return (
    <TechContext.Provider
      value={{
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
      {children}
    </TechContext.Provider>
  );
};
