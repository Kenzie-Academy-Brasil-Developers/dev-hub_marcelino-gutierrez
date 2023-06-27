import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/axios";
import { useNavigate } from "react-router-dom";
import { delay } from "../pages/SignUp";

export const TOKEN_STORAGE_KEY = "@kenziehub_token";
export const USER_STORAGE_KEY = "@kenziehub_user";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem(TOKEN_STORAGE_KEY);
      const userData = JSON.parse(localStorage.getItem(USER_STORAGE_KEY));
      try {
        const { data } = await api.get(`/users/${userData.id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("hi");
        setUserInfo(data);
      } catch (e) {
        toast.error(e?.data?.response?.message);
        userLogout();
      } finally {
        setLoading(false);
      }
    };
    loadUser();
  }, []);

  const accessToken = localStorage.getItem(TOKEN_STORAGE_KEY);

  const navigate = useNavigate();

  const userSignUp = async (formData) => {
    try {
      await api.post("/users", formData);
      toast.success("Conta criada com sucesso");
      reset();
      await delay(3200);
      navigate("/");
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };

  const userLogin = async (formData) => {
    try {
      const { data } = await api.post("/sessions", formData);
      localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
      localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(data.user));
      setLoading(true);
      setUserInfo(data.user);
      toast.success("Login realizado com sucesso");
      await delay(3200);
      navigate("/dashboard");
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };

  const userLogout = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    navigate("/");
    setUserInfo(null);
  };

  const updateUser = async () => {
    try {
      const { data } = await api.get("/profile", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      setUserInfo(await data);
    } catch (e) {
      toast.error(e?.response?.data?.message);
    }
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        updateUser,
        userSignUp,
        userLogin,
        setLoading,
        isLoading,
        navigate,
        userLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
