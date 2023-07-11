import { FormTextInput } from "../general/FormTextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormSelectInput } from "../general/FormSelectInput";
import { TechContext } from "../../provider/TechContext";
import {
  TEditTechSchemaValues,
  editTechSchema,
} from "../../schemas/EditTechSchema";

export const EditTechModalForm = () => {
  const { techEdit, selectedTech, techDelete } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TEditTechSchemaValues>({
    resolver: zodResolver(editTechSchema),
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(techEdit)}
      className="flex flex-col gap-5 py-8"
    >
      <FormTextInput
        defaultValue={selectedTech?.title}
        errors={errors}
        register={register}
        name="title"
        placeholder="Nome da tecnologia"
        type="text"
        disabled={true}
      />
      <FormSelectInput
        defaultValue={selectedTech?.status}
        errors={errors}
        name="status"
        register={register}
      />
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={techDelete}
          className="btn btn-secondary uppercase tracking-widest text-primary-content"
        >
          Deletar
        </button>
        <button
          type="submit"
          className="btn btn-primary uppercase tracking-widest text-primary-content"
        >
          Editar
        </button>
      </div>
    </form>
  );
};
