import { USER_STORAGE_KEY, TOKEN_STORAGE_KEY } from "../pages/Home";

export function Navbar({ navigate }) {
  const handleClick = () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    localStorage.removeItem(TOKEN_STORAGE_KEY);
    navigate("/");
  };

  return (
    <nav className="w-full border-b border-zinc-800">
      <div className="w-5/6 md:w-2/3 lg:w-1/2 mx-auto flex justify-between items-center py-4 transition-all duration-1000">
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
