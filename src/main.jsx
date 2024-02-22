import ReactDOM from "react-dom/client";
import AppRoutes from "@/routes/AppRoutes";
import "./styles/main.css";
import "@/styles/main.css";
import "@/styles/form.css";
import "@/styles/button.css";
import "@/styles/table.css";
import { AppAlert } from "./components/AppAlert/AppAlert";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppAlert />
    <AppRoutes />
  </>
);
