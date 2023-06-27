import { useContext } from "react";
import { TechContext } from "../context/TechContext";

export function TechCard({ name, status, id }) {
  const { setSelectedTechId, toggleEditModal } = useContext(TechContext);

  return (
    <div
      id={id}
      onClick={(e) => {
        toggleEditModal();
        setSelectedTechId(e.target.closest("div").id);
      }}
      className="bg-base-300 px-6 py-3 rounded-md flex justify-between items-center cursor-pointer hover:scale-[101%] transition-all duration-300"
    >
      <h1 className="text-lg font-semibold">{name}</h1>
      <span className="text-sm text-gray-400">{status}</span>
    </div>
  );
}
