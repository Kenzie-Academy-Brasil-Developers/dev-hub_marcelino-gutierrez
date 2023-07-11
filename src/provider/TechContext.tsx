import { ReactNode, createContext, useContext, useRef, useState } from "react";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { ITech, UserContext } from "./UserContext";
import { TAddTechSchemaValues } from "../schemas/AddTechSchema";
import { TEditTechSchemaValues } from "../schemas/EditTechSchema";

interface ITechContextProps {
  children: ReactNode;
}

interface ITechContext {
  addTechModalRef: React.RefObject<HTMLDialogElement>;
  editTechModalRef: React.RefObject<HTMLDialogElement>;
  techAdd: (formData: TAddTechSchemaValues) => Promise<void>;
  selectedTech: ITech | undefined;
  selectTech: (id: string) => void;
  techDelete: () => Promise<void>;
  techEdit: (formData: TEditTechSchemaValues) => Promise<void>;
}

export const TechContext = createContext({} as ITechContext);

export const TechProvider = ({ children }: ITechContextProps) => {
  const { reset, user, updateUser, token } = useContext(UserContext);

  const addTechModalRef = useRef<HTMLDialogElement>(null);
  const editTechModalRef = useRef<HTMLDialogElement>(null);

  const [selectedTech, setSelectedTech] = useState<ITech | undefined>(
    undefined
  );

  const selectTech = (id: string) => {
    const filteredTech = user?.techs.find((tech) => tech.id === id);
    setSelectedTech(filteredTech);
  };

  const techAdd = async (formData: TAddTechSchemaValues) => {
    try {
      await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia adicionada com sucesso!");
      addTechModalRef.current?.close();
      updateUser();
      reset();
    } catch (e: any) {
      toast.error(e.response?.data?.message);
    }
  };

  const techEdit = async (formData: TEditTechSchemaValues) => {
    console.log(formData);
    try {
      await api.put(`/users/techs/${selectedTech?.id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia editada com sucesso!");
      editTechModalRef.current?.close();
      updateUser();
      reset();
    } catch (e: any) {
      console.log(e);
      toast.error(e.response?.data?.message);
    }
  };

  const techDelete = async () => {
    try {
      await api.delete(`/users/techs/${selectedTech?.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada com sucesso!");
      updateUser();
      editTechModalRef.current?.close();
    } catch (e: any) {
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <>
      <TechContext.Provider
        value={{
          techAdd,
          selectTech,
          selectedTech,
          addTechModalRef,
          editTechModalRef,
          techDelete,
          techEdit,
        }}
      >
        {children}
      </TechContext.Provider>
    </>
  );
};
