import { useContext } from "react";
import { TechContext } from "../context/TechContext";
import { toast } from "react-toastify";
import { TOKEN_STORAGE_KEY } from "../pages/Home";
import { api } from "../services/axios";

export function InputGroupEditModal({ selectedTech }) {
  const { technologyStatus, setTechnologyStatus, setEditModal } =
    useContext(TechContext);

  function formSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const techStatus = form.elements.status.value;

    if (techStatus === selectedTech.status) {
      toast.error("Selecione um status diferente");
      return;
    }

    const formData = {
      status: techStatus,
    };

    try {
      const accessToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
      const fetchData = async () => {
        await api.put(`/users/techs/${selectedTech.id}`, formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        await setEditModal((prevState) => !prevState);

        toast.success("Tecnologia editada com sucesso!");
      };
      fetchData();
    } catch (e) {
      toast.error(e.response.data.message[0]);
    }
  }

  function handleDelete(e) {
    e.preventDefault();

    try {
      const accessToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
      const fetchData = async () => {
        await api.delete(`/users/techs/${selectedTech.id}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        await setEditModal((prevState) => !prevState);

        toast.success("Tecnologia deletada com sucesso!");
      };
      fetchData();
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <form
      noValidate
      onSubmit={formSubmit}
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
          onClick={handleDelete}
          type="button"
          className="btn-secondary normal-case text text-primary-content rounded-sm col-span-2"
        >
          Excluir
        </button>
      </div>
    </form>
  );
}
