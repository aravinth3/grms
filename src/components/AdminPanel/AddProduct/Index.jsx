import "./Style.css";
import { useState } from "react";
import privateAPI from "@/api/privateAPI";
import useFetch from "@/hooks/useFetch";
import { alertPromise } from "@/components/AppAlert/AppAlert";
import { NavLink, useNavigate } from "react-router-dom";

const CreateProducts = () => {
  const navigate = useNavigate();
  const { data: units } = useFetch("/units");
  const { data: output } = useFetch("/output-types");
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [unit, setUnit] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [outputType, setOutputType] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = privateAPI.post(`/product`, { product_code: productCode, name: productName, width: width, height: height, unit_id: unit, price: price, quantity: quantity, output_type_id: outputType });
    await alertPromise(res);

    navigate("/dashboard/admin/products");
  };
  return (
    <div className="create-products">
      <div className="row">
        <div className="col-10"></div>
        <div className="col-2">
          <NavLink to="/dashboard/admin/products" className="btn btn-primary">
            View Products
          </NavLink>
        </div>
      </div>

      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label className="app_label">Product Code</label>
          <input type="text" className="app_input" required onChange={(e) => setProductCode(e.target.value)} />
          <label className="app_label mt-3">Product Name</label>
          <input type="text" className="app_input " required onChange={(e) => setProductName(e.target.value)} />

          <div className="row mt-3">
            <div className="col-md-6 col-lg-4 col-12 pe-1">
              <div>
                <label className="app_label ">Width</label>
                <input type="text" className="app_input" required onChange={(e) => setWidth(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12">
              <div>
                <label className="app_label">Height</label>
                <input type="text" className="app_input" required onChange={(e) => setHeight(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-12 ps-1">
              <div>
                <label className="app_label">Unit</label>
                <select className="app_input" required onChange={(e) => setUnit(e.target.value)}>
                  <option>Select Unit</option>
                  {units?.appData?.map((item, i) => (
                    <option key={i} value={item?.id}>
                      {item?.unit_name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 col-lg-6 col-12">
              <div>
                <label className="app_label">Price</label>
                <input type="number" className="app_input" required onChange={(e) => setPrice(e.target.value)} />
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-12 ps-1">
              <div>
                <label className="app_label">Quantity</label>
                <input type="text" className="app_input " required onChange={(e) => setQuantity(e.target.value)} />
              </div>
            </div>
          </div>

          <label className="app_label mt-3">Output Type</label>
          <select className="app_input" required onChange={(e) => setOutputType(e.target.value)}>
            <option>Select Output Type</option>
            {output?.appData?.map((item, i) => (
              <option key={i} value={item?.id}>
                {item?.output_type_name}
              </option>
            ))}
          </select>
          <div className="row mt-3">
            <div className="col-12 ps-1">
              <button className="app_btn success " type="submit">
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProducts;
