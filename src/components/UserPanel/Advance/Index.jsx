import { NavLink } from "react-bootstrap";
import "./Style.css";

const Advance = () => {
  return (
    <div className="user-advance">
      <div className="advance">
        <form>
          <label className="app_label">Name</label>
          <input type="text" className="app_input" required />

          <label className="app_label mt-3">Number</label>
          <input type="number" className="app_input" required />

          <label className="app_label mt-3">Advance Amount</label>
          <input type="number" className="app_input " required />
        </form>
        <NavLink className="app_btn success mt-3">Finish</NavLink>
      </div>
    </div>
  );
};

export default Advance;
