import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "@/routes/AppRoutes";
import "./styles/main.css";
import "@/styles/main.css";
import "@/styles/form.css";
import "@/styles/button.css";
import "@/styles/table.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
