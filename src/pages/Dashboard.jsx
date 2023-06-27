import { Navbar } from "../components/Navbar";
import { useEffect, useContext, useRef, useState } from "react";
import { TechCard } from "../components/TechCard";
import { UserContext } from "../context/UserContext";
import { TechContext } from "../context/TechContext";
import { Header } from "../components/Header";
import { AddModal } from "../components/AddModal";
import { EditModal } from "../components/EditModal";

export function Dashboard() {
  const { userInfo, updateUser } = useContext(UserContext);

  const { setAddModal, isAddModalOpen, isEditModalOpen, navigate } =
    useContext(TechContext);

  const [isFirstRender, setIsFirstRender] = useState(true);

  useEffect(() => {
    if (isFirstRender) {
      const delay = async (ms) =>
        new Promise((resolve) => setTimeout(resolve, ms));

      (async () => {
        await delay(100);
        loading?.current?.classList.replace("translate-y-3", "translate-y-0");
      })();
      setIsFirstRender(false);
      return;
    }
    updateUser();
  }, [isAddModalOpen, isEditModalOpen]);

  const loading = useRef();

  return (
    <>
      <AddModal />
      <EditModal />
      <div className="min-h-screen">
        <Navbar navigate={navigate} />
        <Header userInfo={userInfo} />
        <main
          ref={loading}
          className=" w-5/6 translate-y-3 md:w-2/3 lg:w-1/2 mx-auto py-10 flex flex-col gap-5 transition-all duration-1000"
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
