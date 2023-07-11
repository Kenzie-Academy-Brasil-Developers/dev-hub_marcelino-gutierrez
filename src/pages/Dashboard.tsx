import { useContext, useEffect, useState } from "react";
import { BaseContainer } from "../components/general/BaseContainer";
import { BaseMain } from "../components/general/BaseMain";
import { FiLogOut } from "react-icons/fi";
import { Logo } from "../components/general/Logo";
import { Navbar } from "../components/general/Navbar";
import { EditTechModal } from "../components/editTechModal/EditTechModal";
import { AddTechModal } from "../components/addTechModal/AddTechModal";
import { DashboardHeader } from "../components/dashboard/DashboardHeader";
import { TechnologyList } from "../components/dashboard/TechnologyList";
import { UserContext } from "../provider/UserContext";

export const Dashboard = () => {
  const { userLogout } = useContext(UserContext);

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 200);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <BaseContainer>
      <AddTechModal />
      <EditTechModal />
      <Navbar>
        <Logo />
        <button onClick={userLogout}>
          <FiLogOut className="text-3xl text-primary" />
        </button>
      </Navbar>
      <BaseMain loading={loading}>
        <div className="flex flex-col gap-10 pt-10 sm:pt-0">
          <DashboardHeader />
          <TechnologyList />
        </div>
      </BaseMain>
    </BaseContainer>
  );
};
