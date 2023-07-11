import { FormTextInput } from "../general/FormTextInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TLoginSchemaValues, loginSchema } from "../../schemas/LoginSchema";
import { UserContext } from "../../provider/UserContext";
import { useContext } from "react";

export const LoginForm = () => {
  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginSchemaValues>({
    resolver: zodResolver(loginSchema),
  });

  return (
    <form
      noValidate
      onSubmit={handleSubmit(userLogin)}
      className="flex flex-col gap-5"
    >
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
      <button className="btn btn-primary uppercase tracking-widest text-primary-content">
        Entrar
      </button>
    </form>
  );
};
