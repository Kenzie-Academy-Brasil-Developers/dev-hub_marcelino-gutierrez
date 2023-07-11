import { FormTextInput } from "../general/FormTextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormSelectInput } from "../general/FormSelectInput";
import {
  TAddTechSchemaValues,
  addTechSchema,
} from "../../schemas/AddTechSchema";
import { TechContext } from "../../provider/TechContext";

export const AddTechModalForm = () => {
  const { techAdd } = useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TAddTechSchemaValues>({
    resolver: zodResolver(addTechSchema),
  });

  const submit = (formData: TAddTechSchemaValues) => {
    techAdd(formData);
    reset();
  };

  return (
    <form
      noValidate
      onSubmit={handleSubmit(submit)}
      className="flex flex-col gap-5 py-8"
    >
      <FormTextInput
        defaultValue=""
        errors={errors}
        register={register}
        disabled={false}
        name="title"
        placeholder="Nome da tecnologia"
        type="text"
      />
      <FormSelectInput
        defaultValue=""
        errors={errors}
        name="status"
        register={register}
      />
      <button
        type="submit"
        className="btn btn-primary uppercase tracking-widest text-primary-content"
      >
        Cadastrar
      </button>
    </form>
  );
};
