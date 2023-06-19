import { Navbar } from "../components/Navbar";
import { LOCAL_STORAGE_KEY } from "./Home";
import { useEffect, useState, useRef } from "react";
import { api } from "./SignUp";
import { toast } from "react-toastify";

export function Dashboard() {
  useEffect(() => {
    const fetchData = async () => {
      const data = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      setUserInfo(data.user);
      try {
        await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${data.token}`,
          },
        });
        loadingContainer.current.classList.remove("blur-sm");
        loadingSpinner.current.classList.add("hidden");
      } catch (e) {
        toast.error(e.response.data.message);
      }
    };

    fetchData();
  }, []);

  const loadingContainer = useRef();
  const loadingSpinner = useRef();

  const [userInfo, setUserInfo] = useState();

  return (
    <>
      <span
        ref={loadingSpinner}
        className="loading loading-spinner loading-lg text-primary fixed top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2"
      ></span>
      <div ref={loadingContainer} className="min-h-screen blur-sm">
        <Navbar />
        <section className="border-b border-b-stone-800 py-10">
          <div className="w-1/2 mx-auto flex justify-between">
            <h1 className="text-xl font-semibold">{`Olá, ${userInfo?.name} `}</h1>
            <span className="text-sm text-gray-400">
              {userInfo?.course_module}
            </span>
          </div>
        </section>
        <main className="py-10">
          <div className="w-1/2 mx-auto flex flex-col gap-7">
            <h1 className="text-xl font-semibold">
              Que pena, ainda estamos em desenvolvimento :(
            </h1>
            <span>
              Nossa aplicação está em desenvolvimento, em breve teremos
              novidades
            </span>
          </div>
        </main>
      </div>
    </>
  );
}
