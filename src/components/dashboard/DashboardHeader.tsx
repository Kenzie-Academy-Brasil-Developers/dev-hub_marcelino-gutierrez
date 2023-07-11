import { useContext } from "react";
import { UserContext } from "../../provider/UserContext";

export const DashboardHeader = () => {
  const { user } = useContext(UserContext);

  return (
    <h2 className="text-2xl font-thin tracking-widest">
      Bem vindo, <span className=" text-primary">{user?.name}!</span>
    </h2>
  );
};
