import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";
import {
  TRegisterSchemaValues,
  registerSchema,
} from "../../schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormTextInput } from "../general/FormTextInput";
import { useForm } from "react-hook-form";

export const RegisterForm = () => {
  const { userRegister } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TRegisterSchemaValues>({
    resolver: zodResolver(registerSchema),
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(userRegister)}
      className="flex flex-col gap-5"
    >
      <FormTextInput
        errors={errors}
        register={register}
        name="name"
        placeholder="Nome"
        type="text"
        disabled={false}
        defaultValue=""
      />
      <FormTextInput
        errors={errors}
        register={register}
        name="email"
        placeholder="Email"
        type="text"
        disabled={false}
        defaultValue=""
      />
      <FormTextInput
        errors={errors}
        register={register}
        name="password"
        placeholder="Senha"
        type="password"
        disabled={false}
        defaultValue=""
      />
      <FormTextInput
        errors={errors}
        register={register}
        name="confirmation"
        placeholder="Confirmar senha"
        type="password"
        disabled={false}
        defaultValue=""
      />
      <FormTextInput
        errors={errors}
        register={register}
        name="bio"
        placeholder="Bio"
        type="text"
        disabled={false}
        defaultValue=""
      />
      <FormTextInput
        errors={errors}
        register={register}
        name="contact"
        placeholder="Contato"
        type="text"
        disabled={false}
        defaultValue=""
      />
      <button className="btn btn-primary uppercase tracking-widest text-primary-content">
        Cadastrar
      </button>
    </form>
  );
};
