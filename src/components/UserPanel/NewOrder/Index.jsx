import "./Style.css";
import { IoIosArrowForward } from "react-icons/io";
import { NavLink } from "react-bootstrap";

const NewOrders = () => {
  return (
    <div className="new-orders">
      <p>
        <strong>New Orders</strong> <IoIosArrowForward />
        Confirm Orders <IoIosArrowForward /> Receipts
      </p>
      {/* <NavLink className="app_btn">Add Product</NavLink> */}
      <div className="add-orders">
        <form>
          <label className="app_label">Name Of Customer</label>
          <input type="text" className="app_input" required />

          <div className="row">
            <div className="col-9">
              <label className="app_label mt-3">Product / Service Code</label>
              <input type="text" className="app_input " required />
            </div>
            <div className="col-3 ps-1 mt-5">
              <label></label>
              <button className="app_btn ">Fill</button>
            </div>
          </div>

          <label className="app_label mt-3">Product / Service Name</label>
          <input type="text" className="app_input " required />

          <div className="row mt-3">
            <div className="col-md-6 col-lg-4 col-12 pe-1">
              <div>
                <label className="app_label ">Width</label>
                <input type="text" className="app_input" required />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div>
                <label className="app_label">Height</label>
                <input type="text" className="app_input" required />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ps-1">
              <div>
                <label className="app_label">Unit</label>
                <select className="app_input" required>
                  <option>MM</option>
                  <option>CM</option>
                  <option>Inch</option>
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-12">
              <div>
                <label className="app_label">Photo Number</label>
                <input type="number" className="app_input" required />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12 ps-1">
              <div>
                <label className="app_label">Quantity</label>
                <input type="text" className="app_input " required />
              </div>
            </div>
          </div>

          <label className="app_label mt-3">Output Type</label>
          <select className="app_input" required>
            <option>Output Types</option>
            <option>Lamination</option>
            <option>Print</option>
          </select>

          <label className="app_label mt-3">Additional Info</label>
          <textarea name="text" className="app_input" id="" cols="30" rows="3"></textarea>

          <label className="app_label mt-3">Price</label>
          <input type="number" className="app_input " required />

          <div className="row mt-3">
            <div className="col-6">
              {/* <button to="/dashboard/products" className=" app_btn danger">
                View Products
              </button> */}
              <button className=" app_btn danger">Add Another</button>
            </div>
            <div className="col-6 ps-1  ">
              <NavLink href="/dashboard/user/userconfirm-orders" className="app_btn success w-100 ">
                Finish
              </NavLink>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewOrders;
