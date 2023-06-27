import { useEffect, useRef, useContext } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "../schema/signUpSchema";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export function SignUp() {
  const { userSignUp } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const loading = useRef();

  useEffect(() => {
    const delay = async (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    (async () => {
      await delay(100);
      loading?.current?.classList.replace("translate-y-3", "translate-y-0");
    })();
  }, []);

  return (
    <div className="w-5/6 py-10 pb-20 sm:w-[50%] lg:w-[35%] xl:w-[25%] relative min-h-screen bg-base-20 mx-auto flex flex-col gap-5 justify-center items-center">
      <div className=" flex items-center justify-between w-full">
        <h1 className="text-primary font-bold text-2xl">Kenzie Hub</h1>
        <Link to="/" className="btn text-primary-content normal-case">
          Voltar
        </Link>
      </div>
      <div
        ref={loading}
        className="w-full text-center bg-base-200 px-6 py-10 rounded-sm flex flex-col gap-4 translate-y-3 transition-all duration-700"
      >
        <h2 className="text-xl font-bold">Crie sua conta</h2>

        <form
          noValidate
          onSubmit={handleSubmit(userSignUp)}
          className="flex flex-col gap-4"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Nome</span>
            </label>
            <input
              {...register("name")}
              type="text"
              placeholder="Kenzie McKenzie"
              className={`input w-full rounded-sm outline-none ${
                errors.name?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span className="text-error text-left">{errors.name?.message}</span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              type="email"
              placeholder="user@mail.com"
              className={`input w-full rounded-sm outline-none ${
                errors.email?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span
              className={`${
                errors.email?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.email?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="●●●●●●●●"
              className={`input w-full rounded-sm outline-none ${
                errors.password?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span
              className={`${
                errors.password?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.password?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Confirmar senha</span>
            </label>
            <input
              {...register("passwordConfirmation")}
              type="password"
              placeholder="●●●●●●●●"
              className={`input w-full rounded-sm outline-none ${
                errors.passwordConfirmation?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span
              className={`${
                errors.passwordConfirmation?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.passwordConfirmation?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Bio</span>
            </label>
            <input
              {...register("bio")}
              type="text"
              placeholder="Eu gosto muito de gatos..."
              className={`input w-full rounded-sm outline-none ${
                errors.bio?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span
              className={`${
                errors.bio?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.bio?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Contato</span>
            </label>
            <input
              {...register("contact")}
              placeholder="(13) 99661-6578"
              type="number"
              className={`input w-full rounded-sm outline-none ${
                errors.contact?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } number-input focus:outline-none transition-all duration-300 bg-base-100`}
            />
            <span
              className={`${
                errors.contact?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.contact?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Selecionar módulo</span>
            </label>
            <select
              {...register("course_module")}
              className={`input w-full rounded-sm outline-none ${
                errors.course_module?.message
                  ? "border-error focus:border-error"
                  : "focus:border-white"
              } focus:outline-none transition-all duration-300 bg-base-100`}
            >
              <option>Selecionar opção</option>
              <option value="Primeiro módulo (Introdução ao Frontend)">
                M1
              </option>
              <option value="Segundo módulo (Frontend Avançado)">M2</option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                M3
              </option>
              <option value="Quarto módulo (Backend Avançado)">M4</option>
            </select>
            <span
              className={`${
                errors.course_module?.message ? "" : "hidden"
              } text-error text-left`}
            >
              {errors.course_module?.message}
            </span>
          </div>
          <button className="btn btn-primary text-primary-content normal-case">
            Registrar
          </button>
        </form>
      </div>
    </div>
  );
}
