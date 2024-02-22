import privateAPI from "@/api/privateAPI";
import { useState } from "react";
import { alertPromise } from "../AppAlert/AppAlert";

const PayBalance = ({ orderId, setOpen }) => {
  const [amount, setAmount] = useState("");
  const customer_id = localStorage.getItem("customer_id");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.put(`order-balance/pay`, { customer_id, order_id: orderId, balance_amount: amount });
    await alertPromise(res);
    setOpen(false);
  };
  return (
    <div className="container p-3">
      <form onSubmit={handleSubmit}>
        <label className="app_label ">Amount</label>
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

export default PayBalance;
