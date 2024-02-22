import privateAPI from "@/api/privateAPI";
import { alertPromise } from "@/components/AppAlert/AppAlert";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [alternativeMobile, setAlternativeMobile] = useState("");
  const user_id = localStorage.getItem("user_id");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.post(`/customer`, { name, email, mobile, alternate_mobile: alternativeMobile || "NULL", created_by: user_id });
    const { data } = await alertPromise(res);
    localStorage.setItem("customer_id", data?.appData?.customer_id);
    localStorage.setItem("customer_name", name);
    navigate("/dashboard/user");
  };

  return (
    <div className="container w-50 mt-5">
      <form onSubmit={handleSubmit} className="app_bg p-4 rounded">
        <div className="mb-3">
          <label className="app_label">Name</label>
          <input type="text" className="app_input" onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label className="app_label">Email</label>
          <input type="email" className="app_input" onChange={(e) => setEmail(e.target.value)} required />
        </div>

        <div className="mb-2">
          <label className="app_label">Mobile</label>
          <input type="number" className="app_input" onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="mb-2">
          <label className="app_label">Alternative Mobile</label>
          <input type="number" className="app_input" onChange={(e) => setAlternativeMobile(e.target.value)} />
        </div>
        <button type="submit" className="app_btn w-100 mt-3">
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateUser;
