import { useContext } from "react";
import { UserContext } from "../routes/RoutesMain";
import { InputGroupAddModal } from "./InputGroupAddModal";

export function AddModal() {
  const { isAddModalOpen, setAddModal } = useContext(UserContext);

  function toggleModal() {
    setAddModal((prevState) => !prevState);
  }

  return (
    <dialog
      className="w-full h-screen open:z-10 -z-10 opacity-0 open:opacity-100 block bg-black/30 absolute top-0 left-0"
      open={isAddModalOpen}
      onClick={(e) => {
        if (e.target.tagName !== "DIALOG" || !isAddModalOpen) return;
        toggleModal();
      }}
    >
      <div
        className={`fixed ${
          isAddModalOpen ? "top-1/2" : "-top-full"
        } left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 w-fit h-fit bg-base-200 z-50 shadow-lg rounded-md transition-all duration-1000`}
      >
        <span
          className="absolute text-xl z-10 top-3 right-4 text-primary-content cursor-pointer"
          onClick={toggleModal}
        >
          ✕
        </span>
        <div className="bg-base-100 top-0 left-0 w-full mx-auto absolute flex items-center p-4 rounded-t-md">
          <h1 className="text-primary-content font-semibold">
            Cadastrar Tecnologia
          </h1>
        </div>
        <InputGroupAddModal />
      </div>
    </dialog>
  );
}
