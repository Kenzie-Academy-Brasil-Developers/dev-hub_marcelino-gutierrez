import { ReactNode, createContext, useEffect, useState } from "react";
import { TLoginSchemaValues } from "../schemas/LoginSchema";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { FieldValues, UseFormReset, useForm } from "react-hook-form";
import { TRegisterSchemaValues } from "../schemas/RegisterSchema";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IUserContextProps {
  children: ReactNode;
}

interface IUserContext {
  userLogin: (formData: TLoginSchemaValues) => Promise<void>;
  userRegister: (formData: TRegisterSchemaValues) => Promise<void>;
  navigate: NavigateFunction;
  token: string | null;
  user: IUser | undefined;
  userLogout: () => void;
  reset: UseFormReset<FieldValues>;
  updateUser: () => Promise<void>;
  loading: boolean;
}

interface IUser {
  avatar_url: null;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: ITech[] | [];
  updated_at: string;
  works: [];
}

export interface ITech {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const LOCAL_STORAGE_KEY_TOKEN = "@dev_hub_token";
  const LOCAL_STORAGE_KEY_USER = "@dev_hub_user";
  const [user, setUser] = useState<IUser | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const { reset } = useForm();
  const currentPath = window.location.pathname;

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true);
      const userData = localStorage.getItem(LOCAL_STORAGE_KEY_USER)
        ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY_USER) as string)
        : null;
      try {
        const { data } = await api.get(`/users/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(data);
        navigate(currentPath);
      } catch (e: any) {
        toast.error(e?.data?.response?.message);
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const userLogin = async (formData: TLoginSchemaValues) => {
    try {
      const { data } = await api.post("/sessions", formData);
      toast.success("Login realizado com sucesso!");
      setUser(data.user);
      localStorage.setItem(LOCAL_STORAGE_KEY_TOKEN, data.token);
      localStorage.setItem(LOCAL_STORAGE_KEY_USER, JSON.stringify(data.user));
      reset();
      navigate("/dashboard");
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
  };

  const userRegister = async (formData: TRegisterSchemaValues) => {
    try {
      const modifiedFormData = {
        ...formData,
        course_module: "null",
      };
      await api.post("/users", modifiedFormData);
      toast.success("Usuário registrado com sucesso!");
      reset();
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
  };

  const userLogout = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY_TOKEN);
    localStorage.removeItem(LOCAL_STORAGE_KEY_USER);
    setUser(undefined);
    navigate("/");
  };

  const updateUser = async () => {
    const { data } = await api.get("/profile", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setUser(data);
  };

  const token = localStorage.getItem(LOCAL_STORAGE_KEY_TOKEN);

  return (
    <>
      <UserContext.Provider
        value={{
          reset,
          user,
          token,
          userLogin,
          userRegister,
          userLogout,
          navigate,
          updateUser,
          loading,
        }}
      >
        {children}
      </UserContext.Provider>
    </>
  );
};
