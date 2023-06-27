import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./context/UserContext";
import { LoadingSpinner } from "./components/LoadingSpinner";

function App() {
  const { isLoading } = useContext(UserContext);

  return (
    <div className="bg-base-300 overflow-hidden">
      <LoadingSpinner isLoading={isLoading} />
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
      <RoutesMain />
    </div>
  );
}

export default App;
