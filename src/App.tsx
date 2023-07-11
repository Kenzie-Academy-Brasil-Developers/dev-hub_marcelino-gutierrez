import { useContext } from "react";
import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";
import { UserContext } from "./provider/UserContext";
import { LoadingScreen } from "./components/general/LoadingScreen";

function App() {
  const { loading } = useContext(UserContext);
  return (
    <>
      {loading ? <LoadingScreen /> : <RoutesMain />}
      <ToastContainer
        position="top-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        theme="dark"
      />
    </>
  );
}

export default App;
