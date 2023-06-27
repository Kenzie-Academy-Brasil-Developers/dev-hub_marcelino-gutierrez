import { useContext, useEffect } from "react";
import { TechContext } from "../context/TechContext";
import { UserContext } from "../context/UserContext";
import { InputGroupEditModal } from "./InputGroupEditModal";

export function EditModal() {
  const {
    isEditModalOpen,
    selectedTechId,
    setTechnologyStatus,
    toggleEditModal,
    setSelectedTech,
    selectedTech,
  } = useContext(TechContext);

  const { userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo === null) return;
    const filteredTech = userInfo.techs.find(
      (tech) => tech.id === selectedTechId
    );
    setSelectedTech(filteredTech);
  }, [selectedTechId]);

  return (
    <dialog
      className="w-full h-screen open:z-10 -z-10 opacity-0 open:opacity-100 block bg-black/30 absolute top-0 left-0"
      open={isEditModalOpen}
      onClick={(e) => {
        if (e.target.tagName !== "DIALOG" || !isEditModalOpen) return;
        toggleEditModal();
      }}
    >
      <div
        className={`fixed ${
          isEditModalOpen ? "top-1/2" : "-top-full"
        } left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-5/6 sm:w-fit h-fit bg-base-200 z-50 shadow-lg rounded-md transition-all duration-1000`}
      >
        <span
          className="absolute text-xl z-10 top-3 right-4 text-primary-content cursor-pointer"
          onClick={() => {
            toggleEditModal();
            setTechnologyStatus(undefined);
          }}
        >
          ✕
        </span>
        <div className="bg-base-100 top-0 left-0 w-full mx-auto absolute flex items-center p-4 rounded-t-md">
          <h1 className="text-primary-content font-semibold">
            Tecnologia Detalhes
          </h1>
        </div>
        <InputGroupEditModal selectedTech={selectedTech} />
      </div>
    </dialog>
  );
}
