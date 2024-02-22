import privateAPI from "@/api/privateAPI";
import "./Login.css";
import { alertPromise } from "../AppAlert/AppAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");

  const handleGetCustomerStatus = async (e) => {
    e.preventDefault();
    const res = privateAPI.get(`/customer-status?mobile=${mobile}`);
    const { data } = await alertPromise(res);
    console.log(data);
    localStorage.setItem("customer_id", data?.appData?.customer_id);
    localStorage.setItem("customer_name", data?.appData?.customer_name);
    if (data?.appData?.customer_status) {
      navigate("/dashboard/user");
    } else {
      navigate("/dashboard/user/create-user");
    }
  };

  return (
    <div className="login">
      <div className="login-content">
        <div className="login-right my-4">
          <h5>Welcome Back!</h5>
          <div className="login-inputs mt-5">
            <form onSubmit={handleGetCustomerStatus}>
              <label className="login_label">Mobile Number</label>
              <input type="number" className="app_input" required onChange={(e) => setMobile(e.target.value)} />

              <div className="login2-button mt-3">
                <button type="submit">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
