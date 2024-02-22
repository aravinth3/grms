import publicAPI from "@/api/publicAPI";
import { useState } from "react";
import { alertPromise } from "../AppAlert/AppAlert";
import { useNavigate } from "react-router-dom";
import "./AppLogin.css";

const AppLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = publicAPI.post(`/login`, { email, password });
    const { data } = await alertPromise(res);

    localStorage.setItem("access_token", data?.appData?.access_token);
    localStorage.setItem("user_id", data?.appData?.user_id);
    localStorage.setItem("role_id", data?.appData?.role_id);
    if (data?.appData?.role_id === "1") {
      navigate("/dashboard/admin/confirm-orders");
    } else if (data?.appData?.role_id === "2") {
      navigate("/customer-status");
    }
  };

  return (
    <div className="appLogin">
      <div className="box shadow">
        <h4>GR MANI STUDIO</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-2 mt-4">
            <label className="app_label">Email address</label>
            <input type="email" className="app_input" onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="mb-2">
            <label className="app_label">Password</label>
            <input type="password" className="app_input" onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit" className="app_btn w-100 mt-3">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AppLogin;
