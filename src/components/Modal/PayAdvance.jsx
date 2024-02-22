import privateAPI from "@/api/privateAPI";
import { useState } from "react";
import { alertPromise } from "../AppAlert/AppAlert";

const PayAdvance = ({ setShow }) => {
  const [amount, setAmount] = useState("");
  const customer_id = localStorage.getItem("customer_id");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.post(`customer-advance/pay`, { customer_id, advance_amount: amount });
    await alertPromise(res);
    setShow(false);
  };
  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        <label className="app_label ">Advance Amount</label>
        <input type="text" className="app_input" onChange={(e) => setAmount(e.target.value)} />
        <div className="text-end mt-2">
          <button className="btn btn-success w-25" type="submit">
            Pay
          </button>
        </div>
      </form>
    </div>
  );
};

export default PayAdvance;
