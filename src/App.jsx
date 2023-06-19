import { RoutesMain } from "./routes/RoutesMain";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="bg-base-300 overflow-hidden">
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
