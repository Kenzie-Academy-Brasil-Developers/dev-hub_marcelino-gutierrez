import { Navbar } from "../components/Navbar";
import { LOCAL_STORAGE_KEY } from "./Home";
import { useEffect, useState } from "react";
import { api } from "./SignUp";
import { ToastContainer, toast } from "react-toastify";
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
      } catch (e) {
        toast.error(e.response.data.message);
      }
    };

    fetchData();
  }, []);

  const [userInfo, setUserInfo] = useState();

  return (
    <div className="min-h-screen">
      <ToastContainer
        position="top-right"
        autoClose={2800}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
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
            Nossa aplicação está em desenvolvimento, em breve teremos novidades
          </span>
        </div>
      </main>
    </div>
  );
}
