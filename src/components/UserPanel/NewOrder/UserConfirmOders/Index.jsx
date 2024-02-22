import { NavLink } from "react-bootstrap";
import "./Style.css";
// import { NavLink } from "react-router-dom";

const UserConfirmOrders = () => {
  return (
    <div className="userconfirm-orders">
      <div className="user-orders app_bg p-3">
        <h4 className="app_title">CONFIRM ORDER</h4>
        <form>
          <label className="app_label">Date of Order</label>
          <input type="date" className="app_input" required />

          <label className="app_label">Date of Deliver</label>
          <input type="date" className="app_input" required />

          <label className="app_label mt-3">Total Amount</label>
          <input type="number" className="app_input " required />

          <label className="app_label mt-3">Advance</label>
          <input type="number" className="app_input " required />

          <label className="app_label mt-3">Balance</label>
          <input type="number" className="app_input " required />
        </form>
        <NavLink className="app_btn success mt-3">Finish</NavLink>
      </div>
    </div>
  );
};

export default UserConfirmOrders;
