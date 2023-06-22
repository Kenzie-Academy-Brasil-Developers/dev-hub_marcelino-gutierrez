import { useRef, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "./SignUp.jsx";
import { toast } from "react-toastify";
import { delay } from "./SignUp.jsx";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/loginSchema";

export const TOKEN_STORAGE_KEY = "@kenziehub_token";
export const USER_STORAGE_KEY = "@kenziehub_user";

export function Home() {
  useEffect(() => {
    localStorage.getItem(TOKEN_STORAGE_KEY) ? navigate("/dashboard") : "";

    (async () => {
      await delay(100);
      loading.current.classList.replace("translate-y-3", "translate-y-0");
    })();
  }, []);

  const [isLoading, setLoading] = useState(false);

  const loading = useRef();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const submit = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem(TOKEN_STORAGE_KEY, JSON.stringify(data.token));
      toast.success("Login realizado com sucesso");
      setLoading(true);
      await delay(3200);
      navigate("/dashboard");
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  const navigate = useNavigate();

  return (
    <div className="w-5/6 sm:w-[50%] lg:w-[35%] xl:w-[25%] relative min-h-screen bg-base-20 mx-auto flex flex-col gap-5 justify-center items-center">
      <h1 className="text-primary font-bold text-2xl">Kenzie Hub</h1>
      <div
        ref={loading}
        className="w-full text-center bg-base-200 px-6 py-10 rounded-sm flex flex-col gap-4 translate-y-3 transition-all duration-700"
      >
        <h2 className="text-xl font-bold">Login</h2>
        <form
          noValidate
          onSubmit={handleSubmit(submit)}
          className="flex flex-col gap-4"
        >
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email")}
              name="email"
              type="email"
              placeholder="user@mail.com"
              className={`input input-bordered w-full rounded-sm border-2 outline-none focus:outline-none ${
                errors.email?.message
                  ? "focus:border-error border-error"
                  : "focus:border-primary border-white"
              }  transition-all duration-300 bg-base-100`}
            />
            <span className="text-error text-left">
              {errors.email?.message}
            </span>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Senha</span>
            </label>
            <input
              {...register("password")}
              name="password"
              type="password"
              placeholder="●●●●●●●●"
              className={`input input-bordered w-full rounded-sm border-2 outline-none focus:outline-none ${
                errors.password?.message
                  ? "focus:border-error border-error"
                  : "focus:border-primary border-white"
              }  transition-all duration-300 bg-base-100`}
            />
            <span className="text-error text-left">
              {errors.password?.message}
            </span>
          </div>
          <button
            disabled={isLoading}
            className="btn btn-primary text-primary-content normal-case"
          >
            <span
              className={`${isLoading ? "" : "hidden"} loading text-sm`}
            ></span>
            {isLoading ? "Entrando" : "Entrar"}
          </button>
        </form>
        <div className="flex flex-col gap-7">
          <span className=" text-sm text-gray-400">
            Ainda não possui uma conta?
          </span>
          <Link
            to="/signup"
            className="btn btn-secondary text-primary-content normal-case w-full"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </div>
  );
}
