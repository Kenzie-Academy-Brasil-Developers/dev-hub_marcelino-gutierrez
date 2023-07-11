import { useContext } from "react";
import { TechContext } from "../../provider/TechContext";
import { AddTechModalForm } from "./AddTechModalForm";

export const AddTechModal = () => {
  const { addTechModalRef } = useContext(TechContext);

  return (
    <dialog ref={addTechModalRef} className="modal">
      <div className="modal-box rounded-md bg-base-200 w-5/6 md:w-1/2 lg:w-1/3 xl:w-1/4">
        <button
          onClick={() => addTechModalRef.current?.close()}
          className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
        >
          ✕
        </button>
        <h3 className="tracking-widest text-lg">Cadastrar Tecnologia</h3>
        <AddTechModalForm />
      </div>
    </dialog>
  );
};
