import { NavLink } from "react-bootstrap";
import "./Style.css";
// import { NavLink } from "react-router-dom";

const CreateProducts = () => {
  return (
    <div className="create-products">
      {/* <NavLink className="app_btn">Add Product</NavLink> */}
      <div className="add-product">
        <form>
          <label className="app_label">Product Code</label>
          <input type="text" className="app_input" required />
          <label className="app_label mt-3">Product Name</label>
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
                <label className="app_label">Price</label>
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
          <input type="text" className="app_input " required />

          <div className="row mt-3">
            <div className="col-6">
              {/* <button to="/dashboard/products" className=" app_btn danger">
                View Products
              </button> */}
              <NavLink href="/dashboard/admin/products" className="prod-link app_btn danger w-100">
                View Products
              </NavLink>
            </div>
            <div className="col-6 ps-1">
              <button className="app_btn success ">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
