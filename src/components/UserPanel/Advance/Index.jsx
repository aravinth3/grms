import "./Style.css";
import { useState } from "react";
import privateAPI from "@/api/privateAPI";
import { alertPromise } from "@/components/AppAlert/AppAlert";
import { useNavigate } from "react-router-dom";

const Advance = () => {
  const [amount, setAmount] = useState("");
  const customer_id = localStorage.getItem("customer_id");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.post(`/customer-advance`, { customer_id: customer_id, advance_amount: amount });
    await alertPromise(res);
    navigate("/dashboard/user");
  };
  return (
    <div className="user-advance">
      <div className="advance  app_bg p-3">
        <h4 className="app_title">ADVANCE</h4>
        <form onSubmit={handleSubmit}>
          <label className="app_label mt-3">Advance Amount</label>
          <input type="number" className="app_input " required onChange={(e) => setAmount(e.target.value)} />
          <button className="app_btn success mt-3 w-100" type="submit">
            Finish
          </button>
        </form>
      </div>
    </div>
  );
};

export default Advance;
