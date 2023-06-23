import { Navbar } from "../components/Navbar";
import { TOKEN_STORAGE_KEY } from "./Home";
import { useEffect, useState, useContext } from "react";
import { api } from "../services/axios";
import { toast } from "react-toastify";
import { TechCard } from "../components/TechCard";
import { UserContext } from "../context/UserContext";
import { TechContext } from "../context/TechContext";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/Header";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { AddModal } from "../components/AddModal";
import { EditModal } from "../components/EditModal";

export function Dashboard() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  const { setAddModal, isAddModalOpen, isEditModalOpen } =
    useContext(TechContext);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem(TOKEN_STORAGE_KEY));
    if (!accessToken) navigate("/");

    const fetchData = async () => {
      try {
        const { data } = await api.get("/profile", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        setUserInfo(await data);
      } catch (e) {
        toast.error(e.response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [isAddModalOpen, isEditModalOpen]);

  const [isLoading, setLoading] = useState(true);

  return (
    <>
      <AddModal />
      <EditModal />
      <LoadingSpinner isLoading={isLoading} />
      <div className="min-h-screen">
        <Navbar navigate={navigate} />
        <Header userInfo={userInfo} />
        <main
          className={`${
            isLoading ? "translate-y-5" : ""
          } w-5/6 md:w-2/3 lg:w-1/2 mx-auto py-10 flex flex-col gap-5 transition-all duration-1000`}
        >
          <div className="flex justify-between transition">
            <h1 className="text-xl font-semibold">Tecnologias</h1>
            <button onClick={setAddModal} className="btn text-xl">
              +
            </button>
          </div>
          <div className="bg-base-200 p-6 rounded-md flex flex-col gap-5 h-96 overflow-y-auto transition-all duration-300 relative">
            {userInfo?.techs?.length > 0 ? (
              userInfo?.techs.map((tech) => (
                <TechCard
                  id={tech.id}
                  name={tech.title}
                  status={tech.status}
                  key={tech.id}
                />
              ))
            ) : (
              <span className="absolute bottom-1/2 right-1/2 translate-x-1/2 font-semibold">
                Não há tecnologias registradas
              </span>
            )}
          </div>
        </main>
      </div>
    </>
  );
}
