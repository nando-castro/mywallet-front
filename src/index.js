import ReactDOM from "react-dom";
import App from "./components/App";
import { AuthProvider } from "./context/auth";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <AuthProvider>
    <App />
  </AuthProvider>,
  document.querySelector(".root")
);
