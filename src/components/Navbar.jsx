import { Link } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../pages/Home";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    navigate("/");
  };

  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="w-1/2 m-auto flex justify-between items-center py-4">
        <h1 className="text-primary text-xl font-semibold">Kenzie Hub</h1>
        <button
          onClick={handleClick}
          className="btn text-primary-content normal-case"
        >
          Sair
        </button>
      </div>
    </nav>
  );
}
