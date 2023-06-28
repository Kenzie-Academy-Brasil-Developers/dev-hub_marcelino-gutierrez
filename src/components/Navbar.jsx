import { UserContext } from "../context/UserContext";
import { useContext } from "react";

export function Navbar({ navigate }) {
  const { userLogout } = useContext(UserContext);

  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto flex justify-between items-center py-4 transition-all duration-1000">
        <h1 className="text-primary text-xl font-semibold">Dev Hub</h1>
        <button
          onClick={userLogout}
          className="btn text-primary-content normal-case"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
