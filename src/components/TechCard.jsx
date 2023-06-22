import { useContext } from "react";
import { UserContext } from "../routes/RoutesMain";

export function TechCard({ name, status, id }) {
  const { setEditModal, setSelectedTechId } = useContext(UserContext);
  function toggleModal(e) {
    e.stopPropagation();
    setEditModal((prevState) => !prevState);
    setSelectedTechId(e.target.closest("div").id);
  }

  return (
    <div
      id={id}
      onClick={toggleModal}
      className="bg-base-300 px-6 py-3 rounded-md flex justify-between items-center cursor-pointer hover:scale-[101%] transition-all duration-300"
    >
      <h1 className="text-lg font-semibold">{name}</h1>
      <span className="text-sm text-gray-400">{status}</span>
    </div>
  );
}
