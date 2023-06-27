import { useContext } from "react";
import { TechContext } from "../context/TechContext";

export function InputGroupAddModal() {
  const { newTechAddSubmit } = useContext(TechContext);

  return (
    <form
      noValidate
      onSubmit={newTechAddSubmit}
      className="pt-12 flex flex-col gap-5 w-full sm:w-96"
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nome</span>
        </label>
        <input
          type="text"
          name="title"
          placeholder="TypeScript"
          className="input input-bordered w-full bg-base-100 rounded-sm outline-none focus:outline-none focus:border-primary transition-all duration-300  border-white "
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Selecionar Status</span>
        </label>
        <select
          type="text"
          name="status"
          placeholder="Type here"
          className="select select-bordered w-full bg-base-100 rounded-sm outline-none focus:outline-none focus:border-primary transition-all duration-300  border-white"
        >
          <option disabled value="">
            Escolha uma opção
          </option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <button className="btn btn-primary normal-case text text-primary-content rounded-sm">
        Cadastrar Tecnologia
      </button>
    </form>
  );
}
