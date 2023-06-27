import { useContext } from "react";
import { TechContext } from "../context/TechContext";

export function InputGroupEditModal({ selectedTech }) {
  const { technologyStatus, setTechnologyStatus, techEditSubmit, techDelete } =
    useContext(TechContext);

  return (
    <form
      noValidate
      onSubmit={techEditSubmit}
      className="pt-12 flex flex-col gap-5 w-full sm:w-96"
    >
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nome</span>
        </label>
        <input
          disabled
          type="text"
          name="title"
          value={selectedTech?.title}
          placeholder="Material UI"
          className="input w-full bg-base-100 rounded-sm outline-none focus:outline-none focus:border-primary transition-all duration-300  "
        />
      </div>
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Selecionar Status</span>
        </label>
        <select
          type="text"
          name="status"
          value={
            technologyStatus === undefined
              ? selectedTech?.status
              : technologyStatus
          }
          onChange={(e) => {
            setTechnologyStatus(e.target.value);
          }}
          className="select w-full bg-base-100 rounded-sm outline-none focus:outline-none focus:border-primary transition-all duration-300 "
        >
          <option disabled value="">
            Escolha uma opção
          </option>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div className="grid grid-cols-6 gap-3">
        <button
          type="submit"
          className="btn btn-primary normal-case text text-primary-content rounded-sm col-span-4"
        >
          Salvar Alterações
        </button>
        <button
          onClick={techDelete}
          type="button"
          className="btn-secondary normal-case text text-primary-content rounded-sm col-span-2"
        >
          Excluir
        </button>
      </div>
    </form>
  );
}
