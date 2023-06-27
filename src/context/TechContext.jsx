import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/axios";
import { TOKEN_STORAGE_KEY } from "./UserContext";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const [isAddModalOpen, setAddModal] = useState(false);
  const [isEditModalOpen, setEditModal] = useState(false);
  const [selectedTechId, setSelectedTechId] = useState(null);
  const [technologyStatus, setTechnologyStatus] = useState(undefined);
  const [selectedTech, setSelectedTech] = useState();
  const accessToken = localStorage.getItem(TOKEN_STORAGE_KEY);

  function newTechAddSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const techTitle = form.elements.title.value;
    const techStatus = form.elements.status.value;

    const formData = {
      title: techTitle,
      status: techStatus,
    };

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
        toast.error(e?.response?.data?.message);
      }
    };

    fetchData();
  }

  function techEditSubmit(e) {
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
      toast.error(e?.response?.data?.message[0]);
    }
  }

  function techDelete(e) {
    e.preventDefault();

    try {
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
      toast.error(e?.response?.data?.message);
    }
  }

  function toggleAddModal() {
    setAddModal((prevState) => !prevState);
  }

  function toggleEditModal() {
    setEditModal((prevState) => !prevState);
  }

  const navigate = useNavigate();

  return (
    <TechContext.Provider
      value={{
        isAddModalOpen,
        setAddModal,
        isEditModalOpen,
        setEditModal,
        selectedTechId,
        setSelectedTechId,
        technologyStatus,
        setTechnologyStatus,
        toggleAddModal,
        toggleEditModal,
        selectedTech,
        setSelectedTech,
        newTechAddSubmit,
        techEditSubmit,
        techDelete,
        navigate,
        accessToken,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
