import { api } from "../pages/SignUp";
import { useContext } from "react";
import { UserContext } from "../routes/RoutesMain";
import { TOKEN_STORAGE_KEY } from "../pages/Home";
import { toast } from "react-toastify";

export function InputGroupAddModal() {
  const { setAddModal } = useContext(UserContext);

  function formSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const techTitle = form.elements.title.value;
    const techStatus = form.elements.status.value;

    const formData = {
      title: techTitle,
      status: techStatus,
    };

    try {
      const accessToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
      const fetchData = async () => {
        await api.post("/users/techs", formData, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        toast.success("Tecnologia adicionada com sucesso!");
        setAddModal((prevState) => !prevState);
      };
      fetchData();
    } catch (e) {
      toast.error(e.response.data.message);
    }
  }

  return (
    <form onSubmit={formSubmit} className="pt-12 flex flex-col gap-5 w-96">
      <div className="form-control w-full">
        <label className="label">
          <span className="label-text">Nome</span>
        </label>
        <input
          required
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
          required
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
