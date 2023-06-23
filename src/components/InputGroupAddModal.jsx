import { api } from "../services/axios";
import { useContext } from "react";
import { TechContext } from "../context/TechContext";
import { TOKEN_STORAGE_KEY } from "../pages/Home";
import { toast } from "react-toastify";

export function InputGroupAddModal() {
  const { setAddModal } = useContext(TechContext);

  function formSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const techTitle = form.elements.title.value;
    const techStatus = form.elements.status.value;

    const formData = {
      title: techTitle,
      status: techStatus,
    };

    const accessToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
    const fetchData = async () => {
      try {
        await api.post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        toast.success("Tecnologia adicionada com sucesso!");
        setAddModal((prevState) => !prevState);
      } catch (e) {
        toast.error(e.response.data.message[0]);
      }
    };

    fetchData();
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
