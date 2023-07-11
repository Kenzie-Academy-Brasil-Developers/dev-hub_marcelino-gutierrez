import { useContext } from "react";
import { TechContext } from "../../provider/TechContext";
import { EditTechModalForm } from "./EditTechModalForm";

export const EditTechModal = () => {
  const { editTechModalRef } = useContext(TechContext);

  return (
    <dialog ref={editTechModalRef} className="modal">
      <div className="modal-box rounded-md bg-base-200 w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <button
          onClick={() => editTechModalRef.current?.close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="text-lg tracking-widest">Editar Tecnologia</h3>
        <EditTechModalForm />
      </div>
    </dialog>
  );
};
