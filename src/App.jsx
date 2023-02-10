import { ToastContainer } from "react-toastify";
import { RoutePages } from "./routes";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <RoutePages />
      <ToastContainer
       position="top-right" 
       autoClose={3000}
       theme={"dark"} />
    </div>
  );
}

export default App;
